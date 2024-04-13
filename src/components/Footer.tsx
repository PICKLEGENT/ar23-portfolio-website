import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer className="mt-24 lg:mt-36">
            <section className="flex flex-col lg:flex-row justify-between items-center text-2xl">
                <div className="hidden lg:block h-[1px] bg-purple-800 dark:bg-yellow-400 w-1/4"></div>
                <a href="mailto:romanov.resume@yandex.ru" className="mx-2.5 2xl:mx-0 text-purple-800 dark:text-yellow-400">romanov.resume@yandex.ru</a>
                <a href="tel:+79252009660" className="mt-12 lg:mt-0 mx-2.5 2xl:mx-0 text-purple-800 dark:text-yellow-400 flex-shrink-0">8 925 200 96 60</a>
                <div className="hidden lg:block h-[1px] bg-purple-800 dark:bg-yellow-400 w-1/4"></div>
            </section>
            <section className="mt-12 lg:mt-24">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
                    <div className="mr-0 lg:mr-24 text-center lg:text-left">
                        <h4 className="font-semibold text-sm text-neutral-500 uppercase">{t('footerHeading_1')}</h4>
                        <p className="mt-6 text-xl font-bold text-zinc-900 dark:text-neutral-100">2024 Edition</p>
                    </div>
                    <div className='mt-12 lg:mt-0 text-center lg:text-left'>
                        <h4 className="font-semibold text-sm text-neutral-500 uppercase">{t('footerHeading_2')}</h4>
                        <div className="flex flex-col lg:flex-row justify-start items-center lg:items-center font-bold">
                            <a href="https://github.com/PICKLEGENT"
                                target="_blanc"
                                className="mt-6 text-xl text-zinc-900 dark:text-neutral-100"
                            >
                                GitHub
                            </a>
                            <a href="https://t.me/AndrewRom"
                                target="_blanc"
                                className="mt-6 mx-0 lg:mx-12 text-xl text-zinc-900 dark:text-neutral-100"
                            >
                                Telegam
                            </a>
                            <a href="https://www.instagram.com/picklegent?igsh=Ymt3N3o5dWpnYm5u&utm_source=qr"
                                target="_blanc"
                                className="mt-6 text-xl text-zinc-900 dark:text-neutral-100"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12 lg:mt-24 font-semibold text-sm text-neutral-500">
                    <p>{t('designedBy')}<br />{t('fullName')}</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer