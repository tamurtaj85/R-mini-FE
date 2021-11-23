/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

function navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Product</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/auth">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}

export default navigation;
