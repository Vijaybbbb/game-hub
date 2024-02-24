import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import axios from 'axios';
import useGames, { PLatform } from '../hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContanier from './GameCardContanier';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props{
       gameQuery:GameQuery;
      
}


const GameGrid = ({gameQuery}:Props) => {
       const { data, error, isLoading } = useGames(gameQuery)
       const Skeletons = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
     
       return (
              <>
                     {error && <Text>{error}</Text>}
                     <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={10} spacing={3}>
                            {(isLoading)&& Skeletons.map(Skeleton => (
                            <GameCardContanier key={Skeleton}>
                            <GameCardSkeleton  />
                            </GameCardContanier>
                            ))}
                            {data.map(game => (
                            
                            <GameCardContanier  key={game.id}>
                                   <GameCard game={game} />
                            </GameCardContanier>
                            
                            ))}

                     </SimpleGrid>
              </>
       )
}

export default GameGrid
