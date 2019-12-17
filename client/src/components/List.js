import React, { Component } from "react";

class List extends Component {
  render() {
    const items = [
      {
        username: "Aniplus",
        data: {
          address: "Thunder street",
          phone: "123456"
        }
      },
      {
        username: "Animin",
        data: {
          address: "Lightning street",
          phone: "654321"
        }
      },
      {
        username: "Anidiv",
        data: {
          address: "Storm street",
          phone: "456123"
        }
      }
    ];

    return (
      <div className="list-cont">
        {items.map(item => (
          <div>
            <h2>{item.username}</h2>
            <p>{item.data.address}</p>
            <p>{item.data.phone}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
