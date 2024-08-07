"use client";
import React from "react";

const InputComponent = ({
  label,
  name,
  register,
  isRequired = true,
  type = "text",
  errors,
  className = "sm:col-span-2",
  defaultValue = "",
  readOnly="",
  placeholder="",
  step="any"
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
        {
          readOnly ? (
              <input
                {...register(`${name}`, { required: isRequired })}
                type={type}
                name={name}
                id={name}
                readOnly={readOnly}
                defaultValue={defaultValue}
                className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm dark:text-slate-50 dark:bg-transparent ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
                placeholder={placeholder ||`Digite o ${label.toLowerCase()}`}
              />
              ) : 
              <input
              {...register(`${name}`, { required: isRequired })}
              type={type}
              name={name}
              id={name}
              step={step}
              defaultValue={defaultValue}
              className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm dark:text-slate-50 dark:bg-transparent ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
              placeholder={placeholder ||`Digite o ${label.toLowerCase()}`}
            />
        }
        {errors[`${name}`] && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} é obrigatório</span>
        )}
          </p>
        )}
      </div>  
    </div>
  );
};

export default InputComponent;
