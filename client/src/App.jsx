import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BrowserRouter } from "react-router-dom"
import Layout from "./components/layout/Layout"
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  ) 
}

export default App
