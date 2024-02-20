import { HStack ,Image} from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo1.webp'
import ColorModeSwitch from './ColorModeSwith'

const Navabar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
       <Image src = {logo} boxSize='50px'/>
       <ColorModeSwitch/>
    </HStack>
  )
}

export default Navabar
