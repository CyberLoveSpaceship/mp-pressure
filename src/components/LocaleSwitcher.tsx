"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const segments = pathName.split("/");
  const currentLocale = segments[1];
  const otherLocale = currentLocale === "en" ? "fr" : "en";

  segments[1] = otherLocale;
  const uriForOtherLocale = segments.join("/");

  return (
    <div>
      <Link href={uriForOtherLocale}>{otherLocale.toUpperCase()}</Link>
    </div>
  );
}
