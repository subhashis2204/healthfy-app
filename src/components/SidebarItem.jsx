import { Link } from "react-router-dom"

function SidebarItem({ title, styleItem, link, icon }) {
  return (
    <Link to={link} className={styleItem}>
      {icon}
      {title}
    </Link>
  )
}

export default SidebarItem
