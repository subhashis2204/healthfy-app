import "./App.css"
import SidebarMenu from "./components/SidebarMenu"
import "@fontsource/poppins" // Defaults to weight 400
import "@fontsource/poppins/400.css" // Specify weight
import "@fontsource/poppins/400-italic.css" // Specify weight and style
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProfilePage from "./Pages/ProfilePage"
import ImageUpload from "./Pages/ImageUpload"
import Information from "./Pages/Info"
import Navbar from "./components/Navbar"
import { useState } from "react"

function App() {
  const [response, setResponse] = useState(null)
  return (
    <>
      <BrowserRouter>
        {/* <section className="w-[20rem]">
            <SidebarMenu />
          </section> */}
        <section className="w-full p-3">
          <Navbar />
          <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/image-upload" element={<ImageUpload response={response} setResponse={setResponse} />} />
            <Route path="/info" element={<Information responsedata={response} />} />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  )
}

export default App
