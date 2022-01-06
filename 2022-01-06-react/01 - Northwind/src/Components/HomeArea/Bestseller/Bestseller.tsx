import { Component } from "react";
import "./Bestseller.css";

interface BestsellerState {
  item: string;
  price: number;
}

// class Bestseller extends Component { // no props and no state
// class Bestseller extends Component<SomePropsType> { // we have props (SomePropsType), and no state
// class Bestseller extends Component<SomePropsType, SomeStateType> { // we have props (SomePropsType) and state (SomeStateType)
// class Bestseller extends Component<{}, SomeStateType> { // no props, but we have state (SomeStateType)
class Bestseller extends Component<{}, BestsellerState> {
  constructor(props: {}) {
    super(props);
    this.state = { item: "blabl", price: 0 };
  }

  showBestseller = () => {
    // Do Not Do this!!!!
    // this.state.item = 'new bla bla';
    // this.state.price = 6;

    this.setState({ item: "Irish Coffe", price: 9.5 });
  };

  render(): JSX.Element {
    return (
      <div className="Bestseller Box">
        <button onClick={this.showBestseller}>Show Bestseller Product</button>
        <span>
          {this.state.item}, price: {this.state.price} ILS
        </span>
      </div>
    );
  }
}

export default Bestseller;
