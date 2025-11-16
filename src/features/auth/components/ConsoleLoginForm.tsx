"use client";

import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoginFormData, loginFormSchema } from "@/features/user/validations/login.validation";


export default function ConsoleLoginForm() {
    const { login, loading, error, isAuthenticated } = useAuth();

    // ✅ Initialize RHF with schema validation
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
            await login(data);
            console.log("✅ Login successful");
            reset(); // optional: clear form after success
        } catch (err) {
            console.error("❌ Login failed:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 max-w-sm mx-auto">
            <div>
                <input
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                    className="border rounded px-3 py-2 w-full"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
                <input
                    type="password"
                    {...register("password")}
                    placeholder="Password"
                    className="border rounded px-3 py-2 w-full"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {isAuthenticated && <p className="text-green-500 text-sm">Logged in successfully!</p>}

            <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
                {loading ? "Logging in..." : "Login"}
            </button>
        </form>
    );
}
