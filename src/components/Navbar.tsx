import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Navbar = () => {
    const { t } = useTranslation()

    return (
        <nav className="flex justify-center items-center capitalize font-bold text-2xl dark:text-neutral-100">
            <Link to='/info'>{t('navbar_1')}</Link>
            <Link to='/portfolio' className="mx-10">{t('navbar_2')}</Link>
            <Link to='/contact'>{t('navbar_3')}</Link>
        </nav>
    )
}

export default Navbar