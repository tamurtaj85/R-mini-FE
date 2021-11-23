/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Services } from "../../services/index";
import { IMGS_PATHS } from "../../constants/imgsPaths";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const style = {
  width: "100%",
  maxWidth: 360,
};

export default function Products() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [productsList, setProductsList] = useState([]);

  async function loadCategories() {
    const data = await Services.getCategoriesList();
    // console.log(data);
    setCategoriesList(data);
  }

  async function loadProducts() {
    const data = await Services.ProductServices.getProducts();
    // console.log(data);
    setProductsList(data);
  }

  useEffect(() => {
    loadCategories();
    loadProducts();
  }, []);

  return (
    <>
      <div className="productPage">
        <div className="categories">
          <h1>Categories</h1>
          <List sx={style} component="nav" aria-label="categoriesL1">
            {categoriesList.map((category) => {
              return (
                <>
                  <ListItem button>
                    <ListItemText
                      primary={category.parentCategory.toUpperCase()}
                      key={category._id}
                    />
                  </ListItem>
                  <Divider />
                </>
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
