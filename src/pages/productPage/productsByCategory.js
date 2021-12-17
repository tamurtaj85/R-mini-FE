/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

import { Services } from "../../services/index";

import { useParams } from "react-router-dom";

import { RenderProductPage } from "./productPage";

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

  return <>{RenderProductPage(categoriesList, productsList)}</>;
}
