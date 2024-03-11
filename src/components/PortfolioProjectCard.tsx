import { Link } from "react-router-dom"

const PortfolioProjectCard = () => {
    return (
        <section>
            <Link to='/' className="flex justify-center items-center w-500 h-300 text-3xl tracking-wider text-primary-white bg-primary-black border-2 border-primary-white border-dashed rounded-2xl">Weather App</Link>
        </section>
    )
}

export default PortfolioProjectCard