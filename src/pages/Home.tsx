import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { listOfProjects } from "../constants";
import { useTranslation } from "react-i18next";
import { CustomHeading, Footer, Header, LanguageChanger, SmallInfo } from "../components";

const Home = () => {
    const { t } = useTranslation()

    return (
        <>
            <Helmet>
                <title>{'AR23 | ' + t('title_1')}</title>
            </Helmet>
            <main className="px-16 lg:px-52 py-16 tracking-wider bg-zinc-100 dark:bg-zinc-900">
                <Header />
                <section className="mt-36">
                    <div className="flex flex-col font-bold justify-center items-center text-9xl dark:text-neutral-100">
                        <h1>{t('homeBanner_1')}</h1>
                        <div className="flex mt-3 leading-relaxed">
                            <LanguageChanger />
                            <p className="mx-3">&</p>
                            <h1>{t('homeBanner_2')}</h1>
                        </div>
                    </div>
                    <div className="mt-12 text-center text-6xl text-zinc-900 dark:text-neutral-100">
                        <p>{t('homeBanner_3')}</p>
                    </div>
                    <div className="mt-24 text-center font-bold text-2xl text-purple-800 dark:text-yellow-400">
                        <Link to='/contact' className="p-5 border-2 border-purple-800 dark:border-yellow-400 rounded-full">{t('homeBanner_4')}</Link>
                    </div>
                </section>
                <section className="mt-36">
                    <div className="text-left">
                        <CustomHeading title={t('homeCustomHeading_1')} />
                        <div className="mt-4 flex items-baseline">
                            <p className="text-4xl text-zinc-900 dark:text-neutral-100">{t('homeCustomHeading_2')}</p>
                            &nbsp;
                            <CustomHeading title={t('name')} />
                            <p className="text-4xl text-zinc-900 dark:text-neutral-100">,</p>
                        </div>
                        <p className="mt-2 text-4xl text-zinc-900 dark:text-neutral-100">{t('homeCustomHeading_3')}</p>
                    </div>
                </section>
                <section>
                    <div className="mt-36 text-left">
                        <SmallInfo title={t('homeSmallInfoTitle_1')} text={t('homeSmallInfoText_1')} />
                    </div>
                    <div className="mt-24 text-right">
                        <SmallInfo title={t('homeSmallInfoTitle_2')} text={t('homeSmallInfoText_2')} />
                    </div>
                </section>
                <section className="mt-36">
                    <div>
                        <CustomHeading title={t('homeCustomHeading_4')} />
                    </div>
                    <div className="flex flex-wrap justify-center mt-24 gap-12">
                        {listOfProjects.map((project) => (
                            <Link to='/portfolio'
                                key={project}
                                className="flex justify-center items-center text-center p-10 w-96 text-zinc-900 dark:text-neutral-100 border-2 border-purple-800 dark:border-yellow-400 rounded-full">
                                <h1 className="font-bold text-4xl">
                                    {project}
                                </h1>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-24 text-center font-bold text-2xl text-purple-800 dark:text-yellow-400">
                        <Link to='/contact' className="p-5 border-2 border-purple-800 dark:border-yellow-400 rounded-full">{t('homeLink')}</Link>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Home;