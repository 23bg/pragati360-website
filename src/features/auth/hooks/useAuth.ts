import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { loginUser, signupUser, resetPassword, forgotPassword } from "../slices/authSlice";

export const useAuth = () => {
    const dispatch = useAppDispatch();
    const { user, loading, error, isAuthenticated } = useAppSelector(
        (state) => state.auth
    );

    const login = (data: { email: string; password: string }) =>
        dispatch(loginUser(data));
    const signup = (data: { name: string; email: string; password: string }) =>
        dispatch(signupUser(data));
    const forgot = (data: { email: string }) => dispatch(forgotPassword(data));
    const reset = (data: { token: string; newPassword: string }) =>
        dispatch(resetPassword(data));

    return { user, loading, error, isAuthenticated, login, signup, forgot, reset };
};
