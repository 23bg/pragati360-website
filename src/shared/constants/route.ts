const ROUTES = {
    ROOT: '/',
    HOME: '',


    APP: {
        ROOT: "/app",




        // The ONE business the user owns
        BUSINESS: {
            ROOT: "/app/business",
            LOCATIONS: {
                ROOT: "/app/business/locations",
                CREATE: "/app/business/locations/create",
                DETAIL: (locationId: string) =>
                    `/app/business/locations/${locationId}`,
                UPDATE: (locationId: string) =>
                    `/app/business/locations/${locationId}/update`,
                POSTS: {
                    ROOT: (locationId: string) =>
                        `/app/business/locations/${locationId}/posts`,
                    CREATE: (locationId: string) =>
                        `/app/business/locations/${locationId}/posts/create`,
                    UPDATE: (locationId: string, postId: string) =>
                        `/app/business/locations/${locationId}/posts/${postId}/update`,
                },
                REVIEWS: {
                    ROOT: (locationId: string) =>
                        `/app/business/locations/${locationId}/reviews`,
                    REPLY: (locationId: string, reviewId: string) =>
                        `/app/business/locations/${locationId}/reviews/${reviewId}/reply`,
                }
            },

        },



        // Instagram module remains same
        INSTAGRAM: {
            ROOT: "/app/instagram",
            POSTS: "/app/instagram/posts",
            MESSAGES: "/app/instagram/messages",
            COMPETITORS: "/app/instagram/competitors",
        },

        MEMBERS: {
            ROOT: "/app/members",
            CREATE: "/app/members/create",
            DETAIL: (memberId: string) => `/app/members/${memberId}`,
            UPDATE: (memberId: string) => `/app/members/${memberId}/update`,
        },

        SUBSCRIPTION: {
            ROOT: "/app/subscription",
            CREATE: "/app/subscription/create",
            DETAIL: (subscriptionId: string) => `/app/subscription/${subscriptionId}`,
        },


        // Other modules

        TEMPLATES: "/app/templates",

        SETTINGS: "/app/settings",


        HELP_CENTER: "/app/help-center",
        FAQs: "/app/faqs",
        CONTACT: "/app/contact",
    },


    AUTH: {
        LOG_IN: '/login',
        SIGN_UP: '/signup',
        VERIFICATION: '/verification',
    },


    NOT_FOUND: '*'
};

export default ROUTES;
