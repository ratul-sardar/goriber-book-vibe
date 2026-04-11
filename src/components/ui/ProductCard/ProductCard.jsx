export default function ProductCard() {
  return (
    <div className="card card-md bg-base-100 w-full rounded-4 border border-[#F3F3F3] shadow-sm">
      <figure className="px-10 pt-10 p-4 bg-[#F3F3F3] ">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-left">
        <h3 className="card-title">Card Title</h3>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
