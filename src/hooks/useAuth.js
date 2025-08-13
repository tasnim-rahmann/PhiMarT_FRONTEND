import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");

    const getToken = () => {
        const token = localStorage.getItem("authTokens");
        return token ? JSON.parse(token) : null;
    };
    const handleAPIError = (err, defaulMessage = "Something went wrong try again") => {
        if (err.response && err.response.data) {
            const errorMessage = Object.values(err.response.data).flat().join("\n");
            setErrorMsg(errorMessage);
            return { success: false, message: errorMessage };
        }
        setErrorMsg(defaulMessage);
        return { success: false, message: defaulMessage };
    };

    const [authTokens, setAuthTokens] = useState(getToken());

    useEffect(() => {
        if (authTokens) {
            fetchUserProfile();
        }
    }, [authTokens]);

    // Fetch user profile
    const fetchUserProfile = async () => {
        try {
            const response = await apiClient.get("/auth/users/me", {
                headers: { Authorization: `JWT ${authTokens?.access}` },
            });
            setUser(response.data);
        } catch (error) {
            console.log("Error Fetching User", error);
        }
    };

    // Update user Profile
    const updateUserProfile = async (data) => {
        setErrorMsg("");
        try {
            await apiClient.put('/auth/users/me/', data, {
                headers: {
                    Authorization: `JWT ${authTokens?.access}`
                }
            });
        } catch (err) {
            return handleAPIError(err);
        }
    };

    // Password Change
    const changePassword = async (data) => {
        setErrorMsg("");
        try {
            await apiClient.post('/auth/users/set_password/', data, {
                headers: {
                    Authorization: `JWT ${authTokens?.access}`
                }
            });
        } catch (err) {
            return handleAPIError(err);
        }
    };

    // Login User
    const loginUser = async (userData) => {
        setErrorMsg("");
        try {
            const response = await apiClient.post("auth/jwt/create/", userData);
            setAuthTokens(response.data);
            localStorage.setItem("authTokens", JSON.stringify(response.data));
            await fetchUserProfile();
        } catch (error) {
            setErrorMsg(error.response?.data?.detail);
        }
    };

    // Register User
    const registerUser = async (userData) => {
        setErrorMsg("");
        try {
            await apiClient.post("/auth/users/", userData);
            return { success: true, message: "Registration successfull. Redirecting..." };
        } catch (err) {
            return handleAPIError(err, "Registrations Faild.");
        }
    };

    // Logout User
    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
    };

    return { user, errorMsg, loginUser, registerUser, logoutUser, updateUserProfile, changePassword };
};

export default useAuth;
