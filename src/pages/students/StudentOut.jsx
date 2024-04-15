import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";
import Box from "@mui/material/Box";
import DataTable from "react-data-table-component";

function StudentOut() {
  const columns = [
    {
      name: "FullName",
      selector: (row) => row.fullName,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "course",
      selector: (row) => row.course,
      sortable: true,
      align: "center",
    },
    {
      name: "group",
      selector: (row) => row.group,
      sortable: true,
    },

    {
      name: "tutor",
      selector: (row) => row.tutor,
      sortable: true,
    },
    {
      name: "Fakultet",
      selector: (row) => row.Fakultet,
      sortable: true,
    },
    {
      name: "region",
      selector: (row) => row.region,
      sortable: true,
    },
    {
      name: "type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "balance",
      selector: (row) => row.balance,
      type: "currency",
      sortable: true,
    },
    {
      name: "room",
      selector: (row) => row.room,
      sortable: true,
    },

    {
      name: "Berilgan",
      selector: (row) => row.day,
      sortable: true,
    },
    {
      name: "ketgan",
      selector: (row) => row.outDay,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 0,
      fullName: "Asadbek Mirmahmudov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "913444468",
      course: "3",
      group: "611-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Chust",
      type: "kunduzgi",
      balance: "700 000",
      room: "312",
      day: "09/09/2023",
      outDay: "29/01/2024",
    },
  ];
  const [records, setRecords] = useState(data);
  return (
    <>
      <Navbar />
      <Box height={70} />

      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <div
          style={{
            padding: "10px",
            paddingTop: "70px",
            height: "100%",
            marginTop: "0px",
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              position: "absolute",
              top: "0px",
              left: "0px",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px ",
              padding: "10px",
              zIndex: "999",
            }}
          >
            <h1 style={{ cursor: "pointer", color: "#0c5fcd" }}>
              Chiqib ketgan{" "}
            </h1>
          </div>

          <DataTable
            columns={columns}
            data={records}
            // selectableRows
            fixedHeader
            pagination
          ></DataTable>

          {/* <StudentList />    */}
        </div>
      </Box>
    </>
  );
}

export default StudentOut;
