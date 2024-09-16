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
  const category =  [
    {
      id: 1,
      title: "fresh-fruit",
    },
    {
      id: 2,
      title: "meat"
    }
  ]
  const farmers = [
    {
      id: 1,
      title: "Farmer 1"
    },
    {
      id: 2,
      title: "Farmer 2"
    },
    {
      id: 3,
      title: "Farmer 3"
    },
  ]
  const [imageUrl, setImageUrl] = useState(""); 
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    {
      /*
      -id => auto()
      -title
      -slug => auto()
      -description
      -image/images
      -sru
      -barcode
      -productPrice
      -salePrice
      -category
      -farmer
      */
    }
    data.imageUrl = imageUrl;
    makePostRequest(setLoading, "api/products", data, "Product", reset, redirect);
    setImageUrl("");
    router.back()
    console.log(data);
  };
  return (
    <div>
      <FormHeader title="Novo produto" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-700 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <InputComponent
            label="Nome do Produto"
            register={register}
            name="title"
            errors={errors}
          />
          <SelectInput
            label="Selecione a categoria"
            name="categoryID"
            register={register}
            errors={errors}
            options={category}
            className="w-full"
          />
          <SelectInput
            label="Selecione o produtor"
            name="farmerID"
            register={register}
            errors={errors}
            options={farmers}
            className="w-full"
          />
          <InputComponent
            label="Quantidade disponivel"
            register={register}
            name="amount"
            type="number"
            errors={errors}
            className="w-full"
            step="1"
          />
          <InputComponent
            label="Preço do produto"
            register={register}
            name="price"
            type="number"
            errors={errors}
            className="w-full"
            step="any"
          />
          <TextareaInput
            label="Descrição"
            register={register}
            name="description"
            errors={errors}
          />
          <ImageInput
            label="Imagem do produto"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="imageUploader"
          />
          <SubmitButton
            isLoading={loading}
            title={isUpdate ? "Atualizar produto" : "Novo produto"}
          />
        </div>
      </form>
    </div>
  );
};

export default NewCategory;
