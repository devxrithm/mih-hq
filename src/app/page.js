"use client"
import Image from "next/image";
import Header from "./components/header";
import About from "./components/About";
import Track from "./components/Track";
import Rules from "./components/Rules";
// import Versions from "./components/Versions";
import Sponsor from "./components/Sponsor";
import Pateron from "./components/Pateron";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Convenor from './components/Convenor';
import Prizes from './components/Prizes';
import Coordinator from './components/Coordinator';
import Communit from './components/Communit';
import Chief from './components/Chief';
import Supported from './components/Supported';
import Benifectro from './components/Benifectro'
import { EmberParticles } from './components/EmberParticles';
import Theme from './components/Theme';
import Voluntrees from "./components/Voluntrees";
// import Theme from './components/Theme';

export default function Home() {

  return (
    <>
      <div className="relative bg-[rgb(236,236,221)] z-0 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/bg2.webp')] before:bg-no-repeat before:bg-center before:-z-10 before:bg-cover before:bg-fixed before:brightness-[30%] ">
        <div className="fixed inset-0 z-0 w-full">
          <EmberParticles containerId="ember-container" />
        </div>

        <Header />
        <About />
        <Track />
        <Rules />
        {/* <Versions/> */}
        <Theme />
        <Prizes />
        <Sponsor />
        <Team />
        <Voluntrees/>
        <Chief />
        <Pateron />
        <Convenor />
        <Coordinator />
        <Benifectro />
        <Supported />
        <Communit />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
