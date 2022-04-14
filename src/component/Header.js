import React from "react";

import RefreshIcon from "@mui/icons-material/Refresh";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputBase from "@mui/material/InputBase";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import AddModal from "./AddModel";
import EditModal from "./UpdateModel";
import DeleteModal from "./DeleteModel";
import AdvancedSearchModal from "./AdvanceSearchModel";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  borderColor: "#42aff1",
  fontSize: "13px",
  "&:hover": {
    borderColor: grey[50],
    backgroundColor: "#42aff1",
  },
  "&:disabled": {
    color: "white",
    borderColor: "grey",
    cursor: "not-allowed",
  },
}));

const PredictButton = styled(Button)(({ theme }) => ({
  color: "white",
  borderColor: "#42aff1",
  fontSize: "13px",
  backgroundColor: "#42aff1",
  "&:hover": {
    borderColor: grey[50],
    backgroundColor: "#42aff1",
  },
  "&:disabled": {
    color: "white",
    borderColor: "grey",
    cursor: "not-allowed",
  },
}));

function Header({ isSelected, selectedRows, setData }) {
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openAS, setOpenAS] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const handleOpenEdit = () => {
    if (selectedRows.length === 1) setOpenEdit(true);
    else setOpenSnack(true);
  };
  const handleCloseEdit = () => setOpenEdit(false);

  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const handleOpenAS = () => setOpenAS(true);
  const handleCloseAS = () => setOpenAS(false);

  const handleRefresh = async () => {
    setData([]);
    let resp = await fetch("http://localhost:3000/HRC71219W/ReadData");
    resp = await resp.json();
    for (let i = 0; i < resp.length; i++) {
      resp[i].id = resp[i]["sl_no"];
    }
    setData(resp);
  };

  return (
    <>
      <div
        style={{
          height: 70,
          width: "100%",
          backgroundColor: "#283d4a",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup
            size="large"
            aria-label="large button group"
            sx={{ color: "#42aff1",borderRadius:2 }}
          >
            <PredictButton key="PREDICT">PREDICT</PredictButton>
            <ColorButton key="ANALYTICS">ANALYTICS VIEW</ColorButton>
            <ColorButton key="ADVANCE" onClick={handleOpenAS}>
              ADVANCE SEARCH
            </ColorButton>
          </ButtonGroup>
        </Box>
        <ColorButton variant="outlined" onClick={handleRefresh}>
          <RefreshIcon />
        </ColorButton>
        <InputBase
          sx={{
            ml: 8,
            flex: 1.0,
            color: "black",
            width: 20,
            borderRadius: 2,
            justifyContent: "center",
            zIndex: 2,
            backgroundColor: "white",
          }}
          placeholder="Search Custumer Id"
          inputProps={{ "aria-label": "Search Custumer Id" }}
        />
        <ButtonGroup
          size="large"
          aria-label="large button group"
          sx={{ color: "#42aff1", ml: 25, zIndex: 1,borderRadius:2 }}
        >
          <ColorButton
            key="ADD"
            onClick={handleOpenAdd}
            sx={{ width: "170px" }}
          >
            ADD
          </ColorButton>
          <ColorButton
            key="EDIT"
            onClick={handleOpenEdit}
            disabled={selectedRows.length !== 1}
            sx={{ width: "170px" }}
          >
            EDIT
          </ColorButton>
          <ColorButton
            key="DELETE"
            onClick={handleOpenDelete}
            disabled={!isSelected}
            sx={{ width: "170px" }}
          >
            DELETE
          </ColorButton>
        </ButtonGroup>
        <AddModal
          handleClose={handleCloseAdd}
          open={openAdd}
          handleRefresh={handleRefresh}
        ></AddModal>
        <EditModal
          handleClose={handleCloseEdit}
          open={openEdit}
          selectedRows={selectedRows}
          handleRefresh={handleRefresh}
        ></EditModal>
        <DeleteModal
          handleClose={handleCloseDelete}
          open={openDelete}
          selectedRows={selectedRows}
          handleRefresh={handleRefresh}
        ></DeleteModal>
        <AdvancedSearchModal
          handleClose={handleCloseAS}
          open={openAS}
          setData={setData}
        ></AdvancedSearchModal>
      </div>
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="error"
          sx={{ width: "100%" }}
        >
          only one row can be modified at a time!!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Header;
