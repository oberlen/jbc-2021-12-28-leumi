import { Component } from "react";

interface RandomProductState {
  products: Array<string>;
  randomProduct: string;
}

class RandomProduct extends Component<{}, RandomProductState> {
  private timerId = 0;

  constructor(props: {}) {
    super(props);
    this.state = {
      products: ["Appple", "Banana", "Peach", "Grapes", "Orange"],
      randomProduct: "Apple",
    };
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const index = Math.floor(Math.random() * this.state.products.length);
      this.setState({ randomProduct: this.state.products[index] });
    }, 1000);
  }

  render() {
    return (
      <div className="RandomProduct Box">
        <span>{this.state.randomProduct}</span>
      </div>
    );
  }

  componentDidUpdate() {
    // console.log("Changed");
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }
}

export default RandomProduct;
