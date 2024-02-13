import { CustomHeadingProps } from "../types"

const CustomHeading = ({ title }: CustomHeadingProps) => {
    return (
        <p className="my-50 text-8xl font-bold text-primary-white tracking-widest">{title}</p>
    )
}

export default CustomHeading