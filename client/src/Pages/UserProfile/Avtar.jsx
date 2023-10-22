import React from "react";
import icon from "../../assets/pen.svg";

const Avtar = () => {
  return (
    <div>
      <button>
        Change Avtar :
        <input type="file" accept=".gif, .jpg,.jpeg, .png" />
      </button>
    </div>
  );
};

export default Avtar;
