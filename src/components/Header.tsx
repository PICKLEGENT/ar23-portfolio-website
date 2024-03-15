import { Link } from "react-router-dom"
import { Navbar } from "."

const Header = () => {
    return (
        <header className={`flex justify-between items-center sticky top-2.5 z-[999] mx-120 my-30 text-primary-black tracking-wider bg-primary-white border-2 border-primary-black border-dashed rounded-2xl shadow-drop`}>
            <Link to='/' className="p-2.5 font-light text-4xl">AR23</Link>
            <Navbar />
        </header>
    )
}

export default Header