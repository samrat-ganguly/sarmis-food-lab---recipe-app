import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import Card2 from "../components/Card2";
import { data } from "../recipe_api/data";
import "../styles/Result/Result.css";

const Result = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search").toLowerCase();

  return (
    <div className="Result">
      <div className="result_list">
        {data.map((e) => {
          if (e.title.toLowerCase().includes(search)) {
            return (
              <Link to={`/recipe/${e.id}`} key={`receipe${e.id}`}>
                <Card2 data={e} />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Result;
