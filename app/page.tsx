import Link from "next/link"

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Next.js</h1>
      <div className="space-x-4">
        <Link href="/posts/1" className="text-blue-600">
          Post One
        </Link>
        <Link href="/posts/2" className="text-blue-600">
          Post Two
        </Link>
      </div>
    </div>
  )
}
