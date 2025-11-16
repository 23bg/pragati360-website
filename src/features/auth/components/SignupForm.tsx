"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../hooks/useAuth";
import { SignupFormData, signupFormSchema } from "../validations/signup.validation";


export default function SignupForm() {
    const { signup, loading, error } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>({
        resolver: zodResolver(signupFormSchema),
    });

    const onSubmit = (data: SignupFormData) => {
        signup(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 max-w-sm mx-auto">
            <input {...register("fullName")} placeholder="Full Name" className="w-full border p-2 rounded" />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}

            <input {...register("phoneNumber")} placeholder="text" className="w-full border p-2 rounded" />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}

            <input {...register("email")} placeholder="Email" className="w-full border p-2 rounded" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <input type="password" {...register("password")} placeholder="Password" className="w-full border p-2 rounded" />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded">
                {loading ? "Creating account..." : "Sign Up"}
            </button>
        </form>
    );
}
