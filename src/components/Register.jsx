import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './Header'

function Register() {

  const API_URL = import.meta.env.VITE_API_URL

  const[value,setValue]=useState({
    name:'',
    email:'',
    password:''
  })
  const navigate = useNavigate()

  // const registerForm = (e) => {
  //   e.preventDefault()
  //   console.log('form submitted')
  //   axios.post('http://localhost:8000/register',value)
  //     .then(response => {
  //       console.log(response)
  //       if(response.status === 200){
  //         navigate('/login')
  //       }
  //       else{
  //         alert('Error')
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     } )
  // }
  const registerForm = (e) => {
    e.preventDefault();

    // Input validation
    if (!value.name || !value.email || !value.password) {
      alert('Please fill in all fields');
      return;
    }

    // Sanitize user input
    const sanitizedValue = {
      name: value.name.trim(), // Remove leading/trailing whitespace
      email: value.email.trim(), // Remove leading/trailing whitespace
      password: value.password
    };

    console.log('form submitted');
    axios.post(`${API_URL}/register`, sanitizedValue)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          navigate('/login');
        } else {
          alert('Error');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };


  return (
    
    <div className='bg-slate-700'>
      <Header />
{/* 
      <h1>Register</h1>
      <form onSubmit={registerForm}>
        <div className='form-group'>
          <label>Name</label>
          <input type='text' className='form-control' onChange={e => setValue({...value, name:e.target.value}) }/>
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type='text' className='form-control' onChange={e=> setValue({...value, email:e.target.value})} />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='password' className='form-control' onChange={e => setValue({...value, password:e.target.value})} />
        </div>
        <button type='submit' className='btn btn-primary'>Signup</button>
      </form> */}



      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-300">
            Create New Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={registerForm} method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-300">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  // type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={e => setValue({...value, name:e.target.value}) }
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-300">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={e=> setValue({...value, email:e.target.value})}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-300">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={e => setValue({...value, password:e.target.value})}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-slate-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-slate-300">
            Not a member?{' '}
            <span className="font-semibold leading-6 text-slate-300 hover:text-slate-800"><Link to="/login">Sign In</Link></span>
            
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register