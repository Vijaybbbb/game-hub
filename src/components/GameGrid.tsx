import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import axios from 'axios';
import useGames from '../hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContanier from './GameCardContanier';




const GameGrid = () => {
       const { data, error, isLoading } = useGames()
       const Skeletons = [1, 2, 3, 4, 5, 6];
       return (
              <>
                     {error && <Text>{error}</Text>}
                     <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={10} spacing={3}>
                            {isLoading && Skeletons.map(Skeleton => (
                            <GameCardContanier>
                            <GameCardSkeleton key={Skeleton} />
                            </GameCardContanier>
                            ))}
                            {data.map(game => (
                            
                            <GameCardContanier>
                                   <GameCard key={game.id} game={game} />
                            </GameCardContanier>
                            
                            ))}

                     </SimpleGrid>
              </>
       )
}

export default GameGrid
