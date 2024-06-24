"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
// COMPONENTS
import FormHeader from "@/src/components/backoffice/reusableComponents/components/FormHeader";
import generateSlug from "@/src/lib/generateSlug";
// INPUTS
import InputComponent from "@/src/components/backoffice/reusableComponents/components/inputs/InputComponent";
import TextareaInput from "@/src/components/backoffice/reusableComponents/components/inputs/TextArea";
import SubmitButton from "@/src/components/backoffice/reusableComponents/components/inputs/SubmitButton";

// API request
import { makePostRequest } from "@/src/lib/apiRequest/makePostRequest";

import { redirect } from "next/navigation";
import generateCouponCode from "@/src/lib/generateCouponCode";
const NewCoupon = ({ isUpdate = false }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if(data.couponDiscount < 100){
      const couponCode = generateCouponCode(data.couponDiscount, data.couponTitle)
      console.log(couponCode)
      data.couponCode= couponCode;

      const initialStatus = "disable"

      function ChangeFormateDate(date){
        var p = date.split(/\D/g)
        return [p[2],p[1],p[0] ].join("/")
     }
     const startDate = ChangeFormateDate(data.startDate)
     const expiryDate = ChangeFormateDate(data.expiryDate)
      const montedData = {
        "couponTitle" :  data.couponTitle,
        "couponDiscount" : data.couponDiscount,
        "status": initialStatus,
        "couponCode" : data.couponCode,
        "startDate" : startDate,
        "endDate" : expiryDate
      }
      makePostRequest(setLoading, "api/coupons", montedData, "Coupon", reset, redirect);
      console.log(montedData);
      router.back()
    }
    if(data.couponDiscount > 100){
      toast.error("Verifique o desconto")
    }
  };
  return (
    <div>
      <FormHeader title="New Coupon" />
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
          <InputComponent
            label="Coupon Title"
            register={register}
            name="couponTitle"
            errors={errors}
          />
          <InputComponent
            label="Coupon Discount"
            type="number"
            register={register}
            name="couponDiscount"
            errors={errors}
            placeholder="Digite a porcentagem de desconto"
          />
          <InputComponent
            label="Initial Date"
            type="date"
            register={register}
            name="startDate"
            errors={errors}
            className="w-full"
          />
          <InputComponent
            label="Expiry Date"
            type="date"
            register={register}
            name="expiryDate"
            errors={errors}
            className="w-full"
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
