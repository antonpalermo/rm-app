import React from 'react'

export type StatusProps = {
  size: 'sm' | 'normal'
  status: string
  species: string
}

export function Status({ size, status, species }: StatusProps) {
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
      <p className={`${resolveFontSize(size)} font-semibold text-gray-600`}>
        {status} - {species}
      </p>
    </div>
  )
}
