import React from "react";
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

import { cn } from "../../../../lib/cn";

const SmallCard = ({ data }) => {
  // Destructuring data
  const { id, title, numbers } = data;
  // Setup literal object for color  data ID is used to determine the color
  const color = {
    "bg-orange-600": id === 1,
    "bg-blue-600": id === 2,
    "bg-yellow-600": id === 3,
    "bg-green-600": id === 4,
  };

  return (
    <div className="rounded-lg shadow-lg bg-slate-50 dark:bg-slate-700 text-emerald-700 dark:text-slate-50 p-4">
      <div className="flex space-x-4">
        <div
          className={cn(
            `flex w-12 h-12 rounded-full items-center justify-center`,
            [color]
          )}
        >
          {id === 1 ? (
            <ShoppingCart className="text-slate-50" />
          ) : id === 2 ? (
            <Loader2 className="text-slate-50" />
          ) : id === 3 ? (
            <RefreshCcw className="text-slate-50" />
          ) : id === 4 ? (
            <CheckCheck className="text-slate-50" />
          ) : null}
        </div>
        <div className="">
          <p>{title}</p>
          <h3 className="lg:text-xl text-lg font-bold">{numbers}</h3>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
