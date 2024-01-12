import Page from "@/components/ui/page";
import Layout from "@/layout";
import DashboardSection from "@/section/dashboard-section";
Dashboard.getLayout = function getLayout(page: any) {
  return <Layout title="Dashboard">{page}</Layout>;
};

export default function Dashboard() {
  return (
    <Page title="Dashboard">
      <DashboardSection />
    </Page>
  );
}
