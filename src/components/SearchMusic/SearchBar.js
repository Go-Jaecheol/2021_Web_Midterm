import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ results, keyword, updateField, date}) => {
  var ClickHandler = (name, artist) => {
    const tilObj = { name, artist };
    window.localStorage.setItem(date , JSON.stringify(tilObj));
    updateField("keyword", "", false);
    updateField("results", []);
  };

  var cancelSearch = () => {
    updateField("keyword", "");
  };

  var renderResults = results.map(({ name, artist }, index) => {
    return (
      <SearchPreview
        key={index}
        clickHandler={ClickHandler}
        index={index}
        name={name}
        artist={artist}
      />
    );
  });
  return (
    <div className="auto">
      <button
        onClick={() => cancelSearch()}
        className={`cancel-btn ${keyword.length > 0 ? "active" : "inactive"}`}
      >
        x
      </button>
      <input
        className="search-bar"
        placeholder="Search"
        value={keyword}
        onChange={e => updateField("keyword", e.target.value)}
      />
      
      {results.length > 0 ? (
        <div className="search-results">{renderResults}</div>
      ) : null}
      <p className="titleLabel">Title</p>
      <p className="titleVal">{window.localStorage.getItem(date) === null ? '' : JSON.parse(window.localStorage.getItem(date)).name}</p>
      <p className="artistLabel">Artist</p>
      <p className="artistVal">{window.localStorage.getItem(date) === null ? '' : JSON.parse(window.localStorage.getItem(date)).artist}</p>
    </div>
  );
};

const SearchPreview = ({ name, artist, index, clickHandler }) => {
  return (
    <div onClick={ () => clickHandler(name, artist)}
      className={`search-preview ${index == 0 ? "start" : ""}`}
    >
      <div className="first">
        <p className="name">{name}</p>
        <p className="artist">{artist}</p>
      </div>
    </div>
  );
};

export default SearchBar;