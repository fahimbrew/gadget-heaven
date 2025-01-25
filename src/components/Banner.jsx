import bannerIMG from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="relative md:mb-96">
      <div className="hero bg-[#9538E2] text-white md:p-28 p-10 rounded-3xl">
        <div className="hero-content text-center">
          <div className="md:w-9/12 mx-auto">
            <h1 className="text-2xl md:text-5xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn bg-white text-[#9538E2] rounded-xl">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="border md:absolute z-50 left-[25%] -bottom-76 border-gray-300 rounded-3xl p-3 md:w-6/12 mx-auto">
        <img
          className="w-full h-96 mx-auto rounded-2xl "
          src={bannerIMG}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
