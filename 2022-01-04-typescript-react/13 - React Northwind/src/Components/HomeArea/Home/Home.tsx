import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Specials from "../Specials/Specials";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">

            {/* Interpolation: */}
			<Discount />

            {/* Conditional Rendering: */}
            <Specials />

            {/* Displaying Lists: */}
            <Desserts />
            
        </div>
    );
}

export default Home;
