import { CustomHeadingProps } from "../types"

const CustomHeading = ({ title }: CustomHeadingProps) => {
    return (
        <h1 className="font-bold text-7xl text-purple-800 dark:text-yellow-400">
            {title}
        </h1>
    )
}

export default CustomHeading