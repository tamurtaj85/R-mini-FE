import Navigation from "./navigation";
import NavigationLogo from "./navLogo";

function navigationBar() {
  return (
    <div className="navBar">
      <NavigationLogo />
      <Navigation />
    </div>
  );
}

export default navigationBar;
