import { useState } from "react"
import { TbEdit } from "react-icons/tb"

function InputElement({ label, type, value, handleValueChange, customStyle, capitalize, editing }) {
  const styles = `p-2 rounded-md border-[3px] border-blue-200 focus:border-blue-400 focus:outline-none disabled:bg-sky-50 disabled:text-gray-700 disabled:cursor-not-allowed ${customStyle} ${
    capitalize ? "capitalize" : ""
  }`

  return (
    <>
      <section className="flex flex-col gap-1">
        <label className="text-md font-bold pl-1 capitalize" htmlFor="">
          {label}
        </label>
        <section className="flex items-end gap-1">
          <input
            className={styles}
            type={type}
            value={value}
            onChange={(e) => handleValueChange(e.target.value)}
            disabled={!editing}
          />
        </section>
      </section>
    </>
  )
}

export default InputElement
