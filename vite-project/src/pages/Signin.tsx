import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { BACKEND_URL } from "./config"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export function Signin(){
    const usernameref = useRef<HTMLInputElement>(null)
    const passwordref = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    async function signin(){
        const username = usernameref.current?.value;
        const password = passwordref.current?.value;
        const response = await axios.post(BACKEND_URL + "/api/v1/signin",{
            username : username,
            password :password
        })
        const jwt = response.data.token;
        localStorage.setItem("token",jwt)
        navigate("/dashboard")



    }




    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className = "bg-white rounded-xl border min-w-48 p-8">
            <Input reference = {usernameref}placeholder ="Username"/>
            <Input reference = {passwordref}placeholder ="Password"/>
            <div className="flex justify-center pt-4 w-full">
            <Button onClick = {signin} variant = "primary" text = "Sign" size = "md"/>
            </div>


        </div>

    </div>

}