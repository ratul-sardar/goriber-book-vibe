export default function DetailsPage() {
  return (
    <section className="">
      <div className="w-11/12 mx-auto py-16 lg:py-20 xl:py-28  grid grid-col-4 md:grid-cols-8 lg:grid-cols-12 gap-2 md:gap-4 lg:gap-6">
        {/* Image Panel*/}
        <div className="col-span-4 lg:col-span-6 flex items-center justify-center">
          <img
            src="https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
            alt="Image of the Book"
            className="w-full max-w-120"
          />
        </div>

        {/* Content Panel*/}
        <div className="col-span-4 lg:col-span-6">
          <h2 className="text-4xl text-black mb-4">The Catcher in the Rye</h2>
          <p className="text-xl text-gray-500 mb-6">By: </p>

          <div className="divider mb-4"></div>
          <p className="text-xl mb-4">Fiction</p>
          <div className="divider mb-6"></div>

          <p className="mb-6">
            <span className="font-bold">Review :</span> Sit amet consectetur.
            Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel
            non enim elementum penatibus pellentesque ac. Nec accumsan euismod
            nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus.
            Fermentum faucibus nulla enim ornare. Id neque neque pretium enim
            platea urna non dictum. Faucibus dignissim ridiculus nibh tristique
            massa non.
          </p>

          <div className="flex gap-4 items-center justify-start mb-6">
            <span className="font-bold">Tag:</span>{" "}
            <div className="badge badge-success badge-soft">Success</div>
            <div className="badge badge-success badge-soft">Success</div>
          </div>

          <div className="divider mb-6"></div>

          <div className="grid grid-cols-2 mb-6">
            <p className="text-md text-gray-500">Number of Pages:</p>
            <p className="text-md text-bold">281</p>
            <p className="text-md text-gray-500">Publisher:</p>
            <p className="text-md text-bold">J.B Lippincott & Co.</p>
            <p className="text-md text-gray-500">Year of Publishing:</p>
            <p className="text-md text-bold">1960</p>
            <p className="text-md text-gray-500">Rating:</p>
            <p className="text-md text-bold">4.8</p>
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
