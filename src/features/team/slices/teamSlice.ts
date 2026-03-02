import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TeamState {
    members: any[];
    loading: boolean;
    error: string | null;
}

const initialState: TeamState = {
    members: [],
    loading: false,
    error: null,
};

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setMembers: (state, action: PayloadAction<any[]>) => {
            state.members = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { setMembers, setLoading, setError } = teamSlice.actions;
export default teamSlice.reducer;