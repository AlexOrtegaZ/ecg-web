<template>
  <div class="card">
    <div class="header">
      <h4 class="title">{{title}}</h4>
    </div>
    <div class="content">
      <ul class="list-unstyled users">
        <li>
          <div class="row user-item" v-for="device in devices" v-bind:key="device._id">
            <div class="col-xs-1">
              <div class="icon">
                <i class="ti-tablet"></i>
              </div>
            </div>
            <div class="col-xs-8">
              <h4>{{device._id}}</h4>
              <span class="description">
                {{device.description}}, {{device.user}}, {{device.assignmentDate}}
              </span>
            </div>
  
            <div class="col-xs-3 text-right">
            <button class="btn btn-sm btn-warning btn-icon" v-on:click="removeDevice(device._id)">
                <i class="ti-close"></i>
              </button>
            <button class="btn btn-sm btn-success btn-icon" v-on:click="displayAndEditDeviceForm(device)">
                <i class="ti-pencil"></i>
              </button>
              <router-link class="btn btn-sm btn-success btn-icon" :to="{ path: 'device/' + device._id }">
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
    props: ['devices', 'removeDevice', 'displayAndEditDeviceForm'],
    data () {
      return {
        title: 'Dispositivos'
      }
    },
    methods: {
    }
  }

</script>
<style>
  .icon {
      width: 50px;
      height: 50px;
      font-size: 36px;
      text-align: center;
  }
</style>
