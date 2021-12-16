import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function GenericSnackbars(props) {
  const [open, setOpen] = useState(false);

  // console.log(props);
  const { state, alertMessage, severity } = props.snackBar;
  // console.log(state, alertMessage, severity);

  useEffect(() => {
    setOpen(state);
  }, [props]);

  const handleClose = (event, reason) => {
    // if (reason === "clickaway") {
    //   return;
    // }
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {alertMessage?.toUpperCase()}
        </Alert>
      </Snackbar>
    </Stack>
    // <h1>{props.alertMessage}</h1>
    // <></>
  );
}
