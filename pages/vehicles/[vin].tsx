import type { NextPage } from "next";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { Container, Typography, Box, Grid, } from "@mui/material"
import AppBar from "../../src/AppBar";
import Link from "../../src/Link";
import ProTip from "../../src/ProTip";
import Copyright from "../../src/Copyright";
import VehicleDetail from '../../src/VehicleDetail'

import { Vehicle } from "interfaces";

const Vehicle: NextPage = () => {
  const { query } = useRouter();
  const vin = query["vin"];
  const [data, setData] = useState<Vehicle>()

  useEffect(() => {
    if(vin) {
      fetch(`/api/vehicles/${vin}`)
        .then((res) => res.json())
        .then((data: Vehicle) => {
          setData(data);
          // setLoading(false);
        });
    }
  }, [vin])

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
            Vehicle Details
          </Typography>
          <Grid container justifyContent="center" rowSpacing={2}>
            <Grid item container direction="row" justifyContent="center" alignItems="center" columnSpacing={2}>
              <Grid item>
                <Typography variant="h5" component="h2" color="secondary">{data?.mmy.make}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" component="h2" color="secondary">{data?.mmy.model}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" component="h3" color="secondary">&#9679;</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" component="h2" color="secondary">{data?.mmy.year}</Typography>              
              </Grid>            
            </Grid>
            <Grid item>
              <VehicleDetail vin={vin}/>
            </Grid>
          </Grid>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Box>
  )
}

export default Vehicle;