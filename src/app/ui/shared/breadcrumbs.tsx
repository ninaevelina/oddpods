import Link from "next/link";

interface Breadcrumb {
  active?: boolean;
  label: string;
  href: string;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav
      aria-label="Breadcrumb menu"
      className="h-[50px] flex items-center mx-auto outline outline-[1px] outline-black w-full"
    >
      <ol className="flex w-[90%] mx-auto">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            className={breadcrumb.active ? `text-gray-900` : `text-gray-500`}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-4 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
