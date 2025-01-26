import PropTypes from "prop-types";
import WishCart from "./WishCart";

const Wishlist = ({ wishGadgets, handleRemoveWish }) => {
  //   console.log(wishGadgets);
  return (
    <div>
      <h3 className="font-black my-10">Wishlist</h3>
      <div>
        {wishGadgets.map((gadget) => (
          <WishCart
            key={gadget.product_id}
            handleRemoveWish={handleRemoveWish}
            gadget={gadget}
          />
        ))}
      </div>
    </div>
  );
};

Wishlist.propTypes = {
  wishGadgets: PropTypes.array,
  handleRemoveWish: PropTypes.func,
};

export default Wishlist;
