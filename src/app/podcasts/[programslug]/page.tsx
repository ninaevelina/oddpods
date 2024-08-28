import Podcast from "@/app/ui/Podcast";
import Breadcrumbs from "@/app/ui/shared/breadcrumbs";
import { getPodcastBySlug } from "@/lib/actions";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { programslug: string };
}) {
  const programslug = params.programslug;
  const podcast = await getPodcastBySlug(programslug);
  console.log(podcast?.description);
  console.log(podcast?.name);

  if (!podcast) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Podcasts", href: "/podcasts" },
          {
            label: `${podcast?.name}`,
            href: `/podcasts/${programslug}`,
            active: true,
          },
        ]}
      />
      {podcast && <Podcast podcast={podcast} isListItem={false} />}
    </>
  );
}
