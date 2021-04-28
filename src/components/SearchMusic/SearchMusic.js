import SearchBar from "./SearchBar";
import React, { Component } from "react";

class SearchMusic extends Component {
  state = {
    keyword: "",
    results: []
  };

  matchName = (name, keyword) => {
    var keyLen = keyword.length;
    name = name.toLowerCase().substring(0, keyLen);
    if (keyword == "") return false;
    return name == keyword.toLowerCase();
  };

  onSearch = async text => {
    if (text != "") {
      var dataArr, data, parsedData;
      try {
        dataArr = await fetch(
          `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${text}&api_key=${process.env.REACT_APP_LASTFM_API}&format=json`
        );
        data = await dataArr.json();
        parsedData = data["results"]["trackmatches"]["track"];
      } catch (err) {
        console.log(err.message);
      }
      this.setState({ results: parsedData });
    } else this.setState({ results: [] });
  };

  updateField = (field, value, update = true) => {
    if (update) this.onSearch(value);
    this.setState({ [field]: value });
  };
  render() {
    let { results, keyword } = this.state;

    return (
      <div className="Search">
        <SearchBar
          results={results}
          keyword={keyword}
          updateField={this.updateField}
          date={this.props.date}
        />
      </div>
    );
  }
}

export default SearchMusic;