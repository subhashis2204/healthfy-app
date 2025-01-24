function CustomButton({ editing, setEditing, text, customStyle }) {
  const handleClick = () => {
    if (text === "Edit") {
      setEditing(true)
    } else if (text === "Save") {
      setEditing(false)
    }
    console.log("New editing state:", text === "Edit")
  }
  const styles = `bg-blue-500 text-white px-6 py-2 rounded-md ${customStyle}`

  return (
    <button className={styles} onClick={handleClick}>
      {text}
    </button>
  )
}

export default CustomButton
