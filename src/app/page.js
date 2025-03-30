
import Image from "next/image";
import Header from "./components/header";
import About from "./components/About";
import { TimelineDemo } from "./components/Timeline";
import Track from "./components/Track";
import Rules from "./components/Rules";
import Versions from "./components/Versions";


export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Track/>
      <Rules/>
      <Versions/>
      {/* <TimelineDemo/> */}
    </>
  );
}
