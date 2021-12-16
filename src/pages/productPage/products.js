/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "..";
import { Services } from "../../services/index";
import { IMGS_PATHS } from "../../constants/imgsPaths";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { Link } from "react-router-dom";

const style = {
  width: "100%",
  maxWidth: 360,
};

export default function Products() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCategories();
    loadProducts();
  }, []);

  async function loadCategories() {
    const response = await Services.getCategoriesList();
    // console.log("CategoriesResponse:", response);
    setCategoriesList(response.data);
  }

  async function loadProducts() {
    const response = await Services.ProductServices.getProducts();
    // console.log("ProductsResponse: ", response);

    if (response?.code && response?.message)
      console.log(response.code, response.message);
    // else if (response?.status !== 200) console.log(response.data);
    setProductsList(response.data);
  }

  const user = useContext(AuthContext);

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem(`cart:${user?.USER_ID ?? ""}`));
    if (ls) setCart(ls);
    console.log("SetCart");
  }, []);

  useEffect(() => {
    localStorage.setItem(`cart:${user?.USER_ID ?? ""}`, JSON.stringify(cart));
    console.log("SetLS");
  }, [cart]);

  return (
    <>
      <div className="productPage">
        <div className="categories">
          <h1>Categories</h1>
          <List sx={style} component="nav" aria-label="categoriesL1">
            <Link
              to={`/products`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem key={0} data-id={0} button>
                <ListItemText primary={"ALL"} key={0} />
              </ListItem>
              <Divider />
            </Link>
            {categoriesList.map((category) => {
              return (
                <Link
                  to={`/category/${category._id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItem key={category._id} data-id={category._id} button>
                    <ListItemText
                      primary={category.parentCategory.toUpperCase()}
                      key={category._id}
                    />
                  </ListItem>
                  <Divider />
                </Link>
              );
            })}
          </List>
        </div>

        <div className="products">
          <h1>Products</h1>
          {productsList.map((product) => {
            return (
              <article className="product" key={product._id}>
                <div className="heroImg">
                  <img
                    src={
                      product.productImg
                        ? product.productImg
                        : IMGS_PATHS.SAMPLE_PRODUCT_IMG
                    }
                    alt="product img"
                  ></img>
                </div>
                <div className="productInfo">
                  <h3>
                    <a href="#">{product.productName.toUpperCase()}</a>
                  </h3>
                  <div className="product-card-header">
                    <IconButton
                      size="small"
                      style={{ color: "white", background: "#fa440f" }}
                      aria-label="add to shopping cart"
                      onClick={() => {
                        setCart([...cart, product]);
                      }}
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </div>

                  <h5>{product.productBrand}</h5>
                  <h5>{product.productPrice} Pkr</h5>
                  <h5>{product.productStatus.toUpperCase()}</h5>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="pagination">
        <Stack spacing={20}>
          <Pagination count={10} size="large" />
        </Stack>
      </div>
    </>
  );
}
