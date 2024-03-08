import { Avatar, CustomInput, Footer, Header } from "../components"
// import transition from "../transition"

const Contact = () => {
    return (
        <main className="tracking-wider bg-primary-black">
            <Header textColor={'text-primary-white'} bgColor={'bg-primary-black'} />
            <section className="flex justify-between items-center mx-120 my-100">
                <h1 className="font-light text-6xl text-primary-white leading-relaxed">Send me a message<br />I’m gonna check this out</h1>
                <div className="flex justify-center items-center">
                    <div className="mr-100 w-[1px] h-200 bg-primary-grey rotate-45"></div>
                    <div className="w-[1px] h-200 bg-primary-grey rotate-45"></div>
                </div>
                <Avatar />
            </section>
            <div className="flex justify-between mx-120">
                <form className="w-fit">
                    <ul className="w-fit">
                        <li className="flex justify-start items-start w-fit pt-60 pb-100 border-t border-primary-grey">
                            <p className="mx-60 text-2xl text-primary-grey select-none">0001</p>
                            <CustomInput label={'What’s your name?'} type={'text'} name={'userName'} placeholder={'John Doe'} autocomplete={'given-name'} />
                        </li>
                        <li className="flex justify-start items-start w-fit pt-60 pb-100 border-t border-primary-grey">
                            <p className="mx-60 text-2xl text-primary-grey select-none">0010</p>
                            <CustomInput label={'What’s your email?'} type={'email'} name={'userEmail'} placeholder={'john@doe.com'} autocomplete={'email'} />
                        </li>
                        <li className="flex justify-start items-start w-fit pt-60 pb-100 border-t border-primary-grey">
                            <p className="mx-60 text-2xl text-primary-grey select-none">0011</p>
                            <CustomInput label={'What’s the name of your organization?'} type={'text'} name={'userOrg'} placeholder={'John & Doe'} />
                        </li>
                        <li className="flex justify-start items-start w-fit pt-60 pb-100 border-y border-primary-grey">
                            <p className="mx-60 text-2xl text-primary-grey select-none">0100</p>
                            <div>
                                <label htmlFor="userMessage_contact-textarea" className="block mb-25 text-3xl text-primary-white">Your message</label>
                                <textarea name='userMessage' id='userMessage_contact-textarea' rows={5} placeholder='Hello Andrew ...' className="w-800 text-3xl text-primary-white bg-primary-black placeholder:text-primary-grey resize-none" />
                            </div>
                        </li>
                    </ul>
                    <div className="flex justify-end items-center relative my-200">
                        <div className="absolute border-t border-primary-white w-full"></div>
                        <button className="flex justify-center items-center mr-120 p-25 text-center font-light text-4xl text-primary-white tracking-wider border border-primary-white rounded-xl bg-primary-black z-10">
                            <span>Send</span>
                        </button>
                    </div>
                </form>
                <div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-primary-grey uppercase">contact details</h3>
                        <a href="mailto:romanov.resume@yandex.ru" className="mt-25 mb-4 font-light text-xl text-primary-white">romanov.resume@yandex.ru</a>
                        <a href='tel:+79252009660' className="font-light text-xl text-primary-white">+7 925 200 96 60</a>
                    </div>
                    <div className="flex flex-col mt-150">
                        <h3 className="font-bold text-primary-grey uppercase">socials</h3>
                        <a href="https://vk.com/s_k_i_b_i_d_i" target="_blank" className="mt-25 font-light text-xl text-primary-white">VK</a>
                        <a href='https://github.com/PICKLEGENT' target="_blank" className="my-4 font-light text-xl text-primary-white">GitHub</a>
                        <a href='https://www.instagram.com/picklegent?igsh=Ymt3N3o5dWpnYm5u&utm_source=qr' target="_blank" className="font-light text-xl text-primary-white">Instagram</a>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Contact