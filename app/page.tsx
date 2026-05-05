// import { Sidebar } from 'lucide'
import React from 'react'

import Dashboard from './components/Dashboard/page'
import Sidebar from './components/Sidebar/page'



const page = () => {
  return (
    <div className='flex gap-10'>
      <div>
<Sidebar/>
      </div>
      <div>
<Dashboard/>
      </div>
    </div>
  )
}

export default page
