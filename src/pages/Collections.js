import { useEffect } from "react";
import { useGetProductsQuery } from "../store/services/productApi";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCategories,
  updateSortOrder,
  toggleFilterVisibility,
  filterProducts,
} from "../store/slices/filterSlice";

import { assets } from "../assets/assets";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";

const Collection = () => {
  const dispatch = useDispatch();
  const { categories, isFilterVisible, filteredProducts, sortOrder } =
    useSelector((state) => state.filter);
  const { search } = useSelector((state) => state.search);

  const { data: productsData, isLoading } = useGetProductsQuery({
    select: "title,price,images,category",
  });

  useEffect(() => {
    if (productsData) {
      dispatch(filterProducts({ products: productsData.products, search }));
    }
  }, [categories, sortOrder, search, productsData, dispatch]);

  const handleSortChange = (e) => {
    dispatch(updateSortOrder(e.target.value));
  };

  const handleCategoryChange = (e) => {
    dispatch(updateCategories(e.target.value));
  };

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginBlock: "20vh" }}
      >
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <div>
      <SearchBar />

      <div className="d-flex flex-column flex-md-row gap-1 gap-md-5 pt-5 border-top">
        {/* Filter Options */}
        <div className="min-w-20">
          <p
            className="my-2 filter-options"
            onClick={() => dispatch(toggleFilterVisibility())}
          >
            FILTERS
            <img
              className={`filter-icon d-md-none ${
                isFilterVisible ? "rotate-90" : ""
              }`}
              src={assets.dropdown_icon}
              alt="Dropdown Icon"
            />
          </p>

          {/* Category Filter */}
          <div
            className={`filter-section ${
              isFilterVisible ? "" : "d-none d-md-block"
            }`}
          >
            <p className="filter-title">CATEGORIES</p>
            <div className="d-flex flex-column gap-2 filter-item">
              {["women", "men", "beauty"].map((category) => (
                <label key={category}>
                  <input
                    type="checkbox"
                    value={category}
                    checked={categories.includes(category)}
                    onChange={handleCategoryChange}
                  />{" "}
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div
            className={`filter-section my-3 ${
              isFilterVisible ? "" : "d-none d-md-block"
            }`}
          >
            <p className="filter-title">TYPE</p>
            <div className="d-flex flex-column gap-2 filter-item">
              {["electronics", "home", "sports"].map((type) => (
                <label key={type}>
                  <input
                    type="checkbox"
                    value={type}
                    checked={categories.includes(type)}
                    onChange={handleCategoryChange}
                  />{" "}
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <div className="title d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 gap-sm-0 mb-3">
            <Title text1="ALL" text2="COLLECTIONS" className="m-0 p-0" />
            <select
              className="form-select form-select-sm border-secondary"
              style={{ width: "188px", opacity: "0.8" }}
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="high-low">Sort by: High to Low</option>
              <option value="low-high">Sort by: Low to High</option>
            </select>
          </div>

          {/* Map Products */}
          <div className="collection-container">
            {filteredProducts.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                image={product.images[0]}
                name={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
