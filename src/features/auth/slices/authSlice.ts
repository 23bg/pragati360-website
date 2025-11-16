import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "@/shared/lib/axios";
import { API } from "@/shared/constants";
import { User } from "@/shared/types";
import { LoginPayload, SignupPayload, ForgotPasswordPayload, ResetPasswordPayload } from "@/features/auth/types/auth.type";

interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
    successMessage: string | null;
}

// ------------------------------
// Initial State
// ------------------------------

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false,
    successMessage: null,
};

// ------------------------------
// Async Thunks
// ------------------------------

// ✅ Login
export const loginUser = createAsyncThunk<
    User,
    LoginPayload,
    { rejectValue: string }
>("auth/loginUser", async (payload, { rejectWithValue }) => {
    try {
        const response = await api.post(API.AUTH.LOG_IN, payload);
        return response.data as User;
    } catch (error: any) {
        console.error("Login error:", error);
        const message =
            error?.response?.data?.message || "Login failed. Please try again.";
        return rejectWithValue(message);
    }
});

// ✅ Signup
export const signupUser = createAsyncThunk<
    User,
    SignupPayload,
    { rejectValue: string }
>("auth/signupUser", async (payload, { rejectWithValue }) => {
    try {
        const response = await api.post(API.AUTH.SIGN_UP, payload);
        return response.data as User;
    } catch (error: any) {
        console.error("Signup error:", error);
        const message =
            error?.response?.data?.message || "Signup failed. Please try again.";
        return rejectWithValue(message);
    }
});

// ✅ Forgot Password
export const forgotPassword = createAsyncThunk<
    string,
    ForgotPasswordPayload,
    { rejectValue: string }
>("auth/forgotPassword", async (payload, { rejectWithValue }) => {
    try {
        const response = await api.post(API.AUTH.FORGOT_PASSWORD, payload);
        return response.data.message || "Password reset link sent to your email.";
    } catch (error: any) {
        console.error("Forgot password error:", error);
        const message =
            error?.response?.data?.message ||
            "Unable to send reset link. Please try again.";
        return rejectWithValue(message);
    }
});

// ✅ Reset Password
export const resetPassword = createAsyncThunk<
    string,
    ResetPasswordPayload,
    { rejectValue: string }
>("auth/resetPassword", async (payload, { rejectWithValue }) => {
    try {
        const response = await api.post(API.AUTH.RESET_PASSWORD, payload);
        return response.data.message || "Password has been reset successfully.";
    } catch (error: any) {
        console.error("Reset password error:", error);
        const message =
            error?.response?.data?.message ||
            "Password reset failed. Please try again.";
        return rejectWithValue(message);
    }
});

// ✅ Logout
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
    try {
        await api.post(API.AUTH.LOG_OUT);
        return true;
    } catch (error) {
        console.error("Logout error:", error);
        return true; // still clear local state
    }
});

// ------------------------------
// Slice Definition
// ------------------------------

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetAuthState: () => initialState,

        setUserFromStorage: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },

        clearMessages: (state) => {
            state.error = null;
            state.successMessage = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // ------------------------------
            // LOGIN
            // ------------------------------
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(
                loginUser.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.loading = false;
                    state.error = action.payload || "Something went wrong.";
                    state.isAuthenticated = false;
                }
            )

            // ------------------------------
            // SIGNUP
            // ------------------------------
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signupUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
                state.successMessage = "Account created successfully.";
            })
            .addCase(
                signupUser.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.loading = false;
                    state.error = action.payload || "Signup failed.";
                }
            )

            // ------------------------------
            // FORGOT PASSWORD
            // ------------------------------
            .addCase(forgotPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage = null;
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.loading = false;
                state.successMessage = action.payload;
            })
            .addCase(
                forgotPassword.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.loading = false;
                    state.error = action.payload || "Unable to send reset link.";
                }
            )

            // ------------------------------
            // RESET PASSWORD
            // ------------------------------
            .addCase(resetPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage = null;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.loading = false;
                state.successMessage = action.payload;
            })
            .addCase(
                resetPassword.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.loading = false;
                    state.error = action.payload || "Password reset failed.";
                }
            )

            // ------------------------------
            // LOGOUT
            // ------------------------------
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error = null;
                state.successMessage = null;
            });
    },
});

// ------------------------------
// Exports
// ------------------------------

export const { resetAuthState, setUserFromStorage, clearMessages } =
    authSlice.actions;

export default authSlice.reducer;
