export default {
    register: {
        path: "/api/v1/user/userRegister",
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
        path: "/api/v1/consultation/createConsultation",
        method: "POST",
        noAuth: false,
    },

    createFacility: {
        path: "/api/v1/facility/add-facility",
        method: "POST",
        noAuth: false,
    },

    createLab: {
        path: "/api/v1/facility/add-laboratory",
        method: "POST",
        noAuth: false,
    },
    getAllFacilities: {
        path: "/api/v1/facility/all-facility",
        method: "GET",
        noAuth: false,
    },
};
