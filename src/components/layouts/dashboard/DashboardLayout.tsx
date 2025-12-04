"use client";

import Link from "next/link";
import {
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

import { ScrollArea } from "@/components/ui/scroll-area";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";
import ROUTES from "@/shared/constants/route";



export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const token = localStorage.getItem("accessToken");
    if (!token) {
        redirect(ROUTES.AUTH.LOG_IN)
    }

    return (
        <SidebarProvider className="rounded overflow-hidden h-screen">
            <DashboardAppSidebar />
            <SidebarInset>
                {/* Header */}
                <header className="flex h-16 shrink-0 items-center justify-between px-4
      border-b bg-background dark:bg-zinc-900/40 backdrop-blur-sm rounded-t-2xl">
                    {/* Left: Sidebar + Breadcrumb */}
                    <div className="flex items-center gap-2 justify-center">
                        <SidebarTrigger />


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


                            {/* Help Button */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" >
                                        <HelpCircle className="h-5 w-5 " />
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

        </SidebarProvider >
    );
}

