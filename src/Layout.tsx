import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ProTip from "./ProTip";
import AppBar from "./AppBar";
import Copyright from "./Copyright";

export default function Layout(props: any) {  
  return (
    <Box>
      <AppBar />
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.children}
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Box>
  )
}