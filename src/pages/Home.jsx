import { useContext } from "react";
import ProductCard from "../components/ui/ProductCard/ProductCard";
import { ProductDataContext } from "../context/ProductDataContext";

export default function Home() {
  const productData = useContext(ProductDataContext);

  return (
    <section className="">
      <div className="container w-11/12 mx-auto py-16 lg:py-20 xl:py-28 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productData.map((product) => (
          <ProductCard key={product.bookId} product={product}></ProductCard>
        ))}
      </div>
    </section>
  );
}
