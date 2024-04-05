import { Link } from "react-router-dom";
import { listOfProjects } from "../constants";
import { useTranslation } from "react-i18next";
import { CustomHeading, Footer, Header, SmallInfo, Ticker } from "../components";

const Home = () => {
    const { t } = useTranslation()

    return (
        <>
            <main className="px-16 lg:px-52 py-16 tracking-wider bg-neutral-100 dark:bg-zinc-900">
                <Header />
                <Ticker />
                <section className="mt-48">
                    <div className="text-center">
                        <CustomHeading title={t('homeCustomHeading_1')} />
                    </div>
                    <div className="mt-12 text-left">
                        <SmallInfo title={t('homeSmallInfoTitle_1')} text={t('homeSmallInfoText_1')} />
                    </div>
                    <div className="mt-12 text-right">
                        <SmallInfo title={t('homeSmallInfoTitle_2')} text={t('homeSmallInfoText_2')} />
                    </div>
                </section>
                <section>
                    <div className="mt-24 mb-12">
                        <CustomHeading title={t('homeCustomHeading_2')} />
                    </div>
                    {listOfProjects.map((project) => (
                        <Link to='/' key={project} className="flex justify-between items-center mt-12 p-10 text-zinc-900 dark:text-neutral-100 border border-purple-800 dark:border-yellow-400 rounded-lg">
                            <h1 className="font-bold text-3xl">
                                {project}
                            </h1>
                            <p className="text-xl capitalize">{t('homeClick')}</p>
                        </Link>
                    ))}
                    <div className="mt-12 text-center font-semibold text-xl text-zinc-900 dark:text-neutral-100">
                        <Link to='/portfolio' className="px-5 py-2.5 border border-purple-800 dark:border-yellow-400 rounded-lg hover:text-neutral-100 hover:dark:text-zinc-900 hover:bg-purple-800 hover:dark:bg-yellow-400 duration-300 ease-in">
                            {t('homeLink')}
                        </Link>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Home;