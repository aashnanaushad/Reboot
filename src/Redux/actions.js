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

export const getRequestList = (params) => {
    return fireRequest("getRequestList", [params]);
};
export const applyLeave = (form) => {
    return fireRequest("applyLeave", [], form);
};

export const decodeGatePassId = (params) => {
    return fireRequest("decodeGatePassId", [params]);
};
export const getLeaveDetails = (id) => {
    return fireRequest("getLeaveDetails", [id]);
};
export const forwardToHOD = (id) => {
    return fireRequest("forwardToHOD", [id]);
};
export const approveByHOD = (id) => {
    return fireRequest("approveByHOD", [id]);
};

export const getStudentLeaveDetails = (id) => {
    return fireRequest("getStudentLeaveDetails", [id]);
};
export const getStudentLeaves = () => {
    return fireRequest("getStudentLeaves");
};
export const getGatePassId = (id) => {
    return fireRequest("getGatePassId", [id]);
};
export const allLeaves = () => {
    return fireRequest("allLeaves");
};
export const getHolidays = () => {
    return fireRequest("getHolidays");
};
export const updateHolidays = (form) => {
    return fireRequest("updateHolidays", [], form);
};
export const rejectionByFaculty = (id, reason) => {
    return fireRequest("rejectionByFaculty", [id], reason);
};
export const rejectionByHod = (id, reason) => {
    return fireRequest("rejectionByHod", [id], reason);
};
export const approveByWarden = (id) => {
    return fireRequest("approveByWarden", [id]);
};
export const rejectionByWarden = (id, reason) => {
    return fireRequest("rejectionByWarden", [id], reason);
};
export const getFoodCount = () => {
    return fireRequest("getFoodCount", []);
};
