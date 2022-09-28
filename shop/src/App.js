import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import { AxiosProvider, Get } from "react-axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1",
  timeOut: 2000,
});

function ProductsList({ products }) {
  if (!Array.isArray(products)) {
    console.log("no prducts");
    return;
  }
  return (
    <ul>
      {products.map((item, i) => (
        <li key={i}>{item.brand}</li>
      ))}
    </ul>
  );
}

function Api() {
  return (
    <AxiosProvider instance={axiosInstance}>
      <Get url="/products">
        {(error, response) => {
          if (response && response.data) {
            return <ProductsList products={response.data.products} />;
          } else {
            console.log("-> E ", error);
          }
        }}
      </Get>
    </AxiosProvider>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My list</h1>
        <Api />
      </header>
    </div>
  );
}

export default App;
