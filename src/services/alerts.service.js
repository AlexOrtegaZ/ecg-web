import axios from 'axios'
import settings from '../settings'
import AuthService from './auth.service'

let service = {
  getAllAlerts: function () {
    return axios.get(settings.baseUrl + '/alerts');
  },
  getAlert: function (alertId) {
    return axios.get(settings.baseUrl + '/alerts/' + alertId);
  },
  getAlertControls: function () {
    return axios.get(settings.baseUrl + '/alertControl');
  },
  alertControlHistory: function () {
    return axios.get(settings.baseUrl + '/alertControlHistory');
  },
  getMyAlertControls: function () {
    return axios.get(settings.baseUrl + '/alertControlByUser/' + AuthService.user._id);
  },
  getAlertControl: function (alertControlId) {
    return axios.get(settings.baseUrl + '/alertControl/' + alertControlId);
  },
  updateAlertControl: function (alertControlId, alertControl) {
    return axios.put(settings.baseUrl + '/alertControl/' + alertControlId, alertControl);
  },
  checkAlertControl: function (alertControlId) {
    const req = {
      alertControlId,
      userId: AuthService.user._id
    }
    return axios.post(settings.baseUrl + '/checkAlertControl', req);
  },
  sendAlertToDoctor: function (alertControlId, alertId, patientId) {
    const req = {
      alertControlId,
      alertId,
      patientId,
      userId: AuthService.user._id
    }
    return axios.post(settings.baseUrl + '/sendAlertToDoctor', req);
  },
  createAlertControl: function (alertControl) {
    return axios.post(settings.baseUrl + '/alertControl', alertControl);
  }
}
export default service;
