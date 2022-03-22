import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import {
  getBrand,
  getByBrandName,
  getByCategoryName,
  getByRatings,
  getCategory,
  getRatings,
  searchByName,
} from "./filter";
import "./FIlterSidebar.css";
const FilterSidebar = ({ products, setSearchedProduct }) => {
  const [search, setSearch] = useState("");
  const [findCategory, setFindCategory] = useState("");
  const [findBrand, setFindBrand] = useState("");
  const [star, setStar] = useState(0);

  /* by search  */
  const handleSearch = () => {
    searchByName(search, products, setSearchedProduct);
  };

  /* by ratings */

  const handleStarClick = (star) => {
    getByRatings(star, products, setSearchedProduct);
    setStar(star);
  };

  useEffect(() => {
    /* find by category  */
    if (findCategory) {
      getByCategoryName(findCategory, products, setSearchedProduct);
    }

    /* find by brand  */
    if (findBrand) {
      console.log(findBrand);
      getByBrandName(findBrand, products, setSearchedProduct);
    }
  }, [findCategory, products, setSearchedProduct, findBrand]);

  return (
    <div className="filterSidebar">
      <h1>Filter </h1>
      <div className="filter-content">
        <div className="search item">
          <label htmlFor="byName">Name</label>
          <div className="search-group">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="By name"
              id="byName"
            />
            <button onClick={handleSearch}>
              <FiSearch />
            </button>
          </div>
        </div>

        <div className="category item">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            onChange={(e) => setFindCategory(e.target.value)}
          >
            <option value="">Select</option>
            {getCategory(products).map((category, ind) => (
              <option key={category + ind} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="brand item">
          <label htmlFor="brand">Brand</label>
          <select
            name="brand"
            id="brand"
            onChange={(e) => setFindBrand(e.target.value)}
          >
            <option value="">select</option>
            {getBrand(products).map((brand, ind) => (
              <option key={brand + ind} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className="ratings item">
          <label htmlFor="ratings">Ratings</label>
          <div className="ratings-item">
            {getRatings(products).map((ratings) => (
              <span
                key={ratings}
                onClick={() => handleStarClick(ratings)}
                className={star === ratings ? "active" : ""}
              >
                {ratings} Stars
              </span>
            ))}
          </div>
        </div>

        <button
          className="clear-filter-btn"
          onClick={() => {
            if (window.confirm("Do you want to clear all of filters?")) {
              window.location.reload();
            }
          }}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
