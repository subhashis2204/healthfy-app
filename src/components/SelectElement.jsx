import { TbEdit } from "react-icons/tb"
import { useState } from "react"

function SelectElement({ label, valuemap, selectedValue, setSelectedValue, customStyle, capitalize, editing }) {
  const styles = `p-2 rounded-md border-[3px] border-blue-200 focus:border-blue-400 focus:outline-none disabled:cursor-not-allowed ${customStyle} ${
    capitalize ? "capitalize" : ""
  }`

  return (
    <>
      {console.log("selectedValue", editing)}
      <section className="flex flex-col gap-1">
        <label className="text-md font-bold pl-1 capitalize" htmlFor="">
          {label}
        </label>
        <section className="flex items-end gap-1">
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            className={styles}
            disabled={!editing}
          >
            {valuemap.map((item) => {
              return (
                <option key={item.id} value={item.value}>
                  {item.label}
                </option>
              )
            })}
          </select>
        </section>
      </section>
    </>
  )
}

export default SelectElement
