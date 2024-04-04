import CustomInput from "../components/CustomInput"
import { CustomButton, CustomHeading, Footer, Header } from "../components"


const Contact = () => {
    return (
        <>
            <main className="px-16 lg:px-52 py-16 tracking-wider bg-neutral-100 dark:bg-zinc-900">
                <Header />
                <section className="mt-14 text-center">
                    <CustomHeading title="Send me a message. I'm gonna check this out." />
                </section>
                <div className="mt-24">
                    <form action="#">
                        <ul>
                            <li className="mt-12 flex justify-start items-start">
                                <p className="mr-12 text-2xl text-purple-800 dark:text-yellow-400">0001</p>
                                <div>
                                    <CustomInput
                                        label="What's your name?"
                                        type="text"
                                        name="user-name"
                                        placeholder="John Doe"
                                        autocomplete="given-name"
                                    />
                                </div>
                            </li>
                            <li className="mt-12 flex justify-start items-start">
                                <p className="mr-12 text-2xl text-purple-800 dark:text-yellow-400">0010</p>
                                <div>
                                    <CustomInput
                                        label="What's your email?"
                                        type="email"
                                        name="user-email"
                                        placeholder="john@doe.com"
                                        autocomplete="on"
                                    />
                                </div>
                            </li>
                            <li className="mt-12 flex justify-start items-start">
                                <p className="mr-12 text-2xl text-purple-800 dark:text-yellow-400">0011</p>
                                <div>
                                    <CustomInput
                                        label="What's the name of your organization?"
                                        type="text"
                                        name="user-organization"
                                        placeholder="John & Doe"
                                        autocomplete="none"
                                    />
                                </div>
                            </li>
                            <li className="mt-12 flex justify-start items-start">
                                <p className="mr-12 text-2xl text-purple-800 dark:text-yellow-400">0100</p>
                                <div>
                                    <label htmlFor="message" className="block text-2xl text-purple-800 dark:text-yellow-400">Your message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        cols={50}
                                        rows={5}
                                        placeholder="Hello Andrew..."
                                        autoComplete="none"
                                        className="mt-5 text-xl text-zinc-900 dark:text-neutral-100 bg-neutral-100 dark:bg-zinc-900 resize-none"
                                    >
                                    </textarea>
                                </div>
                            </li>
                        </ul>
                        <div className="flex justify-center items-center mt-12">
                            <CustomButton title="Send" />
                        </div>
                    </form>
                </div>
                <Footer />
            </main>
        </>
    )
}

export default Contact