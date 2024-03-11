import { CustomHeading, Footer, Header, PortfolioProjectCard } from "../components"

const Portfolio = () => {
    return (<>
        <Header textColor={'text-primary-black'} bgColor={'bg-primary-white'} borderColor={'border-primary-black'} />
        <div className="text-center">
            <CustomHeading title={'Portfolio'} />
        </div>
        <div className="flex flex-wrap justify-between items-center mx-120 mb-60">
            <PortfolioProjectCard />
            <PortfolioProjectCard />
            <PortfolioProjectCard />
            <PortfolioProjectCard />
            <PortfolioProjectCard />
        </div>
        <Footer />
    </>
    )
}

export default Portfolio