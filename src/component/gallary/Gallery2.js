import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, TableCell } from "@mui/material";

export default function FormPropsTextFields() {
  const userObg = {
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    number: "",
    date: "",
  };

  const [dataform, setdataform] = useState(userObg);

  function handleOnchange(e) {
    setdataform({ ...dataform, [e.target.name]: e.target.value });
  }

  const [sentdata, setsentdata] = useState([]);

  function onsubmit() {
    setsentdata([...sentdata, dataform]);
  }

  function handleOnchange(e) {
    if (e.target.name === "date") {
      setdataform({ ...dataform, date: e });
    } else {
      setdataform({ ...dataform, [e.target.name]: e.target.value });
    }
  }

  return (
    <div className="flex justify-center mt-5">
      <Box
        className="border-2 w-4/6"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <div className="flex justify-center">
            <TextField
              required
              id="outlined-required"
              label="First Name"
              name="firstname"
              onChange={handleOnchange}
              defaultValue=""
            />
            <TextField
              id="outlined-disabled"
              label="middle name"
              name="middlename"
              onChange={handleOnchange}
              defaultValue=""
            />
            <TextField
              id="outlined-password-input"
              label="last name"
              name="lastname"
              onChange={handleOnchange}
              autoComplete="current-password"
            />
          
          <div className="flex justify-center">
            <TextField
              id="outlined-read-only-input"
              label="email"
              name="email"
              onChange={handleOnchange}
            />
            <TextField
              id="outlined-number"
              label="Number"
              name="number"
              onChange={handleOnchange}
              type="number"
            />
          </div>
          </div>
        </div>
        <br />
        <br />

        
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group-label"
              name="gender"
              onChange={handleOnchange}
              value={dataform.gender}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="other"
              />
            </RadioGroup>
          </FormControl>
     

        <div className="flex justify-center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["Datepicker"]}>
              <DatePicker name="date" label="Basic date picker" />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <div className=" flex justify-center   ml-7">
          <Button variant="contained" onClick={onsubmit}>
            Add
          </Button>
        </div>

        <table>
          <tr>
            <TableCell>First Name</TableCell>
            <TableCell>MIddle Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Number</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Date of Birth</TableCell>
          </tr>

          {sentdata.map((rowdata, index) => {
            return (
              <tr key={index}>
                <TableCell>{rowdata.firstname}</TableCell>
                <TableCell>{rowdata.middlename}</TableCell>
                <TableCell>{rowdata.lastname}</TableCell>
                <TableCell>{rowdata.email}</TableCell>
                <TableCell>{rowdata.number}</TableCell>
                <TableCell>{rowdata.gender}</TableCell>
                <TableCell>{rowdata.date}</TableCell>
              </tr>
            );
          })}
        </table>
      </Box>
    </div>
  );
}
