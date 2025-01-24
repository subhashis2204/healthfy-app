import "./App.css"
import SidebarMenu from "./components/SidebarMenu"
import "@fontsource/poppins" // Defaults to weight 400
import "@fontsource/poppins/400.css" // Specify weight
import "@fontsource/poppins/400-italic.css" // Specify weight and style
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProfilePage from "./Pages/ProfilePage"
import ImageUpload from "./Pages/ImageUpload"
import Information from "./Pages/Info"

function App() {
  return (
    <>
      <BrowserRouter>
        <section className="flex">
          <section className="w-[20rem]">
            <SidebarMenu />
          </section>
          <section className="w-full p-3">
            <Routes>
              <Route path="/" element={<ProfilePage />} />
              <Route path="/image-upload" element={<ImageUpload />} />
              <Route path="/info/:id" element={<Information />} />
            </Routes>
          </section>
        </section>
      </BrowserRouter>
    </>
  )
}

export default App
