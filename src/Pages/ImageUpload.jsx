import axios from "axios"
import upload from "../assets/upload.svg"
import { useState } from "react"
import Canvas from "../components/Canvas"
import FileNameContainer from "../components/FileNameContainer"

function UploadPage({ setAllDocuments }) {
  const [files, setFiles] = useState([])
  const [title, setTitle] = useState("")
  const [progress, setProgress] = useState({ started: false, pc: 0 })
  const [msg, setMsg] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!files || files.length === 0) return

    const fd = new FormData()

    fd.append("title", title)

    for (let i = 0; i < files.length; i++) {
      fd.append("files", files[i])
    }

    setProgress((prevstate) => {
      return { ...prevstate, started: true }
    })
    setMsg("Uploading...")

    setFiles([])
    setTitle("")

    axios
      .post("http://localhost:8000/uploads", fd, {
        onUploadProgress: (progressEvent) => {
          setProgress((prevstate) => {
            return { ...prevstate, pc: progressEvent.progress * 100 }
          })
          if (progressEvent.progress === 1) setMsg("Uploaded .. Processing")
        },
      })
      .then((response) => {
        console.log(response.data)

        if (response.data.message === "success") {
          setMsg("Done")
        } else setMsg("Error")

        axios
          .get("http://localhost:8000/")
          .then((response) => {
            setAllDocuments(response.data.message)
          })
          .catch((e) => console.log(e))
      })
      .catch((e) => console.log(e))
  }

  const filesArray = Array.from(files)

  const renderedFiles = filesArray.map((file, key) => {
    const fileName = file.name
    const lastDotIndex = fileName.lastIndexOf(".")
    const name = fileName.substring(0, lastDotIndex)
    const extension = fileName.substring(lastDotIndex + 1)

    return <FileNameContainer key={key} filename={name} extension={extension} />
  })

  return (
    <>
      <Canvas>
        {/* <Heading className="text-center px-2 pb-8 pt-8">Upload Your Image Files</Heading> */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl mx-auto my-3 w-4/5 min-h-[80vh] max-w-[27rem] flex flex-col p-5 gap-4"
        >
          <h1 htmlFor="title" className="text-center capitalize font-bold text-lg">
            Upload the ingredient image
          </h1>
          <input
            id="upload"
            type="file"
            name="files"
            onChange={(e) => setFiles(e.target.files)}
            multiple
            className="hidden"
          />
          <label
            htmlFor="upload"
            className="grow border-2 border-uploadBorder border-opacity-30 border-dashed flex flex-col items-center justify-center rounded-md box-border bg-uploadBg"
          >
            <div className="flex flex-col items-center justify-center gap-4 p-3">
              <img src={upload} alt="" className="w-16" />
              <p className="text-md font-bold">
                drag & drop files or <span className="text-logo underline font-bold">browse</span>
              </p>
              <p className="text-sm text-center text-gray-500">Supported formates: JPG, JPEG, PNG</p>
            </div>
            <section className="w-full flex flex-col gap-2 p-2">{renderedFiles}</section>
          </label>
          <button className="px-2 py-3 w-full bg-black rounded-md text-white font-poppins">Submit</button>

          {progress.started && <progress max="100" value={progress.pc} className="w-full"></progress>}
          <p className="text-center">{msg}</p>
        </form>
      </Canvas>
    </>
  )
}

export default UploadPage
