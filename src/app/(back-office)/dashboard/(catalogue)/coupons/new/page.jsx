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

import { redirect } from "next/navigation";
const NewCoupon = ({ isUpdate = false }) => {
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
    data.status =  ""


    makePostRequest(setLoading, "api/coupons", data, "Category", reset, redirect);
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
            label="Campain Name"
            register={register}
            name="campain Name"
            errors={errors}
          />
          <TextareaInput
            label="Description"
            register={register}
            name="description"
            errors={errors}
          />
          <ImageInput
            label="Coupon Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="imageUploader"
          />
          <SubmitButton
            isLoading={loading}
            title={isUpdate ? "Updated Coupon" : "New Coupon"}
          />
        </div>
      </form>
    </div>
  );
};

export default NewCoupon;
