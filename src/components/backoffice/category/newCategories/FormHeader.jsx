import React from "react";
import Heading from "../../Heading";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const FormHeader = ({ title }) => {
  const router = useRouter();
  return (
    <div className="flex items-center bg-slate-50 shadow-md dark:bg-slate-600 rounded-lg justify-between py-6 px-12 text-slate-800 dark:text-slate-50 mb-12">
      <Heading title={title} />
      <button className="" onClick={() => router.back()}>
        <X className="text-emerald-600" />
      </button>
    </div>
  );
};

export default FormHeader;
