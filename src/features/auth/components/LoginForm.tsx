"use client";

import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { loginFormSchema } from "../validations/login.validation";
import { LoginFormData } from "@/features/instagram/validations/login.validation";
import ROUTES from "@/shared/constants/route";




export default function LoginForm() {
    const router = useRouter();
    const { login, loading, error } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            const success = await login(data);

            if (success) {
                router.push(ROUTES.AUTH.VERIFICATION);
            }

            reset();
        } catch (err) {
            console.error("❌ Login failed:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 max-w-sm mx-auto">
            {/* Email Input */}
            <div>
                <Input
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                    className="border rounded px-3 py-2 w-full"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <Button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
                {loading ? "Logging in..." : "Login"}
            </Button>
        </form>
    );
}
