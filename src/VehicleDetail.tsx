import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Grid from "@mui/material/Grid";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";

import { DataPoint, VehicleDataPoint } from "interfaces";

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

export interface IVehicleDeatil {
  vin?: string;
}

const VehicleDetail = ({vin}: IVehicleDeatil) => {
  const [data, setData] = useState<VehicleDataPoint>();

  useEffect(() => {
    if(vin) {
      fetch(`/api/vehicles/${vin}/datapoints`)
      .then((res) => res.json())
      .then((datapoints: DataPoint[]) => {
        
        if(datapoints.length > 0) {
          datapoints.sort((a: DataPoint, b: DataPoint) => {
            if(a < b) {
              return 1;
            }
            if( a > b) {
              return -1;
            }
            return 0;
          })        
  
          const has_charge_above = datapoints.filter((dp: DataPoint) => dp.charge_reading >= 0.8).length > 0
          const {created_at, odometer} = datapoints[0];
          setData({created_at, odometer, has_charge_above})
        }
      })
    }
  }, [vin])

  if(data) {
    const {created_at, odometer, has_charge_above} = data;
    return (      
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="vehicle table">
          <TableBody>
            <StyledTableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">Charged Above 80%</StyledTableCell>
              <StyledTableCell component="th" scope="row">{has_charge_above ? "True" : "False"}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">Latest Odometer</StyledTableCell>
              <StyledTableCell component="th" scope="row">{odometer}</StyledTableCell>
            </StyledTableRow>                        
            <StyledTableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">Latest Data Point</StyledTableCell>
              <StyledTableCell component="th" scope="row">{created_at}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      
    )
  }

  return null;
}

export default VehicleDetail;