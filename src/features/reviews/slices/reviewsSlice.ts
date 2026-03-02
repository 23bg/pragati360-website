import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReviewsState {
    reviews: any[];
    loading: boolean;
    error: string | null;
}

const initialState: ReviewsState = {
    reviews: [],
    loading: false,
    error: null,
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        setReviews: (state, action: PayloadAction<any[]>) => {
            state.reviews = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { setReviews, setLoading, setError } = reviewsSlice.actions;
export default reviewsSlice.reducer;