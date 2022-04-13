import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { styled } from "@mui/material/styles";
import { Vehicle } from "interfaces";
import Link from "./Link";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.text.primary,
    fontWeight: 800,
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": { backgroundColor: theme.palette.action.hover },
}));

export default function VehiclesTable() {
  const [data, setData] = useState<Vehicle[]>();
  const [isLoading, setLoading] = useState(false);
  const [chargedAbove, setChargedAbove] = useState<string>('');

  const chargedAboveOptions = ["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1"];

  const handleChange = (event: SelectChangeEvent) => {
    setChargedAbove(event.target.value);
  };  

  useEffect(() => {
    setLoading(true);
    fetch(`api/vehicles?chargedAbove=${chargedAbove}`)
      .then((res) => res.json())
      .then((data: Vehicle[]) => {
        setData(data);
        setLoading(false);
      });
  }, [chargedAbove]);

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="charge-above-select">Charged Above</InputLabel>
        <Select
          labelId="charge-above-select"
          id="charge-above-select"
          value={chargedAbove}
          label="Charged Above"
          onChange={handleChange}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {
            chargedAboveOptions.map((option, idx) => <MenuItem key={`option-${idx}+1`} value={option}>{option}</MenuItem>)
          }
        </Select>        
      </FormControl>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="vehicle table">
          {
            isLoading ? <CircularProgress sx={{ margin: "4px" }} /> : 
            <>
            <TableHead>          
              <TableRow>
                <StyledTableCell>VIN</StyledTableCell>
                <StyledTableCell>Make</StyledTableCell>
                <StyledTableCell>Model</StyledTableCell>
                <StyledTableCell>Year</StyledTableCell>
                <StyledTableCell>Color</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((vehicle) => (
                <StyledTableRow
                  key={vehicle.vin}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">#{vehicle.vin}</StyledTableCell>                
                  <StyledTableCell component="th" scope="row">{vehicle.mmy.make}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">{vehicle.mmy.model}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">{vehicle.mmy.year}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {vehicle.color && <div style={{backgroundColor: vehicle.color, width: "36px", height: "16px"}}/>}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <Link href={`/vehicles/${vehicle.vin}`} color="secondary">View Vehicle</Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            </>          
          }        
        </Table>
      </TableContainer>
    </>
  );
}
