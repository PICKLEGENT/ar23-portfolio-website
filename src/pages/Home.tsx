import { About, Banner, Contacts, Footer, Greeting, Header, Navbar, Portfolio, Skills } from "../components"

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Navbar />
            <Greeting />
            <About />
            <Skills />
            <Portfolio />
            <Contacts />
            <Footer />
        </>
    )
}

export default Home