import React from "react";
import { IMGS_PATHS } from "../../constants/imgsPaths";

export default function home() {
  return (
    <div className="homePage">
      <div className="colSpan1Of2">
        <h1>
          Retail made <br />
          easier
        </h1>
        <p>Making life easier for retailers in Pakistan</p>
        <button type="button">Explore more</button>
      </div>
      <div className="colSpan1Of2">
        <img src={IMGS_PATHS.BRAND_LOGO_IMG} alt="R mini logo"></img>
      </div>
    </div>
  );
}
