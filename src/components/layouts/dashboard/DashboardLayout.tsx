"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
    SunIcon,
    MoonIcon,
    HelpCircle,
    Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardAppSidebar } from "@/components/dashboard/side-bar";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";



export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);

    // Theme setup
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const isDark = savedTheme === "dark";
        document.documentElement.classList.toggle("dark", isDark);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(false);
    }, [])



    const toggleTheme = () => {
        const newTheme = isDarkMode ? "light" : "dark";

        // Update React state
        setIsDarkMode(!isDarkMode);

        // Update HTML class
        document.documentElement.classList.toggle("dark", !isDarkMode);

        // Save preference
        localStorage.setItem("theme", newTheme);
    };

    if (loading)
        return (
            <div className="flex justify-center items-center h-screen bg-zinc-300 dark:bg-zinc-800">
                Loading...
            </div>
        );

    // Generate breadcrumb segments
    const pathSegments = pathname.split("/").filter(Boolean);

    return (
        <SidebarProvider className="rounded overflow-hidden h-screen">
            <DashboardAppSidebar />
            <SidebarInset>
                {/* Header */}
                <header className="flex h-16 shrink-0 items-center justify-between px-4
      border-b bg-background dark:bg-zinc-900/40 backdrop-blur-sm rounded-t-2xl">
                    {/* Left: Sidebar + Breadcrumb */}
                    <div className="flex items-center gap-2 justify-center">
                        <SidebarTrigger className="dark:text-white text-black" />

                        {/* <Breadcrumb className="hidden md:block mt-0.5">
                            <BreadcrumbList>
                                {pathSegments.map((segment, index) => {
                                    const href = `/${pathSegments
                                        .slice(0, index + 1)
                                        .join("/")}`;
                                    const isLast = index === pathSegments.length - 1;
                                    const formattedSegment = segment
                                        .replace(/-/g, " ")
                                        .replace(/\b\w/g, (char) => char.toUpperCase());

                                    return isLast ? (
                                        <BreadcrumbItem key={href}>
                                            <Button
                                                size="sm"
                                                variant="link"
                                                className="dark:text-white text-black"
                                            >
                                                {formattedSegment}
                                            </Button>
                                        </BreadcrumbItem>
                                    ) : (
                                        <BreadcrumbItem key={href}>
                                            <>
                                                <Link href={href}>
                                                    <Button
                                                        size="sm"
                                                        variant='link'
                                                        className="dark:text-zinc-400 text-zinc-700"
                                                    >
                                                        {formattedSegment}
                                                    </Button>
                                                </Link>
                                                <span className="mx-2">/</span>
                                            </>
                                        </BreadcrumbItem>
                                    );
                                })}
                            </BreadcrumbList>
                        </Breadcrumb> */}
                        <div className="h-5 w-10">
                            <Separator orientation="vertical" className="m-0 p-0" />
                        </div>
                        <Button variant='ghost' className="text-muted-foreground m-0">
                            <Search />
                            <span> Type of Search...</span>
                        </Button>
                    </div>

                    {/* Right: Controls */}
                    <div className="flex items-center gap-3">



                        <TooltipProvider delayDuration={150}>
                            {/* Theme Toggle */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" onClick={toggleTheme}>
                                        {isDarkMode ? (
                                            <SunIcon className="h-5 w-5 text-yellow-500" />
                                        ) : (
                                            <MoonIcon className="h-5 w-5 text-blue-500" />
                                        )}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Toggle Theme</p>
                                </TooltipContent>
                            </Tooltip>

                            {/* Help Button */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" onClick={() => router.push("/help")}>
                                        <HelpCircle className="h-5 w-5 dark:text-white text-black" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Help & Support</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>



                    </div>
                </header>

                {/* Main content */}
                <main className="overflow-hidden">


                    <div className="h-screen">
                        <ScrollArea className=" h-full">
                            {children}
                        </ScrollArea>
                    </div>


                </main>
                {/* FOOTER */}
                <footer className="border-t bg-background dark:bg-zinc-900/40 backdrop-blur-sm rounded-b-2xl">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 px-6 py-3 text-xs text-muted-foreground">
                        <span>©2025 Pragati360, Made for better you brand.</span>
                        <div className="flex gap-3">
                            <Link href="#" className="hover:text-primary transition">License</Link>
                            <Link href="#" className="hover:text-primary transition">More Themes</Link>
                            <Link href="#" className="hover:text-primary transition">Documentation</Link>
                            <Link href="#" className="hover:text-primary transition">Support</Link>
                        </div>
                    </div>
                </footer>
            </SidebarInset>

        </SidebarProvider>
    );
}

