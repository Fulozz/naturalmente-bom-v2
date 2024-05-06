
import React from 'react'
import Navbar from '@/src/components/backoffice/Bars/Navbar';
import Sidebar from '@/src/components/backoffice/Bars/Sidebar';
import profileImage from './mock/image/profileImage.png'
const layout = ({children}) => {
  // Query of the database userInfo
  const user = {
    "userId" : 123,
    "userFirstName": "Thiago",
    "userFullName" : "Thiago Silva Andrade",
    "userEmail":"thiago.sandrade0720@gmail.com",
    "userProfileImage" : profileImage,
    "userNotification" : 10
  }
  return (
    <div className='flex'>
        <Sidebar />
        <div className='lg:ml-64  bg-slate-100 min-h-screen w-full '> 
        {/*TODO: Header*/} 
            <Navbar user={user} />
            <main className='p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 mt-16'>{children}</main>
        {/*TODO: Main*/} 
        </div>
         {/*TODO: Main Body*/}
    </div>
  )
}

export default layout