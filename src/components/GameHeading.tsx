import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'

interface Props{
       gameQuery:GameQuery
}

const GameHeading = ({gameQuery}:Props) => {
       const heading  = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games` 
  return (
    <Heading paddingLeft={10} as='h1' marginBottom={5} fontSize={50}>  
       {heading}
    </Heading>
  )
}

export default GameHeading
