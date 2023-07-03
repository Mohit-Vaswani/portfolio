import Image from "next/image"
import Stars from "./Stars"

const About2 = () => {
  return (
    <div className="w-full h-full dark-blue-bg flex-all py-10 relative">
      <div className="shootingstar"/>
        <div className="w-9/12 sm:w-8/12 xl:w-4/12 flex gap-5 flex-col">
        <Image src="/img.jpg" alt="My Image" width={70} height={70} className="rounded-full"/>
        <div className="text-lg lg:text-xl">
            <p>Hey I am Mohit 😎</p> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore repellendus enim odio earum recusandae ea similique facere explicabo ipsa ut.</p> <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quisquam voluptates doloremque cumque similique expedita neque optio veniam hic ut laborum blanditiis a, quam odit laudantium non quaerat vitae minima voluptatum in repellat officia iste. Dolorem cupiditate tempore eum quisquam?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quas. Odio velit vel ex eligendi aut temporibus corrupti, error amet architecto, enim iure hic, explicabo porro a minus molestiae sunt?</p>
        </div>
        </div>
        <Stars/>
        
        <div className="horizontal-line absolute bottom-0"></div>
    </div>
  )
}

export default About2