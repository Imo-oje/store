import API from "./client";

export const login = (
  data: LoginFormInputs
): Promise<{ message: string; role: string }> => API.post("/auth/login", data);

export const registerUser = (data: RegisterFormInputs) =>
  API.post("/auth/register", data);

export const logout = () => API.post("/auth/logout");
export const refresh = () => API.get("/auth/refresh");
export const forgotPassword = (data: ForgotPassword) =>
  API.post("auth/password/forgot", data);
export const resetPassword = (data: ResetPassword) =>
  API.post("/auth/password/reset", data);

export const getUser = (): Promise<any> => API.get("/user/profile");

// TYPES and INTERFACES

interface ResetPassword {
  verificationCode: string;
  password: string;
  confirmPassword: string;
}
export interface ForgotPassword {
  email: string;
}
export interface LoginFormInputs extends ForgotPassword {
  password: string;
}
export interface RegisterFormInputs extends LoginFormInputs {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}
