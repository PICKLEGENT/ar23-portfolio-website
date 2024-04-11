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
            <main className="px-16 lg:px-52 py-16 tracking-wider bg-neutral-100 dark:bg-zinc-900">
                <Header />
                <section className="mt-36 text-center">
                    <CustomHeading title={t('contactCustomHeading')} />
                </section>
                <div className="mt-24">
                    <ContactForm />
                </div>
                <Footer />
            </main>
        </>
    )
}

export default Contact