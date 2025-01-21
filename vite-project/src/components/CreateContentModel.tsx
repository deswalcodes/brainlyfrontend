import { CrossIcon } from "../icons/crossIcon";
import { Button } from "./Button";


export function CreateContentModal({open,onClose}){
    

    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed top-o left-0 opacity-90 flex justify-center items-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                        <CrossIcon/>

                        </div>
                        
                        

                    </div>
                    <div>
                        <Input placeholder = {"Title"}/>
                        <Input placeholder = {"Link"}/>


                    </div>
                    <div className="flex justify-center">
                        <Button variant = "primary" text = "Submit" size = "md"></Button>
                    </div>
                </span>

            </div>
        
        </div>}
        


    </div>
}
function Input ({onChange,placeholder} : {onChange : () => void}){
    return <div>
        <input placeholder = {placeholder} type = {"text"} className="px-4 py-2 border rounded m-2" onChange = {onChange}>
        </input>
    </div>
}