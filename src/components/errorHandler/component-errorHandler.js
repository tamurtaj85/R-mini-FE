export const ErrorHandler = (response) => {
  if (response?.code && response?.message) {
    // Timeout Error and other errors
    console.log(response.code, response.message);
    return;
  } else if (response?.status !== 200) {
    // console.log(response.data);
    // Set failure snackbar here
    return;
  }

  if (response?.status === 200) {
    //    Set success snackbar here
  }
};
