import * as React from "react"
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart"

export default function PieArcLabel({ information, perserving }) {
  const data = {
    data: information?.map((item, index) => ({
      id: index,
      label: item.label,
      value: item.value,
    })),
    valueFormatter: (value) => {
      console.log(value)
      return `${value.data}g`
    },
  }
  const total = data.data.reduce((acc, item) => acc + item.value, 0)

  const colors = [
    "#FAD02E", // Soft Yellow
    "#F28D35", // Soft Orange
    "#F25F5C", // Soft Red
    "#D4E157", // Soft Lime Green
    "#81C784", // Soft Green
    "#64B5F6", // Soft Blue
    "#7986CB", // Soft Purple
    "#A5D6A7", // Soft Mint Green
    "#FFB74D", // Soft Peach
    "#FF8A65", // Soft Coral
  ]
  return (
    <section className="flex flex-col gap-4">
      {/* <section className="flex justify-between items-center">
        <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md">Nutritional Information</h1>
      </section> */}
      <span className="ml-auto text-sm font-bold mr-6 bg-orange-200 px-3 py-2 rounded-md">
        Per Serving : {perserving} gms
      </span>
      <PieChart
        colors={colors}
        series={[
          {
            arcLabel: (item) => {
              const percentage = ((parseFloat(item.value) / total) * 100).toFixed(1) // Ensure value is a number
              return `${percentage}%`
            },
            arcLabelMinAngle: 35,
            arcLabelRadius: "60%",
            data: data.data,
            valueFormatter: data.valueFormatter,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontWeight: "bold",
          },
        }}
        {...size}
      />
    </section>
  )
}

const size = {
  height: 300,
  width: 650,
}
