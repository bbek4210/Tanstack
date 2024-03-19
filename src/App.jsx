import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1> React </h1>
      <div>
        <Link to="/">Home</Link> <br />
        <Link to="/Products">Products</Link>
      </div>
    </>
  );
}

export default App;
