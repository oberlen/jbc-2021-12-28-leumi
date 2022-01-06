import { FC } from "react";
import "./Sales.css";
import whatEverIwant from "./Foo";
import { foo, bar } from "./Foo";

interface SalesProps {
  precent: number;
  category?: string;
}

const Sales: FC<SalesProps> = (props) => {
  return (
    <div className="Sales Box">
      <p>
        Sale: {props.precent}% off on all {props.category || "Products"}
      </p>
    </div>
  );
};

export default Sales;
