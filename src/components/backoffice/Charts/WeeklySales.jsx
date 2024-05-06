"use client";
import React, { useEffect, useState } from "react";
import { faker } from '@faker-js/faker';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import getLastSevenDaysLabels from './utils/getLastSevenDaysLabels';
import { useTheme } from "next-themes";
ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip,Legend );

const WeeklySales = () => {
    // 
    const today = new Date();
    const labels = getLastSevenDaysLabels(today)
    const theme = useTheme().theme

    // Mockup da requisição da API
  const tabs = [
    {
      title: "Sales",
      type: "sale",
      data: {
        labels,
        datasets: [
          {
            label: 'Sales',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
      }
    },
    {
      title: "Orders",
      type: "orders",
      data:  {
        labels,
        datasets: [
          {
            label: 'Orders',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(0, 137, 132)',
            backgroundColor: 'rgba(0, 137, 132, 0.5)',
            
          }
        ],
      }
    }
  ] 
 

const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

// Configuração do Chart
const options = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 1.5,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  scales: {
    x: {
      grid: {
        color: theme === 'dark' ? 'rgb(100, 116, 139)' : 'rgb(203, 213, 225)',
      },
      ticks: {
        color: theme === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30 41 59)',
      }
    },
    y: {
      grid: {
        color: theme === 'dark' ? 'rgb(100, 116, 139)' : 'rgb(203, 213, 225)',
      },
      ticks: {
        color: theme === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
      }
    }
  }
}

  return (
    <div className="bg-slate-50 dark:bg-slate-700 text-emerald-700 dark:text-slate-50 p-8 rounded-lg shadow-xl">
      <h2 className="text-xl font-bold">Weekly Sales</h2>
      <div className="p-4">
        <div className="text-sm font-medium text-center border-b text-gray-400  border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => {
              return (
                <li className="me-2" key={i}>
                  <button
                    onClick={() => setChartToDisplay(tab.type)}
                    className={
                      chartToDisplay == tab.type
                        ? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500"
                        : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    }
                  >
                    {tab.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Chart to display */}
        {
          tabs.map((tab, i) => {
            if(chartToDisplay === tab.type){
              return (
                  <Line options={options} data={tab.data} key={i} />
              )
            }
            return null
           
          })
        }
      </div>
    </div>
  );
};

export default WeeklySales;
