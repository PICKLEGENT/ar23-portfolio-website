import { Banner, Contacts, CustomHeading, Footer, Header, HomeProjectCard, SmallInfo } from "../components"
import { listOfWorks } from "../constants"

const Home = () => {
    return (
        <>
            <main className="tracking-wider bg-primary-white">
                <Header />
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

export default Home