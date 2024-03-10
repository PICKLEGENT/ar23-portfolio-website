import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center text-lg shadow-drop tracking-wider">
            <Link to='/' className="p-2.5 border-2 border-primary-black rounded-2xl bg-primary-white">About me</Link>
            <Link to='/portfolio' className="mx-60 p-2.5 border-2 border-primary-black rounded-2xl bg-primary-white">Portfolio</Link>
            <Link to='/contact' className="p-2.5 border-2 border-primary-black rounded-2xl bg-primary-white">Contact</Link>
        </nav>
    )
}

export default Navbar