<template>
    <div class="row">
      <div class="col-sm-12" v-if="showDeviceForm">
        <device-form :closeDeviceForm="closeDeviceForm" :addNewDevice="addNewDevice" :editDevice="editDevice" :device="currentDevice" :edit="edit" />
      </div>
      <div class="col-lg-12 col-md-12">
        <button class="btn btn-info btn-fill btn-wd new-btn" @click.prevent="displayDeviceForm" v-if="!showDeviceForm">
          Crear Dispositivo
        </button>
        <devices-list-card v-bind:devices="devices" :removeDevice="removeDevice" :displayAndEditDeviceForm="displayAndEditDeviceForm"> 

        </devices-list-card>
      </div>
    </div>
</template>
<script>
  import DevicesListCard from './DevicesListCard.vue'
  import DeviceForm from './DeviceForm.vue'
  import DeviceService from 'services/devices.service'
  export default {
    components: {
      DevicesListCard,
      DeviceForm
    },
    data () {
      return {
        showDeviceForm: false,
        devices: [],
        currentDevice: {},
        edit: false
      }
    },
    created: function () {
      // `this` points to the vm instance
      DeviceService.getAllDevices().then((response) => {
        this.devices = response.data;
      })
    },
    methods: {
      displayDeviceForm () {
        this.showDeviceForm = true
      },
      displayAndEditDeviceForm (device) {
        this.currentDevice = device;
        this.showDeviceForm = true;
        this.edit = true;
      },
      closeDeviceForm () {
        this.showDeviceForm = false;
        this.currentDevice = {};
        this.edit = false;
      },
      addNewDevice (newDevice) {
        this.devices.push(newDevice);
      },
      editDevice (device) {
        this.devices = this.devices.map(function (deviceItem) {
          return deviceItem._id !== device._id ? deviceItem : device;
        })
      },
      removeDevice (deviceId) {
        const view = this;
        DeviceService.removeDevice(deviceId).then(function (response) {
          view.devices = view.devices.filter(function (device) {
            return device._id !== deviceId
          })
        })
      }
    }
  }

</script>
<style>

</style>
