import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import Link from "@material-ui/core/Link";
import { setSelectedAndRecent } from "../stores/store-actions";

function RecentlyVisited({ classes }) {
  const dispatch = useDispatch();
  const recentSearches = useSelector(state => state.recentSearch);

  const handleLinkClick = (event, searchInfo) => {
    event.preventDefault();

    return dispatch(setSelectedAndRecent(searchInfo.id, searchInfo.name))
  };

  const getRecentSearchLinkComponents = (recentSearchInfo) => {
    return recentSearchInfo.map((searchInfo, index) => {
      const moraThanOneSeparator = index > 0 ? ', ' : '';

      return (
        <span>
          {moraThanOneSeparator}
          <Link href={'#'} onClick={(event) => handleLinkClick(event, searchInfo)}>
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