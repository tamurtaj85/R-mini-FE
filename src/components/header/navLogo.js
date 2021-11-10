import { BRAND_LOGO_IMG } from "../../constants/imgsPaths";

function navigationLogo() {
  return (
    <div class="logo">
      <a href="#">
        <img src={BRAND_LOGO_IMG} alt="R mini logo" />
      </a>
    </div>
  );
}

export default navigationLogo;
