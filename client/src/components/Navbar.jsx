import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
        <li><Link to='/'>Products</Link></li>
        <li><Link to='/productDetail'>ProductDetail</Link></li>
        <li><Link to='/addProducts'>AddProducts</Link></li>
        <li><Link to='*'>NotFound</Link></li>
    </ul>
  )
}

export default Navbar