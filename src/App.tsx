import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navabar from './components/Navabar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}
       // gap={4} // Add gap between grid items
      >
        <GridItem area='nav'><Navabar/></GridItem>
        <Show above ='lg'>
        <GridItem area='aside'>
            <GenreList/>
        </GridItem> {/* Change area name to 'aside' */}
        </Show>
        <GridItem area='main'><GameGrid/></GridItem> {/* Change area name to 'main' */}
      </Grid>
    </>
  )
}

export default App
