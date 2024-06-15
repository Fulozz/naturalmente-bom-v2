import { UploadDropzone } from "@/src/lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

const ImageInput = ({
  label,
  imageUrl = "",
  setImageUrl,
  className = "col-span-full justify-center",
  endpoint = "categoryImageUploader",
}) => {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900  dark:text-slate-50 mb-2 "
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Item image"
          width={1000}
          height={667}
          className="w-full h-64 object-contain"
        />
      ) : (
        <UploadDropzone
          className="mt-4 ut-button:bg-blue-500 ut-button:px-5 ut-button:py-2.5 ut-button:me-2 ut-button:b-2 ut-button:ut-readying:bg-blue-500/50 ut-button:mb-6 ut-upload-icon:mt-6"
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].url);
            // Do something with the response
            console.log("Files: ", res[0].url);
            toast.success("Image Upload Complete")
          }}
          onUploadError={(error) => {
            // Do something with the error.
            console.log(`ERROR! ${error.message}`);
            toast.error("Image Upload Failed, try again")
          }}
        />
      )}
    </div>
  );
}

export default ImageInput;