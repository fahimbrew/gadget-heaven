import PropTypes from "prop-types";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const ButtonContainer = ({ categories }) => {
  //   const params = useParams();
  //   console.log(params);
  //   console.log(categories);
  //   const data = useLoaderData();
  //   console.log(data);
  return (
    <div className="flex flex-col border border-gray-200 p-10 gap-5 rounded-3xl h-fit">
      <NavLink
        to={"/gadgets/all"}
        className={({ isActive }) => `btn ${isActive ? "text-purple-600" : ""}`}
      >
        See All
      </NavLink>
      {categories.map((category) => (
        <NavLink
          className={({ isActive }) =>
            `btn ${isActive ? "text-purple-600" : ""}`
          }
          to={`/gadgets/${category.category}`}
          key={category.id}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

ButtonContainer.propTypes = {
  categories: PropTypes.array,
};

export default ButtonContainer;
