import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { Services } from "../../services";
import { GenericSnackbars } from "../../components/snackBar/snackBar";

import { useNavigate } from "react-router";

import { SB_DEF_STATE } from "../../constants/constants";

export const Order = () => {
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [order, setOrder] = useState({
    orderType: "",
    productID: "",
    quantity: "",
  });

  const [products, setProducts] = useState([]);
  const [snackBar, setSnackBar] = useState(SB_DEF_STATE);
  const [sww, setSWW] = useState(null);

  const navigateTo = useNavigate();

  async function getProducts() {
    const response = await Services.ProductServices.getProducts();
    setProducts(response.data);
    // console.log(response);
  }

  async function placeOrder() {
    const response = await Services.Order.placeOrder({
      deliveryDate,
      ...order,
    });

    if (response?.code && response?.message) {
      // Timeout Error or anything else
      // console.log(response.code, response.message);
      setSWW(response);
      return;
    } else if (response?.status > 400) {
      // console.log(response.data);
      setSnackBar({
        state: true,
        alertMessage: response.data,
        severity: "warning",
      });

      return;
    }

    if (response.status === 201) {
      setSnackBar({
        state: true,
        alertMessage: "order placed successfully",
        severity: "success",
      });
      navigateTo("/cart");
      //   console.log("Order Placed Successfully");
    }
    // console.log(response);
  }

  function handleChange(e) {
    e.preventDefault();
    setOrder({ ...order, [e.target.name]: e.target.value });
  }
  //   console.log(order);

  function handleClick() {
    placeOrder();
    // console.log({ deliveryDate, ...order });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="order-parent">
      <h1>Place your order here</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="on"
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            name="deliveryDate"
            label="Choose Delivery Date"
            value={deliveryDate}
            onChange={(value) => {
              setDeliveryDate(value);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <TextField
          id="filled-select-orderType"
          name="orderType"
          select
          label="Order Type"
          value={order.orderType}
          onChange={handleChange}
          helperText="Please order type"
          variant="filled"
        >
          <MenuItem value="Organic" active>
            Organic
          </MenuItem>
          <MenuItem value="Inorganic">Inorganic</MenuItem>
        </TextField>

        <TextField
          id="filled-select-product"
          name="productID"
          select
          label="Products"
          value={order.productID}
          onChange={handleChange}
          helperText="Please select your product"
          variant="filled"
        >
          {products.map((product) => (
            <MenuItem key={product._id} value={product._id}>
              {product.productName}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          style={{ width: "200px" }}
          id="quantity"
          name="quantity"
          value={order.quantity}
          onChange={handleChange}
          label="Quantity"
          variant="filled"
          type="number"
        />
        <Button
          variant="contained"
          type="button"
          onClick={handleClick}
          style={{ background: "#ff6517" }}
        >
          Order Now
        </Button>
      </Box>
      <GenericSnackbars snackBar={snackBar} />
    </div>
  );
};
