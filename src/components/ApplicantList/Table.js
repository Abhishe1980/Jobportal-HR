import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pictur3img from '../../Assets/Picture3.png';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'lightgrey',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(names, status, work, ctc, location, skills, posted) {
  return { names, status, work, ctc, location, skills, posted };
}

const rows = [
  createData(
    'Abhishek Tiwari',
    'Available',
    '5 yrs',
    '15 LPA',
    'Delhi NCR',

    'Java Python C C++ React JS',
    '1 day'
  ),
  createData(
    'Akash Vanan',
    'Available',
    '5 yrs',
    '16 LPA',
    'Vellore',
    'Java Python C C++ Nest JS React JS',
    '2 days'
  ),
  createData(
    'Ankit Dubey',
    'Not Available',
    ' 4 yrs',
    '17 LPA',
    'Delhi NCR',
    'Java Python C C++ React JS',
    '3 days'
  ),
  createData(
    'Vikash Varma',
    'Available',
    '5yrs',
    '15 LPA',
    'Delhi NCR',
    'Java Python C C++ React JS',
    '1 day'
  ),
  createData(
    'Aditi Ahuja',
    'Available',
    '5yrs',
    '15 LPA',
    'Delhi NCR',
    'Java Python C C++ React JS',
    '1 day'
  ),
  createData(
    'Sakshi Tyrewala',
    'Not Available',
    ' 4 yrs',
    '17 LPA',
    'Delhi NCR',
    'Java Python C C++ React JS',
    '3 days'
  ),
  createData(
    'Rahul Ranjan',
    'Available',
    '5yrs',
    '15 LPA',
    'Delhi NCR',
    'Java Python C C++ React JS',
    '1 day'
  ),
  createData(
    'Jigyasa sawansuka',
    'Available',
    '5yrs',
    '15 LPA',
    'Delhi NCR',
    'Java Python C C++ React JS',
    '1 day'
  ),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700  }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell sx={{ minWidth: 50 }}>
             </StyledTableCell>
            <StyledTableCell sx={{ minWidth: 250 }}>
            Name</StyledTableCell>
            <StyledTableCell align="center" sx={{ minWidth: 150 }}>
              Status
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ minWidth: 100 }}>
              Work Exp.
            </StyledTableCell>
            <StyledTableCell align="right" sx={{ minWidth: 50 }}>
              CTC
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ minWidth: 150 }}>
              Location
            </StyledTableCell>
                        <StyledTableCell align="center" sx={{ minWidth: 250 }}>
              Skills
            </StyledTableCell>
            <StyledTableCell align="right">Posted</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
                <img alt="Remy Sharp" src={Pictur3img} />
              <StyledTableCell component="th" scope="row">
                {row.names}
              </StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <StyledTableCell align="center">{row.work}</StyledTableCell>
              <StyledTableCell align="right">{row.ctc}</StyledTableCell>
              <StyledTableCell align="center">{row.location}</StyledTableCell>
              <StyledTableCell align="center">{row.skills}</StyledTableCell>
              <StyledTableCell align="right">{row.posted}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

