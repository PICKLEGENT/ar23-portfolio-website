import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center text-lg">
            <Link to='/' >About me</Link>
            <Link to='/' className="mx-60">Portfolio</Link>
            <Link to='/' >Contact</Link>
        </nav>
    )
}

export default Navbar