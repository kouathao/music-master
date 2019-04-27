import React, { Component } from "react";

class Search extends Component {
  state = { artistQuery: "" };

  // User input to search for artist
  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  };

  // Allow users to press the Enter button
  handleKeyPress = () => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };

  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  };

  render() {
    return (
      <div>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder="Search for an Artist"
        />
        <button onClick={this.searchArtist} className="btn btn-primary">
          Search
        </button>
      </div>
    );
  }
}

export default Search;
