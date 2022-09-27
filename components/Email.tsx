import React from 'react'

export default function EmailForm() {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={e => submit(e)}>
      <div className="bg-white border border-gray-100 rounded-md p-1">
        <input
          type="text"
          placeholder="Subcribe to my news letter"
          className="border-0 text-sm px-4 py-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm font-semibold"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
