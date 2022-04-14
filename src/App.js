import React from "react";
import DataTable from "./component/Table";
import Footer from "./component/Footer";
import NavBar from "./component/NaviBar";
import Header from "./component/Header";
import "./App.css";

function App() {
  const [isSelected, setSelected] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [pageSize, setPageSize] = React.useState(10);

  React.useEffect(() => {
    (async () => {
      let resp = await fetch("http://localhost:3000/HRC71219W/ReadData");
      resp = await resp.json();
      for (let i = 0; i < resp.length; i++) {
        resp[i].id = resp[i]["sl_no"];
      }
      setData(resp);
    })();
  }, []);

  return (
    <>
      <NavBar />
      <Header
        isSelected={isSelected}
        selectedRows={selectedRows}
        setData={setData}
      ></Header>
      <DataTable
        setSelected={setSelected}
        setSelectedRows={setSelectedRows}
        data={data}
        pageSize={pageSize}
        setPageSize={setPageSize}
      ></DataTable>
      <Footer />
    </>
  );
}

export default App;
