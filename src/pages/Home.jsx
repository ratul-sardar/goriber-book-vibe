import ProductCard from "../components/ui/ProductCard/ProductCard";

export default function Home() {
  return (
    <section className="">
      <div className="w-11/12 container mx-auto py-16 lg:py-20 xl:py-28 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </section>
  );
}
