import Page from "@/components/ui/page";
import GuestGuard from "@/guards/GuestGuard";
import LoginForm from "@/section/auth/login";
import { useRouter } from "next/router";
import React from "react";

function login() {
  return (
    <GuestGuard>
      <Page title="auth/login">
        <LoginForm />
      </Page>
    </GuestGuard>
  );
}

export default login;
