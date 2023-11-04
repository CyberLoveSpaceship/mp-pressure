// @ts-check
import RepSearchBox from "./RepSearchBox";
import RepResults from "./RepResults";

import styles from "./RepSearch.module.css";

export default function RepresentativeSearch() {
  return (
    <>
      <div id="searchView" className={styles["view"]}>
        <RepSearchBox />
      </div>
      <div id="resultsView" className={styles["view"]}>
        <h2 className="resultsHeader">Who to contact</h2>
        <RepResults />
      </div>
    </>
  );
}
