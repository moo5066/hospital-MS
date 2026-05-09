'use client'

import React, { useState } from 'react'
import { CiTimer } from 'react-icons/ci'
import { FaPersonCircleMinus } from 'react-icons/fa6'
import { FcDepartment } from 'react-icons/fc'
import { GrEmergency } from 'react-icons/gr'
import { MdDashboard, MdPeople } from 'react-icons/md'

const sidebarItems = [
  { icon: <MdDashboard />, name: 'Dashboard' },
  { icon: <FaPersonCircleMinus />, name: 'Patients' },
  { icon: <CiTimer />, name: 'Appointments' },
  { icon: <MdPeople />, name: 'Doctors' },
  { icon: <FcDepartment />, name: 'Departments' },
  { icon: <GrEmergency />, name: 'Emergency' },
]

const Sidebar = () => {
  const [active, setActive] = useState('Dashboard')

  return (
    <aside className="min-h-[calc(100vh-89px)] w-full border-r border-gray-200 bg-white p-3 shadow-sm md:w-72">
      <nav className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
        {sidebarItems.map((item) => {
          const isActive = item.name === active

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(item.name)}
              className={`flex min-w-max items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors md:min-w-0 md:text-base ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
