import { Avatar, ContactForm, Footer, Header } from "../components"
// import transition from "../transition"

const Contact = () => {
    return (
        <main className="tracking-wider">
            <Header />
            <section className="flex justify-between items-center mx-120 my-100">
                <h1 className="p-2.5 text-6xl text-primary-black leading-relaxed border-2 border-primary-black border-dashed rounded-2xl bg-primary-white shadow-drop">Send me a message<br />I’m gonna check this out</h1>
                <div className="flex justify-center items-center">
                    <div className="mr-100 w-[1px] h-250 bg-primary-grey rotate-45"></div>
                    <div className="w-[1px] h-250 bg-primary-grey rotate-45"></div>
                </div>
                <Avatar />
            </section>
            <div className="flex justify-between mx-120">
                <ContactForm />
                <div>
                    <div className="flex flex-col p-2.5 text-primary-black border-2 border-primary-black border-dashed rounded-2xl bg-primary-white shadow-drop">
                        <h3 className="font-black uppercase">contact details</h3>
                        <a href="mailto:romanov.resume@yandex.ru" className="my-4 text-xl">romanov.resume@yandex.ru</a>
                        <a href='tel:+79252009660' className="text-xl">+7 925 200 96 60</a>
                    </div>
                    <div className="flex flex-col mt-150 p-2.5 border-2 border-primary-black border-dashed rounded-2xl bg-primary-white shadow-drop">
                        <h3 className="font-black uppercase">socials</h3>
                        <a href="https://vk.com/s_k_i_b_i_d_i" target="_blank" className="mt-4 text-xl">VK</a>
                        <a href='https://github.com/PICKLEGENT' target="_blank" className="my-4 text-xl">GitHub</a>
                        <a href='https://www.instagram.com/picklegent?igsh=Ymt3N3o5dWpnYm5u&utm_source=qr' target="_blank" className="text-xl">Instagram</a>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Contact