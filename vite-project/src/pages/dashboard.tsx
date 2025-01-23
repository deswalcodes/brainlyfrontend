
import { Button } from "../components/Button"
import { PlusIcon } from "../icons/plusicon"
import { ShareIcon } from "../icons/shareIcon"
import { Card } from "../components/Card"
import { CreateContentModal } from "../components/CreateContentModel"
import { useState } from "react"
import { SideBar } from "../components/SideBar"
import { useContent } from "../hooks/useContent"
import { BACKEND_URL } from "./config"
import axios from "axios"

export default function Dashboard(){
  const [modalOpen,setModalOpen] = useState(false)
  const contents = useContent()


  return <div>
    <SideBar/>
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
   
   <CreateContentModal open = {modalOpen} onClose = {() =>{
     setModalOpen(false)
   }}/>
   <div className="flex justify-end gap-4">
     <Button onClick = {async()=>{
      const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
        share : true

      },{
        headers : {
          "Authorization" : localStorage.getItem("token")
        }
      })
      const shareUrl = `http://localhost:5175/${response.data.hash}`
      alert(shareUrl)
       
     }} startIcon = {<ShareIcon/>}variant = "secondary" text = "Share Brain" size = "sm"/>
     <Button onClick = {()=>{
      setModalOpen(true)
     }}startIcon= {<PlusIcon/>}variant = "primary" text = "Add Content" size = "lg"/>
   </div>
   <div className="flex gap-2 flex-wrap">
    {contents.map(({type,title,link}) => 
      <Card type = {type} title = {title} link = {link}/>

    )}
   
   
   </div>

   

 </div>
  </div>
}