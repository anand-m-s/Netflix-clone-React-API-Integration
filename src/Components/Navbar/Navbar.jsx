import React from 'react'


function Navbar() {
  return (
    <div className='fixed top-0 w-full h-8 p-8 flex justify-center bg-black '>
        <img className='fixed left-5 w-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
        <img className='fixed right-5 w-7' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  )
}

export default Navbar