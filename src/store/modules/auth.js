
import qs from 'qs'
import api from '../../api/google'
import { router } from '@/main'

const state = {
  token: window.localStorage.getItem('google_token')
}

const getters = {
  isLoggedIn: state => !!state.token,
}

const mutations = {
  setToken: (state, token) => state.token = token
}

const actions = {
  login: () => {                            // placed here just because best fits
    api.login()
  },
  finalizeLogin: ({ commit }, hash) => {
    const response = qs.parse(hash.replace('#', ''))
    commit('setToken', response.access_token)             // calling mutation
    window.localStorage.setItem('google_token', response.access_token)
    // ! ! ! не презарежда цялата страниця, за разлика от  window.location = '/'
    router.push('/')    
  },
  logout: ({ commit }) => {
    commit('setToken', null)                
    window.localStorage.removeItem('google_token')
    router.push('/') 
  }
}

export default {
  state, getters, actions, mutations
}