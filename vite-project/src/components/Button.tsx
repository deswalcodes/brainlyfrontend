import { ReactElement } from "react";

interface ButtonProps {
    variant : "primary" | "secondary";
    size : "sm" | "md" | "lg";
    text : String;
    startIcon? : ReactElement;
    endIcon? : ReactElement;
    onClick? : () => void;
 
}
const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "px-6 py-4"
}
const variantStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-300 text-purple-600"
}
const defaultStyles = "rounded-md px-4 py-2 flex font-normal items-center"




export const Button = ({variant,size,text,startIcon,endIcon,onClick}: ButtonProps) => {
    return <button onClick ={onClick} className={`${variantStyles[variant]} ${defaultStyles} ${sizeStyles[size]} v`}>

        
        {startIcon ? <div className="pr-2">{startIcon}</div>: null}
        {text}

        
        

    </button>

}