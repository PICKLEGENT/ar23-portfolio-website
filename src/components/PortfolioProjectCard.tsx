import { Link } from "react-router-dom"
import { PortfolioProjectCardProps } from "../types"

const PortfolioProjectCard = ({ title, preview }: PortfolioProjectCardProps) => {
    return (
        <section>
            <Link to='/project' className="flex justify-center items-center p-100 text-2xl tracking-wider text-primary-black border-2 border-primary-black border-dashed rounded-2xl shadow-drop"
                style={{
                    backgroundImage: `url(${preview})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                <span className="p-2.5 text-center border-2 border-primary-black border-dashed rounded-2xl bg-primary-white shadow-drop">{title}</span>
            </Link>
        </section>
    )
}

export default PortfolioProjectCard