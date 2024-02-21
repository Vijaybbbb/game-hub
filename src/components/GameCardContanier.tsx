import { Box} from '@chakra-ui/react'
import { ReactNode } from 'react';

interface Props{
       children:ReactNode;

}

const GameCardContanier = ({children}:Props) => {
  return (
    <Box width='250px' borderRadius={10} overflow='hidden'>
       {children}
    </Box>
  )
}

export default GameCardContanier