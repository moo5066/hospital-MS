import React from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";

const page = () => {
  return (
    <div>
       <div className=' flex flex-row justify-between items-center bg-white p-2  shadow-sm'>
     <div className='flex flex-row items-center'>
        {/* <Image src='Logo Background.png' alt='logo' width={200} height={200}/> */}
              <Image src='/Logo Background Removed.png' alt='logo' width={70} height={70} />

        <div>
            <h1 className='text-xl font-bold'>MediCare Hospital</h1>
            <p className='text-gray-600'>Patient Management System</p>
        </div>
        </div>
        <div className='flex flex-row items-center gap-3'>
            <div>
            <h1 className='text-md font-semibold'>Dr. Sarah Johnson</h1>
            <p className='text-gray-600'>Administrator</p>
            </div>
            <div>
<IoPersonCircleOutline size={50}/>
            </div>
        </div>
     </div>
    </div>
  )
}

export default page
