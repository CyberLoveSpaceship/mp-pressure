import { useParams } from "next/navigation";
import { Params, l } from "./locale";

/**
 * A hook that returns a function for getting a localization for a given string.
 * Unlike `l()` in `locale.ts`, the locale is determined from the url
 * automatically. Unfortunately, this cannot be used in Server Components.
 */
export default function useLocale() {
  const { lang } = useParams<Params>();
  return (string: keyof typeof import("./strings.json")) => l(lang, string);
}
