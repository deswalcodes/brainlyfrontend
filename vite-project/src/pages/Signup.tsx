import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { BACKEND_URL } from "./config"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export function Signup(){
    const usernameref = useRef<HTMLInputElement>()
    const passwordref = useRef<HTMLInputElement>()
    const navigate = useNavigate()
    async function signup(){
        const username = usernameref.current?.value;
        const password = passwordref.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup",{
            username : username,
            password :password
        })
        navigate("/signin")
        alert("signup done")
     



    }




    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className = "bg-white rounded-xl border min-w-48 p-8">
            <Input reference = {usernameref}placeholder ="Username"/>
            <Input reference = {passwordref}placeholder ="Password"/>
            <div className="flex justify-center pt-4 w-full">
            <Button onClick = {signup} variant = "primary" text = "SignUp" size = "md"/>
            </div>


        </div>

    </div>

}