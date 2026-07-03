import "./error-state.css";

type ErrorStateProps = {
  title?: string;
  message?: string;
};

export function ErrorState({
  title = "Oops!",
  message = "Something went wrong.",
}: ErrorStateProps) {
  return (
    <section className="error-state">
      <div className="error-icon">!</div>

      <h2>{title}</h2>

      <p>{message}</p>
    </section>
  );
}