import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-96 flex space-y-3 flex-col justify-center items-center">
      <h3 className="text-5xl text-rose-700">Ooops! Error 404</h3>
      <p className="text-xl text-gray-500">Page is not found</p>
      <button onClick={() => navigate("/")} className="btn btn-error">
        Go Back to home
      </button>
    </div>
  );
};

export default ErrorPage;
