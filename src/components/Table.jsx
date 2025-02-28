// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ]

import React from "react"
import IngredientRow from "./TableRow" // Adjust the path if necessary

function IngredientTable({ ingredients }) {
  console.log(ingredients)
  console.log("hello")
  return (
    <div className="relative overflow-x-auto text-[1rem] sm:rounded-md">
      <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-5">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Common Name
            </th>
            <th scope="col" className="px-6 py-3">
              Purpose
            </th>
            <th scope="col" className="px-6 py-3">
              Safety
            </th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <IngredientRow key={index} ingredient={ingredient} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default IngredientTable
