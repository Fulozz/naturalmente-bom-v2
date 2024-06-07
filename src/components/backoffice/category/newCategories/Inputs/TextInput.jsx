"use client";
import React from "react";

const TextInput = ({
  label,
  name,
  register,
  isRequired,
  type = "text",
  errors,
  className = "sm:col-span-2",
  defaultValue = "",
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900  dark:text-slate-50 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...register(`${name}`, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[`${name}`] && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {errors[name].message || `${label} is required`}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextInput;
