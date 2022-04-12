import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

  useEffect(() => {
    setLoading(true);
    fetch("api/vehicles")
      .then((res) => res.json())
      .then((data: Vehicle[]) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
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
  );
}
