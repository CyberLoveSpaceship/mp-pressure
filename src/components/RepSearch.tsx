"use client";

import { useSearchParams } from "next/navigation";
import useSWRImmutable from "swr/immutable";

import RepSearchBox from "./RepSearchBox";
import RepResults from "./RepResults";

import styles from "./RepSearch.module.css";
import useLocale from "~/use-locale";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function RepresentativeSearch() {
  const l = useLocale();
  const search = useSearchParams();
  const postCode = search.get("p");
  const {
    data,
    error,
    isValidating: loading,
  } = useSWRImmutable(
    postCode == null
      ? null
      : `https://represent.opennorth.ca/postcodes/${encodeURIComponent(
          postCode,
        )}/`,
    fetcher,
  );

  return (
    <>
      <div id="searchView" className={styles["view"]}>
        <RepSearchBox />
      </div>
      {loading ? (
        <div>{l("loading")}</div>
      ) : error ? (
        <div>
          <div>{l("error")}</div>
          <pre>
            <code>{error.toString()}</code>
          </pre>
        </div>
      ) : data ? (
        <div id="resultsView" className={styles["view"]}>
          <h2 className="resultsHeader">{l("who-to-contact")}</h2>
          <RepResults data={data["representatives_centroid"]} />
        </div>
      ) : null}
    </>
  );
}
