import { useDispatch } from "react-redux";

const Button = (props) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(props.action)}
      className={`px-3 py-1 bg-${props.color}-600`}
    >
      {props.work}
    </button>
  );
};

export default Button;
