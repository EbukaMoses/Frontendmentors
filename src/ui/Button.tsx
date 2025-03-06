import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge"

const Button: any = ({ className, title, icon, event, path }: any) => {
    const newClass = twMerge("py-2 px-5 rounded-lg flex items-center", className);

    return (
        <>
            {path ? (
                <Link to={path} className={newClass}>
                    {title}
                </Link>
            ) : (
                <button className={newClass} onClick={event}>
                    {icon && icon}{title}
                </button >
            )}
        </>
    )
}

export default Button