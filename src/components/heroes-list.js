import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroRow from './hero-row';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const rows = [
  {name: '3-D Man', id: 1011334},
  {name: '2superman', id: 1011335},
  {name: '3Spider-man', id: 1011336},
  {name: '4superman', id: 1011337},
  {name: '5Spider-man', id: 1011338},
  {name: '6superman', id: 1011339},
  {name: '7Spider-man', id: 1011344},
  {name: '8superman', id: 1011354},
  {name: '9Spider-man', id: 1011364},
  {name: '0superman', id: 1011374},
  {name: '11Spider-man', id: 1011384},
  {name: 's12uperman', id: 1011394},
  {name: '13Spider-man', id: 1011434},
  {name: '14superman', id: 1011534},
  {name: '15Spider-man', id: 1011634},
  {name: '16superman', id: 1011734},
  {name: '17Spider-man', id: 1011834},
  {name: '18superman', id: 1011834}
];

function HeroesList(props) {
  const { classes } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = React.useState(0);

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