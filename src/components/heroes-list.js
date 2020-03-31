import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroRow from './hero-row';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const rows = [
  {name: '1Spider-man'},
  {name: '2superman'},
  {name: '3Spider-man'},
  {name: '4superman'},
  {name: '5Spider-man'},
  {name: '6superman'},
  {name: '7Spider-man'},
  {name: '8superman'},
  {name: '9Spider-man'},
  {name: '0superman'},
  {name: '11Spider-man'},
  {name: 's12uperman'},
  {name: '13Spider-man'},
  {name: '14superman'},
  {name: '15Spider-man'},
  {name: '16superman'},
  {name: '17Spider-man'},
  {name: '18superman'}
];

function HeroesList(props) {
  const { classes } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
          ).map((row) => (
            <HeroRow hero={row} key={row} />
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