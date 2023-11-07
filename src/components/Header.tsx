import { Suspense } from "react";

import LocaleSwitcher from "./LocaleSwitcher";
import { l, type Params } from "~/locale";

export default function Header({ lang }: Params) {
  return (
    <div className="flex justify-between">
      <div>
        <div className="text-lg">🇵&#127480; {l(lang, "title")}</div>
        <div>{l(lang, "description")}</div>
      </div>
      <Suspense>
        <LocaleSwitcher />
      </Suspense>
    </div>
  );
}
