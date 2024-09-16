"use client"
import { useForm } from "react-hook-form";

import InputComponent from "@/src/components/backoffice/reusableComponents/components/inputs/InputComponent";
import SubmitButton from "@/src/components/backoffice/reusableComponents/components/inputs/SubmitButton";

const Login = ({ setIsVisible }) => {
    const isVisible = setIsVisible;
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();
const onSubmit = async(data) => {
    console.log(data)
}
    return(
       <>

        {
            isVisible && (
                <div className="flex items-center justify-center flex-col min-h-screen">
                    <h2 className="text-4xl">Bem vindo ao Naturalmente bom!</h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-700 dark:border-gray-700 mx-auto my-3"
                    >
                        
                        <InputComponent type="email" register={register} name="login" label="Login" placeholder="exemplo@naturalmentebom.com" errors={errors}/>
                        <InputComponent type="password" register={register} name="passsword" label="Passsword" placeholder="******" errors={errors} />
                    <div className="">
                        <button
                        type="submit"
                        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                        >
                            
                            <span>Login</span>
                        </button>
                        </div>

                    </form>
                </div>
            )
        }
       </>
    )
}

export default Login