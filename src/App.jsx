import Navbar from "./components/Navbar.styles";
import ProductsContainer from "./components/ProductsContainer";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <ProductsContainer />
    </div>
  );
}

export default App;
