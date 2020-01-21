const state = {
    users: [{
            id: 1,
            name: "Kevin",
            email: "kevin@gmail.com",
            password: "123456"
        },
        {
            id: 2,
            name: "Frank",
            email: "frank@gmail.com",
            password: "123456"
        }
    ],
    auth: {
        name: "",
        email: "",
        password: ""
    }
};

const getters = {
    allUsers: state => state.users,
    getAuth: state => state.auth
};

const actions = {
    regUser: ({
        commit
    }, data) => {
        commit("regNew", data);
    },
    setAuth: ({
        commit
    }, user) => {
        commit("authorized", user);
    }
};

const mutations = {
    regNew: (state, user) => {
        state.users.push(user);
    },
    authorized: (state, user) => {
        state.auth = user;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};