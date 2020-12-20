import { fireRequest } from "./fireRequest";

export const postRegister = (form) => {
    return fireRequest("register", [], form);
};
export const postLogin = (form) => {
    return fireRequest("login", [form.type], form);
};

export const changePassword = (form) => {
    return fireRequest("changepassword", [], form);
};

export const getBookingHistory = () => {
    return fireRequest("bookingHistory");
};
export const postAddRooms = (id, form) => {
    return fireRequest("addRooms", [id], form, "", true);
};
export const getCurrentUser = () => {
    return fireRequest("currentUser");
};

export const sendEmail = (form) => {
    return fireRequest("sendEmail", [], form);
};
export const resetPassword = (form) => {
    return fireRequest("resetPassword", [], form);
};

export const createConsultation = (form) => {
    return fireRequest("createConsultation", [], form);
};

export const createFacility = (form) => {
    return fireRequest("createFacility", [], form);
};

export const createLab = (form) => {
    return fireRequest("createLab", [], form);
};

export const getAllFacilities = (form) => {
    return fireRequest("getAllFacilities", [], form);
};
