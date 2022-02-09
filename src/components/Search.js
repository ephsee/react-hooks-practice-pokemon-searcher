import React from "react";

function Search({onSearch}) {
  
  function handleChange(e) {
    onSearch(e)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
