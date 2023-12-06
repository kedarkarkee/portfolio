import { buttonStyle } from "./css";
import { bodyIntro } from "./typography";

const Intro = () => {
    return (
        <div className='flex items-center mt-20 justify-evenly'>
            <div className="mob:text-center mob:mt-20">
            <p className={bodyIntro}>Hello, I'm</p>
            <p className="text-textLight text-6xl mob:text-4xl font-black my-2">KEDAR KARKI</p>
            <p className={bodyIntro}>FLUTTER DEVELOPER</p>
            <button className={buttonStyle}>Hire Me</button>
            </div>
        <img className="mob:hidden" src='/iphone.png' width='20%'/>

        </div>
    )
}

export default Intro;