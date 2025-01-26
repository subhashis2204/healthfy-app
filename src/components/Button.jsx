import { ToastContainer, toast, Bounce } from "react-toastify"

function CustomButton({ editing, setEditing, text, customStyle }) {
  const toastParams = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: false,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "light",
    transition: Bounce,
  }

  const notify = () => toast.success("Data Saved Successfully!")

  const handleClick = () => {
    if (text === "Edit") {
      setEditing(true)
    } else if (text === "Save") {
      setEditing(false)
      notify()
    }
  }
  const styles = `bg-blue-500 text-white px-6 py-2 rounded-md ${customStyle}`

  return (
    <>
      <button className={styles} onClick={handleClick}>
        {text}
      </button>
      {text === "Save" && <ToastContainer {...toastParams} />}
    </>
  )
}

export default CustomButton
