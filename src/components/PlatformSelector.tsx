import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { distance2D } from 'framer-motion'
import { PLatform } from '../hooks/useGames'


interface Props{
  onSelectPlatform:(platform:PLatform) => void
  selectedPlatform:PLatform | null
}

 const PlatformSelector = ({onSelectPlatform,selectedPlatform}:Props) => {
  const {data,error}  = usePlatforms()
  if(error) return null
  return (
    <div>
      <Menu>
              <MenuButton as = {Button} rightIcon={<BsChevronDown/>} >{selectedPlatform?.name || 'Platfroms'}</MenuButton>
              <MenuList>
                     {data.map((platform)=>
                     <MenuItem 
                          onClick={()=>onSelectPlatform(platform)} 
                          
                          key={platform.id}>{platform.name}
                     
                     
                     </MenuItem>)}
              </MenuList>
      </Menu>
    </div>
  )
}

export default PlatformSelector
