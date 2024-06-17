"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
// COMPONENTS
import FormHeader from "@/src/components/backoffice/reusableComponents/components/FormHeader";
import generateSlug from "@/src/lib/generateSlug";
// INPUTS
import TextInput from "@/src/components/backoffice/reusableComponents/components/inputs/TextInput";
import TextareaInput from "@/src/components/backoffice/reusableComponents/components/inputs/TextArea";
import SubmitButton from "@/src/components/backoffice/reusableComponents/components/inputs/SubmitButton";

// API request
import { makePostRequest } from "@/src/lib/apiRequest/makePostRequest";

import { redirect } from "next/navigation";
const NewCoupon = ({ isUpdate = false }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // const slug = generateSlug(data.title);
    // data.slug = slug;
    // data.imageUrl = imageUrl;
    data.status =  ""

    console.log(data);
    // makePostRequest(setLoading, "api/coupons", data, "Category", reset, redirect);
    // setImageUrl("");
    // router.back()
    
  };
  return (
    <div>
      <FormHeader title="New Category" />
      {/* 
        This data abouve is the data that we need to create a new category
        - id = auto()
        - title
        - couponCode => auto()
        - Discount %
        - expiryDate     
        */}
      {/* FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-700 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Coupon Title"
            register={register}
            name="couponTitle"
            errors={errors}
          />
          <TextInput
            label="Coupon Discount"
            register={register}
            name="couponDiscount"
            errors={errors}
          />
          <TextareaInput
            label="Description"
            register={register}
            name="description"
            errors={errors}
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
