import { AuthProvider } from "@/contexts/AuthContext";
import store from "@/redux/store";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import { Provider as ReduxProvider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <>
      <ReduxProvider store={store}>
        <SnackbarProvider
          maxSnack={1}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={2000}
        >
          <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
        </SnackbarProvider>
      </ReduxProvider>
    </>
  );
}
