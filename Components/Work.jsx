import Stars from "./Stars"
import Image from "next/image"

const Work = () => {
  return (
    <div className="w-full h-full dark-blue-bg mx-auto">
      <div className="horizontal-line absolute top-0"></div>
      <h2 className="text-7xl font-bold text-center">WORK 🧑‍💻</h2>
      <div className="grid grid-cols-2 grid-rows-3 p-20 gap-x-10">
        <div className="flex flex-col gap-4">
          <div className="rounded-md w-full h-auto mt-6 flex-all py-10 work-box">
            <Image src="/project-mockup/4.png" className="rounded-lg" alt="" width={500} height={500} />
          </div>
          <div className="flex justify-between">
            <ul className="flex flex-col">
              <h2 className="text-3xl font-bold mb-2">Whoa Crm</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis assumenda magnam odio, velit eligendi impedit aliquid provident maiores, quia voluptatum eius deleniti, ab molestiae laborum optio facere? Aperiam, inventore enim.</p>
            </ul>
            <div className="glow-button h-10">2023</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 translate-y-20">
          <div className="rounded-md w-full h-auto mt-6 flex-all py-10 work-box">
            <Image src="/project-mockup/2.png" className="rounded-lg" alt="" width={500} height={500} />
          </div>
          <div className="flex justify-between">
            <ul className="flex flex-col">
              <h2 className="text-3xl font-bold mb-2">Substance</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis assumenda magnam odio, velit eligendi impedit aliquid provident maiores, quia voluptatum eius deleniti, ab molestiae laborum optio facere? Aperiam, inventore enim.</p>
            </ul>
            <div className="glow-button w-80 h-10">2023</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-md w-full h-auto mt-6 flex-all py-10 work-box">
            <Image src="/project-mockup/3.png" className="rounded-lg" alt="" width={500} height={500} />
          </div>
          <div className="flex justify-between">
            <ul className="flex flex-col">
              <h2 className="text-3xl font-bold mb-2">Florida Family App</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis assumenda magnam odio, velit eligendi impedit aliquid provident maiores, quia voluptatum eius deleniti, ab molestiae laborum optio facere? Aperiam, inventore enim.</p>
            </ul>
            <div className="glow-button w-80 h-10">2023</div>
          </div>
        </div>
        <div className="flex flex-col gap-4  translate-y-20">
          <div className="rounded-md w-full h-auto mt-6 flex-all py-10 work-box">
            <Image src="/project-mockup/1.png" className="rounded-lg" alt="" width={500} height={500} />
          </div>
          <div className="flex justify-between">
            <ul className="flex flex-col">
              <h2 className="text-3xl font-bold mb-2">Beatrix</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis assumenda magnam odio, velit eligendi impedit aliquid provident maiores, quia voluptatum eius deleniti, ab molestiae laborum optio facere? Aperiam, inventore enim.</p>
            </ul>
            <div className="glow-button w-80 h-10">2023</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-md w-full h-auto mt-6 flex-all py-10 work-box">
            <Image src="/project-mockup/5.png" className="rounded-lg" alt="" width={500} height={500} />
          </div>
          <div className="flex justify-between">
            <ul className="flex flex-col">
              <h2 className="text-3xl font-bold mb-2">The Health Network</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis assumenda magnam odio, velit eligendi impedit aliquid provident maiores, quia voluptatum eius deleniti, ab molestiae laborum optio facere? Aperiam, inventore enim.</p>
            </ul>
            <div className="glow-button w-80 h-10">2022</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 translate-y-20">
          <div className="rounded-md w-full h-auto mt-6 flex-all py-10 work-box">
            <Image src="/project-mockup/6.png" className="rounded-lg" alt="" width={500} height={500} />
          </div>
          <div className="flex justify-between">
            <ul className="flex flex-col">
              <h2 className="text-3xl font-bold mb-2">Code Planet</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis assumenda magnam odio, velit eligendi impedit aliquid provident maiores, quia voluptatum eius deleniti, ab molestiae laborum optio facere? Aperiam, inventore enim.</p>
            </ul>
            <div className="glow-button w-80 h-10">2022</div>
          </div>
        </div>
      </div>
      <Stars />
      <div className="horizontal-line absolute bottom-0"></div>
    </div>
  )
}

export default Work