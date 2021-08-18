import React from "react";

const style = {
  background: "orange",
  border: "1px solid green",
  fontSize: "40px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

export default function Square({ onClick, value }) {
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
}
