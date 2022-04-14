import React from "react";
import TextField from "@mui/material/TextField";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  color: "white",
  bgcolor: "#2a3e4c",
  boxShadow: 24,
  p: 4,
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  borderColor: grey[500],
  width: "50%",
  "&:hover": {
    borderColor: grey[50],
  },
}));

function AdvanceSearchModel({ handleClose, open, setData }) {
  const [docId, setDocId] = React.useState("");
  const [inId, setInid] = React.useState("");
  const [cn, setCn] = React.useState("");
  const [bYear, setBYear] = React.useState("");

  const handleSubmit = async () => {
    handleClose();
    try {
      let url = `http://localhost:3000/HRC71219W/AdvanceSearch?doc_id=${docId}&invoice_id=${inId}&cust_number=${cn}&buisness_year=${bYear}`;
      let data = await axios.get(url);
      data = data.data;
      for (let i = 0; i < data.length; i++) {
        data[i].id = data[i]["sl_no"];
      }
      setData(data);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginBottom: "20px" }}
          >
            Advance Search
          </Typography>
          <FormControl
            variant="standard"
            sx={{ display: "flex", gap: "3rem", color: "White" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                placeholder="Document ID"
                defaultValue={docId}
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                onChange={(e) => {
                  setDocId(e.target.value);
                }}
              />
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue={inId}
                placeholder="Invoice Id"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                onChange={(e) => {
                  setInid(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue={cn}
                placeholder="Customer Number"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                onChange={(e) => {
                  setCn(e.target.value);
                }}
              />
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue={bYear}
                placeholder="Business year"
                sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                onChange={(e) => {
                  setBYear(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "2rem",
              }}
            >
              <ColorButton variant="outlined" onClick={handleSubmit}>
                SEARCH
              </ColorButton>
              <ColorButton variant="outlined" onClick={handleClose}>
                CANCEL
              </ColorButton>
            </div>
          </FormControl>
        </Box>
      </Fade>
    </Modal>
  );
}

export default AdvanceSearchModel;
