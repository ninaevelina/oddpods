import Podcast from "@/app/ui/Podcast";
import Breadcrumbs from "@/app/ui/shared/breadcrumbs";
import { getPodcastBySlug } from "@/lib/actions";

export default async function Page({
  params,
}: {
  params: { programslug: string };
}) {
  const programslug = params.programslug;
  const podcast = await getPodcastBySlug(programslug);
  console.log(podcast?.description);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Podcasts", href: "/podcasts" },
          { label: "Podcast", href: `/podcasts/${programslug}`, active: true },
        ]}
      />
      {podcast && <Podcast podcast={podcast} isListItem={false} />}
    </main>
  );
}
