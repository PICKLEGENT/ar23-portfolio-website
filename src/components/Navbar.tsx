import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center capitalize font-bold text-2xl dark:text-neutral-100">
            <Link to='/info'>info</Link>
            <Link to='/portfolio' className="mx-10">portfolio</Link>
            <Link to='/contact'>contact</Link>
        </nav>
    )
}

export default Navbar