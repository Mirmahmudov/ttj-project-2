import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DataTable from "react-data-table-component";
import ClearIcon from "@mui/icons-material/Clear";
import "./Students.css";

import Navbar from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";

function Students() {
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
    },
    {
      id: 0,
      fullName: "Ziyodullo Mirmahmudov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "934645656",
      course: "2",
      group: "613-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Andijon",
      type: "kunduzgi",
      balance: "700 000",
      room: "312",
    },
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
    },
    {
      id: 0,
      fullName: "Ziyodullo Mirmahmudov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "934645656",
      course: "2",
      group: "613-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Andijon",
      type: "kunduzgi",
      balance: "700 000",
      room: "312",
    },
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
    },
    {
      id: 0,
      fullName: "Ziyodullo Mirmahmudov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "934645656",
      course: "2",
      group: "613-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Andijon",
      type: "kunduzgi",
      balance: "700 000",
      room: "312",
    },
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
    },
    {
      id: 0,
      fullName: "Ziyodullo Mirmahmudov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "934645656",
      course: "2",
      group: "613-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Andijon",
      type: "kunduzgi",
      balance: "700 000",
      room: "312",
    },
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
    },
    {
      id: 0,
      fullName: "Ziyodullo Mirmahmudov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "934645656",
      course: "2",
      group: "613-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Andijon",
      type: "kunduzgi",
      balance: "700 000",
      room: "312",
    },
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
    },
    {
      id: 0,
      fullName: "Ziyodullo Mirmahmudov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "934645656",
      course: "2",
      group: "613-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Andijon",
      type: "kunduzgi",
      balance: "700 000",
      room: "312",
    },
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
    },
    {
      id: 0,
      fullName: "Ziyodullo Mirmahmudov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "934645656",
      course: "2",
      group: "613-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Andijon",
      type: "kunduzgi",
      balance: "700 000",
      room: "312",
    },
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
    },
    {
      id: 0,
      fullName: "Ziyodullo Mirmahmudov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "934645656",
      course: "2",
      group: "613-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Andijon",
      type: "kunduzgi",
      balance: "700 000",
      room: "312",
    },
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
    },
    {
      id: 0,
      fullName: "Ziyodullo Mirmahmudov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "934645656",
      course: "2",
      group: "613-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Andijon",
      type: "kunduzgi",
      balance: "700 000",
      room: "312",
    },
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
    },
    {
      id: 0,
      fullName: "Ziyodullo Mirmahmudov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "934645656",
      course: "2",
      group: "613-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Andijon",
      type: "kunduzgi",
      balance: "700 000",
      room: "312",
    },
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
    },
    {
      id: 0,
      fullName: "Ziyodullo Mirmahmudov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "934645656",
      course: "2",
      group: "613-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Andijon",
      type: "kunduzgi",
      balance: "700 000",
      room: "312",
    },
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
    },
    {
      id: 0,
      fullName: "Ziyodullo Mirmahmudov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "934645656",
      course: "2",
      group: "613-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Andijon",
      type: "kunduzgi",
      balance: "700 000",
      room: "312",
    },
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
    },
    {
      id: 0,
      fullName: "Ziyodullo Mirmahmudov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "934645656",
      course: "2",
      group: "613-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Andijon",
      type: "kunduzgi",
      balance: "700 000",
      room: "312",
    },
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
    },
    {
      id: 0,
      fullName: "Ziyodullo Mirmahmudov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "934645656",
      course: "2",
      group: "613-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Andijon",
      type: "kunduzgi",
      balance: "700 000",
      room: "312",
    },
    {
      id: 0,
      fullName: "Ozodbek Ziyodjonov Mirmuhammad o'g'li",
      gender: "Erkak",
      tel: "953446898",
      course: "1",
      group: "615-22",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Qo'qon",
      type: "kechgi",
      balance: "235 000",
      room: "202",
    },
    {
      id: 0,
      fullName: "Aziza Qurbonova Mirmuhammad qizi ",
      gender: "Ayol",
      tel: "990129144",
      course: "4",
      group: "611-21",
      tutor: "Kamolhon Abdusattorov",
      Fakultet: "KIF",
      region: "Marg'ilon",
      type: "kunduzgi",
      balance: "700 000",
      room: "124",
    },
  ];
  const [records, setRecords] = useState(data);

  const handleFilter = (e) => {
    const nevData = data.filter((item) => {
      return item.fullName
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });
    setRecords(nevData);
  };
  const [addModal, setAddModal] = useState("addModal");
  return (
    <>
      <div className={addModal}>
        <form action="">
          <span
            onClick={() => {
              var name = "addModal";
              setAddModal(name);
            }}
          >
            <ClearIcon />
          </span>
          <input type="text" placeholder="full name" />
          <input type="text" placeholder="jins" />
          <input type="text" placeholder="Telefon raqami" />
          <input type="text" placeholder="guruh" />
          <input type="text" placeholder="tuman" />
          <input type="text" placeholder="Ta'lim turi" />
          <input type="text" placeholder="balans" />
          <input type="text" placeholder="joy" />

          <button className="addUser">add</button>
        </form>
      </div>
      <Navbar />
      <Box height={65} width="100%" />

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
            <h1 style={{ cursor: "pointer", color: "#0c5fcd" }}>Students</h1>
            <div
              className="text-end"
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <button
                className="addUser"
                onClick={() => {
                  var name = "addModal active";
                  setAddModal(name);
                }}
              >
                add +
              </button>

              <input
                style={{
                  padding: "5px",
                  outline: "none",
                  borderRadius: "5px",
                  border: "1px solid rgba(0, 0, 0, 0.87)",
                }}
                type="text"
                onChange={handleFilter}
                placeholder="name"
              />
            </div>
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

export default Students;
