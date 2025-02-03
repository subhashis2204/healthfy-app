import React from "react"

const IngredientRow = ({ ingredient, index }) => {
  return (
    <tr
      key={index}
      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
    >
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{ingredient.name}</td>
      <td className="px-6 py-4">{ingredient.commonName}</td>
      <td className="px-6 py-4">{ingredient.purpose}</td>
      <td className="px-6 py-4">{ingredient.safety}</td>
    </tr>
  )
}

export default IngredientRow
