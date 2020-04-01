import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroRow from './hero-row';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux'

function HeroesList(props) {
  const { classes } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = React.useState(0);
  const rows = useSelector(state => state.characters);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (event, name, index) => {
    setSelected(index);
  };

  const getTablePaginationProps = () => {
    return {
      rowsPerPageOptions: [5, 10, 20],
      count: rows.length,
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

  return (
    <div className={classes.heroesList}>
      <Table>
        <TableBody>
          {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
          ).map((row, index) => (
            <HeroRow hero={row} key={row} index={index} handleClick={handleClick} />
          ))}
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