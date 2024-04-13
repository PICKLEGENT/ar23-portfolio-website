import { Link } from "react-router-dom"
import { Navbar } from "."

const Header = () => {
    return (
        <header className="flex justify-between items-start lg:items-center">
            <Link to='/' className="font-black text-4xl text-purple-800 dark:text-yellow-400">AR23</Link>
            <div className="flex justify-center items-center p-3 lg:p-5 border-2 border-purple-800 dark:border-yellow-400 rounded-lg lg:rounded-full">
                <Navbar />
            </div>
        </header>
    )
}

export default Header