import PropTypes from "prop-types";

const DashboardBanner = ({ handleClick }) => {
  return (
    <div className="mb-6">
      <div className="hero bg-[#9538E2] text-white md:p-28 p-10 rounded-3xl">
        <div className="hero-content text-center">
          <div className="md:w-9/12 mx-auto">
            <h1 className="text-2xl md:text-5xl font-bold">Dashboard</h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleClick}
                className="btn btn-outline text-white rounded-xl"
              >
                Cart
              </button>
              <button
                onClick={handleClick}
                className="btn bg-white text-[#9538E2] rounded-xl"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardBanner.propTypes = {
  handleClick: PropTypes.func,
};

export default DashboardBanner;
