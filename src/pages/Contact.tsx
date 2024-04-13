import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';
import { ContactForm, CustomHeading, Footer, Header } from "../components"

const Contact = () => {
    const { t } = useTranslation()

    return (
        <>
            <Helmet>
                <title>{'AR23 | ' + t('title_4')}</title>
            </Helmet>
            <main className="p-6 lg:px-52 lg:py-16 tracking-wider bg-zinc-100 dark:bg-zinc-900">
                <Header />
                <section className="mt-12 lg:mt-36 text-center">
                    <CustomHeading title={t('contactCustomHeading')} />
                </section>
                <div className="mt-12 lg:mt-24">
                    <ContactForm />
                </div>
                <Footer />
            </main>
        </>
    )
}

export default Contact