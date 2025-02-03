import React from "react"
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
  const linkStyleActive = "bg-gray-500 px-3 py-1.5 rounded-md"
  const linkStyleInactive = "hover:bg-gray-400 px-3 py-1.5 rounded-md"

  return (
    <nav className="px-5 py-4 bg-black rounded-t-md flex gap-8">
      <section className="grow"></section>
      <section className="grow text-white flex gap-28 items-center">
        <NavLink to="/image-upload" className={({ isActive }) => (isActive ? linkStyleActive : linkStyleInactive)}>
          Image Upload
        </NavLink>
        <NavLink to="/info" className={({ isActive }) => (isActive ? linkStyleActive : linkStyleInactive)}>
          Analysis Report
        </NavLink>
      </section>
      <Link
        to="/"
        className="bg-gray-400 rounded-full h-9 flex items-center justify-center text-white text-lg aspect-square"
      >
        S
      </Link>
    </nav>
  )
}

export default Navbar
