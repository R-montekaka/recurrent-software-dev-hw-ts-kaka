import { useState } from "react";

import { makeStyles } from "@/styles/makeStyles";

import {
  Add as AddIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Divider,
  InputAdornment,
  Link,
  Paper,
  Snackbar,
  TextField,
  Typography,
  TypographyProps,
} from "@mui/material";

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
    "h1",
    "h2",
    "h3",
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

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  return (
    <>
      <Typography variant="h4">Typography</Typography>
      <Paper className={classes.themeSection} component="section">
        <Box p={2}>
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
      </Paper>
      <Typography variant="h4">TextFields</Typography>
      <Paper className={classes.themeSection} component="section">
        <Box p={2} className={classes.spacedComponents}>
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
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="outlined-search" label="Search field" type="search" />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
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
            id="outlined-adornment-end"
            margin="normal"
            label="Last Name"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
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
      </Paper>
      <Typography variant="h4">Buttons</Typography>
      <Paper className={classes.themeSection} component="section">
        <div className={classes.spacedComponents}>
          <Typography variant="overline" component="h2">
            Contained with <code>startIcon</code>
          </Typography>
          <Button variant="contained" startIcon={<AddIcon />}>
            Icon
          </Button>
          <Button variant="contained" color="primary" startIcon={<AddIcon />}>
            Primary
          </Button>
          <Button variant="contained" color="secondary" startIcon={<AddIcon />}>
            Secondary
          </Button>
          <Button variant="contained" disabled startIcon={<AddIcon />}>
            Disabled
          </Button>
          <Button variant="contained" href="#" startIcon={<AddIcon />}>
            Link
          </Button>
        </div>

        <div className={classes.spacedComponents}>
          <Typography variant="overline" component="h2">
            Contained
          </Typography>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="primary" href="#">
            Link
          </Button>
        </div>

        <div className={classes.spacedComponents}>
          <Typography variant="overline" component="h2">
            Regular
          </Typography>
          <Button>Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button disabled>Disabled</Button>
          <Button href="#" color="primary">
            Link
          </Button>
        </div>

        <div className={classes.spacedComponents}>
          <Typography variant="overline" component="h2">
            Outlined
          </Typography>
          <Button variant="outlined">Default</Button>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
          <Button variant="outlined" color="primary" href="#">
            Link
          </Button>
        </div>

        <div className={classes.spacedComponents}>
          <Typography variant="overline" component="h2">
            Contained
          </Typography>
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained">Default</Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </div>

        <div className={classes.spacedComponents}>
          <Typography variant="overline" component="h2">
            Outlined
          </Typography>
          <Button variant="outlined" size="small">
            Small
          </Button>
          <Button variant="outlined">Default</Button>
          <Button variant="outlined" size="large">
            Large
          </Button>
        </div>

        <div className={classes.spacedComponents}>
          <Typography variant="overline" component="h2">
            Regular
          </Typography>
          <Button variant="text" size="small">
            Small
          </Button>
          <Button variant="text">Default</Button>
          <Button variant="text" size="large">
            Large
          </Button>
        </div>
      </Paper>
      <Typography variant="h4">Cards</Typography>
      <Box className={classes.themeSection} component="section">
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography variant="overline" component="h4" color="secondary">
                Tesla • 2019
              </Typography>
              <Typography variant="body2" component="h2">
                Model Y 75D All-Wheel Drive
              </Typography>
              <Typography variant="body2" color="textSecondary">
                #19301834
              </Typography>
              <Divider className={classes.divider} />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2" color="textSecondary">
                  156 range
                  <br />
                  3,456 miles
                </Typography>

                <Typography>
                  <strong>$36,000</strong>
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button>View Report</Button>
          </CardActions>
        </Card>
      </Box>
      <Typography variant="h4">Snackbar</Typography>
      <Box className={classes.themeSection} component="section">
        <Card>
          <CardContent>
            <Snackbar
              open={snackbarOpen}
              onClose={() => setSnackbarOpen(false)}
            >
              <Alert severity="success" onClose={() => setSnackbarOpen(false)}>
                Hi, I'm a Snackbar!
              </Alert>
            </Snackbar>
            <Button variant="contained" onClick={() => setSnackbarOpen(true)}>
              Open Snackbar
            </Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ExampleMUIComponents;
