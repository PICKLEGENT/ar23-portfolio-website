import { CustomInputProps } from "../types"

const CustomInput = ({ type, name, autocomplete, placeholder }: CustomInputProps) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete={autocomplete}
            className="w-600 mb-50 p-2 tracking-wider bg-transparent text-primary-grey border-b border-primary-grey focus:text-primary-white focus:border-primary-white duration-300 ease-in-out"
        />
    )
}

export default CustomInput