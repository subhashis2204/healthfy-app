import { useParams } from "react-router-dom"

function Info() {
  const { id } = useParams()
  return <div>Information {id} </div>
}

export default Info
