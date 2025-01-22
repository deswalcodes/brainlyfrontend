import { CrossIcon } from "../icons/crossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { useRef,useState } from "react";
import axios from "axios";
enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}


export  function CreateContentModal({open,onClose}){
    const titleRef = useRef<HTMLInputElement>()
    const linkRef = useRef<HTMLInputElement>()
    const [type,setType] = useState(ContentType.Youtube)
    async function  addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        await axios.post('${BACKEND_URL}/api/v1/content',{
            link,
            title,
            type

        },{
            headers : {
                "Authorization" : localStorage.getItem("token")
            }

        })

        


    }
    

    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed top-o left-0 opacity-90 flex justify-center items-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                        <CrossIcon/>

                        </div>
                        
                        

                    </div>
                    <div className="pb-2">
                        <Input reference = {titleRef}placeholder = {"Title"}/>
                        <Input reference = {linkRef}placeholder = {"Link"}/>


                    </div>
                    <div className="flex pb-3" >
                        <Button onClick = {() => {
                            setType(ContentType.Youtube)
                        }}text = "Youtube" variant= {type === ContentType.Youtube ? "primary" : "secondary"} size = "md"></Button>
                        <Button onClick = {()=>{
                            setType(ContentType.Twitter)
                        }}text = "Twitter" variant= {type === ContentType.Twitter ? "primary" : "secondary"} size = "md"></Button>

                    </div>
                    <div className="flex justify-center">
                        <Button onClick = {addContent} variant = "primary" text = "Submit" size = "md"></Button>
                    </div>
                </span>

            </div>
        
        </div>}
        


    </div>
}
