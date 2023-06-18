import CustomCursor from "@/Components/CustomCursor";
import Hero from "@/Components/Hero";
import Stars from "@/Components/Stars";

export default function Home() {
  return (
    <section className="overflow-x-hidden w-full">
      <CustomCursor/>
      <Hero/>
      
      <Stars/>
    </section>
  )
}
