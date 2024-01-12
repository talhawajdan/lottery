import { Box } from "@mui/material";
import Topnavbar from "./top-navbar/TopNavbar";
// ----------------------------------------------------------------------

export default function DashboardLayout({ children }: any) {
  return (
    <Box>
      <Topnavbar />
      <Box>{children} </Box>
    </Box>
  );
}
