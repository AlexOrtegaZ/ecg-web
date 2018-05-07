<template>
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <patient-card />
        <history :alert="currentAlert"  />
      </div>
       <div class="col-lg-8 col-md-5 card alert-content" v-if="currentAlert._id">
          <div class="check-option" align="right">
            <a class="btn btn-sm btn-success btn-icon display-inline" @click="checkAlertControl()" v-if="alertControlId">
              Marcar como visto
            </a>
            <a class="btn btn-sm btn-info btn-icon display-inline" @click="sendAlertToDoctor()">
              Mandar a su doctor
            </a>
          </div>
          <h4 class="title" slot="title">Electrocardiograma</h4>
          <p class="subtitle" slot="subTitle">Fecha {{currentAlert.createdAt | formatDate}}</p>

          <chart :ecg="currentAlert.details.ecg" v-if="showChart" />

          <alert-information :alert="currentAlert.details" />
         
          <alert-table :alert="currentAlert.details" />

          <maps :alert="currentAlert.details" />
      </div>
    </div>
</template>
<script>
  import AlertsSerivice from 'services/alerts.service'
  import PatientCard from './PatientCard.vue'
  import History from './History.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import AlertInformation from './AlertInformation.vue';
  import AlertTable from './AlertTable.vue';
  import Maps from './Maps.vue';
  import Chart from './ChartECG.vue';

  export default {
    components: {
      ChartCard,
      PatientCard,
      History,
      AlertInformation,
      AlertTable,
      Maps,
      Chart
    },
    data () {
      return {
        currentAlert: {},
        patient: {},
        showChart: true,
        alertControlId: ''
      }
    },
    created: function () {
      // `this` points to the vm instance
      this.getAlert()
      this.alertControlId = this.$route.query.alertControl;
    },
    methods: {
      checkAlertControl: function () {
        if (this.alertControlId) {
          AlertsSerivice.checkAlertControl(this.alertControlId).then((res) => {
            this.$router.push({ path: '/notifications' })
          })
        }
      },
      sendAlertToDoctor: function () {
        console.log(this.currentAlert);
        AlertsSerivice.sendAlertToDoctor(this.alertControlId, this.currentAlert._id, this.currentAlert.user).then((res) => {
          this.$router.push({ path: '/notifications' })
        });
      },
      getAlert () {
        this.showChart = false
        if (this.$route.params.alertId) {
          AlertsSerivice.getAlert(this.$route.params.alertId).then((response) => {
            this.currentAlert = response.data
            this.showChart = true
          })
        }
      }
    },
    sockets: {
      onmessage: function ({ data }) {
        var { alert, user } = JSON.parse(data);
        if (alert && alert._id && alert.details.verde === -1 && user._id === this.user._id) {
          this.alert = alert;
          this.$router.push({ path: '/user/' + user._id + '/' + alert._id })
        }
      }
    },
    watch: {
      '$route': function (to, from) {
        this.getAlert();
      }
    }
  }

</script>
<style>
  .alert-content .title{
    text-align: center;
    padding: 23px;
    font-weight: bold !important;
  }
  .subtitle {
    text-align: center;
  }
</style>
