import React from "react";
import Navbar from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";
import Box from "@mui/material/Box";

function StudentWait() {
  return (
    <>
      <Navbar />
      <Box height={70} />

      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <h1>Students wait</h1>
      </Box>
    </>
  );
}

export default StudentWait;
