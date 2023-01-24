import React from "react";

const Display = (props) => {
  const { diet, userID } = props.variable;
  console.log(diet);
  //   if (props.key === userID)
  return (
    <div className="variable-container">
      {/* <h3>This is your diet on</h3> */}
      <div className="variable-title">
        <h4>Breakfast:</h4>
      </div>
      <ul className="variable-descriptions">
        {diet.breakfast.items.map((item, index) => (
          <li>
            item {index}: {item}
          </li>
        ))}
        <li>location: {diet.breakfast.location}</li>
        <li>rating: {diet.breakfast.rating}</li>
      </ul>
    </div>
  );
};

export default Display;
