import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const classname = "text-sm text-blue-500 hover:text-blue-600 hover:underline";
  if (to === "-1")
    return (
      <button className={classname} to={to} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link className={classname} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
