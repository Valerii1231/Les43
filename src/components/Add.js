
import React from "react";

function Add(props) {
  return (
    <div className="add">
      <label>Product name</label>
      <input
        onInput={props.chName}
        onBlur={props.valName}
        className={props.clName}
        type="text"
        value={props.val.name}
      />

      <label>Product price</label>
      <input
        onInput={props.chPrice}
        onBlur={props.valPrice} 
        className={props.clPrice}
        type="number"
        value={props.val.price}
      />
      <button
        onClick={props.adProducts}
        className={props.clPrice} 
        type="button"
      >
        Add
      </button>
    </div>
  );
}

export default Add;

           