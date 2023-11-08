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
      <div id="searchView" className="mx-auto my-16">
        <RepSearchBox setPostCode={setPostCode} />
      </div>

      {loading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState error={error} />
      ) : data ? (
        <div id="resultsView" className="mx-auto my-16 flex flex-col gap-10">
          <div>
            <h2 className="mb-4 text-xl font-medium">Who to contact</h2>
            <RepResults data={data["representatives_centroid"]} />
          </div>
          <div>
            <h2 className="mb-4 text-xl font-medium">Notes</h2>
            <Dropdowns />
          </div>
        </div>
      ) : null}
    </>
  );
}
