<template>
  <div class="card card-history">
    <div class="header">
      <h4 class="title">{{title}}</h4>
    </div>
    <div class="content">
      <ul class="list-unstyled team-members">
        <li>
          <div class="row" v-for="alert in alerts" v-bind:key="alert._id">
            <div class="col-xs-3">
              <div class="">
                <div class="icon-md text-center" :class="`icon-${getType(alert.details)}`"><i class="ti-pulse"></i></div>
              </div>
            </div>
            <div class="col-xs-6">
              <h4>Alerta ECG</h4> 
              <span>
                <i class="ti-calendar"></i> {{alert.createdAt | formatDate}}
              </span>
            </div>
  
            <div class="col-xs-3 text-right">
              <router-link class="btn btn-sm btn-icon" :class="`btn-${alert.type}`" :to="{ path: '/patient/' + $route.params.id + '/' + alert._id }">
                <i class="fa fa-chevron-right"></i>
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import UserService from 'services/users.service'

  export default {
    data () {
      return {
        alerts: [],
        title: 'Historial'
      }
    },
    created: function () {
      // `this` points to the vm instance
      UserService.getAlertsOfTheUser(this.$route.params.id).then((response) => {
        this.alerts = response.data.reverse()
      })
    },
    methods: {
      getType: function ({ verde, roja, arritmia }) {
        if (verde && !arritmia && !roja) {
          return 'success'
        }
        if (!roja && arritmia) {
          return 'warning'
        }
        if (roja) {
          return 'danger'
        }
        return ''
      }
    }
  }

</script>
<style>
  /* .card-history {
    position: fixed !important;
    top: 330px;
    width: 24%;
  } */
  h4 {
    margin: 0px !important;
  }
  .icon-md {
    font-size: 3em !important;
  }
</style>
