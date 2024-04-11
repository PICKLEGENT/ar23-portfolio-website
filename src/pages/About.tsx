import { stack } from '../constants'
import { useTranslation } from 'react-i18next'
import { Typewriter } from 'react-simple-typewriter'
import { CustomHeading, Footer, Header } from "../components"
import { Helmet } from 'react-helmet'

const About = () => {
    const { t } = useTranslation()

    return (
        <>
            <Helmet>
                <title>{'AR23 | ' + t('title_2')}</title>
            </Helmet>
            <main className="px-16 lg:px-52 py-16 tracking-wider bg-neutral-100 dark:bg-zinc-900">
                <Header />
                <div className="mt-14 text-center">
                    <CustomHeading title={t('infoCustomHeading_1')} />
                </div>
                <section className="mt-24">
                    <div>
                        <CustomHeading title={t('infoCustomHeading_2')} />
                        <p className="mt-6 text-2xl text-zinc-900 dark:text-neutral-100 leading-relaxed">{t('myNameIs')}&nbsp;<span className='text-3xl text-purple-800 dark:text-yellow-400'>{t('name')}</span>.&nbsp;{t('age')}.&nbsp;{t('I')}&nbsp;
                            <span className='text-purple-800 dark:text-yellow-400'>
                                <Typewriter
                                    words={[`${t('infoTypewriterWords_1')}`, `${t('infoTypewriterWords_2')}`, `${t('infoTypewriterWords_3')}`]}
                                    loop={0}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={50}
                                    deleteSpeed={25}
                                    delaySpeed={1000}
                                />
                            </span>
                        </p>
                    </div>
                    <div className="mt-12">
                        <CustomHeading title={t('infoCustomHeading_3')} />
                        <ul className=" text-2xl text-zinc-900 dark:text-neutral-100">
                            {stack.map((item) => (
                                <li key={item} className="mt-6">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-12">
                        <CustomHeading title={t('infoCustomHeading_4')} />
                        <p className="mt-6 text-2xl text-zinc-900 dark:text-neutral-100">{t('infoLearning')}.</p>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default About