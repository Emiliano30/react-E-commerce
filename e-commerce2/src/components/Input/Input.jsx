import { useState } from "react";

function Input({ type, placeholder, value, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }
  return (
    <input
      className='input'
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

export default Input;