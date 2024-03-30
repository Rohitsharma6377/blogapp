import React from "react";
import "./Search.css";
const Search = ({ value, handelsearchkey, clearsearch, formSubmit }) => {
  return (
    <div className="search">
      <form action="" onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="search by category"
          onChange={handelsearchkey}
          value={value}
        />
        {value && <span onClick={clearsearch}>x</span>}
        <button>Go</button>
      </form>
    </div>
  );
};

export default Search;
