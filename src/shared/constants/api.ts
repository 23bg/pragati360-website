export const API = {
    PRELAUNCH_SUBMIT: '/web/pre-launch',
    AUTH: {
        LOG_IN: '/auth/login',
        LOG_OUT: '/auth/logout',
        SIGN_UP: '/auth/signup',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
    },
    USERS: {
        ALL: '/users',
        GET: (id: string) => `/users/${id}`,
        CREATE: '/users',
        UPDATE: (id: string) => `/users/${id}`,
    },
    TEMPLATES: {
        ALL: '/tickets',
        GET: (id: string) => `/tickets/${id}`,
        CREATE: '/tickets',
    },

    GOOGLE: {
        BUSINESS: {
            GET: (locationId: string) => `/google/${locationId}`,
            SYNC: (locationId: string) => `/google/posts/sync/${locationId}`,
            BY_LOCATION: (locationId: string) => `/google/posts/location/${locationId}`,
            UPDATE: (id: string) => `/google/posts/${id}`,
            DELETE: (id: string) => `/google/posts/${id}`,
        },
        REVIEW: {
            BY_LOCATION: (locationId: string) => `/google/posts/location/${locationId}`,
            CREATE: `/google/posts`,
            UPDATE: (id: string) => `/google/posts/${id}`,
            DELETE: (id: string) => `/google/posts/${id}`,
        },
        POST: {
            BY_LOCATION: (locationId: string) => `/google/posts/location/${locationId}`,
            CREATE: `/google/posts`,
            UPDATE: (id: string) => `/google/posts/${id}`,
            DELETE: (id: string) => `/google/posts/${id}`,
        },
    },
    SUBSCRIPTION: {
        ALL: '/subscription',
        GET: (id: string) => `/subscription/${id}`,
        CREATE: '/subscription',
    },
    TICKETS: {
        CREATE: '/tickets',
    },
}