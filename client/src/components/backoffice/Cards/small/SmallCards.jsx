import React from "react";
import SmallCard from "./SmallCard";

const SmallCards = () => {
  const orderStatus = [
    {
      id: 1,
      title: "Todos os pedidos",
      numbers: 505,
    },
    {
      id: 2,
      title: "Pedidos em andamento",
      numbers: 185,
    },
    {
      id: 3,
      title: "Pedidos em processo",
      numbers: 45,
    },
    {
      id: 4,
      title: "Pedidos enviados",
      numbers: 306,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
      {orderStatus.map((item, index) => {
        return <SmallCard key={index} data={item} />;
      })}
    </div>
  );
};

export default SmallCards;
