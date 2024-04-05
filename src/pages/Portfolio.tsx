import { portfolio } from "../constants"
import { useTranslation } from 'react-i18next'
import { CustomHeading, Footer, Header } from "../components"


const Portfolio = () => {
    const { t } = useTranslation()

    return (
        <>
            <main className="px-16 lg:px-52 py-16 tracking-wider bg-neutral-100 dark:bg-zinc-900">
                <Header />
                <section className="mt-14 text-center">
                    <CustomHeading title={t('portfolioCustomHeading')} />
                </section>
                <section>
                    <div className="flex flex-wrap justify-between items-center">
                        {portfolio.map((project, index) => (
                            <div
                                key={index}
                                style={{
                                    background: `${portfolio ? `URL(${project.projectPreview})` : 'transparent'}`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                }}
                                className="flex justify-center items-center mt-12 w-[400px] h-[250px] border border-purple-800 dark:border-yellow-400 rounded-lg"
                            >
                                <h1
                                    className="p-2.5 text-3xl text-purple-800 dark:text-yellow-400 border border-purple-800 dark:border-yellow-400 bg-neutral-100 dark:bg-zinc-900 rounded-lg">
                                    {project.projectName}
                                </h1>
                            </div>
                        ))}
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Portfolio