import axios from 'axios'
import settings from '../settings'

let service = {
  getAllDevices: function () {
    return axios.get(settings.baseUrl + '/devices')
  },
  createDevice: function (device) {
    return axios.post(settings.baseUrl + '/devices', device)
  },
  removeDevice: function (deviceId) {
    return axios.delete(settings.baseUrl + '/devices/' + deviceId)
  },
  editDevice: function (device) {
    return axios.post(settings.baseUrl + '/devices/' + device._id, device)
  },
  getDevice: function (deviceId) {
    return axios.get(settings.baseUrl + '/devices/' + deviceId)
  }
}
export default service
