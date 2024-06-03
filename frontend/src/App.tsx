import { Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
import LoginPage from "./pages/login/Login"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
    return(
        <ShoppingCartProvider>
            <Navbar />
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/cadastro-item" element={<Home />} />
                </Routes>
            </Container>
        </ShoppingCartProvider>
    )
}

export default App