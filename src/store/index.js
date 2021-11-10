import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

 
export default createStore({
  state: {
    user: null,
    saltKey :"booklike123"
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    logOutUser(state){
      state.user = null
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
      _isAuthenticated: state => state.user !== null,
      _getCurrentUser (state) {
        const user = state.user;
        delete user?.pasword;
        return user;
      },
      _saltKey: state => state.saltKey
  },
  plugins: [
    //secure ls vuexte user bilgilerini şifreler. applicationdan bakılabilir
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ]
})
