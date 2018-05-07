<template>
  <div class="card">
    <div class="header">
      <h4 class="title">{{title}}</h4>
    </div>
    <div class="content">
      <ul class="list-unstyled users">
        <li>
          <div class="row user-item" v-for="user in users" v-bind:key="user._id">
            <div class="col-xs-1">
              <div class="avatar">
                <img :src="user.image || 'static/img/faces/face-0.jpg'" alt="Circle Image" class="img-circle img-no-padding img-responsive">
              </div>
            </div>
            <div class="col-xs-8">
              <h4>{{user.name + ' ' + user.lastName}}</h4>
              <span class="description">
                {{user._id}}, {{user.phone}}, {{user.role == 'patient' ? 'Paciente' : (user.role == 'doctor' ? 'Doctor' : 'Monitor') }}
              </span>
            </div>
  
            <div class="col-xs-3 text-right">

            <button class="btn btn-sm btn-warning btn-icon" v-on:click="removeUser(user._id)">
                <i class="ti-close"></i>
              </button>
            <button class="btn btn-sm btn-success btn-icon" v-on:click="displayAndEditUserForm(user)">
                <i class="ti-pencil"></i>
              </button>
              <router-link class="btn btn-sm btn-success btn-icon" :to="{ path: 'patient/' + user._id }" v-if="user.role == 'patient'">
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
    props: ['users', 'removeUser', 'displayAndEditUserForm'],
    data () {
      return {
        title: 'Usuarios'
      }
    },
    methods: {
    }
  }

</script>
<style>
  
</style>
