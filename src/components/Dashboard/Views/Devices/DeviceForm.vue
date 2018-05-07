<template>
  <div class="card">
    <div class="header">
      <h4 class="title">{{!edit ? 'Crear un nuevo dispositivo': 'Editando dispositivo'}} </h4>
    </div>
    <div class="content">
      <form>
        <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      label="Id"
                      placeholder="A12"
                      v-model="device._id">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text"
                      label="Id paciente"
                      placeholder="ASDASD"
                      v-model="device.user">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label="Descripcion"
                      placeholder="Dispositivo"
                      v-model="device.description">
            </fg-input>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="actionDevice">
            {{!edit ? 'Crear' : 'Editar'}} Dispositivo
          </button>
          <button class="btn btn-wd" @click.prevent="close">
            Cancelar
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
  import DeviceService from 'services/devices.service'

  export default {
    props: ['closeDeviceForm', 'addNewDevice', 'editDevice', 'device', 'edit'],
    data () {
      return {
      }
    },
    methods: {
      actionDevice () {
        const view = this;
        this.device.assignmentDate = new Date();
        if (!view.edit) {
          DeviceService.createDevice(this.device).then(function (response) {
            view.addNewDevice(response.data);
          });
        } else {
          DeviceService.editDevice(this.device).then(function (response) {
            view.editDevice(response.data);
          });
        }
        this.close();
      },
      close () {
        this.closeDeviceForm();
        this.clear();
      },
      clear () {
        this.device = {}
      }
    }
  }

</script>
<style>

</style>
