import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex flex-col dark-blue-bg h-full lg:h-screen pb-20 lg:pb-0">
      <div className="flex-all relative">
        <Image src="/logo.svg" alt="image" width={1200} height={1200} className="opacity-40" />
        <Image src="/gradient.svg" alt="image" width={1500} height={1500} className="absolute top-0" />
      </div>
      <div className="flex-all relative bottom-10 flex-wrap w-72 md:w-full mx-auto">
        <div className="glow-button">
          <Image src="/magic.svg" alt="image" width={20} height={20} />
          <p className="text-sm lg:text-xl">Logic Builder</p>
        </div>
        <div className="glow-button">
          <Image src="/stars.svg" alt="image" width={20} height={20} />
          <p className="text-sm lg:text-xl">Styling Maker</p>
        </div>
        <div className="glow-button">
          <Image src="/feather.svg" alt="image" width={20} height={20} />
          <p className="text-sm lg:text-xl">Clean &lt;Writer /&gt;</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
