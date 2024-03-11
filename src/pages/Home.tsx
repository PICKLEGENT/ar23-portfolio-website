import { Banner, Contacts, CustomHeading, Footer, Header, HomeProjectCard, SmallInfo } from "../components"
import { listOfWorks } from "../constants"
import { Link } from "react-router-dom";
// import transition from "../transition"

const Home = () => {

    return (
        <>
            <main className="tracking-wider">
                <Header textColor={'text-primary-dark'} bgColor={'bg-primary-white'} borderColor={'border-primary-black'} />
                <Banner />
                <SmallInfo />
                <section className="mx-120 my-100 ">
                    <CustomHeading title={'Portfolio'} />
                    {listOfWorks.map((work) => (
                        <HomeProjectCard key={work} title={work} />
                    ))}
                    <div className="flex justify-center items-center">
                        <Link to='/portfolio' className='p-4 text-center text-2xl text-primary-black tracking-wider border-2 border-primary-black border-dashed rounded-xl'>See more</Link>
                    </div>
                </section>
                <Contacts />
                <Footer />
            </main>
        </>
    )
}

export default Home;