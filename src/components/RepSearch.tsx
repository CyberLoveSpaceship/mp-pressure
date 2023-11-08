"use client";

import { useState } from "react";
import useSWRImmutable from "swr/immutable";

import RepSearchBox from "./RepSearchBox";
import RepResults from "./RepResults";
import Dropdowns from "./Dropdowns";

import { fetcher } from "~/app/utils";
import styles from "./RepSearch.module.css";
import { SWRResponse } from "swr";
import { ErrorState, LoadingState } from "./SWRStates";

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
        <LoadingState />
      ) : error ? (
        <ErrorState error={error} />
      ) : data ? (
        <div id="resultsView" className={styles["view"]}>
          <h2 className="resultsHeader">Who to contact</h2>
          <RepResults data={data["representatives_centroid"]} />
          <Dropdowns />
        </div>
      ) : null}
    </>
  );
}
