import { l, type Params } from "~/locale";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header({ lang }: Params) {
  return (
    <div className="flex justify-between">
      <div>
        <div className="text-lg">🇵&#127480; {l(lang, "title")}</div>
        <div>{l(lang, "description")}</div>
      </div>
      <LocaleSwitcher />
    </div>
  );
}
