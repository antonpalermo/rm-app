import React from 'react'

export type StatusProps = {
  status: string
  species: string
}

export default function Status({ status, species }: StatusProps) {
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

  const toPascalCase = (value: string) => {
    return value[0].toUpperCase() + value.substring(1)
  }

  return (
    <div className="inline-flex items-center space-x-2">
      <div className={`w-2 h-2 rounded-full ${currentStatus(status)}`} />
      <p className="text-sm font-semibold text-gray-600">
        {toPascalCase(status)} - {toPascalCase(species)}
      </p>
    </div>
  )
}
