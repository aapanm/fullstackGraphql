import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import React from "react";

function ViewModal({ children, modalopen, setmodalopen }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal open={modalopen} onClose={() => setmodalopen(false)}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}

export default ViewModal;
