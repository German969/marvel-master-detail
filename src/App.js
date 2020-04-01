import React, { useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Footer from "./components/footer";
import Header from './components/header';
import HeroDetail from './components/heroe-detail';
import HeroesList from "./components/heroes-list";
import RecentlyVisited from "./components/recently-visited";
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'ADD_CHARACTERS', characters: [
        {name: '3-D Man', id: 1011334}, {name: '2superman', id: 1011335}
      ]});
  }, [dispatch]);

  const HeroesContainer = styled(Box)({display: 'flex'});

  return (
    <div className="App">
      <Header />
      <HeroesContainer>
        <HeroesList />
        <HeroDetail />
      </HeroesContainer>
      <RecentlyVisited />
      <Footer />
    </div>
  );
}

export default App;
