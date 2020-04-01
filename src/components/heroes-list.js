import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroRow from './hero-row';
import HeroRowSkeleton from './hero-row-skeleton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useSelector, useDispatch } from 'react-redux';
import  { fetchCharacters } from '../stores/store-actions';

function HeroesList(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const rows = useSelector(state => state.characters);
  const count = useSelector(state => state.total);

  const handleChangePage = (event, newPage) => {
    const loadedCharactersCount = rows.length;

    if (loadedCharactersCount < count) {
      const lastPageWithData = loadedCharactersCount / rowsPerPage;
      const loadNewCharacters = (newPage + 1) >= lastPageWithData;

      if (loadNewCharacters) {
        dispatch(fetchCharacters(loadedCharactersCount));
      }
    }

    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getTablePaginationProps = () => {
    return {
      rowsPerPageOptions: [5, 10, 20],
      count,
      colSpan: 5,
      rowsPerPage,
      page,
      SelectProps: {
        inputProps: { 'aria-label': 'rows per page' },
        native: true,
      },
      onChangePage: handleChangePage,
      onChangeRowsPerPage: handleChangeRowsPerPage
    }
  };

  const rowsToShow = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const getRowsToRender = () => {
    return (rowsPerPage > 0
      ? rowsToShow
      : rows).map((row) => (
      <HeroRow hero={row} key={row.id} />
    ));
  };

  const getRowSkeletonsToRender = () => {
    return new Array(5).fill().map((item, index) => <HeroRowSkeleton key={index} />);
  };

  const listContent = ((rowsToShow.length > 0 && rowsPerPage > 0) || rows.length > 0) ?
    getRowsToRender :
    getRowSkeletonsToRender;

  return (
    <div className={classes.heroesList}>
      <Table>
        <TableBody>
          {listContent()}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination {...getTablePaginationProps()} />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default withStyles({
  heroesList: {
    flexGrow: 1,
    borderRight: '1px solid rgba(224, 224, 224, 1)'
  }
})(HeroesList);