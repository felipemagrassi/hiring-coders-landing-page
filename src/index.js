import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Root = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.getElementById("root")
);
