import { Banner, CustomHeading, Header, HomeProjectCard, SmallInfo } from "../components"
import { listOfWorks } from "../constants"

const Home = () => {
    return (
        <>
            <main className="tracking-wider">
                <Header />
                <Banner />
                <SmallInfo />
                <section className="mx-120 my-100">
                    <CustomHeading title={'Portfolio'} />
                    {listOfWorks.map((work) => (
                        <HomeProjectCard key={work} title={work} />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Home