import About from "@/Components/About";
import About2 from "@/Components/About2";
import Benefits from "@/Components/Benefits";
import CustomCursor from "@/Components/CustomCursor";
import Hero from "@/Components/Hero";
import Stars from "@/Components/Stars";

export default function Home() {
  return (
    <section className="overflow-x-hidden w-full">
      <CustomCursor/>
      <Stars/>
      <Hero/>
      <About/>
      <About2/>
      <Benefits/>
    </section>
  )
}
