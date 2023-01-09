import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }
  const navlinks = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Most Loved',
      link: '/loved',
    },
    {
      name: 'Most Hated',
      link: '/hated',
    },
    {
      name: 'Add Playlist',
      link: '/submitplaylist',
    },
  ]
  return (
    <div className='d-flex justify-content-between align-items-center px-4 py-2'>
      <h4 className='fw-bold'>
        <Link className='nav-link text-white' to='/'>
          PlaylistPlus
        </Link>
      </h4>
      <ul className='nav d-none align-items-center d-md-flex'>
        {navlinks.map((item, index) => (
          <li className='nav-item' key={index}>
            <Link className='nav-link text-white' to={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className='d-block d-md-none'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? 'fixed-top top-0 start-0 w-75 h-100 bg-secondary py-3 px-3 animation-nav'
            : 'd-none'
        }
      >
        <h1 className='w-100 fs-2 fw-bold'>PlaylistPlus</h1>
        <div className='text-decoration-none'>
          {navlinks.map((item, index) => (
            <div className='nav-item' key={index}>
              <Link className='nav-link text-white py-3' to={item.link}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
