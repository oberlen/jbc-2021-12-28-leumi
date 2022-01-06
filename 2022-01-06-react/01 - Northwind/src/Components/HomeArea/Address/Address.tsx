function Address(): JSX.Element {
  const dynamicStyling = {
    backgroundColor: Math.random() > 0.5 ? "red" : "yellow",
    color: Math.random() > 0.5 ? "blue" : "green",
  };

  return (
    <div className="Box">
      <p style={dynamicStyling}>Our Address: HaMasger 34, Tel Aviv</p>
    </div>
  );
}

export default Address;
