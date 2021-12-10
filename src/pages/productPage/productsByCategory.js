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

import { Link, useParams } from "react-router-dom";

const style = {
  width: "100%",
  maxWidth: 360,
};

export default function ProductsByCategory() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [productsList, setProductsList] = useState([]);

  const { cID } = useParams();

  useEffect(() => {
    loadCategories();
    loadProductsByCategory();
  }, [cID]);

  async function loadCategories() {
    const response = await Services.getCategoriesList();
    // console.log("CategoriesResponse:", response);
    setCategoriesList(response.data);
  }

  async function loadProductsByCategory() {
    const response = await Services.ProductServices.getProductByCategory(cID);
    // console.log("LoadByCategoryResponse:", response);
    setProductsList(response.data.products);
  }

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
          {productsList.length === 0 ? (
            <h1>No products in this category yet! </h1>
          ) : (
            productsList.map((product) => {
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
            })
          )}
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
