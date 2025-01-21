import { Logo } from "../icons/logo";
import { Twitter } from "../icons/twitter";
import { YtIcon } from "../icons/Yticon";
import { SideBarItem } from "./SideBarItems";

export function SideBar(){

    return <div className = "h-screen bg-white border-r w-72  absolute left-0 top-0 pl-4">
        <div className="flex text-2xl pt-4  text-purple-600">
            <div className="pr-4 pt-1">
            <Logo/>
            </div>
            Brainly
        </div>
        <div className="pt-4 pl-4">
            <SideBarItem text ="Twitter" icon = {<Twitter/>}/>
            <SideBarItem text ="Youtube" icon = {<YtIcon/>}/>

        </div>

    </div>
}