import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

 const PlatformSelector = () => {
  return (
    <div>
      <Menu>
              <MenuButton as = {Button} >Platforms</MenuButton>
              <MenuList>
                     <MenuItem></MenuItem>
                     <MenuItem></MenuItem>
                     <MenuItem></MenuItem>
                     <MenuItem></MenuItem>

              </MenuList>
      </Menu>
    </div>
  )
}

export default PlatformSelector
