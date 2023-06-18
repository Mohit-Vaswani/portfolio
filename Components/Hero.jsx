import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col dark-blue-bg h-screen">
      <div className="flex-all relative">
        <Image src="/logo.svg" alt="image" width={1000} height={1000} className="opacity-40 absolute top-0" />
        <Image src="/gradient.svg" alt="image" width={1000} height={1000} className=" absolute top-0" />
      </div>
      <div className="flex-all relative top-96">
        <div className="glow-button">
          <Image src="/stars.svg" alt="image" width={20} height={20} />
          <p>The Webmaster</p>
        </div>
        <div className="glow-button">
          <Image src="/feather.svg" alt="image" width={20} height={20} />
          <p>The Magician</p>
        </div>
        <div className="glow-button">
          <Image src="/magic.svg" alt="image" width={20} height={20} />
          <p>The Wordsmith</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
