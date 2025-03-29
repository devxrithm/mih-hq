
import Image from "next/image";
import Header from "./components/header";
import About from "./components/About";
import { TimelineDemo } from "./components/Timeline";


export default function Home() {
  return (
    <>
      <Header />
      <About />
      <TimelineDemo/>
    </>
  );
}
