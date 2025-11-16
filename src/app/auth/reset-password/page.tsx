"use client";

import { useSearchParams } from "next/navigation";
import ResetPasswordForm from "@/features/auth/components/ResetPasswordForm";

export default function ResetPasswordPage() {
    // ✅ Extract token from query string
    const searchParams = useSearchParams();
    const token = searchParams.get("token") || "";

    // if (token == "") {
    //     throw TypeError("Something is wrong")
    // }

    return <ResetPasswordForm token={token} />;
}
