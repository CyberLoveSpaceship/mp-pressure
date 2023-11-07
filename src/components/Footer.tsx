import { l, type Params } from "~/locale";

export default function Footer({ lang }: Params) {
  return <div className="text-gray-500">{l(lang, "footer")}</div>;
}
