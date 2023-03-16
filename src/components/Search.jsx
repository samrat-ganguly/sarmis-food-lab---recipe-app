import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Search/Search.css";

const Search = () => {
  let search;
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/result?search=${input}`);
  };

  return (
    <div className="Search">
      <form onSubmit={submitHandler}>
        <div className="text_search">
          <BiSearchAlt />
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
