function Canvas({ children, bgColor }) {
  const styles = `w-full h-full rounded-lg ${bgColor} flex flex-col gap-8 p-5`
  return (
    <>
      <section className={styles}>{children}</section>
    </>
  )
}

export default Canvas
