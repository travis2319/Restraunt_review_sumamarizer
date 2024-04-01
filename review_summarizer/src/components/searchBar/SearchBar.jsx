import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ Restaurant }) => {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    // console.log(value);
    // fetchData(value);
  };

  const setResaurant = () => {
    Restaurant(input);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Type to Search...."
        value={input}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <button onClick={setResaurant}> submit</button>
    </div>
  );
};

export default SearchBar;
