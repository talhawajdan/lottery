import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CardMain from "./card-main";

function DashboardSection() {
  return (
    <Grid container>
      <Grid xs={12} mt={2} item>
        <Typography variant="h5" color="initial">
          Latest Results
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={2}
          width={"100%"}
        >
          <CardMain type="cosmic" />
          <CardMain type="classic" />
          <CardMain type="atomic" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default DashboardSection;
