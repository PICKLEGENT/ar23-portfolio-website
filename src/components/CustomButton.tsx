import { CustomButtonProps } from "../types"

const CustomButton = ({ type, title }: CustomButtonProps) => {
    return (
        <button type={type} className="px-5 py-2.5 text-center font-semibold text-2xl text-zinc-900 dark:text-neutral-100 border border-purple-800 dark:border-yellow-400 rounded-full hover:text-neutral-100 hover:dark:text-zinc-900 hover:bg-purple-800 hover:dark:bg-yellow-400 duration-300 ease-in active:scale-[0.94]">
            {title}
        </button>
    )
}

export default CustomButton