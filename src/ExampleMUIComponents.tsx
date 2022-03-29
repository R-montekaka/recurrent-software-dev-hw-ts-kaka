import { makeStyles } from "@/styles/makeStyles";

import {
  Add as AddIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
  TypographyProps,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const useStyles = makeStyles()((theme) => ({
  spacedComponents: {
    "& > * ": {
      margin: theme.spacing(1),
    },
  },
  themeSection: {
    margin: "8px",
    padding: "8px",
  },
  links: {
    padding: theme.spacing(1),
  },
  color: {
    position: "relative",
    height: 0,
    paddingBottom: "66.66%",
    borderRadius: 0,
    "& > div": {
      position: "absolute",
      height: "100%",
      width: "100%",
      padding: theme.spacing(2),
      color: "white",
    },
    "& code": {
      fontSize: ".8em",
    },
  },
  code: {
    border: "1px solid rgba(0,0,0,.1)",
    borderRadius: ".1em",
    padding: ".1em .3em",
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
}));

const ExampleMUIComponents = () => {
  const { classes } = useStyles();
  const typographyVariants: TypographyProps["variant"][] = [
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "button",
    "caption",
    "overline",
  ];

  return (
    <>
      <Paper className={classes.themeSection} component="section">
        <Box p={2} className={classes.spacedComponents}>
          <Typography variant="h4">Buttons</Typography>
          <Button variant="contained" startIcon={<AddIcon />}>
            Icon
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button href="#" color="primary">
            Regular Link
          </Button>
          <Button>Outlined</Button>
        </Box>
        <Box p={2} className={classes.spacedComponents}>
          <Typography variant="h4">TextFields</Typography>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            helperText="Some important text"
          />
          <TextField
            id="outlined-adornment"
            margin="normal"
            label="First Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-error"
            label="Required Field"
            error={true}
            helperText={"This field is required"}
          />
        </Box>
        <Box p={2} className={classes.spacedComponents}>
          <Typography variant="h4">Typography</Typography>

          {typographyVariants.map((variant) => (
            <div key={variant}>
              <Typography variant={variant}>
                <code className={classes.code}>{variant}</code>: Recurrent Auto
              </Typography>
              <br />
            </div>
          ))}

          <Typography variant="overline" component="h2">
            Links
          </Typography>
          <div className={classes.links}>
            <Link href="#">Check out this Link!</Link>
            <br />
            <a href="#">Check out this a tag!</a>
          </div>
        </Box>
        <Paper sx={{ backgroundColor: "hsl(220, 38%, 97%)" }}>
          <Box className={classes.themeSection} component="section">
            <Typography variant="h4">Table</Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 300 }} aria-label="vehicle table">
                <TableHead>
                  <TableRow>
                    <TableCell>Column Header 1</TableCell>
                    <TableCell>Column Header 2</TableCell>
                    <TableCell>Column Header 3</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>Row 1 Cell 1</TableCell>
                    <TableCell>Row 1 Cell 2</TableCell>
                    <TableCell>Row 1 Cell 3</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>Row 2 Cell 1</TableCell>
                    <TableCell>Row 2 Cell 2</TableCell>
                    <TableCell>Row 2 Cell 3</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Paper>
      </Paper>
    </>
  );
};

export default ExampleMUIComponents;
