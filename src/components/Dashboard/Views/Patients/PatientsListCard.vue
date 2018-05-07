<template>
  <div class="card">
    <div class="header">
      <h4 class="title">{{title}}</h4>
    </div>
    <div class="content">
      <ul class="list-unstyled patients">
        <li>
          <div class="row patient-item" v-for="patient in patients" v-bind:key="patient._id">
            <div class="col-xs-1">
              <div class="avatar">
                <img :src="patient.image || 'static/img/faces/face-0.jpg'" alt="Circle Image" class="img-circle img-no-padding img-responsive">
              </div>
            </div>
            <div class="col-xs-8">
              <h4>{{patient.name + ' ' + patient.lastName}}</h4>
              <span class="description">
                {{patient._id}}, {{patient.phone}}, {{patient.role == 'patient' ? 'Paciente' : (patient.role == 'doctor' ? 'Doctor' : 'Monitor') }}
              </span>
            </div>
  
            <div class="col-xs-3 text-right">
              <router-link class="btn btn-sm btn-success btn-icon" :to="{ path: 'patient/' + patient._id }" v-if="patient.role == 'patient'">
                <i class="ti-angle-right"></i>
              </router-link>
              
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['patients'],
    data () {
      return {
        title: 'Pacientes'
      }
    },
    methods: {
    }
  }

</script>
<style>
  
</style>
