import Canvas from "../components/Canvas"
import Error from "../assets/error.svg"

function ErrorPage() {
  return (
    <>
      <Canvas bgColor="bg-orange-100 h-[86vh] items-center justify-center">
        <img src={Error} alt="" className="w-40" />
        <p className="text-md font-bold">Please upload an image of ingredient list</p>
      </Canvas>
    </>
  )
}

export default ErrorPage
