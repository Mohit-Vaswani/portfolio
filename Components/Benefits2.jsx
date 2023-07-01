import Image from "next/image"
import DarkModeSwitch from "./DarkModeSwitch"

const Benefits2 = () => {
  return (
    <div className="w-full h-full lg:h-full dark-blue-bg relative flex align-top justify-center flex-col gap-10 text-center py-10 px-10">
      <div className="horizontal-line absolute top-0"></div>
      <div className="grid lg:grid-flow-col grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-8 w-10/12 mx-auto">
        {/* 5 */}
        <div className="col-span-1 lg:col-span-2 h-96 grid-box flex-col w-full p-5 gap-10">
          <div className="flex text-4xl flex-col gap-2">
            <h2>Love to Learn Technologies</h2>
          </div>
          <div className="grid grid-cols-7 grid-rows-2 gap-4 w-10/12 mx-auto">
            <div className="tech-box">
              <Image src="/js.svg" alt="JavaScript Logo" width={30} height={30} />
            </div>
            <div className="tech-box">
              <Image src="/html.svg" alt="JavaScript Logo" width={30} height={30} />
            </div>
            <div className="tech-box">
              <Image src="/css.svg" alt="JavaScript Logo" width={30} height={30} />
            </div>
            <div className="tech-box">
              <Image src="/react.svg" alt="JavaScript Logo" width={30} height={30} />
            </div>
            <div className="tech-box">
              <Image src="/nextjs.svg" alt="JavaScript Logo" width={30} height={30} />
            </div>
            <div className="tech-box">
              <Image src="/firebase.svg" alt="JavaScript Logo" width={30} height={30} />
            </div>
            <div className="tech-box">
              <Image src="/typescript.svg" alt="JavaScript Logo" width={30} height={30} />
            </div>
            <div className="tech-box">
              <Image src="/tailwind.svg" alt="JavaScript Logo" width={30} height={30} />
            </div>
            <div className="tech-box">
              <Image src="/bootstrap.svg" alt="JavaScript Logo" width={30} height={30} />
            </div>
            <div className="tech-box">
              <Image src="/css.svg" alt="JavaScript Logo" width={30} height={30} />
            </div>
            <div className="tech-box">
              <Image src="/js.svg" alt="JavaScript Logo" width={30} height={30} />
            </div>
            <div className="tech-box">
              <Image src="/react.svg" alt="JavaScript Logo" width={30} height={30} />
            </div>
            <div className="tech-box">
              <Image src="/nextjs.svg" alt="JavaScript Logo" width={30} height={30} />
            </div>
            <div className="tech-box">
              <Image src="/firebase.svg" alt="JavaScript Logo" width={30} height={30} />
            </div>
          </div>
        </div>
        {/* 1 */}
        <div className="h-96 grid-box">
          <DarkModeSwitch/>
        </div>
        {/* 1 */}
        <div className="h-96 grid-box flex-col gap-5">
          <div>
          <h2 className="text-3xl">Figma Expert</h2>
          </div>
          <div className="flex justify-between w-full mt-10">
          <Image src="/figma-logo.svg" alt="JavaScript Logo" width={150} height={150}/>
          <Image src="/new-star.svg" alt="JavaScript Logo" width={200} height={200}/>
          </div>
        </div>
        {/* 2 */}
        <div className="lg:col-start-3 h-96 grid-box">
        </div>
        {/* 3 */}
        <div className=" h-96 grid-box flex-col"></div>
        {/* 4 */}
        <div className="col-span-1 lg:col-span-2 h-96 grid-box flex-col text-center w-full">

        </div>
        <div className=" h-96 grid-box w-full">

        </div>
        {/* 5 */}
      </div>
      <div className="horizontal-line absolute bottom-0"></div>
    </div>
  )
}

export default Benefits2