import { Header } from "../componentes/Header"

import { Sidebar } from "../componentes/Sidebar"
import { Video } from "../componentes/Video"
import { useParams } from "react-router-dom"
import { ScrollToTop } from "../componentes/ScrollToTop"


export function Blog() {
   
    const { slug } = useParams<{ slug:string }>()

      return (
        
        <div>            
            <Header />

            <main className="flex flex-col items-start min-w-full">
               
                    <div className=" px-32 flex-1 flex justify-center w-full">
                        {slug ?
                                <Video lessonSlug={slug} /> : <div ></div>
                        } 

                    </div>

                    <div className="  flex-1 flex justify-center w-full ">                    
                    <Sidebar />
                    <ScrollToTop/>
                    
                    </div> 

                
                
                          
            </main>       
        </div>        
    )
}