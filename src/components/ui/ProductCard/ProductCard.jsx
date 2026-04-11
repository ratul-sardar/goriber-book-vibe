import { FaRegStar } from "react-icons/fa";

export default function ProductCard() {
  return (
    <div className="card card-md bg-base-100 w-full rounded-2xl border border-[#F3F3F3] shadow-sm">
      <div className="card-body items-left">
        <figure className="rounded-2xl p-10  bg-[#F3F3F3] mb-4 ">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>

        {/* Card Badge*/}
        <div className="flex gap-6">
          <div className="badge badge-soft badge-success">Success</div>
          <div className="badge badge-soft badge-success">Success</div>
        </div>

        {/* Card Title*/}
        <h3 className="card-title">Card Title</h3>
        <p className="text-base-content">
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>

        {/* Divider*/}
        <div className="divider"></div>

        <div className="flex justify-between items-center">
          <p className="">Fiction</p>
          <div className="flex gap-2 items-center justify-center">
            5.0 <FaRegStar />
          </div>
        </div>
      </div>
    </div>
  );
}
