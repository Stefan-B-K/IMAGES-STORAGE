
import qs from 'qs'
import axios from 'axios'
import {
  GOOGLE_CLIENT_ID, OAUTH2, MEDIA,
  REDIRECT, SCOPE, UPLOAD
} from './private'

export default {
  login() {
    const query = {
      client_id: GOOGLE_CLIENT_ID,
      redirect_uri: REDIRECT,
      response_type: 'token',
      scope: SCOPE,
    }
    window.location = `${OAUTH2}?${qs.stringify(query)}`
    // loads the URL in user browser
  },
  fetchImages(token) {
    return axios.get(MEDIA, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
  },
  async uploadImages(images, token) {
    const imagesWithTokens = await uploadBytes(images, token)
    const batch = { newMediaItems: [] }
    imagesWithTokens.forEach(image => {
      batch['newMediaItems'].push({
        simpleMediaItem: {
          uploadToken: image[1],
          fileName: image[0]
        }
      })
    })
    return axios.post(`${MEDIA}:batchCreate`, batch, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}

const uploadBytes = (images, token) => {
  const imagesWithTokens = Array.from(images).map(async image => {
    const response = await axios.post(UPLOAD, image, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const fileName = image.name.split(' ').join('_')
    const photoToken = response.data
    return [fileName, photoToken]
  })
  return Promise.all(imagesWithTokens)
}