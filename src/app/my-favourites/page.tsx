import FavouritesList from "../ui/shared/favourites/favourites-list";
import Breadcrumbs from "../ui/shared/breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ODDPODS | My favourites",
};

export default function Page() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Podcasts", href: "/podcasts" },
          { label: "My favourites", href: "/my-favourites", active: true },
        ]}
      />
      <main className="w-[calc(100% - 20px)] mx-3 my-auto">
        <FavouritesList />
      </main>
    </>
  );
}
