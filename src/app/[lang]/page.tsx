import { Suspense } from "react";
import RepSearch from "~/components/RepSearch";

export default function Home() {
  return (
    <Suspense>
      <RepSearch />
    </Suspense>
  );
}
