import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import Modal from "./Modal";

class App extends React.Component {
  //
  //
  //
  state = { images: [] };

  onSearchSubmit = async (searchInput) => {
    const response = await unsplash.get("search/photos", {
      params: { query: searchInput },
    });
    //   .then((response) => {
    //     console.log(response.data.results);
    //   });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div>
        <Header>
          <SearchBar onsubmit={this.onSearchSubmit} />
        </Header>
        <ImageList images={this.state.images} />
        <Modal />
      </div>
    );
  }
}

export default App;
