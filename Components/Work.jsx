import Stars from "./Stars"

const Work = () => {
  return (
    <div className="w-full h-full dark-blue-bg mx-auto">
      <div className="horizontal-line absolute top-0"></div>
      <h2 className="text-7xl font-bold text-center">WORK 🧑‍💻</h2>
      <div className="grid grid-cols-2 grid-rows-3 p-20 gap-x-10">
        <div className="border-2 border-white rounded-md w-full h-80 my-6"></div>
        <div className="border-2 border-white rounded-md w-full h-80 my-6 translate-y-20"></div>
        <div className="border-2 border-white rounded-md w-full h-80 my-6"></div>
        <div className="border-2 border-white rounded-md w-full h-80 my-6 translate-y-20"></div>
        <div className="border-2 border-white rounded-md w-full h-80 my-6"></div>
        <div className="border-2 border-white rounded-md w-full h-80 my-6 translate-y-20"></div>
      </div>
      <div className="horizontal-line absolute bottom-0"></div>
      <Stars/>
    </div>
  )
}

export default Work