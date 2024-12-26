import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { Plugin } from 'payload'

import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'

import { getServerSideURL } from '@/lib/get-url'
import { Category, Product } from '@/payload-types'

const generateTitle: GenerateTitle<Product | Category> = ({ doc }) => {
  return doc?.title ? `${doc.title} | M2MTek` : 'M2MTek'
}

const generateURL: GenerateURL<Product > = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
 
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  
 
  payloadCloudPlugin(),
]
