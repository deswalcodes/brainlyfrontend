import { ReactElement } from "react"

export function SideBarItem({text,icon}:{
    text : string,
    icon : ReactElement
}){

    return <div className="flex text-gray-700 pb-2 py-2 cursor-pointer hover:bg-slate-200 rounded max-w-48 pl-4">
        <div className="pr-2">
            {icon}
        </div>
        <div className="pr-2">
            {text}
        </div>

    </div>
}