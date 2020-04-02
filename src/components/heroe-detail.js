import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import HeroLinks from './hero-links';
import { useSelector } from '../stores/react-redux-hooks';
import HeroDetailSkeleton from "./hero-detail-skeleton";

export function HeroDetail({classes}) {
  const {selected, characters, recentSearch} = useSelector(state => state);
  const [hero, setHero] = useState(null);

  React.useEffect(() => {
    let heroToShow = characters.find((character) => character.id === selected);

    if (!heroToShow) {
      heroToShow = recentSearch.find((recentSearch) => {
        return recentSearch.id === selected;
      });
    }

    setHero(heroToShow);
  }, [selected, characters, recentSearch]);

  const avatarURL = hero ? hero.thumbnail.path + '.' + hero.thumbnail.extension : '';

  return hero ? (
    <div className={classes.heroDetail}>
      <Avatar alt={hero.name} src={avatarURL} variant="rounded" className={classes.heroAvatar} />
      <h2 className={classes.heroName}>
        {hero.name}
      </h2>
      <p className={classes.heroDescription}>{hero.description}</p>
      <HeroLinks hero={hero} />
    </div>
  ) : <HeroDetailSkeleton />;
}

export default withStyles({
  heroDetail: {
    flexGrow: 9,
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    maxWidth: '850px'
  },
  heroAvatar: {
    width: '220px',
    height: '185px',
    margin: '30px auto'
  },
  heroName: {
    margin: '10px 0px 20px 50px',
    fontSize: '35px'
  },
  heroDescription: {
    margin: '0px 0px 30px 50px'
  }
})(HeroDetail);