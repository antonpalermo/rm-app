import React from 'react'
import { toPascalCase } from '@lib/helpers'

export type StatusProps = {
  size: 'sm' | 'normal'
  type: string
  info: string
  status: string
}

export function ShortDetail({ size, status, type, info }: StatusProps) {
  const currentStatus = (status: string) => {
    switch (status) {
      case 'Alive':
        return 'bg-green-500'
      case 'Dead':
        return 'bg-red-500'
      case 'unknown':
        return 'bg-gray-500'
    }
  }

  const resolveFontSize = (size: 'sm' | 'normal') => {
    return size === 'normal' ? 'text-lg' : 'text-sm'
  }

  return (
    <div className="inline-flex items-center space-x-2">
      <div className={`w-2 h-2 rounded-full ${currentStatus(status)}`} />
      <p
        className={`${resolveFontSize(
          size
        )} font-semibold text-gray-400 line-clamp-1`}
      >
        {type} - {toPascalCase(info)}
      </p>
    </div>
  )
}
