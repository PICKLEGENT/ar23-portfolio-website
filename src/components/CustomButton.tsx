import { CustomButtonProps } from "../types"

const CustomButton = ({ title, href }: CustomButtonProps) => {
    return (
        <div className="flex">
            <a href={href} className="btn-click p-25 text-center font-light text-4xl text-primary-white tracking-wider border border-primary-white rounded-xl" >{title}</ a>
        </div>
    )
}

export default CustomButton