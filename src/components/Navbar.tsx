import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Navbar = () => {
    const { t } = useTranslation()

    return (
        <nav className="flex justify-center items-center font-bold text-2xl dark:text-neutral-100">
            <Link to='/about'>{t('title_2')}</Link>
            <Link to='/portfolio' className="mx-10">{t('title_3')}</Link>
            <Link to='/contact'>{t('title_4')}</Link>
        </nav>
    )
}

export default Navbar