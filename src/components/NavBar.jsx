import React from 'react'
import '../css/NavBar.css'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Button, Text, Image } from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import logoInicio from '../assets/logo-inicio.png'
import { Link } from 'react-router-dom'

const NavBar = () => {


  return (
    <>
      <div className='container-navbar'>
        <div className='container-menu'>
          <div className='logo-inicio'>
            <Link className='inicio' to={"/"}>
              <Image className='logo' src={logoInicio} alt="logo Inicio"/>
              <Text className='p-inicio'>Inicio</Text>
            </Link>
          </div>
          <Menu isLazy>
              <MenuButton>
                Menu
              </MenuButton>
            <MenuList>
              <Link to={`/category/${"procesador"}`}>
              <MenuItem>Procesadores</MenuItem>
              </Link>
              <Link to={`/category/${"memorias"}`}>
              <MenuItem>Memorias Ram</MenuItem>
              </Link>
              <Link to={`/category/${"placa de video"}`}>
              <MenuItem>Placas de video</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </div>
        <div className='brand-container'>
          <Link to={"/"}>
          <Text className='brand'>Tecno Store</Text>
          </Link>
        </div>
      <CartWidget className='carrito'/>
      </div>
    </>
  )
}

export default NavBar