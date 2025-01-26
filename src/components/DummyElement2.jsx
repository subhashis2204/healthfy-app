import { MdAccountCircle } from "react-icons/md"
import { useState } from "react"
import InputElement from "../components/InputElement"
import Header from "../components/Header"
import SelectElement from "../components/SelectElement"
import CustomButton from "../components/Button"
import TagsInputElement from "../components/TagInput"
// import "react-tagsinput/react-tagsinput.css"

function ProfilePage() {
  const [username, setUsername] = useState("subhashis paul")
  const [email, setEmail] = useState("subhashispaul2204@gmail.com")
  const [age, setAge] = useState(23)
  const [gender, setGender] = useState("")
  const [diet, setDiet] = useState("")
  const [editing, setEditing] = useState(false)
  const [weight, setWeight] = useState(58)
  const [height, setHeight] = useState("5' 8\"")
  const [allergic, setAllergic] = useState([])

  const gendermap = [
    { id: 1, value: "male", label: "male" },
    { id: 2, value: "female", label: "female" },
    { id: 3, value: "na", label: "prefer not to say" },
  ]
  const dietmap = [
    { id: 1, value: "veg", label: "vegetarian" },
    { id: 2, value: "nveg", label: "non vegetarian" },
    { id: 3, value: "vegan", label: "vegan" },
  ]

  const handleSetAllergic = (tags) => {
    setAllergic(tags)
  }

  return (
    <section className="w-full h-full rounded-lg bg-blue-100 flex flex-col gap-8 p-5">
      <section className="flex flex-col items-center">
        <MdAccountCircle className="text-8xl text-blue-800" />
        <p className="capitalize text-xl font-bold">Subhashis Paul</p>
        <section className="flex gap-2 absolute right-0 mr-5 top-0 mt-5">
          <CustomButton
            editing={editing}
            setEditing={setEditing}
            text="Edit"
            customStyle="bg-red-300 text-black border-2 border-red-500"
          />
          <CustomButton
            editing={editing}
            setEditing={setEditing}
            text="Save"
            customStyle="bg-blue-300 text-black border-2 border-blue-500"
          />
        </section>
      </section>
      <section className="flex flex-col gap-4">
        <section className="grid grid-cols-2 w-full gap-4">
          <section className="w-full bg-blue-200 rounded-md p-5 flex flex-col gap-6 col-start-1 col-span-1">
            <Header title="Personal Information" />
            <section className="w-full  flex flex-col gap-8">
              <section className="flex justify-between gap-4">
                <InputElement
                  label="Firstname"
                  value={username}
                  handleValueChange={setUsername}
                  capitalize
                  editing={editing}
                />
                <InputElement
                  label="Lastname"
                  value={username}
                  handleValueChange={setUsername}
                  capitalize
                  editing={editing}
                />
              </section>
              <InputElement
                label="email address"
                value={email}
                handleValueChange={setEmail}
                customStyle="w-full"
                editing={editing}
              />
            </section>
            <section className="flex justify-between flex-wrap">
              <SelectElement
                label="gender"
                valuemap={gendermap}
                selectedValue={gender}
                setSelectedValue={setGender}
                customStyle="min-w-[14rem]"
                editing={editing}
              />
              <InputElement label="age" value={age} handleValueChange={setAge} type="number" editing={editing} />
            </section>
            <SelectElement
              label="diet preference"
              valuemap={dietmap}
              selectedValue={diet}
              setSelectedValue={setDiet}
              customStyle="w-full"
              editing={editing}
            />
          </section>

          <section className="w-full bg-blue-200 rounded-md p-5 flex flex-col gap-6 col-start-2 col-span-1">
            <Header title="Medical Information" />
            <section className="flex justify-between flex-wrap">
              <InputElement label="height" value={height} handleValueChange={setHeight} type="text" editing={editing} />
              <InputElement
                label="weight(in Kg)"
                value={weight}
                handleValueChange={setWeight}
                type="number"
                editing={editing}
              />
            </section>
            <TagsInputElement
              value={allergic}
              label="allergic items"
              onChange={handleSetAllergic}
              customStyle="w-full"
              editing={editing}
            />
          </section>
        </section>
      </section>
    </section>
  )
}

export default ProfilePage
