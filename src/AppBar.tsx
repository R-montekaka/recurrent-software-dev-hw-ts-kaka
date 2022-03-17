import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import RecurrentLogo from "./RecurrentLogo";

export default function RecurrentAppBar() {
  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <RecurrentLogo />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
