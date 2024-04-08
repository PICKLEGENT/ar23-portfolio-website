import { Link } from "react-router-dom"
import { Navbar } from "."

const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <Link to='/' className="font-black text-4xl text-purple-800 dark:text-yellow-400">AR23</Link>
            <div className="flex justify-center items-center p-5 border border-yellow-400 rounded-full">
                <Navbar />
            </div>
        </header>
    )
}

export default Header