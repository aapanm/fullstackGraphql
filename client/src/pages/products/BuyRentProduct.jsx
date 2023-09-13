import { Button } from "@mui/material";
import React from "react";

function BuyRentProduct() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".6rem",
        alignItems: "flex-start",
        width: "70%",
      }}
    >
      <h4>Iphone</h4>
      <p>Categories: yo</p>
      <p>Price: 250</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione vel
        deleniti similique veniam nisi, nam iste blanditiis! Similique incidunt
        exercitationem quis harum sint. Illum, aspernatur reprehenderit! Culpa
        repellendus necessitatibus harum?
      </p>

      <div
        style={{
          display: "flex",
          gap: ".6rem",
          alignSelf: "end",
        }}
      >
        <Button style={{ backgroundColor: "#6558f5" }} variant="contained">
          Buy
        </Button>
        <Button style={{ backgroundColor: "#6558f5" }} variant="contained">
          Rent
        </Button>
      </div>
    </div>
  );
}

export default BuyRentProduct;
