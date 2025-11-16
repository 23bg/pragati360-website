"use client";

import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// ✅ Validation schema
const resetPasswordSchema = z.object({
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

// ✅ Type derived from schema
type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordForm({ token }: { token: string }) {
    const { reset, loading, error } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
    });

    const onSubmit = (data: ResetPasswordFormData) => {
        reset({ token, newPassword: data.password });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 p-6 max-w-sm mx-auto"
        >
            <input
                type="password"
                {...register("password")}
                placeholder="New Password"
                className="w-full border p-2 rounded"
            />
            {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-2 rounded"
            >
                {loading ? "Resetting..." : "Reset Password"}
            </button>
        </form>
    );
}
