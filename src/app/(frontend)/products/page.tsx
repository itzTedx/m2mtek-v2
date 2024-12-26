import { payload } from "@/lib/payload"

export default async function Products() {
  const categories = await payload.find({
    collection: 'categories',
    limit: 20
})

  return (
    <div className="py-24 container">
      <pre>{ JSON.stringify(categories, null, 2)}</pre>
    </div>
  )
}
