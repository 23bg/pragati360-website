"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../hooks/useAuth";
import {
    forgotPasswordFormSchema,
    ForgotPasswordFormData,
} from "../validations/forgot-password.validation";

export default function ForgotPasswordForm() {
    const { forgot, loading, error } = useAuth();

    // ✅ Correct usage of formState
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordFormSchema),
    });

    const onSubmit = (data: ForgotPasswordFormData) => {
        forgot(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 p-6 max-w-sm mx-auto"
        >
            {/* Email Field */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* Global Error */}
            {error && (
                <p className="text-sm text-red-600 bg-red-50 p-2 rounded">
                    {error}
                </p>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 rounded text-white transition ${loading
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
            >
                {loading ? "Sending link..." : "Send Reset Link"}
            </button>
        </form>
    );
}
