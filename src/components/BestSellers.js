import { useGetProductsQuery } from "../store/services/productApi";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSellers = () => {
  const { data: productsData, isLoading } = useGetProductsQuery({
    limit: 15,
    sortBy: "rating",
    order: "desc",
  });

  const bestProducts =
    productsData?.products
      ?.slice()
      .sort(() => 0.5 - Math.random())
      .slice(0, 5) || [];

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
        text1="BEST"
        i
        text2="SELLERS"
        text3="Discover our top-rated products that are flying off the shelves. Handpicked for their popularity and quality."
      />

      <div className="grid-container">
        {bestProducts.map((item) => (
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

export default BestSellers;
