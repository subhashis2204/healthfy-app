function FileNameContainer({ filename, extension }) {
  return (
    <>
      <div className="border-2 border-gray-500 rounded-md w-full grid grid-cols-12 items-center justify-center">
        <div className="cols-start-1 col-span-10 p-2 text-center">{filename}</div>
        <div className="cols-start-11 col-span-2 bg-gray-200 text-center p-2 text-md font-bold h-full flex items-center justify-center">
          {extension}
        </div>
      </div>
    </>
  )
}

export default FileNameContainer
