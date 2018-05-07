<template>
    <div class="card">
        <div>
            <div class="header">
                <h4 class="title">Historial de alertas</h4> 
            </div> 
            <div class="content table-responsive table-full-width">
                <table class="table table-Striped">
                    <thead>
                        <th>Dirigido a</th>
                        <th>Checado por</th>
                        <th>Fecha de checado</th>
                        <th>Fecha de creacion</th>
                    </thead> 
                    <tbody>
                        <tr v-for="alert in alerts" v-bind:key="alert._id">
                            <td>{{alert.user && alert.user !== -1 ? alert.user.name : 'Todos'}}</td>
                            <td>{{alert.checkedBy ? alert.checkedBy.name + ' ' + alert.checkedBy.lastName: 'Sin checar'}}</td>														
                            <td>{{alert.checkDate | formatDate}}</td>
                            <td>{{alert.createdAt | formatDate}}</td>														
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import AlertService from 'services/alerts.service';
export default {
  data () {
    return {
      alerts: [],
      title: 'Historial'
    };
  },
  created: function () {
    // `this` points to the vm instance
    AlertService.alertControlHistory().then(response => {
      this.alerts = response.data.reverse();
    });
  }
};
</script>
