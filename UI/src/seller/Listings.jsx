import React from "react";

import img1 from "../assets/items/img1.jpg";
import img2 from "../assets/items/img2.png";
import img3 from "../assets/items/img3.jpg";
import img4 from "../assets/items/img4.jpg";
import img5 from "../assets/items/img5.jpg";
import img6 from "../assets/items/img6.jpg";
import img7 from "../assets/items/img7.jpg";

const Listings = () => {
  const items = [
    {
      id: 1,
      image: img1,
      title: "Item 1",
      description: "Description for item 1",
    },
    {
      id: 2,
      image: img2,
      title: "Item 2",
      description: "Description for item 2",
    },
    {
      id: 2,
      image: img3,
      title: "Item 3",
      description: "Description for item 2",
    },
    {
      id: 2,
      image: img4,
      title: "Item 4",
      description: "Description for item 2",
    },
    {
      id: 2,
      image: img5,
      title: "Item 5",
      description: "Description for item 2",
    },
    {
      id: 2,
      image: img6,
      title: "Item 6",
      description: "Description for item 2",
    },
    {
      id: 2,
      image: img7,
      title: "Item 7",
      description: "Description for item 2",
    },
  ];

  return (
    <div className="listings-container">
      <h1>Listings</h1>
      <div className="item-container">
        {items.map((item) => (
          <div className="item-card" key={item.id}>
            <img src={item.image} alt={item.title} className="item-image" />
            <h3 className="item-title">{item.title}</h3>
            <p className="item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
