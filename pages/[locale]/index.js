import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { useTranslation } from "i18next-ssg"
import { makeStaticProps, getStaticPaths } from "i18next-ssg/server"
import LocaleSwitcher from "components/LocaleSwitcher"

export default function Page() {
  const { t } = useTranslation("common")
  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <link rel="shortcut icon" href="img/favicon.ico" />
        <meta name="description" content={t("meta_desc")} key="desc" />
        <meta property="og:title" content="La Marelle" />
        <meta property="og:description" content={t("meta_desc")} />
        <meta property="og:image" content={t("meta_image")} />
        <Script src='https://identity.netlify.com/v1/netlify-identity-widget.js'/>
      </Head>
      <LocaleSwitcher />
      <h1 className="visually-hidden">{t("title")}</h1>
      <div className="centered">
        <Image
          src="/img/lamarelle-logo.svg"
          alt="La Marelle"
          className="centered--logo"
          width={766}
          height={110}
          sizes="100vw"
          priority
        />
        <p className="centered--address">{t("address")}</p>
      </div>

      <footer>
        <a href={t("rsv_url")} target="_blank">
          {t("rsv_label")}
        </a>
        <a href={t("ig_url")} target="_blank">
          Instagram
        </a>
      </footer>
    </>
  )
}

const getStaticProps = makeStaticProps(["common"])
export { getStaticPaths, getStaticProps }
