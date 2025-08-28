import * as React from "react";
import EditDocumentIcon from "@mui/icons-material/EditDocument";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { Height } from "@mui/icons-material";

const Edit = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    maxHeight:"80vh",
    overflowY:'auto',
    p: 4,


  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        className="fs-2"
        variant="text"
        title="history"
      >
        <EditDocumentIcon />
      </Button>
      <Modal
        sx={"overflow: auto"}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h8">
            Edit Details
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h1">
            Personal Details
          </Typography>
          <TextField
            className="w-100"
            id="standard-basic"
            label="Full Name"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="Job Title"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="Location"
            variant="standard"
          />
          <Typography id="modal-modal-title" variant="h6" component="h1">
            Contact Details
          </Typography>
          <TextField
            className="w-100"
            id="standard-basic"
            label="Email"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="  
Phone Number"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="Github Prifile link"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="LinkedIn Profile Link
"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="Portfolio Link
"
            variant="standard"
          />
          <Typography id="modal-modal-title" variant="h6" component="h1">
            Education Details
          </Typography>
          <TextField
            className="w-100"
            id="standard-basic"
            label="Course Name
"
            variant="standard"
          />{" "}
          <TextField
            className="w-100"
            id="standard-basic"
            label="College Name
"
            variant="standard"
          />{" "}
          <TextField
            className="w-100"
            id="standard-basic"
            label="University
"
            variant="standard"
          />{" "}
          <TextField
            className="w-100"
            id="standard-basic"
            label="Year of Passout
"
            variant="standard"
          />
          <Typography id="modal-modal-title" variant="h6" component="h1">
            Professional Details
          </Typography>
          <TextField
            className="w-100"
            id="standard-basic"
            label="Job or Intern
"
            variant="standard"
          />{" "}
          <TextField
            className="w-100"
            id="standard-basic"
            label="Company Name
"
            variant="standard"
          />{" "}
          <TextField
            className="w-100"
            id="standard-basic"
            label="Location
"
            variant="standard"
          />{" "}
          <TextField
            className="w-100"
            id="standard-basic"
            label="Duration
"
            variant="standard"
          />
          <Typography id="modal-modal-title" variant="h6" component="h1">
            Skills
          </Typography>
          <TextField
            className="w-100"
            id="standard-basic"
            label="Add Skill
"
            variant="standard"
          />
          <Button variant="outlined">ADD</Button>
          <Typography
            className=""
            id="modal-modal-title"
            variant="h9"
            component="h9"
          >
            Selected Skills:
          </Typography>
          <h3>Professional Summary</h3>
          <TextField
            className="w-100"
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={3}
            defaultValue="Write a short summary of your self"
            variant="standard"
          />
          <Button variant="outlined">UPDATE</Button>
          
        </Box>
      </Modal>
    </>
  );
};

export default Edit;
