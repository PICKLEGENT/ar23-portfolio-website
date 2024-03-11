import { Link } from "react-router-dom"
import { Navbar } from "."
import { HeaderProps } from "../types"

const Header = ({ textColor, bgColor, borderColor }: HeaderProps) => {
    return (
        <header className={`flex justify-between items-center sticky top-2.5 z-[999] mx-120 my-30 ${textColor} tracking-wider ${bgColor} border-2 ${borderColor} border-dashed rounded-2xl shadow-drop`}>
            <Link to='/' className="p-2.5 font-light text-4xl">AR23</Link>
            <Navbar />
        </header>
    )
}

export default Header