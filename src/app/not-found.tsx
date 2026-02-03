import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-4 text-center">
            <div className="max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight">
                    Page not found
                </h1>

                <p className="mt-4 text-lg text-muted-foreground">
                    The page you’re looking for doesn’t exist or may have been moved.
                </p>

                <div className="mt-8 flex justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-primary-foreground font-medium hover:opacity-90"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        </main>
    );
}
