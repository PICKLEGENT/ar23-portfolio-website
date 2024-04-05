import { ContactForm, CustomHeading, Footer, Header } from "../components"

const Contact = () => {
    return (
        <>
            <main className="px-16 lg:px-52 py-16 tracking-wider bg-neutral-100 dark:bg-zinc-900">
                <Header />
                <section className="mt-14 text-center">
                    <CustomHeading title="Send me a message. I'm gonna check this out." />
                </section>
                <div className="mt-24">
                    <ContactForm />
                </div>
                <Footer />
            </main>
        </>
    )
}

export default Contact