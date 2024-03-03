import { Link } from "react-router-dom"
import { HomeProjectCardProps } from "../types"

const HomeProjectCard = ({ title }: HomeProjectCardProps) => {
    return (
        <Link to='/' className="flex justify-between items-center border-t border-primary-grey text-primary-black">
            <h1 className="mx-120 my-100 text-6xl">{title}</h1>
            <p className="mx-120 font-light text-3xl">Explore</p>
        </Link>
    )
}

export default HomeProjectCard