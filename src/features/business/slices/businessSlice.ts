import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BusinessState {
    business: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: BusinessState = {
    business: null,
    loading: false,
    error: null,
};

const businessSlice = createSlice({
    name: 'business',
    initialState,
    reducers: {
        setBusiness: (state, action: PayloadAction<any>) => {
            state.business = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { setBusiness, setLoading, setError } = businessSlice.actions;
export default businessSlice.reducer;