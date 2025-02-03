import React from "react"

const IngredientsList = ({ ingredients }) => {
  return (
    <section className="flex h-full flex-wrap items-center gap-2">
      {ingredients.map((ingredient, index) => (
        <span key={index} className="text-md bg-rose-500 px-4 py-2.5 rounded-md text-white">
          {ingredient}
        </span>
      ))}
    </section>
  )
}

export default IngredientsList
