import { useLoaderData } from "react-router";
import { useParams } from "react-router";

export default function DetailsPage() {
  // To get the unique book id from the params
  const idForBook = useParams();

  // To find the book for the details page
  const book = useLoaderData().filter((book) => book.bookId == idForBook.id);

  // Destructure the book object
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
  } = book[0];

  return (
    <section className="">
      <div className="container w-11/12 mx-auto py-16 lg:py-20 xl:py-28  grid grid-col-4 md:grid-cols-8 lg:grid-cols-12 gap-2 md:gap-4 lg:gap-6">
        {/* Image Panel*/}
        <div className="col-span-4 lg:col-span-6 flex items-start justify-center">
          <img
            src={image}
            alt="Image of the Book"
            className="w-full max-w-100"
          />
        </div>

        {/* Content Panel*/}
        <div className="col-span-4 lg:col-span-6">
          <h2 className="text-4xl text-black mb-4">{bookName}</h2>
          <p className="text-xl text-gray-500 mb-6">By: {author}</p>

          <div className="divider mb-4"></div>
          <p className="text-xl mb-4">{category}</p>
          <div className="divider mb-6"></div>

          <p className="mb-6">
            <span className="font-bold">Review :</span> {review}
          </p>

          <div className="flex gap-4 items-center justify-start mb-6">
            <span className="font-bold">Tag:</span>{" "}
            {tags.map((tag) => (
              <div key={tag} className="badge badge-success badge-soft">
                {tag}
              </div>
            ))}
          </div>

          <div className="divider mb-6"></div>

          <div className="grid grid-cols-2 mb-6">
            <p className="text-md text-gray-500">Number of Pages:</p>
            <p className="text-md text-bold">{totalPages}</p>
            <p className="text-md text-gray-500">Publisher:</p>
            <p className="text-md text-bold">{publisher}</p>
            <p className="text-md text-gray-500">Year of Publishing:</p>
            <p className="text-md text-bold">{yearOfPublishing}</p>
            <p className="text-md text-gray-500">Rating:</p>
            <p className="text-md text-bold">{rating}</p>
          </div>

          <div className="flex gap-4">
            <button className="btn">Read</button>
            <button className="btn btn-accent text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </section>
  );
}
