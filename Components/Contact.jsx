
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";


const Contact = () => {
    return (
        <div className="w-full h-screen flex-all2 dark-blue-bg pb-10">
            <h2 className="text-3xl sm:text-5xl font-bold mt-20 mb-5">Want to Hire Me?</h2>
            <div className="px-3">
                <div className="contact-box md:p-5 flex flex-col gap-10 justify-center items-center px-2 md:px-20">
                    <Image src="/img.jpg" alt="My Image" width={100} height={100} className="rounded-full" />
                    <p className="text-center text-lg sm:text-xl px-3">Thank you very much for coming this far, now you have seen my work, so if you are interested, you can contact me from below links for <span className="underline">Project Request</span> or If you want to <span className="underline">Hire</span> me permanently as a developer.</p>
                    <div className="text-2xl md:text-4xl flex gap-4 sm:gap-10">
                        <div className="border-2 p-3 rounded-full transition-all duration-300 cursor-pointer hover:bg-slate-100 hover:text-blue-800">
                            <AiFillLinkedin />
                        </div>
                        <div className="border-2 p-3 rounded-full transition-all duration-300 cursor-pointer hover:bg-slate-100 hover:text-blue-400">
                            <AiFillTwitterSquare />
                        </div>
                        <div className="border-2 p-3 rounded-full transition-all duration-300 cursor-pointer hover:bg-slate-100 hover:text-yellow-500">
                            <IoIosMail />
                        </div>
                        <div className="border-2 p-3 rounded-full transition-all duration-300 cursor-pointer hover:bg-slate-100 hover:text-black">
                            <AiFillGithub />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact