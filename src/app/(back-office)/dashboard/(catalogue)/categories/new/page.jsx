"use client";

import FormHeader from "@/src/components/backoffice/category/newCategories/FormHeader";
import TextInput from "@/src/components/backoffice/category/newCategories/Inputs/TextInput";
import TextareaInput from "@/src/components/backoffice/category/newCategories/Inputs/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SubmitButton from "@/src/components/backoffice/category/newCategories/SubmitButton";
import generateSlug from "@/src/lib/generateSlug";
const NewCategory = ({initialData ={}, isUpdate = false}) => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = async (data) => {
    const slug = generateSlug(data.title);
    console.log(slug)
  }
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
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-700 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Category Title" register={register} name="title" errors={errors} />
          <TextareaInput label="Description" register={register} name="description" errors={errors} />
          <SubmitButton
          isLoading={loading}
          title={isUpdate ? "Updated Category" : "New Category"}
        />
        </div>
        
      </form>
    </div>
  );
};

export default NewCategory;
