import { Link } from "react-router-dom";
import { listOfProjects } from "../constants";
import { CustomHeading, Footer, Header, SmallInfo, Ticker } from "../components";

const Home = () => {

    return (
        <>
            <main className="px-16 lg:px-52 py-16 tracking-wider bg-neutral-100 dark:bg-zinc-900">
                <Header />
                <Ticker />
                <section className="mt-48">
                    <div className="text-center">
                        <CustomHeading title={"Hi! I'm Andrew"} />
                    </div>
                    <div className="mt-12 text-left">
                        <SmallInfo title={'Who am I?'} text={"I'm frontend developer. I like programming and pizza."} />
                    </div>
                    <div className="mt-12 text-right">
                        <SmallInfo title={'What can I do?'} text={"I'm frontend developer.I like programming and pizza."} />
                    </div>
                </section>
                <section>
                    <div className="mt-24 mb-12">
                        <CustomHeading title={'Portfolio'} />
                    </div>
                    {listOfProjects.map((project) => (
                        <Link to='/' key={project} className="flex justify-between items-center mt-12 p-10 text-zinc-900 dark:text-neutral-100 border border-purple-800 dark:border-yellow-400 rounded-lg">
                            <h1 className="font-bold text-3xl">
                                {project}
                            </h1>
                            <p className="text-xl">Click</p>
                        </Link>
                    ))}
                    <div className="mt-12 text-center font-semibold text-xl text-zinc-900 dark:text-neutral-100">
                        <Link to='/portfolio' className="px-5 py-2.5 border border-purple-800 dark:border-yellow-400 rounded-lg hover:text-neutral-100 hover:dark:text-zinc-900 hover:bg-purple-800 hover:dark:bg-yellow-400 duration-300 ease-in">See more</Link>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Home;