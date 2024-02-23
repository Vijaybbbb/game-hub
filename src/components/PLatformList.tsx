import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { PLatform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props{
       platforms:PLatform[]
}

const PLatformList = ({platforms}:Props) => {
       const iconMap:{[key:string]:IconType} = {
              pc:FaWindows,
              playstation:FaPlaystation,
              xbox:FaXbox,
              nintendo:SiNintendo,
              mac:FaApple,
              linux:FaLinux,
              ios:MdPhoneIphone,
              we:BsGlobe,
              android:FaAndroid
       }

  return (
    <HStack marginY={3}>
       {platforms.map((platform)=>
       
       <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'></Icon>
       
       )}
    </HStack>
  )
}

export default PLatformList
