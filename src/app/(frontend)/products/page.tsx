import { payload } from "@/lib/payload"

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Products() {
  const categories = await payload.find({
    collection: 'categories',
    limit: 20,
    depth: 1,
    sort: 'createdAt',
    select: {
      slug: true,
      title: true
    },
    
  })
  
  return (
    <div className="py-24 container">
      <pre>{ JSON.stringify(categories.docs, null, 2)}</pre>
    </div>
  )
}
