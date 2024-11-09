import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-blue-800 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Brisphere</h1>
        <nav>
          <ul className='flex space-x-6'>
            <li>
              <Link to='/' className='hover:text-gray-300'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/booking' className='hover:text-gray-300'>
                Book Now
              </Link>
            </li>
            <li>
              <Link to='/about' className='hover:text-gray-300'>
                About
              </Link>
            </li>
            <li>
              <Link to='/contact' className='hover:text-gray-300'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
