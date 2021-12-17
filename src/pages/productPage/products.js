/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Services } from "../../services/index";

import { RenderProductPage } from "./productPage";

export default function Products() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [productsList, setProductsList] = useState([]);

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

  return <>{RenderProductPage(categoriesList, productsList)}</>;
}
