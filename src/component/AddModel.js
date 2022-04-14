import React from "react";
import TextField from "@mui/material/TextField";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  borderColor: grey[500],
  width: "50%",
  "&:hover": {
    borderColor: grey[50],
  },
}));

function AddModel({ handleClose, open }) {
  const [data, setData] = React.useState({});
  const [openSnack, setOpenSnack] = React.useState(false);

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };
  const handleChange = (key, value) => {
    data[key] = value;
    setData(data);
  };

  const handleSubmit = async () => {
    let url = `http://localhost:3000/HRC71219W/Insert?`;
    let i = 0;
    for (var key in data) {
      if (i === 0) {
        url += `${key}=${data[key]}`;
      } else {
        url += `&${key}=${data[key]}`;
      }
      i++;
    }
    try {
      handleClose();
      await axios.post(url, {});
      setOpenSnack(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
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
              ADD
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
                  defaultValue={data["business_code"] || ""}
                  placeholder="Business code"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                  onChange={(e) => {
                    handleChange("business_code", e.target.value);
                  }}
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  placeholder="Customer Number"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                  onChange={(e) => {
                    handleChange("cust_number", e.target.value);
                  }}
                  defaultValue={data["cust_number"] || ""}
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  placeholder="Clear Date"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                  onFocus={(e) => {
                    e.target.type = "date";
                  }}
                  onBlur={(e) => {
                    e.target.type = "text";
                  }}
                  onChange={(e) => {
                    handleChange("clear_date", e.target.value);
                  }}
                  defaultValue={data["clear_date"] || ""}
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  onChange={(e) => {
                    handleChange("buisness_year", e.target.value);
                  }}
                  defaultValue={data["buisness_year"] || ""}
                  placeholder="Business Year"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
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
                  onChange={(e) => {
                    handleChange("doc_id", e.target.value);
                  }}
                  defaultValue={data["doc_id"] || ""}
                  placeholder="Document id"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  onChange={(e) => {
                    handleChange("posting_date", e.target.value);
                  }}
                  defaultValue={data["posting_date"] || ""}
                  placeholder="Posting Date"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                  onFocus={(e) => {
                    e.target.type = "date";
                  }}
                  onBlur={(e) => {
                    e.target.type = "text";
                  }}
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  onChange={(e) => {
                    handleChange("document_create_date", e.target.value);
                  }}
                  defaultValue={data["document_create_date"] || ""}
                  placeholder="Document Create Date"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                  onFocus={(e) => {
                    e.target.type = "date";
                  }}
                  onBlur={(e) => {
                    e.target.type = "text";
                  }}
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  onChange={(e) => {
                    handleChange("due_in_date", e.target.value);
                  }}
                  defaultValue={data["due_in_date"] || ""}
                  placeholder="Due Date"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                  onFocus={(e) => {
                    e.target.type = "date";
                  }}
                  onBlur={(e) => {
                    e.target.type = "text";
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
                  onChange={(e) => {
                    handleChange("invoice_currency", e.target.value);
                  }}
                  defaultValue={data["invoice_currency"] || ""}
                  placeholder="Invoice Currency"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  onChange={(e) => {
                    handleChange("document_type", e.target.value);
                  }}
                  defaultValue={data["document_type"] || ""}
                  placeholder="Document type"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  onChange={(e) => {
                    handleChange("posting_id", e.target.value);
                  }}
                  defaultValue={data["posting_id"] || ""}
                  placeholder="Posting Id"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  onChange={(e) => {
                    handleChange("total_open_amount", e.target.value);
                  }}
                  defaultValue={data["total_open_amount"] || ""}
                  placeholder="Total Open Amount"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "2rem",
                }}
              >
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  placeholder="Baseline Create Date"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                  onFocus={(e) => {
                    e.target.type = "date";
                  }}
                  onBlur={(e) => {
                    e.target.type = "text";
                  }}
                  onChange={(e) => {
                    handleChange("baseline_create_date", e.target.value);
                  }}
                  defaultValue={data["baseline_create_date"] || ""}
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  onChange={(e) => {
                    handleChange("cust_payment_terms", e.target.value);
                  }}
                  defaultValue={data["cust_payment_terms"] || ""}
                  placeholder="Customer Payment Term"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  onChange={(e) => {
                    handleChange("invoice_id", e.target.value);
                  }}
                  defaultValue={data["invoice_id"] || ""}
                  placeholder="Invoice Id"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
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
                  ADD
                </ColorButton>
                <ColorButton variant="outlined" onClick={handleClose}>
                  CANCEL
                </ColorButton>
              </div>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="success"
          sx={{ width: "100%" }}
        >
          Entry Added Successfully!!
        </Alert>
      </Snackbar>
    </>
  );
}

export default AddModel;
