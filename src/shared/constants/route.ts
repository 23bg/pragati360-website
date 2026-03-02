const ROUTES = {
    ROOT: '/',
    HOME: '',

    //  routes (standardized)
    DASHBOARD: {
        ROOT: "/dashboard",
        BUSINESS: "/dashboard/business", // OWNER only
        OUTLETS: "/dashboard/outlets",
        POSTS: "/dashboard/posts",
        REVIEWS: "/dashboard/reviews",
        TEAM: "/dashboard/team", // OWNER only
        PROFILE: "/dashboard/profile",
        SUPPORT: "/dashboard/support",
    },

    // Legacy app routes (keep for backward compatibility during migration)
    APP: {
        ROOT: "/app",
        BUSINESS: {
            ROOT: "/business",
            OVERVIEW: "/business/overview",
        },
        ACCOUNT: "/account",
        ALERTS: "/alerts",
    },

    // Public business routes
    PUBLIC: {
        BUSINESS: (slug: string) => `/b/${slug}`,
        OUTLET: (businessSlug: string, outletSlug: string) => `/b/${businessSlug}/o/${outletSlug}`,
    },

    AUTH: {
        LOG_IN: '/login',
        SIGN_UP: '/signup',
        VERIFICATION: '/verification',
    },

    NOT_FOUND: '*'
};

export default ROUTES;
