import { Link } from "react-router-dom"

const PortfolioProjectCard = () => {
    return (
        <section>
            <Link to='/' className="flex justify-center items-center p-100 text-3xl tracking-wider text-primary-black bg-primary-white border-2 border-primary-black border-dashed rounded-2xl shadow-drop">Pet project</Link>
        </section>
    )
}

export default PortfolioProjectCard