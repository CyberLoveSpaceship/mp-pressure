import { useState } from "react";
import useSWRImmutable from "swr/immutable";

import RepSearchBox from "./RepSearchBox";
import RepResults from "./RepResults";

import styles from "./RepSearch.module.css";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function RepresentativeSearch() {
  const [postCode, setPostCode] = useState<string | null>(null);
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
        <RepSearchBox setPostCode={setPostCode} />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>
          <div>An error occurred:</div>
          <pre>
            <code>{error.toString()}</code>
          </pre>
        </div>
      ) : data ? (
        <div id="resultsView" className={styles["view"]}>
          <h2 className="resultsHeader">Who to contact</h2>
          <RepResults data={data["representatives_centroid"]} />
        </div>
      ) : null}
    </>
  );
}
