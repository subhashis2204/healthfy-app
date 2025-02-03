function Card({ name, type, sustability, nutritionalBenefits }) {
  return (
    <>
      <section className="col-span-3 bg-white px-3 py-4 rounded-md flex flex-col gap-6 justify-between">
        <section className="flex justify-between items-center gap-4">
          <span className="text-xl">{name}</span>
          <span className="bg-red-500 w-max px-2 py-1.5 rounded-md text-white">{type}</span>
        </section>
        <section className="flex gap-2 items-center">
          Suitability :{" "}
          <section className="flex gap-4">
            {sustability.map((suitability, index) => {
              return (
                <span key={index} className="bg-red-500 px-2 py-1.5 rounded-md capitalize text-white">
                  {suitability}
                </span>
              )
            })}
          </section>
        </section>
        <section className="flex gap-4 flex-wrap">
          {nutritionalBenefits.map((benefit, index) => {
            return (
              <span key={index} className="bg-green-600 px-2 py-1.5 rounded-md capitalize text-white">
                {benefit}
              </span>
            )
          })}
        </section>
      </section>
    </>
  )
}

export default Card
