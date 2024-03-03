import { CustomButtonProps } from "../types"

const CustomHeading = ({ title }: CustomButtonProps) => {
    return (
        <h1 className="text-4xl text-primary-black mb-25">{title}</h1>
    )
}

export default CustomHeading