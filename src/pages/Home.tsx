import { useEffect, useState } from "react"
import { Banner, Contacts, CustomHeading, Footer, Header, HomeProjectCard, Loader, SmallInfo } from "../components"
import { listOfWorks } from "../constants"
// import transition from "../transition"

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const preloader = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        };
        preloader();
    }, [])

    return isLoading ? (
        <Loader />) : (
        <>
            <main className="tracking-wider bg-primary-white">
                <Header textColor={'text-primary-white'} bgColor={'bg-primary-grey'} />
                <Banner />
                <SmallInfo />
                <section className="mx-120 my-100 ">
                    <CustomHeading title={'Portfolio'} />
                    {listOfWorks.map((work) => (
                        <HomeProjectCard key={work} title={work} />
                    ))}
                </section>
                <Contacts />
                <Footer />
            </main>
        </>
    )
}

export default Home;