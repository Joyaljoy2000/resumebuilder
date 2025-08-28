import Edit from "./Edit";
import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import DownloadIcon from '@mui/icons-material/Download';
import HistoryIcon from '@mui/icons-material/History';
import EditDocumentIcon from '@mui/icons-material/EditDocument';


const Preview = () => {
  return (
    <div>
      <Box>
        <Stack justifyContent={'end'} direction={'row'} spacing={2}>
          <Button className="fs-2" variant=""><DownloadIcon/>  </Button>
                    <Button className="fs-2" variant=""><HistoryIcon/></Button>
                    <Edit/>
                    <Button>Back</Button>

        </Stack>
      </Box>
      <Box
        sx={{
          width: "700px",
          height: "700px",
          m: 5,
          display: "flex",
          flexWrap: "wrap",
          p: 5,
          borderRadius: "10px",
        }}
      ><Paper className="w-100 p-3" elevation={7}>
        <Typography variant="h4" align="center" component={"h1"}>Full Name</Typography>
        <Typography variant="subtitle2"  align="center" >Job Title</Typography>
                <Typography variant="subtitle2"  align="center">Locaton|email|ph no</Typography>
                <Typography variant="body2" align="center" mb={4}> <Link>Github</Link>|<Link>LinkedIn</Link> |<Link>PortFolio</Link></Typography>
<Divider>Summary</Divider>
<Typography variant="body2">summary</Typography>
<Divider >Education</Divider>
<Typography variant="h5" align="center">Course Name</Typography>
<Typography variant="body1" align="center" mb={4}>College name|University|Year</Typography>
<Divider >Professional Experience</Divider>


<Typography variant="h6" align="center">Job Name</Typography>
<Typography variant="body1" align="center" mb={4}>Company name|locaton|duration</Typography>
<Divider>Skills</Divider>

<Stack direction={"row"} spacing={2}>
<Button variant="outlined">Skills</Button>
</Stack>
      </Paper>
 

      </Box>
    </div>
  );
};

export default Preview;
