// Two way binding
import { Component, SyntheticEvent } from "react";

interface SearchState {
  textToSearch: string;
}

class Search extends Component<{}, SearchState> {
  constructor(props: {}) {
    super(props);
    this.state = { textToSearch: "" };

    // https://reactjs.org/docs/handling-events.html
    // this.textChanged2 = this.textChanged2.bind(this);
  }

  // private textChanged2(event: SyntheticEvent) {
  //   console.log(this);
  //   const value = (event.target as HTMLInputElement).value;
  //   this.setState({ textToSearch: value });
  // }

  private textChanged = (event: SyntheticEvent) => {
    console.log(this);
    const value = (event.target as HTMLInputElement).value;
    this.setState({ textToSearch: value });
  };

  private clear = () => {
    this.setState({ textToSearch: "" });
  };

  // controlled input
  render() {
    return (
      <div className="Box">
        <input
          type="text"
          value={this.state.textToSearch}
          onChange={this.textChanged}
        />
        <span>Searching for: {this.state.textToSearch}</span>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default Search;
