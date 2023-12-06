import { subHeading } from "./typography";

const About = () => {
    return (
        <>
            <h2 id="about" className={`text-primary ${subHeading}`}>ABOUT ME</h2>
                <div className="flex items-center justify-evenly my-24 flex-wrap">
                    <div className="bg-white shadow-default w-48 h-48 rounded-circular flex align-center p-4">
                        <div className="bg-black h-full w-full shadow-default rounded-circular">
                        </div>
                    </div>
                    <div className="p-4 w-96">
                    <p className="text-primaryDark text-justify">
                        Namaste, I'm Kedar Karki, a self-taught Application Developer, from Nepal.
                        I have been developing Cross-Platform Mobile Applications for Android and IOS using Flutter since 2019. I have built several Mobile Applications and I am in deep love with the Flutter Ecosystem.
                        <br /> <br />
                        I also have sound knowledge of JavaScript and its libraries and frameworks like React, Node JS, Next Js and I have built quite a few products for the Web.
                    </p> 
                    </div>
                </div>
        </>
    );
}

export default About;