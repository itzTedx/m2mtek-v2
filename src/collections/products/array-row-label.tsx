'use client'

import { useRowLabel } from '@payloadcms/ui'

export const ArrayRowLabel = () => {
  const { data, rowNumber,  } = useRowLabel<{ title?: string }>()

  const customLabel = `${String((rowNumber ?? 0) + 1).padStart(2, '0')}. ${data.title || 'Untitled'} `

  return <div>{customLabel}</div>
}