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
                        className="inline-flex items-center justify-center rounded-md px-8 py-4 font-medium border border-zinc-700 bg-zinc-950 text-zinc-100 hover:bg-zinc-900 dark:border-zinc-300 dark:bg-zinc-200 dark:text-zinc-950 dark:hover:bg-zinc-300"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        </main>
    );
}
