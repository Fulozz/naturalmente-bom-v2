"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
// COMPONENTS
import FormHeader from "@/src/components/backoffice/category/newCategories/FormHeader";
import generateSlug from "@/src/lib/generateSlug";
// INPUTS
import TextInput from "@/src/components/backoffice/category/newCategories/Inputs/TextInput";
import TextareaInput from "@/src/components/backoffice/category/newCategories/Inputs/TextArea";
import SubmitButton from "@/src/components/backoffice/category/newCategories/SubmitButton";
import ImageInput from "@/src/components/backoffice/category/newCategories/Inputs/ImageInput";
// API request
import { makePostRequest } from "@/src/lib/apiRequest/makePostRequest";
import { makePutRequest } from "@/src/lib/apiRequest/makePutRequest";
import { redirect } from "next/navigation";
const NewCategory = ({ isUpdate = false }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;

    makePostRequest(setLoading, "api/categories", data, "Category", reset, redirect);
    setImageUrl("");
    router.back()
    console.log(data);
  };
  return (
    <div>
      <FormHeader title="New Category" />
      {/* 
        This data abouve is the data that we need to create a new category
        - id = auto()
        - title
        - slug => auto()
        - description
        - image        
        */}
      {/* FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-700 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            register={register}
            name="title"
            errors={errors}
          />
          <TextareaInput
            label="Description"
            register={register}
            name="description"
            errors={errors}
          />
          <ImageInput
            label="Category Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImageUploader"
          />
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
