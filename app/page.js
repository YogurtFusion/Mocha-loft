import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Menu from "@/components/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Process />
      <Menu/>
    </div>
  );
}
