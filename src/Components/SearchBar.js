import React from "react";
import style from "../styles/style.css";
class SearchBar extends React.Component {
  state = { searchInput: "" };
  SubmitSearchBar = (event) => {
    event.preventDefault();
    this.props.onsubmit(this.state.searchInput);
  };
  render() {
    return (
      <div className="searchBox">
        <form className="d-flex" onSubmit={this.SubmitSearchBar}>
          <div className="input-group mb-3">
            <button
              className="input-group-text allSides"
              style={{ background: "#CCCCFF" }}
            >
              <i className="fas fa-search"></i>
            </button>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => this.setState({ searchInput: e.target.value })}
              value={this.state.searchInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
