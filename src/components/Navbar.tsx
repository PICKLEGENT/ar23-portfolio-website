import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="my-6 flex justify-around items-center font-semi text-4xl tracking-wider text-primary-white uppercase">
                <Link to='/'>about me</Link>
                <Link to='/'>portfolio</Link>
                <Link to='/'>contact</Link>
            </nav>
        </>
    )
}

export default Navbar