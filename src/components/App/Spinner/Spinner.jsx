import { ClipLoader, MoonLoader } from "react-spinners";

const Spinner = ({ status }) => {
  const color = "whtie";
  return <ClipLoader color={color} loading={status} size={28} />;
};

export default Spinner;
