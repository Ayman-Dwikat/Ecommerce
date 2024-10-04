import { useState, useEffect } from "react";
import { useGetProductsQuery } from "../store/services/productApi";
import ProductItem from "./ProductItem";
import Title from "./Title";

const RelatedProducts = ({ primary, secondary, productId }) => {
  const {
    data: productsData,
    isLoading,
    isError,
  } = useGetProductsQuery({
    select: "title,price,images,tags,category,id",
  });

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (productsData && productsData.products.length > 0) {
      const products = productsData.products;

      // Filter out the current product
      const filteredProducts = products.filter((item) => item.id !== productId);

      // Find products with the primary tag
      let primaryRelated = filteredProducts.filter(
        (item) => item.tags && item.tags.includes(primary)
      );

      // If less than 5 primary products, add secondary products
      if (primaryRelated.length < 5) {
        const secondaryRelated = filteredProducts.filter(
          (item) =>
            item.category === secondary &&
            !primaryRelated.some((primaryItem) => primaryItem.id === item.id) // Avoid duplicates
        );

        primaryRelated = [...primaryRelated, ...secondaryRelated].slice(0, 5);
      } else {
        // If we already have 5 or more primary products, limit to 5
        primaryRelated = primaryRelated.slice(0, 5);
      }

      setRelatedProducts(primaryRelated);
    }
  }, [primary, secondary, productsData, productId]);

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

  if (isError) {
    return <div>Error loading related products.</div>;
  }

  return (
    <div className="my-4">
      <Title
        text1="RELATED"
        text2="PRODUCTS"
        text3="Explore our newest arrivals showcasing the latest fashion trends. From elegant outfits to trendy accessories."
      />

      <div className="grid-container">
        {relatedProducts.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            image={item.images[0]}
            name={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
