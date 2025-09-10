import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError(); //hook provided by react-router-dom to get the error details
  console.log(err);
  return (
    <div>
      <h1>Oopsss!!!!</h1>
      <h2>Wrong Route</h2>
      <h2>
        {err.status}-{err.statusText}
      </h2>
    </div>
  );
};

export default Error;
