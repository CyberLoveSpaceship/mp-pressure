import strings from "./strings.json";

export type Locale = keyof (typeof strings)["title"];

export type Params = { lang: Locale };

export const DEFAULT_LOCALE: Locale = "en";

/**
 * Localize a string (from `strings.json`) using the given `locale`.
 * Works in Server Components.
 */
export function l(locale: Locale, string: keyof typeof strings) {
  const translationsForString = strings[string];
  if (!translationsForString) {
    console.error(`unknown locale string: "${string}"`);
    return string;
  }
  const localizedString = translationsForString[locale];

  if (typeof localizedString !== "string") {
    console.warn(
      `Falling back to default locale (${DEFAULT_LOCALE}) for string "${string}"`,
    );
    return translationsForString[DEFAULT_LOCALE];
  }

  return localizedString;
}
