"use client";

import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ROUTES from "@/shared/constants/route";

// Validation schema
const otpSchema = z.object({
    email: z.string().email("Invalid email"),
    otp: z.string().min(5, "OTP must be 5 digits"),
});

type OtpFormData = z.infer<typeof otpSchema>;

export default function VerificationForm() {
    const router = useRouter();
    const { verifyOTP, loading, error } = useAuth(); // <-- correct name: verifyOtp

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<OtpFormData>({
        resolver: zodResolver(otpSchema),
    });

    const onSubmit = async (data: OtpFormData) => {
        try {
            const result = await verifyOTP(data); // returns AuthResponse on success

            if (result) {
                router.push(ROUTES.APP.ROOT); // or home page
            }

            reset();
        } catch (err) {
            console.error("OTP Verification failed:", err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 p-6 max-w-sm mx-auto"
        >
            {/* Email */}
            <div>
                <Input
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    className="border rounded px-3 py-2 w-full"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
            </div>

            {/* OTP */}
            <div>
                <Input
                    type="text"
                    {...register("otp")}
                    placeholder="Enter OTP"
                    maxLength={5}
                    className="border rounded px-3 py-2 w-full tracking-widest text-center"
                />
                {errors.otp && (
                    <p className="text-red-500 text-sm">{errors.otp.message}</p>
                )}
            </div>

            {/* Error */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <Button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
                {loading ? "Verifying..." : "Verify OTP"}
            </Button>
        </form>
    );
}
