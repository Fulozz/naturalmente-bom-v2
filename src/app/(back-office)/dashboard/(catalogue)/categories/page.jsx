import React from "react";
import PageHeader from "@/src/components/backoffice/categories/PageHeader";
import { Search, Upload, Download, Trash2 } from "lucide-react";

const page = () => {
  const href = "/dashboard/categories/new";
  const linkTitle = "Add Category";
  return (
    <div>
      <PageHeader heading="Categories" href={href} linkTitle={linkTitle} />
      {/* Table Actions */}
      {/*  TODO: functions of Export || Import || Search || Bulk / Delete  */}
      <div className="flex py-6 px-12 justify-between items-center gap-8 bg-slate-700 rounded-lg ">
        <button className="flex space-x-2 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
          <Download />
          <span>Export</span>
        </button>
        {/* TODO: IMPORT */}
        {/* Search */}
        <div className=" flex-grow ">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative ">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="table-search"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-3/4"
              placeholder="Search for categories"
            />
          </div>
        </div>
        {/* Delete */}
        <button>
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default page;
