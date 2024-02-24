import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navabar from './components/Navabar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { PLatform } from './hooks/useGames'


export interface GameQuery{
  genre:Genre | null;
  platform : PLatform | null
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
        <GridItem area='nav'><Navabar /></GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX={5}>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => { setGameQuery({...gameQuery,genre}) }} />
          </GridItem> {/* Change area name to 'aside' */}
        </Show>
        <GridItem area='main'>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
          <GameGrid gameQuery={gameQuery} />
        </GridItem> {/* Change area name to 'main' */}
      </Grid>
    </>
  )
}

export default App
