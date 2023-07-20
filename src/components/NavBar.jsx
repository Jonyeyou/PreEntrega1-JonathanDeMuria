import React from 'react'
import '../NavBar.css'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import logoInicio from '../assets/logo-inicio.png'
const NavBar = () => {


  return (
    <>
      <div className='container-navbar'>
        <div className='container-menu'>
          <div className='logo-inicio'>
            <a className='inicio' href='../index.html'>
              <img className='logo' src={logoInicio} alt="logo Inicio"/>
              <p className='p-inicio'>Inicio</p>
            </a>
          </div>
          <Menu isLazy>
              <MenuButton>
                Menu
              </MenuButton>
            <MenuList>
              <MenuItem>Productos</MenuItem>
              <MenuItem>Soporte</MenuItem>
              <MenuItem>Contacto</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className='brand-container'>
          <a className='brand' href='../index.html'>Tecno Store</a>
        </div>
      <CartWidget className='carrito'/>
      </div>
    </>
  )
}

export default NavBar