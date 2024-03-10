import { Link } from "react-router-dom"
import { Navbar } from "."
import { HeaderProps } from "../types"

const Header = ({ textColor, bgColor }: HeaderProps) => {
    return (
        <header className={`flex justify-between items-center px-120 py-30 ${textColor} tracking-wider`}>
            <Link to='/' className="p-2.5 font-light text-4xl border border-primary-black rounded-2xl bg-primary-white shadow-drop">AR23</Link>
            <Navbar />
        </header>
    )
}

export default Header