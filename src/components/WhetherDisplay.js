import React from "react";

const WhetherDisplay = function (props) {
  const { data } = props;
  const { temprature, conditions } = data;

  const dataStyle = {
    color: temprature > 20 ? "red" : "blue",
  };

  return (
    <div>
      <p>
        Temperature: <span style={dataStyle}>{temprature}</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WhetherDisplay;
