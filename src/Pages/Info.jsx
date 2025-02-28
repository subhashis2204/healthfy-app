import Canvas from "../components/Canvas"
import PieArcLabel from "../components/PieChart"
import IngredientsList from "../components/IngredientList"
import IngredientTable from "../components/Table"
import Card from "../components/Card"
import ErrorPage from "./Error"
import { ColorRing, Audio as AudioLoader } from "react-loader-spinner"
import { FaPlay } from "react-icons/fa"
import axios from "axios"
import { useEffect, useState } from "react"

const perserving = 30

function Info({ responsedata }) {
  const [audioUrl, setAudioUrl] = useState(null)
  const [audioInstance, setAudioInstance] = useState(null)
  const [loading, setLoading] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (responsedata) {
      handleClickAudio(responsedata.formatted_data.summary)
    }
  }, [responsedata]) // Only trigger when responsedata changes

  const handleClickAudio = async (speech) => {
    setLoading(true) // Start loading
    try {
      const response = await axios.post("http://localhost:8000/synthesize", { speech }, { responseType: "blob" })
      const url = URL.createObjectURL(response.data)

      setAudioUrl(url)

      setTimeout(() => {
        const newAudio = new Audio(url)
        newAudio.oncanplaythrough = () => console.log("Audio loaded, ready to play.")
        setAudioInstance(newAudio)
        setLoading(false)
      }, 10000) // 1-second delay (adjust as needed)
    } catch (error) {
      console.error("Error synthesizing speech:", error)
    }
  }

  const handleClick = () => {
    if (audioInstance) {
      audioInstance.play().catch((error) => console.error("Error playing audio:", error))
      setPlaying(true)

      audioInstance.onended = () => {
        console.log("Audio has ended.")
        setPlaying(false)
      }
    } else {
      console.error("Audio is not ready yet.")
    }
  }

  if (responsedata === null) return <ErrorPage />

  const {
    productAnalysis,
    ingredientList,
    additivesSummary,
    allergicIngredients,
    recommendations,
    nutritionalBreakdown,
  } = responsedata.formatted_data

  return (
    <Canvas bgColor="bg-orange-100">
      <section className="grid grid-cols-12 absolute">
        <button onClick={handleClick} disabled={loading}>
          {loading ? (
            <ColorRing visible={true} height="45" width="45" ariaLabel="color-ring-loading" colors={["#fffff"]} />
          ) : playing ? (
            <AudioLoader io height="40" width="40" color="#000000" ariaLabel="audio-loading" visible={true} />
          ) : (
            <FaPlay className="text-2xl ml-3 my-2.5" />
          )}
        </button>
      </section>
      <section className="grid grid-cols-6 py-4">
        <section className="col-span-3 col-start-1">
          <PieArcLabel information={nutritionalBreakdown} perserving={perserving} />
        </section>
        <section className="col-span-3 col-start-4 flex flex-col gap-8">
          <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md max-w-min">Ingredients</h1>
          <IngredientsList ingredients={ingredientList} />
        </section>
      </section>
      <section className="flex flex-col gap-8">
        <section className="flex flex-col items-center">
          <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md">Product Analysis</h1>
          <section className="bg-blue-50 w-full p-4 mt-8 rounded-md grid grid-cols-12">
            <section className="col-start-1 col-span-6 flex flex-col gap-4">
              <section className="flex items-center gap-4">
                <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md max-w-min">Suitability</h1>
                <span className="bg-red-400 px-3 py-2 rounded-md capitalize text-white">
                  {productAnalysis.suitability}
                </span>
              </section>
              <section className="flex flex-col gap-4 justify-between">
                <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md max-w-max">Allergic Ingredients</h1>
                <ul className="list-disc list-inside space-y-2">
                  {allergicIngredients.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </section>
            </section>
            <section className="col-start-7 col-span-6 flex flex-col gap-4">
              <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md max-w-max">Additives</h1>
              <IngredientTable ingredients={additivesSummary} />
            </section>
          </section>
        </section>
        <section className="col-span-3 col-start-1 flex flex-col items-start gap-4">
          <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md">Conclusion</h1>
          <ul className="list-disc list-inside space-y-2">
            {productAnalysis.reasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col gap-4 items-start">
          <h1 className="text-xl font-bold bg-white px-3 py-2 rounded-md">Some Healthier Alternatives</h1>
          <section className="gap-4 grid grid-cols-9">
            {recommendations.healthierAlternatives.map(({ type, name, suitability, nutritionalBenefits }, id) => (
              <Card
                key={id}
                type={type}
                name={name}
                sustability={suitability}
                nutritionalBenefits={nutritionalBenefits}
              />
            ))}
          </section>
        </section>
      </section>
    </Canvas>
  )
}

export default Info
