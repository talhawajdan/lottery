import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CardMain from "./card-main";
import { useGetLotteryQuery } from "@/services/getLottery";

function DashboardSection() {
  const { data: cosmicData } = useGetLotteryQuery({
    param: { type: "COSMIC" },
  });

  const { data: classicData } = useGetLotteryQuery({
    param: { type: "CLASSIC" },
  });

  const { data: atomicData } = useGetLotteryQuery({
    param: { type: "ATOMIC" },
  });
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
          <CardMain type="cosmic" apiData={cosmicData} />
          <CardMain type="classic" apiData={classicData} />
          <CardMain type="atomic" apiData={atomicData} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default DashboardSection;
