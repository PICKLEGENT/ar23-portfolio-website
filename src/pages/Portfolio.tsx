import { Helmet } from "react-helmet"
import { portfolio } from "../constants"
import { useTranslation } from 'react-i18next'
import { CustomHeading, Footer, Header } from "../components"


const Portfolio = () => {
    const { t } = useTranslation()

    return (
        <>
            <Helmet>
                <title>{'AR23 | ' + t('title_3')}</title>
            </Helmet>
            <main className="px-16 lg:px-52 py-16 tracking-wider bg-neutral-100 dark:bg-zinc-900">
                <Header />
                <section className="mt-36 text-center">
                    <CustomHeading title={t('portfolioCustomHeading')} />
                </section>
                <section>
                    <div className="flex flex-wrap justify-center mt-24 gap-12">
                        {portfolio.map((project, index) => (
                            <div
                                key={index}
                                style={{
                                    background: `${portfolio ? `URL(${project.projectPreview})` : 'transparent'}`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'top'
                                }}
                                className="flex justify-start items-end lg:w-[600px] lg:h-[400px] border-2 border-purple-800 dark:border-yellow-400 rounded-lg overflow-hidden"
                            >
                                <h1
                                    className="p-5 w-full font-bold text-4xl text-zinc-900 dark:text-neutral-100 border-t-2 border-purple-800 dark:border-yellow-400 bg-neutral-100 dark:bg-zinc-900">
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