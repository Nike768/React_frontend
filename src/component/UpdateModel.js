import React from "react";
import TextField from "@mui/material/TextField";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
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

function UpdateModel({ handleClose, open, selectedRows }) {
  const [ci, setCi] = React.useState("");
  const [pt, setPt] = React.useState("");
  const [openSnack, setOpenSnack] = React.useState(false);

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };
  const handleSubmit = async () => {
    if (selectedRows.length > 1) {
      handleClose();
      setOpenSnack(true);
    } else {
      try {
        await axios.post(
          `http://localhost:3000/HRC71219W/Update?sl_no=${selectedRows[0]}&invoice_currency=${ci}&cust_payment_terms=${pt}`,
          {}
        );
        handleClose();
        setOpenSnack(true);
      } catch (err) {
        alert(err.message);
      }
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
              Edit
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
                  defaultValue=""
                  placeholder="Invoice Currency"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                  onChange={(e) => {
                    setCi(e.target.value);
                  }}
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  defaultValue=""
                  placeholder="Customer Payment Terms"
                  sx={{ width: 250, backgroundColor: "white", borderRadius: 2 }}
                  onChange={(e) => {
                    setPt(e.target.value);
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
                  EDIT
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
          Entry Updated Successfully!!
        </Alert>
      </Snackbar>
    </>
  );
}

export default UpdateModel;
