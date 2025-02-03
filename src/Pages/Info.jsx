import { useParams } from "react-router-dom"
import Canvas from "../components/Canvas"
import Image from "../assets/image.jpg"
// import { PieChart } from "@mui/x-charts/PieChart"
import PieArcLabel from "../components/PieChart"
import IngredientsList from "../components/IngredientList"
import response from "../components/response.json"
import { LuAudioLines } from "react-icons/lu"
import IngredientTable from "../components/Table"
import Card from "../components/Card"

function Info() {
  const { id } = useParams()

  return (
    <>
      <Canvas bgColor="bg-orange-100">
        <section className="grid grid-cols-6 py-4">
          <section className="col-span-3 col-start-1">
            <PieArcLabel />
          </section>
          <section className="col-span-3 col-start-4 flex flex-col gap-8">
            <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md max-w-min">Ingredients</h1>
            <IngredientsList ingredients={response.ingredientList} />
          </section>
        </section>
        <section className="flex flex-col gap-8">
          <section className="flex flex-col items-center">
            <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md">Product Analysis</h1>
            <section className="bg-blue-50 p-4 mt-8 rounded-md grid grid-cols-6">
              <section className="col-start-1 col-span-3 flex flex-col gap-4">
                <section className="flex items-center gap-4">
                  <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md max-w-min">Suitability</h1>
                  <span className="bg-red-400 px-3 py-2 rounded-md capitalize text-white">
                    {response.productAnalysis.suitability}
                  </span>
                </section>
                <section className="flex flex-col gap-4 justify-between">
                  <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md max-w-max">Allergic Ingredients</h1>
                  <ul className="list-disc list-inside space-y-2">
                    {response.ingredientList.map((reason) => {
                      return (
                        <>
                          <li>{reason}</li>
                        </>
                      )
                    })}
                  </ul>
                </section>
              </section>
              <section className="col-start-4 col-span-3 flex flex-col gap-4">
                <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md max-w-max">Additives</h1>
                <IngredientTable ingredients={response.additivesSummary} />
              </section>
            </section>
          </section>

          {/* <section className="grid grid-cols-6 gap-4"> */}
          <section className="col-span-3 col-start-1 flex flex-col items-start gap-4">
            <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md">Conclusion</h1>
            <ul className="list-disc list-inside space-y-2">
              {response.productAnalysis.reasons.map((reason) => {
                return (
                  <>
                    <li>{reason}</li>
                  </>
                )
              })}
            </ul>
          </section>
          <section className="flex flex-col gap-4 items-start">
            <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md">Some Healthier Alternatives</h1>

            <section className="gap-4 grid grid-cols-9">
              {response.recommendations.healthierAlternatives.map(
                ({ type, name, suitability, nutritionalBenefits }, id) => {
                  return (
                    <Card
                      key={id}
                      type={type}
                      name={name}
                      sustability={suitability}
                      nutritionalBenefits={nutritionalBenefits}
                    />
                  )
                }
              )}
            </section>
          </section>
          {/* </section> */}
          <section></section>
        </section>
      </Canvas>
    </>
  )

  // return (
  //   <Canvas bgColor="bg-orange-100">
  //     <section className="min-h-[calc(100vh-4rem)] flex flex-col gap-4">
  //       <section className="flex justify-between">
  //         <h1 className="text-xl font-bold capitalize">Nachos Chips</h1>
  //         <button className="text-2xl mr-5 bg-black text-white p-1 rounded-md">
  //           <LuAudioLines />
  //         </button>
  //       </section>
  //       <section className="grid grid-cols-6">
  //         <section className="col-start-1 col-span-2">
  //           <div class="p-5">
  //             <img src={Image} alt="Your Image" class="h-[calc(100vh-1.5rem)] w-full rounded-lg" />
  //           </div>
  //         </section>
  //         <section className="col-start-3 col-span-4 py-5 flex flex-col gap-4">
  //           <PieArcLabel />
  //           <section className="flex flex-col items-start gap-4">
  //             <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md">Ingredients</h1>
  //             <IngredientsList ingredients={response.ingredientList} />
  //           </section>
  //           <section className="flex flex-col items-start gap-4">
  //             <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md">Product Analysis</h1>
  //             <span className="bg-red-500 text-white px-3 py-2 rounded-md">
  //               {" "}
  //               {response.productAnalysis.suitability}
  //             </span>
  //           </section>
  //           <section className="flex flex-col items-start gap-4">
  //             <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md">Reasons</h1>
  //             <ul className="list-disc list-inside space-y-2">
  //               {response.productAnalysis.reasons.map((reason) => {
  //                 return (
  //                   <>
  //                     <li>{reason}</li>
  //                   </>
  //                 )
  //               })}
  //             </ul>
  //           </section>
  //           <section className="flex flex-col items-start gap-4">
  //             <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md">Additives Summary</h1>
  //             <section className="flex flex-wrap gap-2">
  //               {response.additivesSummary.map((additive) => {
  //                 return (
  //                   <section className="flex flex-col gap-4 w-[45%] bg-white p-2 rounded-md">
  //                     <span className="bg-red-500 text-white px-3 py-2 rounded-md">
  //                       {additive.name} - {additive.commonName}
  //                     </span>
  //                     <span>{additive.purpose}</span>
  //                     <span>{additive.safety}</span>
  //                   </section>
  //                 )
  //               })}
  //             </section>
  //           </section>
  //           <section className="">
  //             <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md">Recommendations</h1>
  //           </section>
  //         </section>
  //       </section>
  //     </section>
  //   </Canvas>
  // )
}

export default Info
