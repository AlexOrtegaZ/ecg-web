import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Notificaciones',
      icon: 'ti-bell',
      path: '/notifications'
    },
    {
      name: 'Mis Notificaciones',
      icon: 'ti-notepad',
      path: '/mynotifications'
    },
    {
      name: 'Historial',
      icon: 'ti-book',
      path: '/history'
    },
    {
      name: 'Pacientes',
      icon: 'ti-agenda',
      path: '/patients'
    },
    {
      name: 'Usuarios',
      icon: 'ti-user',
      path: '/users'
    },
    {
      name: 'Dispositivos',
      icon: 'ti-tablet',
      path: '/devices'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
