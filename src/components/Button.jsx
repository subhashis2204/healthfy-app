import { ToastContainer, Bounce } from "react-toastify"

function CustomButton({ editing, handleClick, text, customStyle }) {
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
  const styles = `bg-blue-500 text-white px-6 py-2 rounded-md ${customStyle}`
  console.log(handleClick)
  return (
    <>
      <button className={styles} onClick={() => handleClick(text)}>
        {text}
      </button>
      {text === "Save" && <ToastContainer {...toastParams} />}
    </>
  )
}

export default CustomButton
