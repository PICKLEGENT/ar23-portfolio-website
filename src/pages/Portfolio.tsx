import { CustomHeading, Footer, Header, PortfolioProjectCard } from "../components"

const Portfolio = () => {
    return (<>
        <Header textColor={'text-primary-black'} bgColor={'bg-primary-white'} borderColor={'border-primary-black'} />
        <div className="mt-[70px] text-center">
            <CustomHeading title={'Portfolio'} />
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-20 mx-120 mt-[75px] mb-60">
            <PortfolioProjectCard />
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