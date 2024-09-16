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
import SelectInput from "@/src/components/backoffice/reusableComponents/components/Inputs/SelectInput";
const NewCategory = ({ isUpdate = false }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const markets =  [
    {
      id: 1,
      title: "Sproutes Farmers Market",
    },
    {
      id: 2,
      title: "Cabbage Farmers Market",
    },
    {
      id: 3,
      title: "Lettucee Farmers Market",
    },
    {
      id: 4,
      title: "Carrots Farmers Market",
    }
  ]
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

    makePostRequest(setLoading, "api/customers", data, "Customer", reset, redirect);
    setImageUrl("");
    router.back()
    console.log(data);
  };
  return (
    <div>
      <FormHeader title="Novo Cliente" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-700 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <InputComponent
            label="Nome completo"
            register={register}
            name="title"
            errors={errors}
          />
          <InputComponent
            label="CPF"
            register={register}
            name="title"
            errors={errors}
            type="number"
            className="w-full"
          />
          <InputComponent
            label="Data de nascimento"
            register={register}
            name="title"
            errors={errors}
            type="date"
            className="w-full"
          />
          <InputComponent
            label="Endereço"
            register={register}
            name="title"
            errors={errors}
            className="w-full"
          />
          <InputComponent
            label="Endereço"
            register={register}
            name="number"
            errors={errors}
            className="w-full"
          />
          <TextareaInput
            label="Descrição da categoria"
            register={register}
            name="description"
            errors={errors}
          />
          <ImageInput
            label="Imagem da categoria"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="imageUploader"
          />
          <SubmitButton
            isLoading={loading}
            title={isUpdate ? "Atualizar cateogira" : "Nova categoria"}
          />
        </div>
      </form>
    </div>
  );
};

export default NewCategory;
