import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css";
import { Rooter } from "./rooter/Rooter";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
      </div>
      <Rooter />
    </BrowserRouter>
  );
}
