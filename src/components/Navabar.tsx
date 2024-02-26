import { HStack ,Image} from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo1.webp'
import ColorModeSwitch from './ColorModeSwith'
import SearchInput from './SearchInput'

interface Props{
  onSearch:(searchText:string)=> void
}


const Navabar = ({onSearch}:Props) => {
  return (
    <HStack  padding={'10px'}>
      
       <Image src = {logo} boxSize='50px'/>
       <SearchInput onSearch={onSearch}/>
       <ColorModeSwitch/>
    </HStack>
  )
}

export default Navabar
