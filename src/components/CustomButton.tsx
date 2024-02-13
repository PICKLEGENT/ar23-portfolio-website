import { CustomButtonProps } from "../types"

const CustomButton = ({ title }: CustomButtonProps) => {
    return (
        <button className="p-4 uppercase text-center text-primary-white tracking-widest text-5xl">{title}</button>
    )
}

export default CustomButton