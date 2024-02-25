import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from './Header'

function Login() {
  const API_URL = import.meta.env.VITE_API_URL


  const[value,setValue] = useState({
    email:'',
    password:''
  })
  const navigate = useNavigate()
  axios.defaults.withCredentials = true


  const loginForm = (e) => {
    e.preventDefault();
  
    // Client-side validation
    if (!value.email || !value.password) {
      alert('Please fill in all fields');
      return;
    }
  
    // Sanitize form data
    const formData = {
      email: value.email.trim(), // Trim whitespace
      password: value.password,
    };
  
    // Server-side validation and authentication
    axios.post(`${API_URL}/login`, formData)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          navigate('/');
        } else {
          alert('Error');
        }
      })
      .catch(error => {
        console.log(error);
        alert('An error occurred');
      });
  }
  

  return (
    <div className='bg-slate-700'>
      <Header />

      {/* <h1>Login</h1>
      <form onSubmit={loginForm}>
      
        <div className=''>
          <label>Email</label>
          <input type='text' className='' onChange={e=> setValue({...value, email:e.target.value})} />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='password' className='form-control' onChange={e => setValue({...value, password:e.target.value})} />
        </div>
        <button type='submit' className='btn btn-primary'>Login</button>
        <button  className='btn btn-success'><Link to="/register">Register</Link></button>
      </form> */}

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-300">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={loginForm} method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-300">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={e => setValue({...value, password:e.target.value})}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-slate-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <span className="font-semibold leading-6 text-slate-300 hover:text-indigo-500"><Link to="/register">Sign Up</Link></span>
            
          </p>
        </div>
      </div>
    </div>

  )
}

export default Login