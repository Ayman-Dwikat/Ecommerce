import { useGetProductsQuery } from "../store/services/productApi";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { data: productsData, isLoading } = useGetProductsQuery({
    limit: 10,
    skip: 4,
  });

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
    <div className="my-4">
      <Title
        text1="LATEST"
        text2="COLLECTIONS"
        text3="Explore our newest arrivals showcasing the latest fashion trends. From elegant outfits to trendy accessories."
      />

      <div className="grid-container">
        {productsData.products.map((item) => (
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

export default LatestCollection;
