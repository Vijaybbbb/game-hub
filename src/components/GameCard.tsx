import React from 'react'
import {Game} from '../hooks/useGames'
import { Card, CardBody, Image,Heading,Text, HStack } from '@chakra-ui/react'
import PLatformList from './PLatformList'
import CriticScore from './CriticScore'

interface Props{
       game:Game
}

const GameCard = ({game}:Props) => {
  return (
  <Card borderRadius={10} overflow='hidden'>
       <Image src= {game.background_image}/>
       <CardBody>
              <Heading fontSize='2xl'>{game.name}</Heading>
              <HStack justifyContent='space-between'>
                      <PLatformList platforms={game.parent_platforms.map(p=> p.platform)}/>
                       <CriticScore score={game.metacritic}/>
              </HStack>
       </CardBody>
  </Card>
  )
}

export default GameCard