export default {
    namespaced: true,
    state: () => {
        return {
            userinfo: {
                token: '123',
                username: 'wjy'
            }
        }
    },
    mutations: {
        updateName(state, payload) {
            state.userinfo.username = payload;
        }
    },
    actions:{
        updateNameAsync({commit},payload){
            setTimeout(() => {
                commit('updateName',payload)
            }, 2000);
        }
    },
    getters:{
        
    }
}