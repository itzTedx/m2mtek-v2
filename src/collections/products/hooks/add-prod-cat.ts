import type { CollectionAfterChangeHook } from 'payload'
import { Product } from 'src/payload-types'

export const addProductToCategories: CollectionAfterChangeHook<Product> = async ({ doc, req, req: { payload } }) => {
    console.log('After Change Hook', doc)
    
   
}
