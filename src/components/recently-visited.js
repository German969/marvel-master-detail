import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from '../stores/react-redux-hooks';
import Link from "@material-ui/core/Link";
import { setSelectedAndRecent } from "../stores/store-actions";

export function RecentlyVisited({ classes }) {
  const dispatch = useDispatch();
  const {recentSearch: recentSearches} = useSelector(state => state);

  const handleLinkClick = (event, searchInfo) => {
    event.preventDefault();

    return dispatch(setSelectedAndRecent(searchInfo))
  };

  const getRecentSearchLinkComponents = (recentSearchInfo) => {
    return recentSearchInfo.map((searchInfo, index) => {
      const moraThanOneSeparator = index > 0 ? ', ' : '';
      const inputName = searchInfo.name + '-link';

      return (
        <span key={index}>
          {moraThanOneSeparator}
          <Link href={'#'} name={inputName} aonClick={(event) => handleLinkClick(event, searchInfo)}>
            {searchInfo.name}
          </Link>
        </span>
      )
    });
  };

  return (
    <div className={classes.recentlyVisited}>
      <h2>Recently Visited: {getRecentSearchLinkComponents(recentSearches)}</h2>
    </div>
  )
}

export default withStyles({
  recentlyVisited: {
    marginLeft: '20px'
  }
})(RecentlyVisited);