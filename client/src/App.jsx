import { CircularProgress } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateOutlet from "./common/PrivateOutlet";

const Auth = React.lazy(() => import("./pages/Auth"));
const BuyRentProduct = React.lazy(() =>
  import("./pages/products/BuyRentProduct")
);
const CreateProduct = React.lazy(() =>
  import("./pages/products/CreateProduct")
);

const EditProduct = React.lazy(() => import("./pages/products/EditProduct"));
const ProductListing = React.lazy(() =>
  import("./pages/products/ProductListing")
);
const AllDetailsProduct = React.lazy(() =>
  import("./pages/products/AllDetailsProduct")
);
function App() {
  return (
    <div className="app">
      <React.Suspense
        fallback={
          <div
            style={{
              display: "grid",
              placeItems: "center",
              height: "100vh",
              width: "100vw",
            }}
          >
            <CircularProgress />
          </div>
        }
      >
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route element={<PrivateOutlet />}>
            <Route path="/" element={<ProductListing />} />
            <Route path="/createproduct" element={<CreateProduct />} />
            <Route path="/editproduct" element={<EditProduct />} />
            <Route path="/buyrentproduct" element={<BuyRentProduct />} />
            <Route path="/alldetailsproduct" element={<AllDetailsProduct />} />
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
