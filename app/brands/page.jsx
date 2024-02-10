import style from "./Brands.module.css";
import React from "react";
import BrandItem from "../components/BrandItem/BrandItem";
import { brandsData } from "../store/API_test/brands";

export default function Brands() {
  const brandData = brandsData;

  return (
    <div className={style.brands}>
      <div className="container">
        <h1>Brand Page</h1>
        <div className={style.brands_header}>
          <span></span>
          <span>brand</span>
          <span>core attribute</span>
          <span>one item</span>
          <span>two items</span>
          <span>three items</span>
        </div>
        <div>
          {brandsData.map((item) => (
             <BrandItem brandData={item}></BrandItem>
          ))}
        </div>
      </div>
    </div>
  );
}
