"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
    SunIcon,
    MoonIcon,
    HelpCircle,
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
             border-b border-white/10 backdrop-blur-xl bg-white/10 dark:bg-zinc-900/20
             z-40 rounded-t-2xl ">
                    {/* Left: Sidebar + Breadcrumb */}
                    <div className="flex items-center gap-2 justify-center">
                        <SidebarTrigger className="dark:text-white text-black" />

                        <Breadcrumb className="hidden md:block mt-0.5">
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
                                                        variant='secondary'
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
                        </Breadcrumb>
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
                    <ScrollArea className="h-screen">{children}</ScrollArea>
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
