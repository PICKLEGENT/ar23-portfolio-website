import { Link } from "react-router-dom"
import { Navbar } from "."
import { HeaderProps } from "../types"

const Header = ({ textColor, bgColor }: HeaderProps) => {
    return (
        <header className={`flex justify-between items-center px-120 py-30 ${textColor} ${bgColor} tracking-wider`}>
            <Link to='/' className="text-4xl font-light">AR23</Link>
            <Navbar />
        </header>
    )
}

export default Header