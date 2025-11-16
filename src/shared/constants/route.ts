const ROUTES = {
    ROOT: '/',
    HOME: '',


    APP: {
        ROOT: '/app',
        USER_PROFILE: '/app/:id',
        GOOGLE_BUSINESS: '/app/google-business',
        GOOGLE_REVIEWS: '/app/google-reviews',
        GOOGLE_POSTS: '/app/google-posts'
        ,
        TEMPLATES: '/app/templates',
        SUBSCRIPTION: '/app/subscription',
        SUBSCRIPTION_DETAIL: (id: string) => `/app/subscription/${id}`,
        SETTINGS: '/app/settings',
        HELP_CENTER: '/app/help-center',
        FAQs: '/app/faqs',
        CONTACT: '/app/contact',
    },

    AUTH: {
        LOG_IN: '/auth/login',
        SIGN_UP: '/auth/signup',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
    },


    NOT_FOUND: '*'
};

export default ROUTES;
