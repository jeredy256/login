import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import  Login  from "../Pages/Login"
import Registre  from "../Pages/Registre"
import  Home  from "../Pages/Home"
import Erro404 from "../Pages/Erro404"

export const Rotas = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registre" element={<Registre />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Erro404 />} />
            </Routes>
        </Router>
    )
}