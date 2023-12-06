import { Props } from "next/script";
import { buttonStyle } from "./css";
import { gradient, subHeading } from "./typography";

const TextField = (props: {name: string; label: string; type: string; isTextArea?: boolean | false}) => {
    return (
        <div className="flex flex-col w-40%">
        <label className="text-label m-4" htmlFor={props.name}>{props.label}</label>
        {
            props.isTextArea ? 
            <textarea className="border-none bg-lightText rounded-2xl p-4" id={props.name} name={props.name} rows={4} cols = {50}></textarea> :
        <input className="border-none bg-lightText h-12 rounded-2xl p-4" type={props.type} id={props.name} name={props.name} />
        }
        </div>
    );
}

const ContactMe = ()  => {
    return (
        <>
        <h2 id="contact" className={`text-primary ${subHeading}`}>LET'S TALK</h2>
            <form className="flex flex-col items-center">
                <TextField name="name" label="Your name" type="text" />
                <TextField name="email" label="Your email" type="email" />
                <TextField name="email" label="Your message" type="text" isTextArea />
                <button id="button" type="submit" className={buttonStyle}>Send Message</button>
            </form>
    </>
    );
}

export default ContactMe;