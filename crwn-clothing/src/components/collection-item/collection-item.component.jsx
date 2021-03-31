import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
    console.log("hello there!");
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="collecion-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
      </div>
    </div>
  );
};
export default CollectionItem;