export function LoadingState() {
  return <div>Loading...</div>;
}

export function ErrorState({ error }: { error: Error }) {
  return (
    <div>
      <div>An error occurred:</div>
      <pre>
        <code>{error.toString()}</code>
      </pre>
    </div>
  );
}
