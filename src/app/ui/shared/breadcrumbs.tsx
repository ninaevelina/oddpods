"use client";

import Link from "next/link";
import { BreadcrumbIcon } from "./icons/breadcrumb-icon";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <nav
      aria-label="Breadcrumb menu"
      className={`h-[50px] flex items-center mx-auto w-full ${
        pathname === "/podcasts" ? "mt-[50px]" : ""
      }`}
    >
      <ol className="flex w-full mx-auto pl-3">
        <li>
          <BreadcrumbIcon />
        </li>
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
