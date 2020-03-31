import React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Header from './components/header';
import HeroDetail from './components/heroe-detail';
import HeroesList from "./components/heroes-list";

function App() {
  const HeroesContainer = styled(Box)({display: 'flex'});

  return (
    <div className="App">
      <Header />
      <HeroesContainer>
        <HeroesList />
        <HeroDetail />
      </HeroesContainer>
    </div>
  );
}

export default App;
