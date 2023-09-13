import { Button, FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

function EditProduct() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "flex-start",
      }}
    >
      <div>
        <h4>Title</h4>
        <input type="text" />
      </div>

      <div>
        <h4>Categories</h4>
        <FormControl sx={{ width: 300 }}>
          <Select multiple value={[""]} onChange={() => {}}>
            <MenuItem value={"per hr"}>{"per hr"}</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div>
        <h4>Description</h4>

        <textarea name="desciption" cols="50" rows="10"></textarea>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "flex-end",
        }}
      >
        <div>
          <h4>Price</h4>
          <input type="text" />
        </div>
        <div>
          <h4>Rent</h4>
          <input type="text" />
        </div>

        <FormControl sx={{ width: 120 }}>
          <Select value={""} onChange={() => {}}>
            <MenuItem value={"per hr"}>{"per hr"}</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button style={{ backgroundColor: "#6558f5" }} variant="contained">
        Edit product
      </Button>
    </div>
  );
}

export default EditProduct;
