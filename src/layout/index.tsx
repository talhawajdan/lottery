// // guards
// import AuthGuard from "@root/guards/AuthGuard";
// // components
// import DashboardLayout from "./dashboard";
// import GuestGuard from "@root/guards/GuestGuard";
// import AuthLayout from "./AuthLayout";

import DashboardLayout from "./dashboard";

// ----------------------------------------------------------------------

export default function Layout({
  variant = "dashboard",
  children,
  ...others
}: any) {
  return <DashboardLayout> {children}</DashboardLayout>;
}
