import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import {
    fetchGoogleAccountById,
    syncGoogleBusiness,
    resetGoogleBusinessState,
    clearGoogleBusinessMessages,
} from "../slices/googleBusinessSlice";

export const useGoogleBusiness = () => {
    const dispatch = useAppDispatch();

    const {
        accounts,
        currentAccount,
        loading,
        error,
        successMessage,
    } = useAppSelector((state) => state.googleBusiness);

    // ------------------------------
    // Actions / Thunks
    // ------------------------------

    const getGoogleAccount = (id: string) =>
        dispatch(fetchGoogleAccountById({ id }));

    const syncAccount = (id: string) =>
        dispatch(syncGoogleBusiness({ id }));

    // ------------------------------
    // Local Reducer Actions
    // ------------------------------

    const resetState = () => dispatch(resetGoogleBusinessState());
    const clearMessages = () => dispatch(clearGoogleBusinessMessages());

    // ------------------------------
    // Return Combined Interface
    // ------------------------------
    return {
        accounts,
        currentAccount,
        loading,
        error,
        successMessage,

        getGoogleAccount,
        syncAccount,

        resetState,
        clearMessages,
    };
};
