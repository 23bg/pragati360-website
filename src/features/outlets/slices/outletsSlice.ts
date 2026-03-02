import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OutletsState {
    outlets: any[];
    loading: boolean;
    error: string | null;
}

const initialState: OutletsState = {
    outlets: [],
    loading: false,
    error: null,
};

const outletsSlice = createSlice({
    name: 'outlets',
    initialState,
    reducers: {
        setOutlets: (state, action: PayloadAction<any[]>) => {
            state.outlets = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { setOutlets, setLoading, setError } = outletsSlice.actions;
export default outletsSlice.reducer;