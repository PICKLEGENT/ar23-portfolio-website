import { Link } from "react-router-dom"
import { Navbar } from "."

const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <Link to='/' className="font-black text-4xl text-purple-800 dark:text-yellow-400">AR23</Link>
            <div className="hidden lg:flex justify-center items-center p-5 border-2 border-purple-800 dark:border-yellow-400 rounded-full">
                <Navbar />
            </div>
        </header>
    )
}

export default Header