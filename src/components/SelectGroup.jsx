function SelectGroup({ label, capitalize, customStyle, conditions, editing }) {
  const tagStyles = `text-sm font-bold px-3 py-2 rounded-md hover:bg-red-400 hover:text-white ${
    capitalize ? "capitalize" : ""
  } ${customStyle}`

  const bgColor = editing ? "bg-white" : "bg-blue-50" // match the bg color based on editing or not editing
  const contaierStyles = `flex gap-2 p-1.5 rounded-md ${bgColor}`

  return (
    <>
      <section className="flex items-center justify-between gap-1.5">
        <label className="text-md font-bold pl-1 capitalize" htmlFor="">
          {label}
        </label>
        <section className={contaierStyles}>
          {conditions.map(({ key, condition, state, setState }) => (
            <button
              id={key}
              className={`${tagStyles} ${state ? "bg-red-400 text-white" : "text-gray-600"}`}
              onClick={(e) => editing && setState(!state)}
            >
              {condition}
            </button>
          ))}
        </section>
      </section>
    </>
  )
}

export default SelectGroup
