import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import WelcomeBar from "./Components/WelcomeBar";
import ProductTable from "./Components/ProductTable";
import AddProduct from "./Components/AddProduct";
import ViewProduct from "./Components/ViewProduct";

function App() {
  return (
    <div className="App">
      <Router>
        
        <NavBar />

        <Routes>
          <Route path="/" element={<ProductTable />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/view-product/:id" element={<ViewProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
