import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex flex-col dark-blue-bg h-screen">
      <div className="flex-all relative">
        <Image src="/logo.svg" alt="image" width={1200} height={1200} className="opacity-40 absolute top-0" />
        <Image src="/gradient.svg" alt="image" width={1500} height={1500} className=" absolute top-0" />
      </div>
      <div className="flex-all relative top-96 mt-20">
        <div className="glow-button">
          <Image src="/stars.svg" alt="image" width={20} height={20} />
          <p>Logic Builder</p>
        </div>
        <div className="glow-button">
          <Image src="/feather.svg" alt="image" width={20} height={20} />
          <p>Styling Maker</p>
        </div>
        <div className="glow-button">
          <Image src="/magic.svg" alt="image" width={20} height={20} />
          <p>Clean &lt;Writer /&gt;</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
