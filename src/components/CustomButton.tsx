import { CustomButtonProps } from "../types"

const CustomButton = ({ title, href }: CustomButtonProps) => {
    return (
        <div className="flex">
            <a href={href} className="p-4 text-center font-light text-3xl text-primary-white tracking-wider border-2 border-primary-white border-dashed rounded-xl" >{title}</ a>
        </div>
    )
}

export default CustomButton