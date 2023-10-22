type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = ({ status }: StatusProps) => {
  const message =
    status === "loading"
      ? "Loading..."
      : status === "success"
      ? "Data fetched successfully!"
      : status === "error"
      ? "Error fetching Data"
      : "";
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
