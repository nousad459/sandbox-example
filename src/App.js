import ErrorBoundary from "./ErrorBoundry";
import Info1 from "./Info1";
import Info2 from "./Info2";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ErrorBoundary>
        <Info1 info="Appless" />
      </ErrorBoundary>

      <Info2 info="Orange" />
    </div>
  );
}
