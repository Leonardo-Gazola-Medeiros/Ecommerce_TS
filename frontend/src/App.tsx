import { Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import Cadastro_User from "./pages/cadastro/Cadastro_User"
import Cadastro_Item from "./pages/cadastro/Cadastro_Item"
import Home from "./pages/home/Home"
import LoginPage from "./pages/login/Login"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
    return(
        <ShoppingCartProvider>
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<Cadastro_User />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/cadastro-item" element={<Cadastro_Item />} />
                </Routes>
            </Container>
        </ShoppingCartProvider>
    )
}

export default App