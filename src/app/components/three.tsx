import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '../hooks/use-three';
import { random } from '../lib/utilsx';

interface EmberParticlesProps {
  containerId: string;
}

export const EmberParticles = ({ containerId }: EmberParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<{
    geometry: THREE.BufferGeometry;
    material: THREE.PointsMaterial;
    mesh: THREE.Points;
    velocities: Array<{ x: number; y: number; z: number }>;
    sizes: Float32Array;
  }>();
  const scrollYRef = useRef(0);

  const { initThree, animateFrame, scene, camera, renderer } = useThree();

  useEffect(() => {
    if (!containerRef.current) return;

    const init = async () => {
      // Initialize Three.js scene
      await initThree(containerRef.current!);

      // Set camera position
      if (camera.current) {
        camera.current.position.z = 5;
      }
      
      // Set renderer clear color to transparent
      if (renderer.current) {
        renderer.current.setClearColor(0x000000, 0);
      }

      // Create ember particles
      createEmberParticles();
      
      // Track scroll position for fixed background
      const handleScroll = () => {
        scrollYRef.current = window.scrollY;
      };
      
      window.addEventListener('scroll', handleScroll);

      // Start animation loop
      animateFrame(() => {
        updateEmbers();
      });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    init();
  }, []);

  const createEmberParticles = () => {
    if (!scene.current) return;

    // Reduce particle count for better performance
    const particleCount = 500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities: Array<{ x: number; y: number; z: number }> = [];
    
    // Spartan colors: red, orange, gold
    const colorPalette = [
      new THREE.Color(0xb30000), // Spartan Red
      new THREE.Color(0xff6600), // Lava Orange
      new THREE.Color(0xffd700), // Gold
    ];
    
    // Calculate document height to distribute particles vertically
    const documentHeight = Math.max(
      document.body.scrollHeight, 
      document.documentElement.scrollHeight,
      5000 // Minimum height to ensure good coverage
    );
    
    for (let i = 0; i < particleCount; i++) {
      // Distribute particles across the entire document height
      const spreadFactor = 30; // Wider spread for better coverage
      
      // Position particles throughout the document with more density at section transitions
      positions[i * 3] = (Math.random() - 0.5) * spreadFactor; // x position (wider spread)
      
      // Distribute some particles at section transitions
      if (i % 5 === 0) {
        // Place at a section boundary (approximately every 800-1000px)
        const sectionHeight = 800 + Math.random() * 200;
        const numSections = Math.floor(documentHeight / sectionHeight);
        const sectionIndex = Math.floor(Math.random() * numSections);
        positions[i * 3 + 1] = sectionIndex * sectionHeight / 100 - 5; // Convert to scene units
      } else {
        // Random position throughout page
        positions[i * 3 + 1] = (Math.random() * documentHeight / 100) - 5;
      }
      
      positions[i * 3 + 2] = (Math.random() - 0.5) * spreadFactor; // z position
      
      // Random velocity, mainly upward with variations
      const upwardBias = Math.random() > 0.7 ? 0.08 : 0.05; // Some particles rise faster
      velocities.push({
        x: (Math.random() - 0.5) * 0.03, // More horizontal movement
        y: Math.random() * 0.05 + upwardBias,
        z: (Math.random() - 0.5) * 0.03
      });
      
      // Varied sizes for more visual interest
      sizes[i] = Math.random() * 0.15 + 0.05;
      
      // Random color from palette with intensity variations
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      const intensity = 0.7 + Math.random() * 0.3; // Vary brightness
      colors[i * 3] = color.r * intensity;
      colors[i * 3 + 1] = color.g * intensity;
      colors[i * 3 + 2] = color.b * intensity;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Create a shader material for better-looking particles
    const material = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });
    
    const particles = new THREE.Points(geometry, material);
    
    scene.current.add(particles);
    
    particlesRef.current = {
      geometry,
      material,
      mesh: particles,
      velocities,
      sizes
    };
  };

  const updateEmbers = () => {
    if (!particlesRef.current) return;
    
    const { geometry, velocities, sizes } = particlesRef.current;
    const positions = geometry.attributes.position.array as Float32Array;
    const colors = geometry.attributes.color.array as Float32Array;
    
    // Get the current scroll position for parallax effect
    const scrollY = scrollYRef.current / 100; // Scale down for scene units
    
    for (let i = 0; i < positions.length / 3; i++) {
      // Apply parallax scrolling effect to make particles stick with the page
      // Adjust particle y position based on scroll with varying parallax factors
      const parallaxFactor = i % 3 === 0 ? 0.9 : (i % 3 === 1 ? 0.95 : 1);
      const scrollOffset = scrollY * parallaxFactor;
      
      // Store original y position before scrolling effect
      const originalY = positions[i * 3 + 1] - scrollOffset;
      
      // Update position based on velocity
      positions[i * 3] += velocities[i].x;
      positions[i * 3 + 1] = originalY + velocities[i].y + scrollOffset;
      positions[i * 3 + 2] += velocities[i].z;
      
      // Slightly randomize velocity for natural movement with scroll compensation
      velocities[i].x += (Math.random() - 0.5) * 0.001;
      velocities[i].z += (Math.random() - 0.5) * 0.001;
      
      // Simplified animation without hover effects for better performance
      const sizesArray = geometry.attributes.size.array as Float32Array;
      sizesArray[i] = sizes[i]; // Constant size without flickering
      
      // Fade out particles as they rise, accounting for scroll
      const particleScreenY = positions[i * 3 + 1] - scrollOffset;
      const fadeOut = Math.max(0, 1 - (particleScreenY / 10));
      
      // Reset particles that go out of view or fade out
      // Use document height to distribute reset particles
      const documentHeight = Math.max(
        document.body.scrollHeight, 
        document.documentElement.scrollHeight,
        5000
      ) / 100; // Scale to scene units
      
      if (particleScreenY > 10 || fadeOut < 0.1) {
        // Position either at a section boundary or random
        if (Math.random() > 0.7) {
          // Place at section boundaries (approximately every 800-1000px)
          const sectionHeight = 8 + Math.random() * 2; // Convert to scene units
          const numSections = Math.floor(documentHeight / sectionHeight);
          const sectionIndex = Math.floor(Math.random() * numSections);
          positions[i * 3 + 1] = (sectionIndex * sectionHeight) - 5 + scrollOffset;
        } else {
          // Random position below view with wider spread
          const spreadFactor = 30;
          positions[i * 3] = (Math.random() - 0.5) * spreadFactor;
          positions[i * 3 + 1] = Math.random() * -5 - 2 + scrollOffset;
          positions[i * 3 + 2] = (Math.random() - 0.5) * spreadFactor;
        }
        
        // Reset velocity with variations
        const upwardBias = Math.random() > 0.7 ? 0.08 : 0.05;
        velocities[i].x = (Math.random() - 0.5) * 0.03;
        velocities[i].y = Math.random() * 0.05 + upwardBias;
        velocities[i].z = (Math.random() - 0.5) * 0.03;
        
        // Reset color intensity
        const intensity = 0.7 + Math.random() * 0.3;
        const paletteIndex = Math.floor(Math.random() * 3); // Assuming 3 colors in palette
        const colorBase = paletteIndex === 0 ? 
          [0xb3/255, 0x00/255, 0x00/255] : (paletteIndex === 1 ? 
            [0xff/255, 0x66/255, 0x00/255] : 
            [0xff/255, 0xd7/255, 0x00/255]);
        
        colors[i * 3] = colorBase[0] * intensity;
        colors[i * 3 + 1] = colorBase[1] * intensity;
        colors[i * 3 + 2] = colorBase[2] * intensity;
      }
    }
    
    // Update the geometry
    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.size.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;
  };

  return (
    <div
      id={containerId}
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-1"
    ></div>
  );
};