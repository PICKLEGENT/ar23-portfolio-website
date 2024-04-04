import { CustomInputProps } from "../types"

const CustomInput = ({ label, type, name, placeholder, autocomplete }: CustomInputProps) => {
    return (
        <>
            <label htmlFor={name} className="block text-2xl text-purple-800 dark:text-yellow-400">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                autoComplete={autocomplete}
                className="mt-5 text-xl text-zinc-900 dark:text-neutral-100 bg-neutral-100 dark:bg-zinc-900"
            />
        </>
    )
}

export default CustomInput