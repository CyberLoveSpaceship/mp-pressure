import React from "react"
import Link from "next/link"
import { useLocaleSwitcher, setUserLocale } from "i18next-ssg"

const localeMap = {
  en: "EN",
  fr: "FR"
}

const LangContent = ({ options }) => (
  <>
    {options.map(({ label, path, locale }) => (
        <Link key={path} href={path}>
          <span
            onClick={() => {
              setUserLocale(locale)
            }}
          >
            {label}
          </span>
        </Link>
    ))}
  </>
)

function LocaleSwitcher() {
  const { label, options } = useLocaleSwitcher({ localeMap })
  return (
    <div className="lang-switcher">
        <LangContent tabIndex={0} options={options} />
    </div>
  )
}

export default LocaleSwitcher
