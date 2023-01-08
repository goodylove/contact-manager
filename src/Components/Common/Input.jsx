import react from "react";
const Input = ({ type, onChange, value }) => {
  return <input type={type} value={value} onChange={onChange} />;
};

export default Input;
