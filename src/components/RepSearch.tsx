"use client";

import { useSearchParams } from "next/navigation";
import useSWRImmutable from "swr/immutable";

import RepSearchBox from "./RepSearchBox";
import RepResults from "./RepResults";
import Dropdowns from "./Dropdowns";

import { fetcher } from "~/app/utils";
import { ErrorState, LoadingState } from "./SWRStates";
import useLocale from "~/use-locale";

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
      <div id="searchView" className="mx-auto my-16">
        <RepSearchBox />
      </div>

      {loading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState error={error} />
      ) : data ? (
        <div id="resultsView" className="mx-auto my-16 flex flex-col gap-10">
          <div>
            <h2 className="mb-4 text-xl font-medium">{l("who-to-contact")}</h2>
            <RepResults data={data["representatives_centroid"]} />
          </div>
          <div>
            <h2 className="mb-4 text-xl font-medium">{l("notes")}</h2>
            <Dropdowns />
          </div>
        </div>
      ) : null}
    </>
  );
}
