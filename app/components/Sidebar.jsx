'use client'

import Image  from 'next/image'
import { MdDashboard } from "react-icons/md";
import { FaPersonCircleMinus } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";
import { FcDepartment } from "react-icons/fc";
import { GrEmergency } from "react-icons/gr";
import { MdPeople } from "react-icons/md";
import React, { useState } from 'react'
import navbar from '/navbar'




const page = () => {
  const sidebarItems = [
    {  icon: <MdDashboard />,name: 'Dashboard'},
    {  icon: <FaPersonCircleMinus/>,name: 'Patients' },
    {  icon: <CiTimer/> ,name: 'Appointments'},
    {  icon: <MdPeople/>,name: 'Doctors' },
    { icon: <FcDepartment/>,name: 'Departments' },
    {  icon: <GrEmergency/>,name: 'Emergency' },
  ];


const [active,setActive]=useState("")
  return (
    


    <div>
    

<Navbar/>








<div className='bg-white border border-gray-300 w-70 min-h-screen'>
    <div>
        {sidebarItems.map((item) => (
            <div
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`flex flex-row mt-10 gap-3 p-5 ${
                    item.name === active
                        ? "bg-blue-500 text-white rounded-lg"
                        : ""
                }`}
            >
                <p className='text-2xl'>{item.icon}</p>
                <p className='text-lg'>{item.name}</p>
            </div>
        ))}
    </div>
</div>




    </div>
  )
}

export default page

