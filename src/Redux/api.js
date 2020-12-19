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
        path: "/api/v1/user/login",
        method: "POST",
        noAuth: true,
    },

    currentUser: {
        path: "/api/v1/user/getUser",
        method: "GET",
        noAuth: false,
    },

    createConsultation: {
        path: "/api/v1/consultation/createConsulation",
        method: "POST",
        noAuth: false,
    },

    createFacility: {
        path: "/api/v1/facility/add-facility",
        method: "POST",
        noAuth: false,
    },
    getAllFacilities: {
        path: "/api/v1/facility/all-facility",
        method: "GET",
        noAuth: false,
    },
};
