import { SmallInfoProps } from "../types"

const SmallInfo = ({ title, text }: SmallInfoProps) => {
    return (
        <div>
            <h2 className="font-bold text-3xl text-purple-800 dark:text-yellow-400">
                {title}
            </h2>
            <p className="mt-5 text-2xl text-zinc-900 dark:text-neutral-100">
                {text}
            </p>
        </div>
    )
}

export default SmallInfo