import PropTypes from "prop-types";
import CartCard from "./CartCard";
import { BsSortNumericDownAlt } from "react-icons/bs";
import modalImg from "../assets/Group.png";

const Cart = ({
  gadgets,
  handleRemove,
  sortFunc,
  cost,
  handleRemoveStorage,
}) => {
  //   console.log(gadgets);
  //   console.log(cost);

  return (
    <div>
      <div className="flex justify-between items-center">
        {/* 1st div */}
        <div>
          <h3 className="font-black">Cart</h3>
        </div>
        {/* 2nd div */}
        <div className="flex items-center gap-1">
          <h3 className="font-black mr-1">Total Cost : ${cost}</h3>
          <button
            onClick={() => sortFunc()}
            className="btn text-[#9538E2] btn-outline rounded-xl"
          >
            <span>Sort By Price</span>
            <span>
              <BsSortNumericDownAlt />
            </span>
          </button>
          {/* modal starts */}
          {/* The button to open modal */}
          <label
            onClick={() => handleRemoveStorage()}
            htmlFor="my_modal_7"
            className="btn bg-[#9538E2] text-white rounded-xl"
          >
            Purchase
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box flex flex-col items-center gap-5">
              <div>
                <img src={modalImg} alt="" />
              </div>
              <h3 className="text-lg font-bold">Payment Successfully</h3>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
          {/* modal ends */}
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
  sortFunc: PropTypes.func,
  cost: PropTypes.number,
  handleRemoveStorage: PropTypes.func,
};

export default Cart;
