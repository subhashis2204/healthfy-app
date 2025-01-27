import SidebarItem from "./SidebarItem"
import { MdAccountCircle } from "react-icons/md"
import { MdOutlineDriveFolderUpload } from "react-icons/md"
import { Link } from "react-router-dom"
const subMenuTitle = [
  {
    id: 1,
    title: "Hello this is a long title",
  },
  {
    id: 2,
    title: "This is a great title. I am happy to see you",
  },
]

function textTruncate(sentence) {
  const words = sentence.split(" ")
  let modifiedSentence = ""
  let size = 0
  for (let word of words) {
    if (size + word.length > 35) break

    size = size + word.length + 1
    modifiedSentence = modifiedSentence + word + " "
  }
  size = size - 1
  modifiedSentence = modifiedSentence.trim()

  return modifiedSentence.length == sentence.length ? modifiedSentence.trim() : modifiedSentence.trim() + " ..."
}

function SidebarMenu() {
  return (
    <>
      <section className="w-[20rem] bg-black min-h-[100vh]">
        <section className="flex flex-col px-2 py-3 gap-3">
          <SidebarItem
            title="My Profile"
            styleItem="text-white px-4 py-3 rounded-md hover:bg-slate-500 flex gap-3 items-center"
            link="/"
            icon={<MdAccountCircle className="text-3xl" />}
          />
          <SidebarItem
            title="Image Upload"
            styleItem="text-white px-4 py-3 rounded-md hover:bg-slate-500 flex gap-3 items-center"
            link="/image-upload"
            icon={<MdOutlineDriveFolderUpload className="text-3xl" />}
          />
        </section>
        <section className="text-white py-1">
          <div className="flex flex-col gap-3 bg-slate-00 rounded-md py-2 px-2">
            {subMenuTitle.map((item) => {
              const title = textTruncate(item.title)
              return (
                <Link
                  to={"/info/" + item.id}
                  key={item.id}
                  className="px-4 py-3 rounded-md bg-zinc-700 hover:bg-zinc-500"
                >
                  {title}
                </Link>
              )
            })}
          </div>
        </section>
      </section>
    </>
  )
}

export default SidebarMenu
