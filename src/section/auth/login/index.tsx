import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import { LoginFormSchema, defValues } from "./login.data";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "@/components/hook-forms/FormProvider";
import RHFTextField from "@/components/hook-forms/RHFTextField";
import { LoadingButton } from "@mui/lab";
import { enqueueSnackbar } from "notistack";
import useAuth from "@/hooks/useAuth";

function LoginForm() {
  // login from hook
  const methods: any = useForm({
    resolver: yupResolver(LoginFormSchema),
    defaultValues: defValues,
  });
  const { login } = useAuth();

  const { handleSubmit, reset } = methods;
  const onSubmit = (data: any) => {
    const { email, password } = data;
    console.log(data);
    if (email === "talhaWajdan@twcreative.com" && password === "1234danny") {
      login({
        data: {
          authToken: "11555dddffmm",
          refreshToken: "11555dddffmm",
          user: { email: email, password: password },
        },
      });
      enqueueSnackbar("Log in Successfully", {
        variant: "success",
      });
    } else {
      enqueueSnackbar("Email password incorrect", {
        variant: "error",
      });
      return;
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid xs={12} mt={15} px={{ xs: 0, lg: 50 }} item>
          <Paper elevation={3}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width={"100%"}
              py={15}
            >
              <Box
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                flexDirection={"column"}
                width={"100%"}
                gap={2}
                px={35}
              >
                <Typography variant="h6" fontWeight={700} color="primary">
                  Lottery login
                </Typography>
                <RHFTextField
                  name={"email"}
                  label={"email"}
                  fullWidth
                  size="small"
                />
                <RHFTextField
                  name={"password"}
                  label={"password"}
                  type={"password"}
                  fullWidth
                  size="small"
                />
                <LoadingButton variant="contained" type="submit">
                  login
                </LoadingButton>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

export default LoginForm;
