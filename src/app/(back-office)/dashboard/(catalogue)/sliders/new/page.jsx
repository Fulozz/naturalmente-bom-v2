"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
// COMPONENTS
import FormHeader from "@/src/components/backoffice/reusableComponents/components/FormHeader";
import generateSlug from "@/src/lib/generateSlug";
// INPUTS
import InputComponent from "@/src/components/backoffice/reusableComponents/components/inputs/InputComponent";
import TextareaInput from "@/src/components/backoffice/reusableComponents/components/inputs/TextArea";
import SubmitButton from "@/src/components/backoffice/reusableComponents/components/inputs/SubmitButton";
import ImageInput from "@/src/components/backoffice/reusableComponents/components/inputs/ImageInput"
// API request
import { makePostRequest } from "@/src/lib/apiRequest/makePostRequest";

import { redirect } from "next/navigation";
const NewSlider = ({ isUpdate = false }) => {
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
    data.imageUrl = imageUrl;

    makePostRequest(setLoading, "api/sliders", data, "Slider", reset, redirect);
    setImageUrl("");
    router.back()
    console.log(data);
  };
  return (
    <div>
      <FormHeader title="New Slider" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-700 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <InputComponent
            label="Slider Title"
            register={register}
            name="title"
            errors={errors}
          />
          <InputComponent
            label="URL"
            register={register}
            name="url"
            errors={errors}
          />
          <ImageInput
            label="Slider Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="imageUploader"
          />
          <SubmitButton
            isLoading={loading}
            title={isUpdate ? "Updated Slider" : "New Slider"}
          />
        </div>
      </form>
    </div>
  );
};

export default NewSlider;
