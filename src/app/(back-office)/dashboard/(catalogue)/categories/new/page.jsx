"use client";

import FormHeader from "@/src/components/backoffice/category/newCategories/FormHeader";
import TextInput from "@/src/components/backoffice/category/newCategories/Inputs/TextInput";
import React from "react";
import { useForm } from "react-hook-form";
const NewCategory = () => {
  const { register, handleSubmit, formState: {errors} } = useForm()
  return (
    <div>
      <FormHeader title="New Category" />
      {/* 
        This data abouve is the data that we need to create a new category
        - id
        - title
        - slug
        - description
        - parent
        - image        
        */}
      {/* FORM */}
      <form className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Category Title" register={register} name="title" errors={errors} />
          <TextInput label="Slug" register={register} name="slug" errors={errors} />

        </div>
        
      </form>
    </div>
  );
};

export default NewCategory;
