export async function generateStaticParams() {
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
  ]
}

export default function Page({ params }) {
  const title = params.id === "1" ? "Post One" : "Post Two"

  return <h1>{title}</h1>
}
