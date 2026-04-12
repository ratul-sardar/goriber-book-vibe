import { FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router";

export default function ProductCard({ product }) {
  const {
    bookId = 1,
    bookName = "The Great Gatsby",
    author = "F. Scott Fitzgerald",
    image = "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
    review = "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages = 192,
    rating = 4.5,
    category = "Classic",
    tags = ["Fiction", "Romance"],
    publisher = "Scribner",
    yearOfPublishing = 1925,
  } = product;

  return (
    <NavLink
      to={`/bookDetails/${bookId}`}
      className="card card-md bg-base-100 w-full rounded-2xl border border-[#F3F3F3] shadow-sm"
    >
      <div className="card-body items-left">
        <figure className="rounded-2xl p-10  bg-[#F3F3F3] mb-4 ">
          <img src={image} alt="Shoes" className="h-90" />
        </figure>

        {/* Card Badge*/}
        <div className="flex gap-3">
          {tags.map((tag) => (
            <div key={tag} className="badge badge-soft badge-success">
              {tag}{" "}
            </div>
          ))}
        </div>

        {/* Card Title*/}
        <h3 className="card-title">{bookName}</h3>
        <p className="text-base-content">By: {author}</p>

        {/* Divider*/}
        <div className="divider"></div>

        <div className="flex justify-between items-center">
          <p className="">{category}</p>
          <div className="flex gap-2 items-center justify-center">
            {rating} <FaRegStar />
          </div>
        </div>
      </div>
    </NavLink>
  );
}
