import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Navbar = () => {
    const { t } = useTranslation()

    return (
        <nav className="flex flex-col lg:flex-row justify-center items-end lg:items-center font-bold text-2xl dark:text-neutral-100 gap-y-6 lg:gap-x-12">
            <Link to='/about'>{t('title_2')}</Link>
            <Link to='/portfolio'>{t('title_3')}</Link>
            <Link to='/contact'>{t('title_4')}</Link>
        </nav>
    )
}

export default Navbar