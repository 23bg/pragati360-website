import AuthLayout from '@/components/layouts/auth/AuthLayout'
import React from 'react'

export default async function layout({ children }: { children: React.ReactNode }) {

    // ⬅ cookies() is async
    // const cookieStore = await cookies();
    // const token = cookieStore.get("access_token")?.value;

    // if (token) redirect(ROUTES.APP.ROOT);

    // return <AuthLayout>{children}</AuthLayout>

    return <AuthLayout>{children}</AuthLayout>

}

