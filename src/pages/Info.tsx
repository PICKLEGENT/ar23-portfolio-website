import { stack } from '../constants'
import { Typewriter } from 'react-simple-typewriter'
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
                        <p className="mt-6 text-2xl text-zinc-900 dark:text-neutral-100 leading-relaxed">My name is <span className='text-purple-800 dark:text-yellow-400'>Andrew</span>. I'm 20 years old. I'm&nbsp;
                            <span className='text-purple-800 dark:text-yellow-400'>
                                <Typewriter
                                    words={['a frontend developer.', 'a bit of a designer.', 'just a nice guy.']}
                                    loop={0}
                                    cursor
                                    cursorStyle=''
                                    typeSpeed={50}
                                    deleteSpeed={25}
                                    delaySpeed={1000}
                                />
                            </span>
                        </p>
                    </div>
                    <div className="mt-12">
                        <CustomHeading title={"My stack:"} />
                        <ul className=" text-2xl text-zinc-900 dark:text-neutral-100">
                            {stack.map((item) => (
                                <li key={item} className="mt-6">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-12">
                        <CustomHeading title={"Learning:"} />
                        <p className="mt-6 text-2xl text-zinc-900 dark:text-neutral-100">Now I spend a lot of time on Next.js, but I also don't forget about Vue.js.</p>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Info