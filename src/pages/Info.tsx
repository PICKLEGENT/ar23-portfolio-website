import { CustomHeading, Footer, Header } from "../components"

const Info = () => {
    return (
        <>
            <main className="px-16 lg:px-52 py-16 tracking-wider bg-neutral-100 dark:bg-zinc-900">
                <Header />
                <div className="mt-14 text-center">
                    <CustomHeading title={"Information about me"} />
                </div>
                <section className="mt-24">
                    <div>
                        <CustomHeading title={"Whats'up!"} />
                        <p className="mt-6 text-2xl text-zinc-900 dark:text-neutral-100">My name is Andrew. I'm 20 years old. I'm a frontend and JavaScript developer.</p>
                    </div>
                    <div className="mt-12">
                        <CustomHeading title={"My stack:"} />
                        <ul className=" text-2xl text-zinc-900 dark:text-neutral-100">
                            <li className="mt-6">Next.js</li>
                            <li className="mt-6">Vue.js</li>
                            <li className="mt-6">JavaScript</li>
                            <li className="mt-6">TypeScript</li>
                            <li className="mt-6">Vite</li>
                            <li className="mt-6">Node.Js</li>
                            <li className="mt-6">Tailwind CSS</li>
                        </ul>
                    </div>
                    <p className="mt-12 text-2xl text-zinc-900 dark:text-neutral-100">Now I spend a lot of time on Next.js, but I also don't forget about Vue.js.</p>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Info