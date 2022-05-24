
import api from '../../api/google'
import { router } from '@/main'

const state = {
  images: []
}

const getters = {
  allImages: state => state.images
}

const mutations = {
  setImages: (state, images) => {
    state.images = images
  }
}

const actions = {
  fetchImages: async ({ rootState, commit }) => {
    const { token } = rootState.auth
    const response = await api.fetchImages(token)
    commit('setImages', response.data.mediaItems)
  },
  uploadImages: async ({ rootState }, images) => {
    const { token } = rootState.auth
    await api.uploadImages(images, token)
    router.push('/')
  }
}

export default {
  state, getters, actions, mutations
}