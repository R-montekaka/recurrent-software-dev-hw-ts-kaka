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
        <TableHead>
          <TableRow>
            <StyledTableCell>
              {isLoading ? <CircularProgress sx={{ margin: "4px" }} /> : "VIN"}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((vehicle) => (
            <StyledTableRow
              key={vehicle.vin}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                #{vehicle.vin}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
