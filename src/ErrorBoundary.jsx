import React, { useState, useEffect } from "react";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const errorHandler = () => {
    fetch("ipewhggwgh")
      .then((res) => res.json())
      .catch(() => {
        setHasError(true);
      });
    // if (!apiCall) {
    //   setHasError(true);
    // }
  };

  useEffect(() => {
    errorHandler();
  }, []);

  return <div>{hasError ? <h1>Error!!!</h1> : children}</div>;
}

export default ErrorBoundary;
