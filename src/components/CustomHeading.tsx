import { CustomHeadingProps } from "../types"

const CustomHeading = ({ title }: CustomHeadingProps) => {
    return (
        <span className="my-50 text-8xl font-bold text-primary-white tracking-widest capitalize">{title}</span>
    )
}

export default CustomHeading