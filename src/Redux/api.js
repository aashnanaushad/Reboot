export default {
    register: {
        path: "/api/v1/auth/register",
        method: "POST",
        noAuth: true,
    },
    changepassword: {
        path: "/api/v1/auth/change-password",
        method: "PUT",
        noAuth: false,
    },

    login: {
        path: "/api/v1",
        method: "POST",
        noAuth: true,
    },

    currentUser: {
        path: "/api/v1/auth/user",
        method: "GET",
        noAuth: false,
    },
    getRequestList: {
        path: "/api/v1/leave",
        method: "GET",
        noAuth: false,
    },

    applyLeave: {
        path: "/api/v1/leave/applyLeave",
        method: "POST",
        noAuth: false,
    },

    decodeGatePassId: {
        path: "/api/v1/leave/decodeGatePassId",
        method: "GET",
        noAuth: false,
    },

    getLeaveDetails: {
        path: "/api/v1/leave/specificLeaveOfStudentInDashboards",
        method: "GET",
        noAuth: false,
    },
    forwardToHOD: {
        path: "/api/v1/leave/facultyUpdate",
        method: "PUT",
        noAuth: false,
    },
    approveByHOD: {
        path: "/api/v1/leave/hodUpdate",
        method: "PUT",
        noAuth: false,
    },
    getStudentLeaveDetails: {
        path: "/api/v1/leave/specificLeaveOfStudent",
        method: "GET",
        noAuth: false,
    },
    getStudentLeaves: {
        path: "/api/v1/leave/allstudentLeaveDetails",
        method: "GET",
        noAuth: false,
    },
    getGatePassId: {
        path: "/api/v1/leave/returnGatePassId",
        mathod: "GET",
        noAuth: false,
    },
    allLeaves: {
        path: "/api/v1/leave/allLeaves",
        method: "GET",
        noAuth: false,
    },
    getHolidays: {
        path: "/api/v1/calendar/getHolidays",
        method: "GET",
        noAuth: false,
    },
    updateHolidays: {
        path: "/api/v1/calendar/updateHolidays",
        method: "PUT",
        noAuth: false,
    },
    rejectionByFaculty: {
        path: "/api/v1/leave/rejectLeaveApplicationFaculty",
        method: "PUT",
        noAuth: false,
    },
    rejectionByHod: {
        path: "/api/v1/leave/rejectLeaveApplicationHod",
        method: "PUT",
        noAuth: false,
    },
    approveByWarden: {
        path: "/api/v1/leave/wardenUpdate",
        method: "PUT",
        noAuth: false,
    },
    rejectionByWarden: {
        path: "/api/v1/leave/rejectLeaveApplicationWarden",
        method: "PUT",
        noAuth: false,
    },
    getFoodCount: {
        path: "/api/v1/leave/foodCount",
        method: "GET",
        noAuth: false,
    },
};
