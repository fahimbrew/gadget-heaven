import PropTypes from "prop-types";
import CartCard from "./CartCard";

const Cart = ({ gadgets, handleRemove }) => {
  //   console.log(gadgets);
  return (
    <div>
      <div className="flex justify-between items-center">
        {/* 1st div */}
        <div>
          <h3 className="font-black">Cart</h3>
        </div>
        {/* 2nd div */}
        <div className="flex items-center gap-1">
          <h3 className="font-black mr-1">Total Cost : 0</h3>
          <button className="btn text-[#9538E2] btn-outline rounded-xl">
            Sort By Price
          </button>
          <button className="btn bg-[#9538E2] text-white rounded-xl">
            Purchase
          </button>
        </div>
      </div>
      <div className="my-10 space-y-3">
        {gadgets.map((gadget, index) => (
          <CartCard handleRemove={handleRemove} key={index} gadget={gadget} />
        ))}
      </div>
    </div>
  );
};
Cart.propTypes = {
  gadgets: PropTypes.array,
  handleRemove: PropTypes.func,
};

export default Cart;
