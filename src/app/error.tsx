'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
    error,
    reset
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Internal Server Error:', error);
    }, [error]);

    return (
        <main className="flex min-h-[70vh] items-center justify-center px-4 text-center">
            <div className="max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight">
                    Something went wrong
                </h1>

                <p className="mt-4 text-lg text-muted-foreground">
                    An unexpected error occurred. Please try again or return home.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={reset}
                        className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-primary-foreground font-medium hover:opacity-90"
                    >
                        Try again
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-md border px-8 py-4 font-medium hover:bg-muted"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        </main>
    );
}
