import { CustomHeading, Footer, Header, PortfolioProjectCard } from "../components"
import { portfolioWorks } from "../constants"

const Portfolio = () => {
    return (
        <>
            <Header textColor={'text-primary-black'} bgColor={'bg-primary-white'} borderColor={'border-primary-black'} />
            <div className="mt-[70px] text-center">
                <CustomHeading title={'Portfolio'} />
            </div>
            <div className={`grid grid-rows-2 grid-flow-col gap-20 mx-120 mt-[75px] mb-60`} style={{
            }}>
                {portfolioWorks.map((work) => (
                    <PortfolioProjectCard key={work.projectName} title={work.projectName} preview={work.projectPreview} />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default Portfolio