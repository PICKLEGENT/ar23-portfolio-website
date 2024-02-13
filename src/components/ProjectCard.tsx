import { Link } from "react-router-dom"
import { ProjectCardProps } from "../types"

const ProjectCard = ({ projectName, projectRole }: ProjectCardProps) => {
    return (
        <Link to='/project' className="flex justify-between items-center mb-50 p-100 border-b border-primary-white text-primary-white">
            <p className="text-8xl">{projectName}</p>
            <p className="text-3xl tracking-wider">{projectRole}</p>
        </Link>
    )
}

export default ProjectCard