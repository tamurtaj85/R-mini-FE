import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "..";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Services } from "../../services";

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

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState(null);
  const user = useContext(AuthContext);

  async function getUserInfo() {
    if (!user?.USER_ID) return;

    const response = await Services.Users.getUserByID(user?.USER_ID);
    // console.log(response);
    setUserData(response.data);
  }

  useEffect(() => {
    getUserInfo();
    setCart(JSON.parse(localStorage.getItem(`cart:${user?.USER_ID ?? ""}`)));
  }, []);

  useEffect(() => {
    localStorage.setItem(`cart:${user?.USER_ID ?? ""}`, JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="cartPage">
      <header className="cartHeader">
        <div className="cartInfo">
          <h2 className="cartID">Cart ID: {Math.random() * 1000000}</h2>
          <h4 className="cartDT">Cart Date & Time: {Date()} </h4>
        </div>
        <div className="userInfo">
          <Stack direction="row" spacing={5}>
            <Avatar {...stringAvatar(`${userData?.fullName ?? username}`)} />
          </Stack>
          <h4 className="userName">{userData?.fullName ?? username}</h4>
        </div>
      </header>

      {cart.length === 0 ? (
        <div style={{ color: "gray" }}>
          <h3>You have no items in your cart!</h3>
          <h4>Please select products from Products page.</h4>
        </div>
      ) : (
        <div>
          <h1 style={{ color: "gray" }}>Cart Items</h1>
          {cart.map((item, index) => {
            return (
              <div className="orderItem" key={item._id}>
                <div className="productDetails">
                  <h5>{item.productName}</h5>
                  <h5>{item.productBrand}</h5>
                  <h6>{item.productStatus}</h6>
                </div>
                <div className="productQuantity">1</div>
                <div className="removeProduct">
                  <button
                    onClick={() => {
                      cart.splice(index, 1);
                      setCart([...cart]);
                    }}
                  >
                    <span className="material-icons btn">highlight_off</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        // <></>
      )}

      {/* {console.log(localStorage.getItem("cart"), cart)} */}
    </div>
  );
}
