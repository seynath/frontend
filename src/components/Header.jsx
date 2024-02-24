// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import API_BASE_URL from '../config'

function Header() {
  const navigate = useNavigate()
const [auth, setAuth] = useState('')

  useEffect(() => {
    axios.get(`${API_BASE_URL}`)
      .then(res => {
        if (res.data.auth) {
          setAuth(true)
         
        } else {
          setAuth(false)
        }
      })
      .catch(err => console.log(err))}, [])


  const logout = () => {
    axios.get(`${API_BASE_URL}/logout`)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          navigate('/login')
          //setAuth(false)

        }
      })
      .catch(err => console.log(err))}

  return (
    <div className='flex w-full text-slate-100 sm:px-2 md:px-12 bg-slate-900 sm:min-h-14 md:min-h-20  items-center font-bold'>
      <nav className="flex justify-between w-full" id='top'>

        <a className="md:text-xl sm:text-md" href="/">Tax Calculation </a>
       
        <ul className='flex'>
         
        
            <li>
            {
              auth ? (
                <ul className='flex gap-5'>
                  {/* <li className="px-4 py-1  bg-slate-500 rounded-md">{name}</li> */}
                  <button className="sm:px-2 sm:py-1 md:px-4 md:py-1 sm:text-sm md:text-lg bg-red-500 rounded-md" onClick={logout}>Log Out</button>
                </ul>
                
              ) : (
                <ul className='flex sm:gap-2 md:gap-5 justify-center items-center'>
                  <li className="sm:px-2 sm:py-1 md:px-4 md:py-1 sm:text-sm md:text-lg   bg-slate-500 rounded-md"><a href="/login">Login</a></li>
                  <li className="sm:px-2 sm:py-1 md:px-4 md:py-1 sm:text-sm md:text-lg bg-slate-400 rounded-md"><a href="/register">Sign Up</a></li>
                </ul>

              )
            }
            </li>
          
        </ul>

        
      </nav>
      
    </div>
  )
}

export default Header
