import React from "react";
import axios from "axios";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import "tachyons";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID JTL2GIJKOPTuEoZaMPm1V-nc5owivPkmK7UBh5bn4xg",
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
