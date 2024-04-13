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
            <main className="p-6 lg:px-52 lg:py-16 tracking-wider bg-zinc-100 dark:bg-zinc-900">
                <Header />
                <section className="mt-12 lg:mt-36 text-center">
                    <CustomHeading title={t('portfolioCustomHeading')} />
                </section>
                <section>
                    <div className="flex flex-wrap flex-col lg:flex-row justify-center mt-12 lg:mt-24 gap-6">
                        {portfolio.map((project, index) => (
                            <div
                                key={index}
                                style={{
                                    background: `${portfolio ? `url(${project.projectPreview})` : 'transparent'}`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'top'
                                }}
                                className="flex justify-start items-end w-full lg:w-[600px] h-[250px] lg:h-[400px] border-2 border-purple-800 dark:border-yellow-400 rounded-lg overflow-hidden"
                            >
                                <h1
                                    className="p-3 lg:p-5 w-full font-bold text-2xl lg:text-4xl text-zinc-900 dark:text-neutral-100 border-t-2 border-purple-800 dark:border-yellow-400 bg-neutral-100 dark:bg-zinc-900">
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