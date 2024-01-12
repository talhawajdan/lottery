import { useEffect, useState } from "react";
// next
import { useRouter } from "next/router";
// hooks

// routes
import { PATH_DASHBOARD } from "../routes/paths";
import Loading from "@/components/loading";
import useAuth from "@/hooks/useAuth";

// ----------------------------------------------------------------------

export default function GuestGuard({ children }: any) {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const { isAuthenticated, isInitialized } = useAuth();

  useEffect(() => {
    if (!isInitialized) return;
    if (isAuthenticated) {
      push(PATH_DASHBOARD.root);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
  }, [isAuthenticated, push, isInitialized]);

  if (!isInitialized || isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return <>{children}</>;
}
