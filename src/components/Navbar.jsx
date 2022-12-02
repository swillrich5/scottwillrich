
import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div className='pt-5'>
        <nav class="navbar navbar-expand-sm justify-content-center">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to="" class="nav-link">Link 3</Link>
                </li>
                <li class="nav-item">
                    <Link to="" class="nav-link">Link 3</Link>
                </li>
                <li class="nav-item">
                    <Link to="" class="nav-link">Link 3</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar