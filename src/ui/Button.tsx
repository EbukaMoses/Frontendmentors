import { twMerge } from "tailwind-merge"

const Button: any = ({ className, title, icon, event }: any) => {
    const newClass = twMerge("py-2 px-5 rounded-lg flex items-center", className);

    return (
        <button className={newClass} onClick={event}>
            {icon && icon}{title}
        </button>
    )
}

export default Button