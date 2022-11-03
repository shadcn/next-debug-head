export default function Head({ params }) {
  const title = params.id === "1" ? "Post One" : "Post Two"

  return (
    <>
      <title>{title}</title>
    </>
  )
}
