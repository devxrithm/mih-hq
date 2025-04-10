import { useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

export const useThree = () => {
  const scene = useRef<THREE.Scene>(null);
  const camera = useRef<THREE.PerspectiveCamera>(null);
  const renderer = useRef<THREE.WebGLRenderer>(null);
  const [initialized, setInitialized] = useState(false);
  const animationFrameId = useRef<number>(null);
  const animationCallbacks = useRef<Function[]>([]);

  const initThree = useCallback(async (container: HTMLElement) => {
    if (initialized) return;

    // Get container dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Create scene
    const newScene = new THREE.Scene();
    scene.current = newScene;

    // Create camera
    const newCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.current = newCamera;

    // Create renderer
    const newRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    newRenderer.setSize(width, height);
    newRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = ''; // Clear any existing content
    container.appendChild(newRenderer.domElement);
    renderer.current = newRenderer;

    // Handle window resize
    const handleResize = () => {
      if (!camera.current || !renderer.current) return;
      
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      
      camera.current.aspect = newWidth / newHeight;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Start animation loop
    const animate = () => {
      if (!scene.current || !camera.current || !renderer.current) return;
      
      // Call all registered animation callbacks
      animationCallbacks.current.forEach(callback => callback());
      
      renderer.current.render(scene.current, camera.current);
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    setInitialized(true);

    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      if (renderer.current && renderer.current.domElement && container.contains(renderer.current.domElement)) {
        container.removeChild(renderer.current.domElement);
      }
      
      // Clean up Three.js resources
      if (scene.current) {
        scene.current.clear();
      }
      
      if (renderer.current) {
        renderer.current.dispose();
      }
    };
  }, [initialized]);

  const animateFrame = useCallback((callback: Function) => {
    animationCallbacks.current.push(callback);
    
    return () => {
      animationCallbacks.current = animationCallbacks.current.filter(cb => cb !== callback);
    };
  }, []);

  return {
    scene,
    camera,
    renderer,
    initialized,
    initThree,
    animateFrame
  };
};
