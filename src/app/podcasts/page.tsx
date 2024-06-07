import Podcasts from "../ui/Podcasts";
import Breadcrumbs from "../ui/shared/breadcrumbs";

export default function Page() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Podcasts", href: "/podcasts", active: true },
        ]}
      />
      <main className="flex min-h-screen flex-col items-start justify-between p-24 w-full">
        <h1 className="mt-12 text-3xl font-bold">Find your next podcast</h1>
        <Podcasts />
      </main>
    </>
  );
}
