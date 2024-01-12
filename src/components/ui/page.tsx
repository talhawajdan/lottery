import { forwardRef } from "react";
// next
import Head from "next/head";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const Page = forwardRef(
  ({ children, title = "", meta, ...other }: any, ref) => {
    return (
      <>
        <Head>
          <title>{`${title} | lottery`}</title>
          {meta}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <Box ref={ref} sx={styles.backgroundStyles} {...other}>
          {children}
        </Box>
      </>
    );
  }
);

Page.displayName = "Page";

export default Page;

// ----------------------------------------------------------------------
// Styles
const styles = {
  backgroundStyles: (theme: any) => ({
    backgroundColor: theme.palette.background.default,
  }),
};
