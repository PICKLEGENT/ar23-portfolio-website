import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-around items-center text-primary-white">
                <Link to='/'>about me</Link>
                <Link to='/'>portfolio</Link>
                <Link to='/'>contact</Link>
            </nav>
        </>
    )
}

export default Navbar