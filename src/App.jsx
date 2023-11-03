import Navbar from "./components/Navbar.styles";
import ProductsContainer from "./components/ProductsContainer";
import GlobalSateProvider from "./context/GlobalSateProvider";

function App() {
  return (
    <GlobalSateProvider>
      <div
        style={{
          height: "100vh",
          overflow: "hidden",
          padding: "0 10px",
        }}
      >
        <Navbar />
        <ProductsContainer />
      </div>
    </GlobalSateProvider>
  );
}

export default App;
