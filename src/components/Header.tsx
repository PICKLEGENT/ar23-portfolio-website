import { Link } from "react-router-dom"
import { Navbar } from "."

const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <Link to='/' className="font-black text-3xl text-purple-800 dark:text-yellow-400">AR23</Link>
            <Navbar />
        </header>
    )
}

export default Header