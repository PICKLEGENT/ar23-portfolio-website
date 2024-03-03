import { Link } from "react-router-dom"
import { Navbar } from "."

const Header = () => {
    return (
        <header className="flex justify-between items-center px-120 py-30 text-primary-black bg-primary-white">
            <Link to='/' className="text-4xl font-light">AR23</Link>
            <Navbar />
        </header>
    )
}

export default Header