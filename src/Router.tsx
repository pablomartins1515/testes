import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Event } from './pages/Event';
import { Politica } from './pages/Politica';
import { ComoFunciona } from "./pages/ComoFunciona";  
import { Blog } from "./pages/Blog";

export function Router() {
    return (
            <Routes>
                <Route path="/" element={<Event />} />
                <Route path="/politica/" element={<Politica />} /> 
                <Route path="/ComoFunciona/" element={<ComoFunciona />} />                 
                <Route path="/Blog/" element={<Blog />} />           
          
            </Routes>
    )
}