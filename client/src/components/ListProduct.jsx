import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ViewModal from "./ViewModal";

function ListProduct({ product }) {
  const [modalopen, setmodalopen] = useState(false);
  const handleDelete = (product) => {};
  return (
    <Card sx={{ minWidth: 275, width: "60vw", position: "relative" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {product?.title}
        </Typography>

        <IconButton
          sx={{ position: "absolute", top: 10, right: 10 }}
          onClick={() => setmodalopen(true)}
        >
          <DeleteIcon />
        </IconButton>
        <div style={{ display: "flex" }}>
          <Typography
            sx={{ fontSize: 14, marginRight: "5px" }}
            color="text.secondary"
            gutterBottom
          >
            Categories:
          </Typography>
          {product.categories.map((cat, index) => (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {cat}
              {index !== product.categories.length - 1 && ","}
            </Typography>
          ))}
        </div>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Price: ${product.price} | Rent: ${product.rent} Daily
        </Typography>

        <Typography
          variant="body2"
          sx={{ fontSize: 14, marginTop: "1.2rem" }}
          color="text.secondary"
        >
          {product.desc}
        </Typography>
        <Typography
          sx={{ fontSize: 14, marginTop: "1rem" }}
          color="text.secondary"
          gutterBottom
        >
          Date Period: {product.created_at}
        </Typography>
      </CardContent>

      <ViewModal modalopen={modalopen} setmodalopen={setmodalopen}>
        <Typography variant="h6" component="h2">
          Are you sure want to delete the product
        </Typography>

        <div style={{ marginTop: "1rem" }}>
          <Button
            variant="contained"
            style={{ background: "green", marginRight: "1rem" }}
          >
            Yes
          </Button>
          <Button variant="contained" style={{ background: "red" }}>
            No
          </Button>
        </div>
      </ViewModal>
    </Card>
  );
}

export default ListProduct;
