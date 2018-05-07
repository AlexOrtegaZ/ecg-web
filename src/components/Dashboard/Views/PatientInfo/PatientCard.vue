<template>
  <div class="card card-user">
    <div class="content">
      <div class="row">
        <div class="col-sm-6" style="padding-top: 20px" align="center">
          <img class="avatar border-white" src="static/img/faces/face-0.jpg" alt="...">
        </div>
        <div class="col-sm-6" style="padding-top: 40px">
          <h4 class="title">{{user.name + ' ' + user.lastName}}
            <br>
            <small>RFC: {{user._id}}</small>
            <br>
            <a href="#">
              <small>Telefono: {{user.phone}}</small>
            </a>
          </h4>
        </div>
        
      </div>
      <div class="row" align="center">
         <button class="btn btn-info btn-fill btn-wd" v-on:click="getMonitor()">
          Monitorear
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import UserService from 'services/users.service'

  export default {
    data () {
      return {
        user: {}
      }
    },
    created: function () {
      // `this` points to the vm instance
      UserService.getUser(this.$route.params.id).then((response) => {
        this.user = response.data
      })
    },
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      },
      getMonitor: function () {
        // 2be7febd-6e7f-4d58-b34d-282d39a2b246
        this.$socket.send('REQUEST:ECG:' + this.user.deviceId);
      }
    }
  }

</script>
<style>
  /* .card-user {
    position: fixed !important;
    width: 24%;
    max-height: 375px;
  } */
</style>
