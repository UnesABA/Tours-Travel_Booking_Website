import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BrowserRouter } from "react-router-dom"
import Layout from "./components/layout/Layout"
import "./index.css"
import { AuthContextProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
