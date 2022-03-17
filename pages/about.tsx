import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppBar from "../src/AppBar";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import ExampleMUIComponents from "../src/ExampleMUIComponents";

const About: NextPage = () => {
  const [data, setData] = useState<{ status: string }>({ status: "unknown" });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("api/healthcheck")
      .then((res) => res.json())
      .then((data: { status: string }) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
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
          <Typography variant="h6" component="h1" gutterBottom>
            Server Status: {isLoading ? "Loading..." : data?.status || "Error"}
          </Typography>
          <ExampleMUIComponents />
          <Box maxWidth="sm">
            <Button variant="contained" component={Link} noLinkStyle href="/">
              Go to the home page
            </Button>
          </Box>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

export default About;
