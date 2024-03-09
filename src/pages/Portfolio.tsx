import { Footer, Header, PortfolioProjectCard } from "../components"

const Portfolio = () => {
    return (<>
        <Header textColor={'text-primary-white'} bgColor={'bg-primary-grey'} />
        <div className="flex flex-wrap justify-between items-center mx-120 my-100">
            <PortfolioProjectCard />
            <PortfolioProjectCard />
            <PortfolioProjectCard />
        </div>
        <Footer />
    </>
    )
}

export default Portfolio