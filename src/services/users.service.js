import axios from 'axios'
import settings from '../settings'
import AuthService from './auth.service'

let service = {
  getAllUsers: function () {
    return axios.get(settings.baseUrl + '/users')
  },
  createUser: function (user) {
    return axios.post(settings.baseUrl + '/users', user)
  },
  removeUser: function (userId) {
    return axios.delete(settings.baseUrl + '/users/' + userId)
  },
  editUser: function (user) {
    return axios.put(settings.baseUrl + '/users/' + user._id, user)
  },
  getUser: function (userId) {
    return axios.get(settings.baseUrl + '/users/' + userId)
  },
  getAlertsOfTheUser: function (userId) {
    return axios.get(settings.baseUrl + '/users/' + userId + '/alerts');
  },
  getLinkedUsers: function () {
    var req = {
      users: AuthService.user.linkedUsers
    }
    return axios.post(settings.baseUrl + '/linkedUsers', req);
  }
}
export default service;
