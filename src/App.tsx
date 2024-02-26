import './App.css'
import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navabar from './components/Navabar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { PLatform } from './hooks/useGames'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
import MainHeading from './components/MainHeading'


export interface GameQuery{
  genre:Genre | null;
  platform : PLatform | null;
  sortOrder:string;
  searchText:string;
}


function App() {

  const [gameQuery,setGameQuery] = useState<GameQuery>({}as GameQuery)

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px  1fr'
        }}
      // gap={4} // Add gap between grid items
      >
        <GridItem area='nav'>
          <MainHeading/>
          <Navabar onSearch={(searchText)=> setGameQuery({...gameQuery,searchText})} />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX={5} marginBottom={3}>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => { setGameQuery({...gameQuery,genre}) }} />
          </GridItem> {/* Change area name to 'aside' */}
        </Show>
        <GridItem area='main'>
          <GameHeading gameQuery={gameQuery}/>
          <Flex paddingLeft={10}>

            <Box marginRight={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
            </Box>
           <SortSelector sortOrder={gameQuery.sortOrder} onSelecSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
           </Flex>
          <GameGrid gameQuery={gameQuery} />
        </GridItem> {/* Change area name to 'main' */}
      </Grid>
    </>
  )
}

export default App
