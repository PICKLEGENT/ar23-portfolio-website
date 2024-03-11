import { Link } from "react-router-dom"
import { HomeProjectCardProps } from "../types"

const HomeProjectCard = ({ title }: HomeProjectCardProps) => {
    return (
        <Link to='/project' className="flex justify-between items-center my-60 p-2.5 text-primary-black border-2 border-primary-black border-dashed rounded-2xl bg-primary-white shadow-drop">
            <h1 className="mx-120 my-100 text-6xl">{title}</h1>
            <p className="mx-120 font-light text-3xl">Explore</p>
        </Link>
    )
}

export default HomeProjectCard