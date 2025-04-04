
import Image from "next/image";
import Header from "./components/header";
import About from "./components/About";
// import { TimelineDemo } from "./components/Timeline";
import Track from "./components/Track";
import Rules from "./components/Rules";
// import Versions from "./components/Versions";
import Sponsor from "./components/Sponsor";
import Pateron from "./components/Pateron";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
      <div className="relative bg-[rgb(236,236,221)] z-0 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/bg2.jpg')] before:bg-no-repeat before:bg-center before:-z-10 before:bg-cover before:bg-fixed before:brightness-[30%] ">
        <Header />
        <About />
        <Track />
        <Rules />
        {/* <Versions/> */}
        <Sponsor />
        <Pateron /> 
        <Team/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}
