import useLocale from "~/use-locale";

export function LoadingState() {
  const l = useLocale();
  return <div>{l("loading")}</div>;
}

export function ErrorState({ error }: { error: Error }) {
  const l = useLocale();
  return (
    <div>
      <div>{l("error")}</div>
      <pre>
        <code>{error.toString()}</code>
      </pre>
    </div>
  );
}
