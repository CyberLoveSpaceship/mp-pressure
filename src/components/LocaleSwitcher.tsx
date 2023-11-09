"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const search = useSearchParams();
  const segments = pathName.split("/");
  const currentLocale = segments[1];
  const otherLocale = currentLocale === "en" ? "fr" : "en";

  segments[1] = otherLocale;
  const uriForOtherLocale = `${segments.join("/")}?${search.toString()}`;

  return (
    <div>
      <Link href={uriForOtherLocale}>{otherLocale.toUpperCase()}</Link>
    </div>
  );
}
