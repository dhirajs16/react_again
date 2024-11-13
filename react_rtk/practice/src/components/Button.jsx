import { useDispatch } from "react-redux";

const Button = ({ action, color, work }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(action)}
      className={`px-3 py-1 bg-${color}-600`}
    >
      {work}
    </button>
  );
};

export default Button;
