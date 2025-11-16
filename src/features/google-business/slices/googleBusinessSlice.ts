import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "@/shared/lib/axios";
import { API } from "@/shared/constants";
import { IGoogleBusiness } from "../types/google-business.type";

// ------------------------------
// State Interface
// ------------------------------
interface GoogleBusinessState {
    accounts: IGoogleBusiness[];
    currentAccount: IGoogleBusiness | null;
    loading: boolean;
    error: string | null;
    successMessage: string | null;
}

// ------------------------------
// Initial State
// ------------------------------
const initialState: GoogleBusinessState = {
    accounts: [],
    currentAccount: null,
    loading: false,
    error: null,
    successMessage: null,
};

// ------------------------------
// Async Thunks
// ------------------------------



// 📌 Fetch Google Business account by ID
export const fetchGoogleAccountById = createAsyncThunk<
    IGoogleBusiness,
    { id: string },
    { rejectValue: string }
>("googleBusiness/fetchById", async ({ id }, { rejectWithValue }) => {
    try {
        const res = await api.get(API.GOOGLE.BUSINESS.GET(id));
        return res.data.data as IGoogleBusiness;
    } catch (error: any) {
        return rejectWithValue(
            error?.response?.data?.message ||
            "Failed to load Google Business Account."
        );
    }
});

// 📌 Sync / Refresh Google Business Account
export const syncGoogleBusiness = createAsyncThunk<
    IGoogleBusiness,
    { id: string },
    { rejectValue: string }
>("googleBusiness/sync", async ({ id }, { rejectWithValue }) => {
    try {
        const res = await api.post(API.GOOGLE.BUSINESS.SYNC(id));
        return res.data.data as IGoogleBusiness;
    } catch (error: any) {
        return rejectWithValue(
            error?.response?.data?.message || "Sync failed."
        );
    }
});


// ------------------------------
// Slice Definition
// ------------------------------
const googleBusinessSlice = createSlice({
    name: "googleBusiness",
    initialState,
    reducers: {
        resetGoogleBusinessState: () => initialState,
        clearGoogleBusinessMessages: (state) => {
            state.error = null;
            state.successMessage = null;
        },
    },
    extraReducers: (builder) => {
        builder


            // ------------------------------
            // FETCH BY ID
            // ------------------------------
            .addCase(fetchGoogleAccountById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchGoogleAccountById.fulfilled,
                (state, action: PayloadAction<IGoogleBusiness>) => {
                    state.loading = false;
                    state.currentAccount = action.payload;
                }
            )
            .addCase(
                fetchGoogleAccountById.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.loading = false;
                    state.error =
                        action.payload ||
                        "Failed to fetch Google Business Account.";
                }
            )

            // ------------------------------
            // SYNC ACCOUNT
            // ------------------------------
            .addCase(syncGoogleBusiness.pending, (state) => {
                state.loading = true;
            })
            .addCase(
                syncGoogleBusiness.fulfilled,
                (state, action: PayloadAction<IGoogleBusiness>) => {
                    state.loading = false;
                    state.currentAccount = action.payload;
                    state.successMessage = "Google Business synced successfully.";
                }
            )
            .addCase(
                syncGoogleBusiness.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.loading = false;
                    state.error = action.payload || "Failed to sync.";
                }
            )


    },
});

// ------------------------------
// Exports
// ------------------------------
export const {
    resetGoogleBusinessState,
    clearGoogleBusinessMessages,
} = googleBusinessSlice.actions;

export default googleBusinessSlice.reducer;
