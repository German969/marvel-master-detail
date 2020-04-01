import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import HeroLinks from './hero-links';

const hero = {
  name: '3-D Man',
  description: 'The Master of the Universe',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb97840',
    extension: 'jpg'
  },
  comics: {
    items: [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21366",
        "name": "Avengers: The Initiative (2007) #14"
      }
    ]
  },
  series: {
    items: [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
        "name": "Avengers: The Initiative (2007 - 2010)"
      }
    ]
  },
  stories: {
    items: [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19947",
        "name": "Cover #19947",
        "type": "cover"
      }
    ]
  },
  events: {
    items: [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
        "name": "Secret Invasion"
      }
    ]
  }
};

function HeroDetail({classes}) {
  return (
    <div className={classes.heroDetail}>
      <Avatar alt={hero.name} src="/images/no-image.png" variant="rounded" className={classes.heroAvatar} />
      <h2 className={classes.heroName}>
        {hero.name}
      </h2>
      <p className={classes.heroDescription}>{hero.description}</p>
      <HeroLinks hero={hero} />
    </div>
  );
}

export default withStyles({
  heroDetail: {
    flexGrow: 10
  },
  heroAvatar: {
    width: '150px',
    height: '150px',
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