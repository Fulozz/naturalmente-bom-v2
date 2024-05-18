"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const BestSellingProductsChart = () => {
  const theme = useTheme().theme;
  // Vendas este mês
  const [products, setProducts] = useState([
    { item: "Cabbarge", quantity: 50 },
    { item: "Shampoo", quantity: 20 },
    { item: "Watermelon", quantity: 23 },
    { item: "Broccoli", quantity: 120 },
    { item: "Cucumber", quantity: 30 },
    { item: "Rice", quantity: 170 },
  ]);

  const bgColors = [
    "rgba(255, 99, 132, 0.7)",
    "rgba(54, 162, 235, 0.7)",
    "rgba(255, 206, 86, 0.7)",
    "rgba(75, 192, 192, 0.7)",
    "rgba(153, 102, 255, 0.7)",
    "rgba(255, 159, 64, 0.7)",
  ];

  const sortedProducts = products.sort((a, b) => b.quantity - a.quantity);
  // Configuração do Chart
  const data = {
    labels: sortedProducts.map((product) => product.item),
    datasets: [
      {
        label: "# of sales",
        data: sortedProducts.map((product) => product.quantity),
        backgroundColor: bgColors.map((colors) => colors),
        borderColor: theme === "dark" ? "#FFF" : "#000",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: theme === "dark" ? "rgb(226, 232, 240)" : "rgb(30 41 59)",
        },
      },
    },
    title: {
      display: true,
      text: "Estoque por Produto",
    },
  };
  return (
    <div className="bg-slate-50 dark:bg-slate-700 text-emerald-700 dark:text-slate-50 p-8 rounded-lg shadow-xl">
      <h2 className="text-xl font-bold mb-4">Produtos mais vendidos</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default BestSellingProductsChart;
