// @ts-check
// @ts-check
import { useStore } from "@nanostores/react";
import { $searched, $postalCode, $results } from "../../scripts/state";

import "./RepSearch.css";

function RepresentativeSearchBox() {
  const [results, setResults] = [useStore($results), $results.set];
  const [searched, setSearched] = [useStore($searched), $searched.set];
  const [postalCode, setPostalCode] = [useStore($postalCode), $postalCode.set];

  const clearSearch = () => {
    setPostalCode("");
    setResults([]);
    setSearched(false);
  };

  const fetchRepresentatives = async () => {
    console.log("fetch called");

    // manually set postalcode in the end in case of repeat requests
    const postalCodeElement = document.querySelector("#postalCode");
    setPostalCode(postalCodeElement.value);

    if (!postalCode) {
      alert("Please enter a postal code");
      return;
    }

    // regex validation
    const postalCodePattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

    // sanitize the postal code
    const sanitizedPostalCode = postalCode.replace(/\s+/g, "").toUpperCase();

    if (!postalCodePattern.test(sanitizedPostalCode)) {
      alert("Please enter a valid postal code");
      return;
    }

    const response = await fetch(
      `https://represent.opennorth.ca/postcodes/${encodeURIComponent(
        sanitizedPostalCode,
      )}/`,
    );
    const data = await response.json();

    if (
      data.representatives_centroid &&
      data.representatives_centroid.length > 0
    ) {
      setResults(data.representatives_centroid);
      setSearched(true);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <div className="form">
        <label htmlFor="postalCode">Enter your postal code</label>
        <input
          type="text"
          id="postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <button onClick={fetchRepresentatives}>Next</button>
        {/* <button onClick={clearSearch}>Clear</button> */}
      </div>
    </div>
  );
}

export default RepresentativeSearchBox;
