import { Link } from "react-router-dom"
import { LanguageChanger, Navbar } from "."

const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <Link to='/' className="font-black text-3xl text-purple-800 dark:text-yellow-400">AR23</Link>
            <div className="flex justify-end items-center">
                <Navbar />
                <div className="ml-12">
                    <LanguageChanger />
                </div>
            </div>
        </header>
    )
}

export default Header