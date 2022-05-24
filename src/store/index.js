
import { createStore } from 'vuex'
import auth from './modules/auth'
import images from './modules/images'

export default createStore({
  modules: {
    auth, images                  //  to access their state
  }
})