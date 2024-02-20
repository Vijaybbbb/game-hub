import { HStack ,Image,Text} from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo1.webp'

const Navabar = () => {
  return (
    <HStack>
       <Image src = {logo} boxSize='50px'/>
       <Text>NavBar</Text>
    </HStack>
  )
}

export default Navabar
