/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { IMGS_PATHS } from "../../constants/imgsPaths";

function navigationLogo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={IMGS_PATHS.BRAND_LOGO_IMG} alt="R mini logo" />
      </Link>
    </div>
  );
}

export default navigationLogo;
