import About from "@/Components/About";
import About2 from "@/Components/About2";
import Benefits from "@/Components/Benefits";
import Benefits2 from "@/Components/Benefits2";
import CustomCursor from "@/Components/CustomCursor";
import Hero from "@/Components/Hero";
import Proof from "@/Components/Proof";
import Stars from "@/Components/Stars";
import Work from "@/Components/Work";

export default function Home() {
  return (
    <section className="overflow-x-hidden w-full">
      <CustomCursor/>
      <Stars/>
      <Hero/>
      <About/>
      <About2/>
      <Benefits2/>
      <Proof/>
      <Work/>
    </section>
  )
}
