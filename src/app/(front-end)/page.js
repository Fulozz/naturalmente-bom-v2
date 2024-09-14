"use client"
import React, {useEffect, useState} from 'react'
import  Login from "./login/page.jsx"
const page = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [user, setUser] = useState(null)
  useEffect(() => {
   setUser(localStorage.getItem('key'))
  }, [user]);

  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      {user ? (<a href="/dashboard">Dashboard </a>) : (<span onClick={()=> setIsVisible(true)}><Login setIsVisible={setIsVisible} /></span>)}
      <h2 className="text-4xl">Bem vindo ao Naturalmente bom!</h2>

    </div>
  );
}

export default page