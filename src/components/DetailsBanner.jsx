import PropTypes from "prop-types";
import { IoIosCart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { addToCart } from "../Utils";

const DetailsBanner = ({ gadget }) => {
  const handleAddToCart = (gadget) => {
    addToCart(gadget);
  };

  return (
    <div className="relative md:mb-96">
      <div className="hero bg-[#9538E2] text-white md:p-28 p-10 rounded-3xl">
        <div className="hero-content text-center">
          <div className="md:w-9/12 mx-auto">
            <h1 className="text-2xl md:text-5xl font-bold">
              Product Details {gadget.product_id}
            </h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      <div className=" md:absolute z-50 left-[25%] -bottom-90 border-gray-300 rounded-3xl p-3 md:w-6/12 mx-auto">
        {/* dynamic starts here */}
        <div className="bg-base-200  rounded-3xl">
          <div className="hero-content flex-col lg:flex-row">
            <img src={gadget.product_image} className="md:w-1/2 rounded-lg" />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">{gadget.product_title}</h1>
              <p>Price ${gadget.price}</p>
              {gadget.availability && (
                <p className="text-lime-600 p-2 border w-1/3 text-center rounded-3xl bg-lime-50">
                  In Stock
                </p>
              )}
              <p className="py-1">{gadget.description}</p>
              <div>
                <h3 className="font-black">Specifications:</h3>
                <ol>
                  {gadget.Specification?.map((text, index) => (
                    <li key={index} className="list-decimal ml-5">
                      {text}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="font-black">Rating:</h3>
                <div className="flex items-center gap-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="2 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="4 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="5 star"
                    />
                  </div>
                  <div>
                    <span className="rounded-full border p-1 bg-[#09080F0D]">
                      {gadget.rating}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleAddToCart(gadget)}
                  className="btn bg-[#9538E2] text-white rounded-2xl"
                >
                  <span>Add to cart</span>{" "}
                  <span>
                    <IoIosCart></IoIosCart>
                  </span>
                </button>
                <button className="rounded-full border btn">
                  <CiHeart className="text-2xl"></CiHeart>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* dynamic ends here */}
      </div>
    </div>
  );
};
DetailsBanner.propTypes = {
  gadget: PropTypes.object,
};

export default DetailsBanner;
