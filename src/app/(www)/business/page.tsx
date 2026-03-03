import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function BusinessPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-h1 font-bold mb-4">Solutions for Indian SMB business categories</h1>
            <p className="text-body text-muted-foreground mb-8">
                Use Pragati360 to improve review handling, enquiry response speed, and outlet discipline across business locations.
            </p>

            <div className="grid gap-4 md:grid-cols-3 mb-10">
                {[
                    "Restaurants and cafés",
                    "Clinics and healthcare practices",
                    "Salons and wellness chains",
                ].map((segment) => (
                    <div key={segment} className="rounded-lg border p-4 bg-card">
                        <p>{segment}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline">
                    <Link href="/tools">Explore Free Tools</Link>
                </Button>
                <Button asChild>
                    <Link href="/signup">Start Free Trial</Link>
                </Button>
            </div>
        </div>
    );
}
