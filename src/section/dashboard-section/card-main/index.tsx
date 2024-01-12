import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import TypeColorGet from "@/utilti/type-color-get";
import {
  Box,
  Button,
  Grid,
  IconButton,
  SvgIcon,
  Typography,
} from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { format } from "date-fns";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";
import { enqueueSnackbar } from "notistack";
interface ICardMainProps {
  type: "cosmic" | "classic" | "atomic";
  apiData?: any;
}

function CardMain(props: ICardMainProps) {
  const { apiData, type } = props;
  const [zoom, setzoom] = useState(false);
  const { bgcolor, secondColor }: any = TypeColorGet(type);
  const [timeLeft, setTimeLeft] = useState<any>(apiData?.data?.nextDraw ?? 0);
  const { push } = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime: any) => prevTime - 2);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Paper variant="elevation" elevation={3} sx={{ bgcolor: bgcolor }}>
      {!zoom && (
        <Grid container>
          <Grid xs={12} item px={2}>
            <Box display={"flex"} alignItems={"center"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={1}
                flexWrap={"wrap"}
              >
                <Typography variant="body1" color={secondColor}>
                  {apiData?.data.lotteryName ?? type}
                </Typography>
                <Typography variant="body1" color={secondColor}>
                  No {apiData?.data.roundNumber ?? "-"}
                </Typography>
              </Box>
              <Box ml={"auto"}>
                <IconButton
                  onClick={() => {
                    setzoom(zoom ? false : true);
                  }}
                >
                  {zoom ? (
                    <ZoomOutIcon sx={{ color: secondColor }} />
                  ) : (
                    <ZoomInIcon sx={{ color: secondColor }} />
                  )}
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} item px={2}>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              {[0, 5, 6, 6, 7].map((data, index) => (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      width: 35,
                      height: 35,
                      borderRadius: "50%",
                      bgcolor:
                        apiData?.data.previousWinningticket.length === index
                          ? secondColor
                          : "#595857",
                      color: "white",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                      flexWrap: "wrap",
                    }}
                  >
                    {data}
                  </Box>
                </>
              ))}
            </Box>
          </Grid>
          <Grid xs={12} item px={2} mt={2}>
            <Box display={"flex"} alignItems={"center"}>
              <Typography variant="body1" color="initial">
                Winning Pot
              </Typography>
              <Box ml={"auto"}>
                <Typography variant="body1" color="initial">
                  {apiData?.data.winningPot ?? "-"}luck
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
      {zoom && (
        <Grid container>
          <Grid xs={12} item px={2}>
            <Box display={"flex"} alignItems={"center"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={1}
                flexWrap={"wrap"}
              >
                <Typography variant="body1" color={secondColor}>
                  {apiData?.data.lotteryName ?? type}
                </Typography>
                <Typography variant="body1" color={secondColor}>
                  Past 5 Results
                </Typography>
              </Box>
              <Box ml={"auto"}>
                <IconButton
                  onClick={() => {
                    setzoom(zoom ? false : true);
                  }}
                >
                  {zoom ? (
                    <ZoomOutIcon sx={{ color: secondColor }} />
                  ) : (
                    <ZoomInIcon sx={{ color: secondColor }} />
                  )}
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} lg={4} item>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              width={"100%"}
            >
              {[
                "2302123",
                "2302123",
                "2302123",
                "2302123",
                "2302123",
                "2302123",
              ].map((data, index) => (
                <>
                  <Box>
                    <Typography variant="h6" color="initial">
                      {data}
                    </Typography>
                  </Box>
                </>
              ))}
            </Box>
          </Grid>
          <Grid xs={12} lg={4} item>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              width={"100%"}
            >
              {[
                "2302123",
                "2302123",
                "2302123",
                "2302123",
                "2302123",
                "2302123",
              ].map((data, index) => (
                <>
                  <Box>
                    <Typography variant="h6" color={secondColor}>
                      99 99 99 99 99 99
                    </Typography>
                  </Box>
                </>
              ))}
            </Box>
          </Grid>
          <Grid xs={12} lg={4} item>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              width={"100%"}
            >
              {[
                "2302123",
                "2302123",
                "2302123",
                "2302123",
                "2302123",
                "2302123",
              ].map((data, index) => (
                <>
                  <Box>
                    <Typography variant="h6" color="initial">
                      14, 934, 000, 000
                    </Typography>
                  </Box>
                </>
              ))}
            </Box>
          </Grid>
        </Grid>
      )}
      <Grid container>
        <Grid xs={12} px={2} py={2}>
          <Box
            display={"flex"}
            alignItems={"center"}
            bgcolor={secondColor}
            borderRadius={2}
            px={2}
            py={1}
          >
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <Typography variant="body1" color="#FFFF">
                Next Draw
              </Typography>
              <SvgIcon>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.68769 10.1313H8.99084C9.19837 10.1313 9.36928 10.0611 9.50356 9.92061C9.64395 9.78015 9.71414 9.60916 9.71414 9.40763V3.80153C9.71414 3.6 9.64395 3.42901 9.50356 3.28855C9.36928 3.14809 9.19837 3.07786 8.99084 3.07786C8.78942 3.07786 8.61851 3.14809 8.47813 3.28855C8.33774 3.42901 8.26755 3.6 8.26755 3.80153V8.68397H4.68769C4.48016 8.68397 4.30621 8.7542 4.16582 8.89466C4.02543 9.03511 3.95524 9.20611 3.95524 9.40763C3.95524 9.60916 4.02543 9.78015 4.16582 9.92061C4.30621 10.0611 4.48016 10.1313 4.68769 10.1313ZM9 18C10.233 18 11.3896 17.7649 12.47 17.2947C13.5565 16.8244 14.5148 16.174 15.3449 15.3435C16.175 14.5191 16.825 13.5634 17.295 12.4763C17.765 11.3893 18 10.229 18 8.99542C18 7.76183 17.762 6.60458 17.2859 5.52366C16.8159 4.43664 16.1658 3.47786 15.3357 2.64733C14.5117 1.81679 13.5565 1.16947 12.47 0.705343C11.3835 0.235114 10.2238 0 8.99084 0C7.76399 0 6.60732 0.235114 5.52085 0.705343C4.43438 1.16947 3.47609 1.81679 2.64598 2.64733C1.82197 3.47786 1.17497 4.43664 0.704985 5.52366C0.234995 6.60458 0 7.76183 0 8.99542C0 10.229 0.234995 11.3893 0.704985 12.4763C1.17497 13.5634 1.82197 14.5191 2.64598 15.3435C3.47609 16.174 4.43438 16.8244 5.52085 17.2947C6.60732 17.7649 7.76704 18 9 18ZM9 16.1038C8.01729 16.1038 7.09563 15.9206 6.23499 15.5542C5.37436 15.1878 4.6175 14.6809 3.96439 14.0336C3.3174 13.3802 2.81078 12.6229 2.44456 11.7618C2.07833 10.9008 1.89522 9.97863 1.89522 8.99542C1.89522 8.01221 2.07833 7.09008 2.44456 6.22901C2.81078 5.36794 3.3174 4.61374 3.96439 3.96641C4.6175 3.31298 5.37131 2.80305 6.22584 2.43664C7.08647 2.07023 8.00814 1.88702 8.99084 1.88702C9.97965 1.88702 10.9013 2.07023 11.7558 2.43664C12.6165 2.80305 13.3703 3.31298 14.0173 3.96641C14.6704 4.61374 15.1801 5.36794 15.5463 6.22901C15.9186 7.09008 16.1048 8.01221 16.1048 8.99542C16.1109 9.97863 15.9278 10.9008 15.5554 11.7618C15.1892 12.6229 14.6826 13.3802 14.0356 14.0336C13.3886 14.6809 12.6348 15.1878 11.7742 15.5542C10.9135 15.9206 9.98881 16.1038 9 16.1038Z"
                    fill="white"
                  />
                </svg>
              </SvgIcon>
              <Typography variant="body1" color="#FFFF">
                {format(new Date(0).setSeconds(timeLeft), "HH:mm:ss")}
              </Typography>
            </Box>
            <Box ml={"auto"}>
              <Button
                sx={{ bgcolor: "#ffff !important", color: secondColor }}
                variant="contained"
                onClick={() => {
                  !isAuthenticated
                    ? push("/auth/login")
                    : enqueueSnackbar("You can play Lottery", {
                        variant: "success",
                      });
                }}
              >
                play
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CardMain;
