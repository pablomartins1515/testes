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
                    <Route path="/comofunciona/" element={<ComoFunciona />} />                 
                    <Route path="/blog/" element={<Blog />} />
                    <Route path="/blog/lesson/:slug" element={<Blog />} />           
            </Routes>
    )
}