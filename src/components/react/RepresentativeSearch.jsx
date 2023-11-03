import React from "react";
import "./RepresentativeSearch.css";
import { useStore } from "@nanostores/react";
import { $searched, $postalCode, $results } from "../../scripts/state";

function RepresentativeSearch() {
  // const [postalCode, setPostalCode] = useState("");
  // const [results, setResults] = useState([]);
  // const [searched, setSearched] = useState(false);
  // const searched = useStore($searched);
  // const setSearched = $searched.set;
  // const results = useStore($results);
  // const setResults = $results.set;
  // const postalCode = useStore($postalCode);
  // const setPostalCode = $postalCode.set;
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
    <div className="form">
      <label htmlFor="postalCode">Enter Postal Code:</label>
      <input
        type="text"
        id="postalCode"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <button onClick={fetchRepresentatives}>Next</button>
      {/* <button onClick={clearSearch}>Clear</button> */}

      <ul>
        {searched ? (
          results.length > 0 ? (
            results.map((rep, index) => (
              <li key={index}>
                <strong>Name:</strong> {rep.name}
                <br />
                <strong>Title:</strong> {rep.elected_office || "N/A"}
                <br />
                <strong>Party:</strong> {rep.party_name || "N/A"}
                <br />
                <strong>Email:</strong> {rep.email || "N/A"}
                <br />
                <strong>Phone:</strong>{" "}
                {rep.offices && rep.offices.length > 0
                  ? rep.offices[0].tel
                  : "N/A"}
                <br />
                <strong>Address:</strong>{" "}
                {rep.offices && rep.offices.length > 0
                  ? rep.offices[0].postal
                  : "N/A"}
              </li>
            ))
          ) : (
            <li>No representatives found</li>
          )
        ) : null}
      </ul>
    </div>
  );
}

export default RepresentativeSearch;
