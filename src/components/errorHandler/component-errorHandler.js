// export const ErrorHandler = (response, failuerObject, successObject) => {
//         if (response?.code && response?.message) {
//           console.log(response.code, response.message);
//           // Timeout Error
//         } else if (response?.status !== 200) {
//           // console.log(response.data);
//           // setSnackBar({
//           //   state: true,
//           //   alertMessage: response.data,
//           //   severity: "warning",
//           // });
//           setStateSB(true);
//           setAlertMessageSB(response.data);
//           setSeveritySB("warning");
//           return;
//         }

//         if (response?.status === 200) {
//           // setSnackBar({
//           //   state: true,
//           //   alertMessage: "sign in successful",
//           //   severity: "success",
//           // });
//           setStateSB(true);
//           setAlertMessageSB("sign in successful");
//           setSeveritySB("success");
//         }
// };
