import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

const MyGrid = styled(DataGrid)(({ theme }) => ({
  color: theme.palette.warning,
  "& .MuiDataGrid-cell:hover": {
    color: "primary.main",
  },
  "& .MuiTablePagination-displayedRows": {
    color: "white",
  },
  "& .MuiTablePagination-selectLabel ": {
    color: "white",
  },
  "& .MuiInputBase-root": {
    color: "white",
  },
  "& .MuiTablePagination-selectIcon": {
    color: "white",
  },
  "& .MuiTablePagination-actions": {
    color: "white",
  },
  "& .MuiCheckbox-root": {
    color: "white",
  },
  "& .MuiButtonBase-root": {
    color: "white",
  },
}));

const columns = [
  {
    field: "id",
    headerName: "Sl_no",
    width: 70,
    headerClassName: "bg",
  },
  {
    field: "business_code",
    headerName: "Business Code",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "cust_number",
    headerName: "Customer Number",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "clear_date",
    headerName: "Clear date",
    width: 130,
    headerClassName: "bg",
  },

  {
    field: "buisness_year",
    headerName: "Business year",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "doc_id",
    headerName: "Document Id",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "posting_date",
    headerName: "Posting Date",
    width: 130,
    headerClassName: "bg",
  },

  {
    field:"document_create_date",
    headerName:"Document Create Date",
    width: 200,
    headerClassName: "bg"
  },

  {
    field: "due_in_date",
    headerName: "Due Date",
    width: 130,
    headerClassName: "bg",
  },

  {
    field: "invoice_currency",
    headerName: "Invoice Currency",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "document_type",
    headerName: "Document Type",
    width: 130,
    headerClassName: "bg",
  },

  {
    field: "posting_id",
    headerName: "Posting Id",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "total_open_amount",
    headerName: "Total Open Amount",
    width: 170,
    headerClassName: "bg",
  },
  {
    field: "baseline_create_date",
    headerName: "Baseline Create Date",
    width: 170,
    headerClassName: "bg",
  },
  {
    field: "cust_payment_terms",
    headerName: "Customer Payment Date",
    width: 170,
    headerClassName: "bg",
  },

  {
    field: "invoice_id",
    headerName: "Invoice Id",
    width: 130,
    headerClassName: "bg",
  },

];

export default function DataTable({
  setSelected,
  setSelectedRows,
  data,
  pageSize,
  setPageSize,
}) {
  return (
    <div style={{ height: (608 / 10) * pageSize, width: "100%" }}>
      <MyGrid
        checkboxSelection
        rows={data}
        sx={{
          border: "1",
          borderColor: "black",
          color: "white",
          bgColor: "#2d4250",
          "& .bg": {
            backgroundColor: "#2d4250",
          },
        }}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        onSelectionModelChange={(arr) => {
          if (arr.length === 0) {
            setSelected(false);
          } else {
            setSelected(true);
          }
          setSelectedRows(arr);
        }}
      />
    </div>
  );
}
