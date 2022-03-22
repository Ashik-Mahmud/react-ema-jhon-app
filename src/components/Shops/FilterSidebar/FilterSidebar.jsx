import React from "react";
import "./FIlterSidebar.css";
const FilterSidebar = () => {
  return (
    <div className="filterSidebar">
      <h1>Filter </h1>
      <div className="filter-content">
        <div className="search item">
          <label htmlFor="byName">Name</label>
          <input type="search" placeholder="By name" id="byName" />
        </div>

        <div className="category item">
          <label htmlFor="category">Category</label>
          <select name="category" id="category">
            <option value="snekers">Sneekers</option>
            <option value="snekers">Bag</option>
            <option value="snekers">Hudi</option>
          </select>
        </div>

        <div className="brand item">
          <label htmlFor="brand">Brand</label>
          <select name="brand" id="brand">
            <option value="Adidas">Adidas</option>
            <option value="Lotto">Lotto</option>
            <option value="Gucci">Gucci</option>
          </select>
        </div>

        <div className="ratings item">
          <label htmlFor="ratings">Ratings</label>
          <div className="ratings-item">
            <span className="active">5 Stars</span>
            <span>4 Stars</span>
            <span>3 Stars</span>
            <span>2 Stars</span>
          </div>
        </div>

        <button className="clear-filter-btn">Clear Filter</button>
      </div>
    </div>
  );
};

export default FilterSidebar;
