'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="md:flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-gray-950">Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Select an item from the sidebar to manage hospital operations.
          </p>
        </main>
      </div>
    </div>
  )
}

export default Page
