import { Banner, Header, SmallInfo } from "../components"

const Home = () => {
    return (
        <>
            <main className="tracking-wider">
                <Header />
                <Banner />
                <SmallInfo />
            </main>
        </>
    )
}

export default Home