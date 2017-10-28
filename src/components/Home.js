import React from "react";
import Posts from "./Posts";
import Categories from "./Categories";

const Home = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-3">
          <Categories />
        </div>
        <div className="column is-9">
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Home;
