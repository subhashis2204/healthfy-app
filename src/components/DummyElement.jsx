import TagsInput from "react-tagsinput"

function TagsInputElement2({ type = "text", label, value, onChange, customStyle, capitalize, editing }) {
  const bgColor = editing ? "bg-white" : "bg-blue-50" // match the bg color based on editing or not editing
  const paddingBottom = editing || value.length === 0 ? "pb-2" : "" // Add padding bottom if editing or no tags are there to make it uniform
  const mainStyle = `px-2 pt-2 rounded-md border-[3px] border-blue-200 focus:border-blue-400 focus:outline-none disabled:bg-sky-50 disabled:text-gray-700 disabled:cursor-not-allowed placeholder-gray-400 ${bgColor}`
  const inputStyles = `flex-grow border-none outline-none focus:ring-0 placeholder-gray-400 ${paddingBottom} ${bgColor}`
  const tagStyles = "bg-rose-400 hover:bg-rose-700 text-white inline-flex items-center px-2 py-1 rounded-md mb-2 mr-2"
  const removeButtonStyles = "ml-1 text-white focus:outline-none"
  const inputPlaceholder = editing || value.size === 0 ? "Add an Item . . ." : ""
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.trim()) {
      e.preventDefault()
      addTag(value.trim())
    }
  }
  const inputVisibleFlag = editing || value.length === 0

  return (
    <>
      <section className="flex flex-col gap-1">
        <label className="text-md font-bold pl-1 capitalize" htmlFor="">
          {label}
        </label>
        <section className="flex items-end gap-1">
          <TagsInput
            value={value}
            onChange={onChange}
            className={mainStyle}
            renderTag={({ tag, key, onRemove, ...others }) => (
              <span key={key} {...others}>
                {tag}
                <button type="button" onClick={() => editing && onRemove(key)} className={removeButtonStyles}>
                  &times;
                </button>
              </span>
            )}
            renderInput={({ onChange, value, addTag, ...others }) => {
              return (
                inputVisibleFlag && (
                  <input
                    type={type}
                    onChange={onChange}
                    value={value}
                    disabled={!editing}
                    onKeyDown={handleKeyDown}
                    {...others}
                  />
                )
              )
            }}
            inputProps={{
              className: inputStyles,
              placeholder: inputPlaceholder,
            }}
            tagProps={{
              className: tagStyles,
            }}
          />
        </section>
      </section>
    </>
  )
}

export default TagsInputElement2
