import PropTypes from "prop-types";

const Card = ({ gadget }) => {
  const { product_image, product_title, price } = gadget;
  return (
    <div>
      <div className="card bg-base-100 w-96 mx-auto shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={product_image}
            alt={product_title}
            className="rounded-xl w-full h-72 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions">
            <button className="btn btn-outline text-[#9538E2] rounded-xl">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  gadget: PropTypes.object,
};

export default Card;
