import React from "react";
import LargeCard from "./LargeCard";

const LargeCards = () => {
  const orderStatus = [
    {
      id: 1,
      title: "Pedidos de hoje",
      sales: 128000,
    },
    {
      id: 2,
      title: "Pedidos de ontem",
      sales: 110000,
    },
    {
      id: 3,
      title: "Este mês",
      sales: 3123000,
    },
    {
      id: 4,
      title: "Ultimo mês",
      sales: 2123000,
    },
    {
      id: 5,
      title: "Todas as vendas",
      sales: 5000000,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-6 ">
      {orderStatus.map((item, index) => {
        return <LargeCard key={index} data={item} />;
      })}
    </div>
  );
};

export default LargeCards;
