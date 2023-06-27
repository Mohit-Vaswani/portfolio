import Image from "next/image"
import ProgressBar from "./Progress"

const Benefits = () => {
    return (
        <div className="w-full h-full lg:h-screen dark-blue-bg2 relative flex align-top justify-center flex-col gap-10 text-center py-10 px-10">
            <div className="horizontal-line absolute top-0"></div>
            <h2 className="text-6xl">Benefits</h2>
            <div className="grid lg:grid-flow-col grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-8">
                <div className="h-56 grid-box">
                    <p className="text-3xl"><span className="text-8xl text-purple-700">SEO</span> <br />No Compromise with   </p>
                </div>
                <div className="lg:col-start-3 h-56 grid-box">
                    <p>Simple Test 2</p>
                </div>
                <div className=" h-56 grid-box flex-col">
                    <p className="text-2xl">Fast Dev</p>
                    <ProgressBar/>
                    <p className="text-2xl">Fast Load</p>
                </div>
                <div className=" h-56 grid-box">
                    <p>Simple Test 4</p>
                </div>
                <div className="col-span-1 lg:col-span-2 h-56 grid-box flex-col text-center w-full">
                    <div className="marquee">
                        <div className="marquee--inner">
                            <span>
                                <div className="orb">
                                    <Image src="/js.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb red">
                                    <Image src="/html.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb yellow">
                                    <Image src="/css.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb blue">
                                    <Image src="/react.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb orange">
                                    <Image src="/nextjs.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb purple">
                                    <Image src="/firebase.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb green">
                                    <Image src="/typescript.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb">
                                <Image src="/tailwind.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb purple">
                                    <Image src="/firebase.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb green">
                                    <Image src="/typescript.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb">
                                <Image src="/tailwind.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb green">
                                    <Image src="/typescript.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                            </span>
                            <span>
                            <div className="orb">
                                    <Image src="/js.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb red">
                                    <Image src="/html.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb yellow">
                                    <Image src="/css.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb blue">
                                    <Image src="/react.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb orange">
                                    <Image src="/nextjs.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb purple">
                                    <Image src="/firebase.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb green">
                                    <Image src="/typescript.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                                <div className="orb">
                                <Image src="/tailwind.svg" alt="JavaScript Logo" width={40} height={40} />
                                </div>
                            </span>

                        </div>
                    </div>
                    <p className="text-2xl">Strong Fundamentals and Knowledge of Latest Tech</p>
                </div>
            </div>
            <div className="horizontal-line absolute bottom-0"></div>
        </div>
    )
}

export default Benefits