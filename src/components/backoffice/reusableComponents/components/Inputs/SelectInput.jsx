import React from "react";

export default function SelectInput({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options = [],
  hasMultipleSelect=false
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900  dark:text-slate-50 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`)}
          id={name}
          multiple={false}
          name={name}
          className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm dark:text-slate-50 dark:bg-transparent ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option.id} className="bg-slate-50 text-gray-900 dark:text-slate-50 dark:bg-slate-600">
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}