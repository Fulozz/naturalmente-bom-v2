import React from "react";
import Heading from "../../Heading";
import { X } from "lucide-react";

const FormHeader = ({ title }) => {
  return (
    <div className="flex items-center bg-slate-50 shadow-md dark:bg-slate-600 rounded-lg justify-between py-6 px-12">
      <Heading title={title} />
      <button className=" ">
        <X className="text-emerald-600 dark:text-white" />
      </button>
    </div>
  );
};

export default FormHeader;
