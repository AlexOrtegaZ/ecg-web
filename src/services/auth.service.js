import axios from 'axios'
import settings from '../settings'

let service = {user: null,
  checkSession: function () {
    const stringUser = window.localStorage.getItem('user');
    this.user = stringUser ? JSON.parse(stringUser) : null;
  },
  login: function (email, password, $router) {
    axios.post(settings.baseUrl + '/login', {email, password}).then((res) => {
      this.user = res.data;
      window.localStorage.setItem('user', JSON.stringify(res.data));
      $router.push({ path: '/notifications' });
    });
  },
  logout: function (router) {
    axios.get(settings.baseUrl + '/logout').then((res) => {
      this.user = null;
      window.localStorage.setItem('user', null);
      router.push({ path: '/login' });
    });
  }
}
export default service
