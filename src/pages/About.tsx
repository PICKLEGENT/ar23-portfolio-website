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
            <main className="p-6 lg:px-52 lg:py-16 tracking-wider bg-zinc-100 dark:bg-zinc-900">
                <Header />
                <div className="mt-12 lg:mt-36 text-center">
                    <CustomHeading title={t('infoCustomHeading_1')} />
                </div>
                <section className="mt-12 lg:mt-24">
                    <div>
                        <CustomHeading title={t('infoCustomHeading_2')} />
                        <p className="hidden lg:block mt-12 text-4xl text-zinc-900 dark:text-neutral-100 leading-relaxed">{t('myNameIs')}&nbsp;
                            <span className='font-bold text-5xl text-purple-800 dark:text-yellow-400'>{t('name')}</span>.&nbsp;{t('age')}.&nbsp;{t('I')}&nbsp;
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
                        <div className="lg:hidden text-left">
                            <div className="mt-4 flex items-baseline">
                                <p className="text-4xl text-zinc-900 dark:text-neutral-100 shrink-0">{t('homeCustomHeading_2')}</p>
                                &nbsp;
                                <CustomHeading title={t('name')} />
                                <p className="text-4xl text-zinc-900 dark:text-neutral-100">,</p>
                            </div>
                            <p className="mt-2 text-4xl text-zinc-900 dark:text-neutral-100">{t('I')}&nbsp;{t('infoTypewriterWords_1')}</p>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-24">
                        <CustomHeading title={t('infoCustomHeading_3')} />
                        <ul className="text-2xl lg:text-4xl text-zinc-900 dark:text-neutral-100">
                            {stack.map((item) => (
                                <li key={item} className="mt-6 lg:mt-12">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-12 lg:mt-24">
                        <CustomHeading title={t('infoCustomHeading_4')} />
                        <p className="mt-6 lg:mt-12 text-2xl lg:text-4xl text-zinc-900 dark:text-neutral-100">{t('infoLearning')}.</p>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default About