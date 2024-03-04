import { CustomInputProps } from "../types"

const CustomInput = ({ label, type, name, placeholder, autocomplete }: CustomInputProps) => {
    return (
        <div className="text-3xl text-primary-white">
            <label htmlFor={name + '_contact-input'} className="block mb-25">{label}</label>
            <input type={type} name={name} id={name + '_contact-input'} placeholder={placeholder} autoComplete={autocomplete} className="block w-800 bg-primary-black placeholder:text-primary-grey" />
        </div>
    )
}

export default CustomInput