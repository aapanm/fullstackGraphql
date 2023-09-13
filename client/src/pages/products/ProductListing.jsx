import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListProduct from "../../components/ListProduct";

function ProductListing() {
  const navigate = useNavigate();
  const [products, setproducts] = useState([
    {
      title: "Cricket kit",
      categories: ["Sports goods", "Outdoor"],
      price: 500,
      rent: "100",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maiores nulla possimus minima fugiat perferendis eos commodi porro cum enim magnam explicabo nihil, sapiente veritatis odio recusandae repellendus repellat molestiae.`,
      created_at: "21 aug, 2023",
    },
  ]);

  const handleDelete = (product) => {};

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Button
        variant="contained"
        style={{
          backgroundColor: "red",
          position: "absolute",
          top: 50,
          right: 50,
        }}
        onClick={() => {
          localStorage.clear();
          navigate("/auth");
        }}
      >
        Logout
      </Button>
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
          My Products
        </h1>
        {products.map((product) => (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate("buyrentproduct")}
          >
            <ListProduct product={product} />
          </div>
        ))}

        <Button
          style={{ marginTop: "1rem" }}
          variant="contained"
          onClick={() => {
            navigate("createproduct");
          }}
        >
          Add Product
        </Button>
      </div>
    </div>
  );
}

export default ProductListing;
