import { configureStore } from '@reduxjs/toolkit'
import authReducer from "@/features/auth/slices/authSlice"
import userReducer from "@/features/user/slices/userSlice"
import businessReducer from '@/features/business/slices/businessSlice'
import outletsReducer from '@/features/outlets/slices/outletsSlice'
import postsReducer from '@/features/posts/slices/postsSlice'
import reviewsReducer from '@/features/reviews/slices/reviewsSlice'
import teamReducer from '@/features/team/slices/teamSlice'
import profileReducer from '@/features/profile/slices/profileSlice'

// Import the auth API
import { authApi } from "@/features/auth/services/authApi"
// Import the dashboard API
import { dashboardApi } from "@/features/dashboard/services/dashboardApi"
// Import the business API
import { businessApi } from "@/features/business/services/businessApi"
// Import the outlets API
import { outletsApi } from "@/features/outlets/services/outletsApi"
// Import the posts API
import { postsApi } from "@/features/posts/services/postsApi"
// Import the reviews API
import { reviewsApi } from "@/features/reviews/services/reviewsApi"
// Import the team API
import { teamApi } from "@/features/team/services/teamApi"
// Import the profile API
import { profileApi } from "@/features/profile/services/profileApi"

export const store = configureStore({
  reducer: {
    // Auth Reducer
    auth: authReducer,

    // User Reducer
    users: userReducer,

    // Business Reducer (OWNER only)
    business: businessReducer,

    // Outlets Reducer
    outlets: outletsReducer,

    // Posts Reducer (GBP posts)
    posts: postsReducer,

    // Reviews Reducer (GBP reviews)
    reviews: reviewsReducer,

    // Team Reducer (OWNER only)
    team: teamReducer,

    // Profile Reducer
    profile: profileReducer,

    // API Reducers
    [authApi.reducerPath]: authApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [businessApi.reducerPath]: businessApi.reducer,
    [outletsApi.reducerPath]: outletsApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [teamApi.reducerPath]: teamApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(dashboardApi.middleware)
      .concat(businessApi.middleware)
      .concat(outletsApi.middleware)
      .concat(postsApi.middleware)
      .concat(reviewsApi.middleware)
      .concat(teamApi.middleware)
      .concat(profileApi.middleware),
})

// ✅ Typed versions for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;