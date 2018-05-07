import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

import VueRouter from 'vue-router'

// Admin pages
// import Overview from 'src/components/Dashboard/Views/Overview.vue'
import PatientInfo from 'src/components/Dashboard/Views/PatientInfo/PatientInfo.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications/Notifications.vue'
import MyNotifications from 'src/components/Dashboard/Views/MyNotifications/MyNotifications.vue'
import Users from 'src/components/Dashboard/Views/Users/Users.vue'
import Devices from 'src/components/Dashboard/Views/Devices/Devices.vue'
import Login from 'src/components/Login/Login.vue'
import Patients from 'src/components/Dashboard/Views/Patients/Patients.vue'
import AuthService from 'src/services/auth.service.js'
import AlertControlHistory from 'src/components/Dashboard/Views/AlertControlHistory/AlertControlHistory.vue'

AuthService.checkSession();

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/notifications',
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/notifications',
    meta: { requiresAuth: true },
    children: [
      {
        path: 'notifications',
        name: 'Notificaciones',
        component: Notifications,
        meta: { requiresAuth: true }
      },
      {
        path: 'mynotifications',
        name: 'Mis Notificaciones',
        component: MyNotifications,
        meta: { requiresAuth: true }
      },
      {
        path: 'users',
        name: 'Usuarios',
        component: Users,
        meta: { requiresAuth: true }
      },
      {
        path: 'patient/:id',
        name: 'Informacion del Paciente',
        component: PatientInfo,
        meta: { requiresAuth: true }
      },
      {
        path: 'patient/:id/:alertId',
        name: 'Informacion del Paciente',
        component: PatientInfo,
        meta: { requiresAuth: true }
      },
      {
        path: 'devices',
        name: 'Dispositivos',
        component: Devices,
        meta: { requiresAuth: true }
      },
      {
        path: 'patients',
        name: 'Pacients',
        component: Patients,
        meta: { requiresAuth: true }
      },
      {
        path: 'history',
        name: 'History',
        component: AlertControlHistory,
        meta: { requiresAuth: true }
      }
    ]},
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !AuthService.user) {
    next({path: '/login'});
  } else {
    if (to.name === 'Login' && AuthService.user) {
      next({path: '/notifications'});
    } else {
      next();
    }
  }
});

export default router
