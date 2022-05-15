import Image from "next/image";
import { bodyIntro, medium } from "./typography";

const Intro = () => {
    return (
        <>
            {/* <div className="pt-64 pl-40">
            <p className={bodyIntro}>Hello, I'm</p>
            <p className="text-textLight text-6xl font-black my-2">KEDAR KARKI</p>
            <p className={bodyIntro}>FLUTTER DEVELOPER</p>
            <div className="w-36 h-11 bg-gradient-to-r from-gradStart to-gradEnd rounded-xl flex items-center justify-center cursor-pointer my-2">
                <p className={`${medium} text-white`}>Hire Me</p>
                </div>
            </div> */}
            <img src='/android.png' width='300px' height='600px'  />
        </>
    )
}

export default Intro;