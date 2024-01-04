import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='flex items-center justify-between top-0 width-full p-4 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-100'>
        <ul>
            <li>
                <a href="#" className='text-full-h-[40px] border-blue-500'>Skeema</a>
            </li>
        </ul>
        <ul>
            <li>
                <button type='button' className='rounded-full h-[40px] border px-4 border-blue-500'>Log in</button>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
