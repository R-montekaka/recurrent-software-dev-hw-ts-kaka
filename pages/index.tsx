import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Link from "../src/Link";
import VehiclesTable from "../src/VehiclesTable";
import Layout from "../src/Layout"

const Home: NextPage = () => {
  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
          Vehicle Inventory
        </Typography>
        <VehiclesTable />
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
    </Layout>    
  );
};

export default Home;
