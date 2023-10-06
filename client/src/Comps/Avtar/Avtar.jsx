import React from "react";

const Avtar = ({
  children,
  px,
  py,
  cursor,
  backgroundColor,
  color,
  borderRadius,
  fontSize,
}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || "black",
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
  };
  return <div style={style}>{children}</div>;
};

export default Avtar;
