// import { Sidebar } from 'lucide'
import React from 'react'

import Image  from 'next/image'
import Link from 'next/link'
import { MdPeople } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BsGraphDownArrow } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";
  

const page = () => {
  return (
    <div>
       <div>
   <div>
    <div className='flex justify-between items-center p-5'>
      <div className='flex flex-row items-center  gap-2'>
      <Image src='/Logo Background Removed.png' alt='logo' width={100} height={100} />
      <div>
        <h1 className='font-bold text-xl'>MediCare Hospital</h1>
        <p className='text-gray-500'>Advanced Healthcare Management</p>
      </div>
    </div>

<button>
  <span className='bg-blue-600 px-7 py-3 rounded-lg text-center text-white duration-150 transition-transform hover:scale-105 shadow-lg  text-xl'>Login</span>
</button>
</div>

  <div className='m-7 flex flex-col gap-10 lg:flex-row lg:items-center justify-between'>
  <div className='flex flex-col gap-2 w-auto'>
  <div>
    <h1 className='text-5xl lg:text-4xl font-bold text-blue-600  rounded-lg'>Modern Hospital Management System</h1>
    <p className='text-gray-600 :text-md max-w-3xl'>Streamline your hospital operations with our comprehensive patient management platform. From appointments to emergency care, manage everything in one place.</p>
  </div>

<div className='flex gap-5 items-center'>
  <div className='bg-blue-600 couser-pointer  text-white p-5 lg:p-3 lg:text-lg text-xl font-bold flex items-center gap-2 w-max rounded-lg shadow-md duration-150 transition-transform hover:scale-105'>
  <Link href='/dashboard'>Access Dashboard</Link><span><HiOutlineArrowRight/></span></div>
  <Link href='/' className='couser-pointer border border-blue-600 text-blue-600 p-5 lg:p-3 lg:text-lg text-xlfont-bold rounded-lg shadow-md duration-150 transition-transform hover:scale-105'>Learn More</Link>

</div>
</div>

<div className='mt-10 bg-white p-10 p-5 lg:w-[50%] rounded-lg shadow-lg'>
  <div className='flex justify-between items-center bg-blue-100 p-3 rounded-lg'>
  <div className='flex flex-col '>
    <p className='text-md text-gray-600'>Total patients</p>
    <h1 className='text-3xl font-bold'>1500</h1>
    </div>
<MdPeople size={40} color='blue'/>
  </div>
  <div className='mt-10 flex justify-between items-center bg-green-100 p-3 rounded-lg'>
  <div>
    <p className='text-md text-gray-600'>Appointments Today</p>
    <h1 className='text-3xl font-bold'>48</h1>
    </div>
<SlCalender size={40} color='green'/>
  </div>
  <div className='mt-10 flex justify-between items-center bg-purple-100 p-3 rounded-lg'>
  <div>
    <p className='text-md text-gray-600'>Active Doctors</p>
    <h1 className='text-3xl font-bold'>86</h1>
    </div>
<BsGraphDownArrow size={40} color='purple'/>
  </div>
</div>

   </div>
   </div>
   </div>
    </div>
  )
}

export default page
