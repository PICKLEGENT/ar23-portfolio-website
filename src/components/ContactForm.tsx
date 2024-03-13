import { CustomInput } from "."

const ContactForm = () => {
    return (
        <form className="w-fit">
            <ul className="w-fit">
                <li className="flex justify-start items-start w-fit pt-60 pb-100 border-t border-primary-grey">
                    <p className="mx-60 p-2.5 text-2xl text-primary-black select-none border-2 border-primary-black border-dashed rounded-2xl bg-primary-white shadow-drop">0001</p>
                    <CustomInput label={'What’s your name?'} type={'text'} name={'userName'} placeholder={'John Doe'} autocomplete={'given-name'} />
                </li>
                <li className="flex justify-start items-start w-fit pt-60 pb-100 border-t border-primary-grey">
                    <p className="mx-60 p-2.5 text-2xl text-primary-black select-none border-2 border-primary-black border-dashed rounded-2xl bg-primary-white shadow-drop">0010</p>
                    <CustomInput label={'What’s your email?'} type={'email'} name={'userEmail'} placeholder={'john@doe.com'} autocomplete={'email'} />
                </li>
                <li className="flex justify-start items-start w-fit pt-60 pb-100 border-t border-primary-grey">
                    <p className="mx-60 p-2.5 text-2xl text-primary-black select-none border-2 border-primary-black border-dashed rounded-2xl bg-primary-white shadow-drop">0011</p>
                    <CustomInput label={'What’s the name of your organization?'} type={'text'} name={'userOrg'} placeholder={'John & Doe'} />
                </li>
                <li className="flex justify-start items-start w-fit pt-60 pb-100 border-y border-primary-grey">
                    <p className="mx-60 p-2.5 text-2xl text-primary-black select-none border-2 border-primary-black border-dashed rounded-2xl bg-primary-white shadow-drop">0100</p>
                    <div className="text-primary-black">
                        <label htmlFor="userMessage_contact-textarea" className="block mb-25 text-3xl">Your message</label>
                        <textarea name='userMessage' id='userMessage_contact-textarea' rows={5} placeholder='Hello Andrew ...' className="w-800 text-3xl placeholder:text-primary-grey resize-none" />
                    </div>
                </li>
            </ul>
            <div className="flex justify-end items-center relative my-200">
                <div className="absolute border-t border-primary-black w-full"></div>
                <button className="flex justify-center items-center mr-120 p-2.5 text-center text-4xl text-primary-black tracking-wider border border-primary-black rounded-2xl bg-primary-white shadow-drop z-10">
                    <span>Send</span>
                </button>
            </div>
        </form>
    )
}

export default ContactForm