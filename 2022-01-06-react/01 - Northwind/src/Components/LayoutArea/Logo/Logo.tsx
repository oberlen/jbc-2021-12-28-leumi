import logoImage from "../../../Assets/images/logo.jpg";
import "./Logo.css";

function Logo(): JSX.Element {
  return (
    <div className="Logo">
      <img alt="logo" src={logoImage} />
    </div>
  );
}

export default Logo;
