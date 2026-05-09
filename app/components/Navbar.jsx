'use client'

import Image from 'next/image'
import React from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-gray-200 bg-white px-4 py-3 shadow-sm lg:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <Image
          src="/Logo Background Removed.png"
          alt="MediCare Hospital logo"
          width={64}
          height={64}
          priority
          className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16"
        />
        <div className="min-w-0">
          <h1 className="truncate text-lg font-bold text-gray-950 sm:text-xl">
            MediCare Hospital
          </h1>
          <p className="hidden text-sm text-gray-600 sm:block">
            Patient Management System
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <div className="hidden text-right sm:block">
          <h2 className="text-sm font-semibold text-gray-950">
            Dr. Sarah Johnson
          </h2>
          <p className="text-sm text-gray-600">Administrator</p>
        </div>
        <IoPersonCircleOutline
          size={46}
          className="text-blue-600"
          aria-label="User profile"
        />
      </div>
    </header>
  )
}

export default Navbar
