import "./loading.css";

type LoadingProps = {
  message?: string;
};

export function Loading({ message = "Loading..." }: LoadingProps) {
  return (
    <section className="loading">
      <div className="loading-spinner" />

      <p>{message}</p>
    </section>
  );
}