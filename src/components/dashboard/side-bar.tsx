"use client"

import * as React from "react"
import {
    LayoutDashboard,
    Layers,
    Instagram,
    MessageCircle,
    CreditCard,
    Settings,
    Phone,
    HelpCircle,
    SquareTerminal,
    Store,
    Folder,
    MessageSquare,
    MessageCircleQuestion,
    Command,
    MessageSquareShare,
    Image,
} from "lucide-react"


import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,

} from "@/components/ui/sidebar"


// import logo from "@/assets/favicon.svg"
import Link from "next/link"
import ROUTES from "@/shared/constants/route"
import { NavMain } from "../common/nav-main"
import { usePathname } from "next/navigation"

export function DashboardAppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    const pathname = usePathname();
    const withActiveFlag = (items: any[]) =>
        items.map((item) => {
            const isRoot = item.url === "/app";

            return {
                ...item,
                isActive: isRoot
                    ? pathname === "/" // Dashboard ONLY active on "/"
                    : pathname === item.url || pathname.startsWith(item.url + "/"),
            };
        });
    const data = {
        IconTitle: [
            {
                title: "Pragati360",
                url: ROUTES.APP.ROOT,
                icon: SquareTerminal, // keeps that “tech platform” feel
                // isActive: true,
            },
        ],

        Overview: [
            {
                title: "Dashboard",
                url: ROUTES.APP.ROOT,
                icon: LayoutDashboard,
                // isActive: true,
            },
        ],

        navMain: [

            {
                title: "Google Business",
                url: ROUTES.APP.GOOGLE_BUSINESS,
                icon: Store, // Represents business/storefront
            },
            {
                title: "Google Reviews",
                url: ROUTES.APP.GOOGLE_REVIEWS,
                icon: MessageSquareShare,
            },
            {
                title: "Google Posts",
                url: ROUTES.APP.GOOGLE_POSTS,
                icon: Image, // chat-style, instantly clear
            },
            {
                title: "Templates",
                url: ROUTES.APP.TEMPLATES,
                icon: Folder, // visually clear for “content templates”
            },
            {
                title: "Subscriptions",
                url: ROUTES.APP.SUBSCRIPTION,
                icon: CreditCard, // payment-related
            },
            {
                title: "Settings",
                url: ROUTES.APP.SETTINGS,
                icon: Settings, // standard and clean
            },
        ],

        support: [
            {
                title: "Contact",
                url: ROUTES.APP.CONTACT,
                icon: Phone, // simpler & clearer than PhoneCall for general support
            },
            {
                title: "FAQs",
                url: ROUTES.APP.FAQs,
                icon: MessageCircleQuestion,
            },
        ],
    };


    return (
        <Sidebar collapsible="icon" {...props} variant="inset" className="h-screen overflow-hidden" >
            <SidebarHeader className="m-0 p-0">
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem >
                            <SidebarMenuButton asChild>
                                <Link href={'/dashboard'} className="flex items-center gap-2">
                                    {/* <img src={logo} height={25} width={25} alt={""} /> */}

                                    <span className="text-xl font-semibold text-blue-600">Pragati360</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarHeader>
            <SidebarContent>


                <NavMain items={withActiveFlag(data.Overview)} menuTitle="Overview" />
                <NavMain items={withActiveFlag(data.navMain)} menuTitle="Menus" />
                <NavMain items={withActiveFlag(data.support)} menuTitle="Support" />
            </SidebarContent>



        </Sidebar>
    )
}
