import { Link } from "react-router-dom"
import { Navbar } from "."

const Header = () => {
    return (
        <header className="flex justify-between items-center mx-120 my-60 font-light text-primary-white">
            <Link to='/' className="text-4xl">AR23</Link>
            <Navbar />
        </header>
    )
}

export default Header