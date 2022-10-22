import React from 'react'
import Link from 'next/link'

const NavMenu = () => {
  const showActive = (e) => {
    let clickedItem = e.currentTarget.parentNode
    clickedItem.querySelector('.submenu').classList.toggle('show')
    clickedItem.querySelector('.dropdown').classList.toggle('active')
  }
  return (
    <ul className='main-menu__links'>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a>Pages</a>
        </Link>
        <button className='dropdown' onClick={showActive}>
          <i className='fa-solid fa-chevron-left'></i>
        </button>
        <ul className='submenu'>
          <li>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/single-team'>
              <a>Team</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href='/services'>
          <a>Services</a>
        </Link>
        <button className='dropdown' onClick={showActive}>
          <i className='fa-solid fa-chevron-left'></i>
        </button>
        <ul className='submenu'>
          <li>
            <Link href='/services'>
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href='/services-details'>
              <a>Services Details</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href='https://www.jwswent.com'>
          <a>Portfolio</a>
        </Link>
      </li>
    </ul>
  )
}

export default NavMenu
