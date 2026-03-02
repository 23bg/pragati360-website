"use client"

import {
    CreditCard,
    SquareTerminal,
    MessageCircleQuestion,
    UserCircle,
    StoreIcon,
    Home,
    Users,
    MessageCircle,
    Building,
    Twitter,
    Linkedin,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
    SidebarFooter,
} from "@/components/ui/sidebar"

import Link from "next/link"
import ROUTES from "@/shared/constants/route"
import { NavMain } from "../common/nav-main"
import { usePathname } from "next/navigation"
import { useRoleAccess } from "@/hooks/useRoleAccess"
import { useSession } from "@/shared/hooks/useSession";
import Image from "next/image"
import logo from "../../../public/pragati360.png";

export function DashboardAppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    const pathname = usePathname();
    const { isOwner } = useRoleAccess();
    const { data: session } = useSession();
    const { state } = useSidebar();

    const isGbpConnected = session?.gbp?.status === 'CONNECTED';

    const withActiveFlag = (items: any[]) =>
        items.map((item) => {
            const isRoot = item.url === "/dashboard";

            return {
                ...item,
                isActive: isRoot
                    ? pathname === "/dashboard" // Dashboard ONLY active on "/dashboard"
                    : pathname === item.url || pathname.startsWith(item.url + "/"),
            };
        });

    // Base navigation items (available to all users)
    const baseNavItems = [
        {
            title: "Dashboard",
            url: ROUTES.DASHBOARD.ROOT,
            icon: Home,
        },
        {
            title: "Outlets",
            url: ROUTES.DASHBOARD.OUTLETS,
            icon: StoreIcon,
        },
        ...(isGbpConnected ? [
            {
                title: "Posts",
                url: ROUTES.DASHBOARD.POSTS,
                icon: SquareTerminal,
            },
            {
                title: "Reviews",
                url: ROUTES.DASHBOARD.REVIEWS,
                icon: MessageCircleQuestion,
            },
        ] : []),
        {
            title: "Profile",
            url: ROUTES.DASHBOARD.PROFILE,
            icon: UserCircle,
        },
    ];

    // Owner-only navigation items
    const ownerNavItems = [
        {
            title: "My Business",
            url: ROUTES.DASHBOARD.BUSINESS,
            icon: CreditCard,
        },
        {
            title: "Team",
            url: ROUTES.DASHBOARD.TEAM,
            icon: Users,
        },
    ];

    // Support (available to all)
    const supportNavItems = [
        {
            title: "Support",
            url: ROUTES.DASHBOARD.SUPPORT,
            icon: MessageCircle,
        },
    ];

    // Combine navigation items based on role
    const allNavItems = [
        ...baseNavItems,
        ...(isOwner ? ownerNavItems : []),
        ...supportNavItems,
    ];

    const data = {
        navMain: allNavItems,
    };

    const socialItems = [
        {
            title: "WhatsApp",
            url: process.env.NEXT_PUBLIC_WHATSAPP || "", // Replace with actual WhatsApp link
            icon: MessageCircle,
        },
        {
            title: "X (Twitter)",
            url: process.env.NEXT_PUBLIC_X || "", // Replace with actual X/Twitter link
            icon: Twitter,
        },
        {
            title: "LinkedIn",
            url: process.env.NEXT_PUBLIC_LINKEDIN || "", // Replace with actual LinkedIn link
            icon: Linkedin,
        },
    ];

    return (
        <Sidebar collapsible="icon" {...props} variant="inset" className="h-screen overflow-hidden " >
            <SidebarHeader className="mx-0 px-0 ">
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem >
                            <SidebarMenuButton >
                                <Link href={ROUTES.DASHBOARD.ROOT} className="flex items-center gap-2">
                                    {state === "collapsed" ? (
                                        <Image src={logo} alt="Pragati360" width={24} height={24} className="h-6 w-6" />
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <Image src={logo} alt="Pragati360" width={24} height={24} className="h-6 w-6 rounded-xs" />

                                            <span className="text-xl font-semibold text-foreground">Pragati360</span>
                                        </div>
                                    )}
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarHeader>
            <SidebarContent className="">
                <NavMain menuTitle="Menus" items={withActiveFlag(data.navMain)} />
            </SidebarContent>
            <SidebarFooter>
                <SidebarGroup>
                    <SidebarMenu>
                        {socialItems.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.url} target="_blank" rel="noopener noreferrer">
                                        <item.icon className="h-4 w-4" />
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarFooter>
        </Sidebar>
    );
}
