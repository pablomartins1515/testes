import { List } from "phosphor-react"
import Logo from "./Logo"
import { Blog } from "../pages/Blog"
import { ComoFunciona } from "../pages/ComoFunciona"



export function Header () {
    return (
        <header className="  w-full py-3 grid grid-flow-col bg-zinc-100 bg-opacity-50 " >
            <div className=" px-6 row-start-1 row-span-1" >
                <Logo />
                
            </div>
            
            
            <div className=" px-4 py-3 row-start-1 row-span-1 itens-center ">
                <a href="/Blog">
                    <div className=" text-gray-600 font-semibold w-full flex items-center justify-center  boder-b boder-gray-60 hover:text-blue-900 hover:underline">
                    Blog 
                    </div>
                </a>                
                <link />
            </div>

            <div className=" px-7 flex items-center row-end-2 row-span-2 flex-row-reverse">
                <List size={42}/>
            </div>
        
         </header>  
    )        
}





//<header className="w-full py-3 flex items-center justify-center bg-zinc-100 boder-b boder-gray-600 " >
