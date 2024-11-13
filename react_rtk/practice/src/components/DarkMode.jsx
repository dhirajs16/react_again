import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../features/theme/themeSlice";

const DarkMode = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  
  console.log(theme);

  return (
    <div className="relative left-1/2">
      <div
        onClick={() => dispatch(toggle())}
        className={`w-10 h-10 inline-block absolute z-10 bg-red-800 ${theme=='light'?'opacity-100':'opacity-0'}`}
      ></div>
      <div
        onClick={() => dispatch(toggle())}
        className={`w-10 h-10 inline-block bg-green-800 `}
      ></div>
    </div>
  );
};

export default DarkMode;
