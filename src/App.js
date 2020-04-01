import React, { useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Footer from "./components/footer";
import Header from './components/header';
import HeroDetail from './components/heroe-detail';
import HeroesList from "./components/heroes-list";
import RecentlyVisited from "./components/recently-visited";
import { useDispatch } from 'react-redux';
import { fetchCharacters } from './stores/store-actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters(0));
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
