type ErrorProps = {
  message?: string;
};

export function Error({
  message = "Something went wrong.",
}: ErrorProps) {
  return (
    <div className="error">
      {message}
    </div>
  );
}