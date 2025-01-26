import PropTypes from "prop-types";
import { TiDelete } from "react-icons/ti";

const CartCard = ({ gadget, handleRemove }) => {
  //   console.log(gadget);

  const { product_image, product_title, description, price } = gadget;
  return (
    <div className="border border-gray-200 p-5 rounded-3xl">
      <div className="flex items-center justify-between">
        {/* left div */}
        <div className="flex md:flex-row flex-col gap-4">
          <div>
            <img
              className="w-20 h-20 object-cover md:rounded-xl"
              src={product_image}
              alt=""
            />
          </div>
          <div className="space-y-2">
            <h3>{product_title}</h3>
            <p className="text-gray-500">{description}</p>
            <p>
              <small className="font-black">Price : {price} </small>
            </p>
          </div>
        </div>
        {/* right div */}
        <div>
          <button
            onClick={() => handleRemove(gadget)}
            className="btn rounded-full"
          >
            <TiDelete className="text-2xl text-rose-700"></TiDelete>
          </button>
        </div>
      </div>
    </div>
  );
};
CartCard.propTypes = {
  gadget: PropTypes.object,
  handleRemove: PropTypes.func,
};
export default CartCard;
