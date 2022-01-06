import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Specials from "../Specials/Specials";
import Sales from "../Sales/Sales";
import Recommended from "../Recommended/Recommended";
import Location from "../Location/Location";
import Bestseller from "../Bestseller/Bestseller";
import RandomProduct from "../RandomProduct/RandomProduct";
import "./Home.css";
import Search from "../Search/Search";
import Address from "../Address/Address";
import Hours from "../Hours/Hours";

function Home(): JSX.Element {
  return (
    <div className="Home">
      {/* Interpolation: */}
      <Discount />

      {/* Conditional Rendering: */}
      <Specials />

      {/* Displaying Lists: */}
      <Desserts />

      {/* Props*/}
      <Sales precent={10} />
      <Sales precent={10} category={"Beverages"} />

      {/*Events*/}
      <Recommended />
      <Location />

      {/* Class comp. with state*/}
      <Bestseller />

      {/* Lifecycle methods */}
      <RandomProduct />

      {/* Two Way Binding */}
      <Search />

      {/*dynamic styling */}
      <Address />

      {/*CSS Modules */}
      <Hours />
    </div>
  );
}

export default Home;
