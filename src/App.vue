<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <router-view></router-view>
    <!--This sidebar appears only for screens smaller than 992px-->
    <side-bar type="navbar" :sidebar-links="$sidebar.sidebarLinks">
    </side-bar>
  </div>
</template>

<script>
  export default {
    sockets: {
      onmessage: function ({ data }) {
        if (Notification.permission !== 'granted') {
          Notification.requestPermission();
        } else {
          var { alert, user } = JSON.parse(data);
          if (alert && alert._id && alert.verde !== -1) {
            var alertType = this.getType(alert.details);
            var notification = new Notification('Alerta ' + (alertType === 'success' ? 'Verde' : (alertType === 'warning' ? 'Arritmia' : 'Roja')), {
              icon: 'static/img/heart.png',
              body: 'De ' + user.name + ' ' + user.lastName
            });
            var router = this.$router;
            notification.onclick = function () {
              router.push({ path: '/user/' + user._id + '/' + alert._id })
              window.focus();
              notification.close()
            };
          }
        }
      }
    },
    created: function () {
      // AUTH + doctorId
      // this.$socket.emit('AUTH:' + '');
      // this.$options.sockets.onmessage = (data) => this.popupNotification('Alerta Recibida')
      if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
      }

      if (Notification.permission !== 'granted') {
        Notification.requestPermission();
      }
      setTimeout(() => {
        this.$socket.send('AUTH:dd1');
      }, 1000)
    },
    methods: {
      getType: function ({ verde, roja, arritmia }) {
        let type = ''
        if (verde && !arritmia && !roja) {
          type = 'success'
        }
        if (!roja && arritmia) {
          type = 'warning'
        }
        if (roja) {
          type = 'danger'
        }
        return type
      }
    }
  }
</script>

<style lang="scss"></style>
