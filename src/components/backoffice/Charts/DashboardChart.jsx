import React from "react";
import WeeklySales from "./WeeklySales";
import BestSellingProductsChart from "./BestSellingProductsChart";

const DashboardChart = () => {
  return (
    <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-4 mb-4">
      <WeeklySales />
      <BestSellingProductsChart />
    </div>
  );
};

export default DashboardChart;
