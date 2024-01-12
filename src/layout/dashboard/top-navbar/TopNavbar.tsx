import useAuth from "@/hooks/useAuth";
import { Box, Button, SvgIcon, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const Topnavbar = () => {
  const { logout, isAuthenticated } = useAuth();
  const { push } = useRouter();
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent={"center"}
      flexWrap={"wrap"}
    >
      <Box mr={"auto"}>
        <SvgIcon sx={{ fontSize: 35 }}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" fill="white" />
            <path
              d="M8.98391 29H31.0161C31.2901 29 31.5226 28.8617 31.7135 28.5852C31.9045 28.2966 32 27.9479 32 27.5391C32 27.1543 31.9045 26.8236 31.7135 26.5471C31.5226 26.2705 31.2901 26.1323 31.0161 26.1323H8.98391C8.70991 26.1323 8.47743 26.2705 8.28646 26.5471C8.09549 26.8236 8 27.1543 8 27.5391C8 27.9479 8.09549 28.2966 8.28646 28.5852C8.47743 28.8617 8.70991 29 8.98391 29ZM8.98391 21.4248H31.0161C31.2901 21.4248 31.5226 21.2866 31.7135 21.01C31.9045 20.7335 32 20.3968 32 20C32 19.5912 31.9045 19.2485 31.7135 18.9719C31.5226 18.6954 31.2901 18.5571 31.0161 18.5571H8.98391C8.70991 18.5571 8.47743 18.6954 8.28646 18.9719C8.09549 19.2485 8 19.5912 8 20C8 20.3968 8.09549 20.7335 8.28646 21.01C8.47743 21.2866 8.70991 21.4248 8.98391 21.4248ZM8.98391 13.8497H31.0161C31.2901 13.8497 31.5226 13.7114 31.7135 13.4349C31.9045 13.1463 32 12.8096 32 12.4248C32 12.0281 31.9045 11.6914 31.7135 11.4148C31.5226 11.1383 31.2901 11 31.0161 11H8.98391C8.70991 11 8.47743 11.1443 8.28646 11.4329C8.09549 11.7094 8 12.0401 8 12.4248C8 12.8096 8.09549 13.1463 8.28646 13.4349C8.47743 13.7114 8.70991 13.8497 8.98391 13.8497Z"
              fill="black"
            />
          </svg>
        </SvgIcon>
      </Box>

      <Box ml={"auto"} mr={"auto"}>
        <Typography variant="h4" color="initial">
          Lottery
        </Typography>
      </Box>
      <Box ml={"auto"}>
        {isAuthenticated && (
          <Button
            variant="contained"
            onClick={() => {
              logout();
            }}
          >
            logout
          </Button>
        )}
        {!isAuthenticated && (
          <Button
            variant="contained"
            onClick={() => {
              push("/auth/login");
            }}
          >
            login
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Topnavbar;
