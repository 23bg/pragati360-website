"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../hooks/useAuth";
import {
    SignupFormData,
    signupFormSchema,
} from "../validations/signup.validation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ROUTES from "@/shared/constants/route";

export default function SignupForm() {
    const router = useRouter();
    const { signup, loading, error } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupFormSchema),
    });

    const onSubmit = async (data: SignupFormData) => {
        const success = await signup(data);

        if (success) {
            router.push(ROUTES.AUTH.VERIFICATION); // Where user receives OTP next
        }

        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 p-6 max-w-sm mx-auto"
        >
            {/* Full Name */}
            <div>
                <Input
                    {...register("name")}
                    placeholder="Full Name"
                    className="w-full"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
            </div>

            {/* Phone Number */}
            <div>
                <Input
                    {...register("phoneNumber")}
                    placeholder="Phone Number"
                    className="w-full"
                />
                {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
                )}
            </div>

            {/* Email */}
            <div>
                <Input
                    {...register("email")}
                    placeholder="Email"
                    className="w-full"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit */}
            <Button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white"
            >
                {loading ? "Creating account..." : "Sign Up"}
            </Button>
        </form>
    );
}
