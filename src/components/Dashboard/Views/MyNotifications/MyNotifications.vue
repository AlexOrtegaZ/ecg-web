<template>
  <div>
    <!--Alert cards-->
    <div class="row">
      <!-- :to="{ path: 'patient/' + alert._id_P }" -->
      <div class="col-lg-4 col-sm-6" v-for="alertControl in alertControls" style="cursor: pointer" v-bind:key="alertControl._id">
        <alerts-card>
          <div class="icon-big text-center" :class="`icon-${getType(alertControl.alert.details)}`" slot="header">
            <i class="ti-pulse"></i>
          </div>
          <div class="numbers" slot="content">
            <h6>{{alertControl.alert.user.name}} {{alertControl.alert.user.lastName}}</h6>
            <!-- {{alert.FrecuenciaCardiaca}} -->
          </div>
          <div class="alert" slot="footer">
            <div class="row">
              <div class="col-sm-6">
                <span class="date row"><i class="ti-calendar"></i> {{alertControl.alert.createdAt | formatDate}}</span> 
                <span class="date row"><i class="ti-time"></i> {{alertControl.alert.createdAt | formatTime}}</span>
              </div>
              <div class="col-sm-6" align="center">
                <a class="btn btn-sm btn-success btn-icon display-inline" @click="checkAlertControl(alertControl._id)">
                  <!-- <i class="ti-check"></i>  -->
                  Marcar como visto
                </a>
                <router-link class="btn btn-sm btn-primary btn-icon display-inline" :to="{ path: '/patient/' + alertControl.alert.user._id + '/' + alertControl.alert._id, query: { alertControl: alertControl._id }}">
                  <!-- <i class="ti-angle-right"></i> -->
                  Ver Detalles
                </router-link>
              </div>
              
            </div>
            
          </div>
        </alerts-card>
      </div>
    </div>
    <div class="row with-out-notifications" v-if="alertControls.length === 0">
        <i class="fa fa-quote-right"></i>
        <h4>Sin notificaciones por el momento :D</h4>
    </div>
  </div>
</template>
<script>
  import AlertsCard from 'components/UIComponents/Cards/AlertsCard.vue'
  import AlertService from 'services/alerts.service'
  import AuthService from 'services/auth.service'
  // var json = require('./data/232a.json');

  // json.patientId = 'ASDASDFN'
  // json.name = 'Alejandro'
  // json.ApellidoP = 'Ortega'
  // json.createdAt = new Date()

  export default {
    components: {
      AlertsCard
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        alertControls: []
      }
    },
    sockets: {
      onmessage: function ({ data }) {
        var { alertControl } = JSON.parse(data);
        if (alertControl && alertControl._id && alertControl.user === AuthService.user._id) {
          this.alertControls.unshift(alertControl);
        }
      }
    },
    created: function () {
      // `this` points to the vm instance
      AlertService.getMyAlertControls().then((response) => {
        this.alertControls = response.data.reverse();
      })
    },
    methods: {
      checkAlertControl: function (alertControlId) {
        AlertService.checkAlertControl(alertControlId).then((res) => {
          this.alertControls = this.alertControls.filter(ac => ac._id !== alertControlId);
        })
      },
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
<style>
  .display-inline {
    display: inline !important;
  }
  .date {
    padding: 0 !important;
    margin: 0 !important;
  }
  h6 {
    font-size: 20px !important;
    padding-top: 15px;
    padding-right: 16px;
  }
  .with-out-notifications {
    text-align: center;
    font-size: 17px;
    margin-top: 15%;
    color: #999;
  }
  .with-out-notifications i{
    font-size: 100px;
    position: relative;
    left: -55px;
    color: #999;
  }
</style>
