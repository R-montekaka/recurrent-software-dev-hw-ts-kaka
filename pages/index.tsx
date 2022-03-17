import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AppBar from "../src/AppBar";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";

const Home: NextPage = () => {
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
          <Typography variant="h4" component="h1" gutterBottom>
            Recurrent Homework
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            MUI v5 + Next.js with TypeScript sandbox
          </Typography>
          <Paper sx={{ my: 4 }}>
            <Box p={6}>Vehicle List Goes Here</Box>
          </Paper>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
