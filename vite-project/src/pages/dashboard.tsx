
import { Button } from "../components/Button"
import { PlusIcon } from "../icons/plusicon"
import { ShareIcon } from "../icons/shareIcon"
import { Card } from "../components/Card"
import { CreateContentModal } from "../components/CreateContentModel"
import { useState } from "react"
import { SideBar } from "../components/SideBar"

export default function Dashboard(){
  const [modalOpen,setModalOpen] = useState(false)


  return <div>
    <SideBar/>
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
   
   <CreateContentModal open = {modalOpen} onClose = {() =>{
     setModalOpen(false)
   }}/>
   <div className="flex justify-end gap-4">
     <Button onClick = {()=>{
       setModalOpen(true)
     }} startIcon = {<ShareIcon/>}variant = "secondary" text = "Share Brain" size = "sm"/>
     <Button startIcon= {<PlusIcon/>}variant = "primary" text = "Add Content" size = "lg"/>
   </div>
   <div className="flex gap-2">
   <Card type = "twitter" title = "Motivation" link = "https://twitter.com/DhravyaShah/status/1880840165889065348"/>
   <Card type = "youtube" title = "Binge" link = "https://www.youtube.com/watch?v=3QpdU9LS540"/>
   </div>

   

 </div>
  </div>
}