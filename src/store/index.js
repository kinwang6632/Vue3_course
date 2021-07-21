import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      isLoggedIn: false,
      authUser:{},
    }
  },
  mutations:{
    setIsLoggedIn(state,payload){
      state.isLoggedIn = payload
    },
    setAuthUser(state,payload) {
      state.authUser = payload
    }
  }
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
})

//const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
//app.use(store)
export default store