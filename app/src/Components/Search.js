import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="search">
        <i className="ri-search-line"> </i>
        <input
          type="text"
          name="name"
          placeholder="Search Twitter"
          onChange={onChangeHandler}
          value={inputValue}
        />
      </div>
    </>
  );
};

export default Search;
