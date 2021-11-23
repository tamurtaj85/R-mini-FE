import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const username = "R mini user";

export default function cart() {
  return (
    <div className="cartPage">
      <header className="cartHeader">
        <div className="cartInfo">
          <h2 className="cartID">Cart ID: {Math.random() * 1000000}</h2>
          <h4 className="cartDT">Cart Date & Time: {Date()} </h4>
        </div>
        <div className="userInfo">
          <Stack direction="row" spacing={5}>
            <Avatar {...stringAvatar(`${username}`)} />
          </Stack>
          <h4 className="userName">{username}</h4>
        </div>
      </header>
      <div className="orderItem" key="0">
        <div className="productDetails">
          Product Details{/* Product Details use product component here */}
        </div>
        <div className="productQuantity">2</div>
        <div className="removeProduct">
          <button>
            <span className="material-icons btn">highlight_off</span>
          </button>
        </div>
      </div>
    </div>
  );
}
