export { getStaticProps, getStaticPaths } from "i18next-ssg/Redirect";
import { useRootPathRedirect } from "i18next-ssg";

export default function Page() {
  useRootPathRedirect();
  return <div></div>;
}