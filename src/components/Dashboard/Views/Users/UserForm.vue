<template>
  <div class="card">
    <div class="header">
      <h4 class="title">{{!edit ? 'Crear un nuevo Usuario': 'Editando Usuario'}} </h4>
    </div>
    <div class="content">
      <form>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Nombre"
                      placeholder="Julian Alejandro"
                      v-model="user.name">
            </fg-input>
          </div>
          <div class="col-md-5">
            <fg-input type="text"
                      label="Apellido Paterno"
                      placeholder="Ortega"
                      v-model="user.lastName">
            </fg-input>
          </div>
          <div class="col-md-2">
            <fg-input type="text"
                      label="Genero"
                      placeholder="Masculino"
                      v-model="user.gender">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      label="Telefono"
                      placeholder="9999-999-999"
                      v-model="user.phone">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text"
                      label="RFC"
                      placeholder="ALSKDMFJDKSLAK"
                      :disable="edit"
                      v-model="user._id">
            </fg-input>
          </div>
        </div>
         <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label="Direccion"
                      placeholder="ej. Colosio, esquina con Quiroga, #123"
                      :disable="edit"
                      v-model="user.address">
            </fg-input>
          </div>
        </div>
         <div class="row">
          <div class="col-md-6">
            <fg-input type="email"
                      label="Email"
                      placeholder="ej. ecg@gmail.com"
                      :disable="edit"
                      v-model="user.username">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="password"
                      label="Contraseña"
                      :disable="edit"
                      v-model="user.password">
            </fg-input>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
                <label>Rol:</label>
                <select class="form-control border-input" v-model="user.role">
                    <option v-for="option in options" v-bind:value="option.id" v-bind:key="option.id">{{ option.name }}</option>
                </select>
            </div>
          </div>
          <div class="col-md-6">
            <fg-input type="date"
                      label="Fecha de nacimiento"
                      :disable="edit"
                      v-model="user.birthday">
            </fg-input>
          </div>
        </div>
        <div v-if="user.role !== 'patient'">
          <div class="row" >
            <div class="col-md-11">
              <div class="form-group">
                  <fg-input type="text"
                        label="Pacientes Ligados:"
                        placeholder="ej. pp1"
                        :disable="edit"
                        v-model="userToLinked"
                        >
                  </fg-input>
              </div>
            </div>
            <div class="col-md-1">
                <button class="btn btn-sm btn-warning btn-icon display-inline linked-users-plus" @click="addLinkedUser()">    
                  <i class="ti-plus"></i> 
                </button>
            </div>
          </div>
          <div class="row linked-users">
            <span  v-for="userId in user.linkedUsers" style="cursor: pointer" v-bind:key="userId" @click="removeLinkedUser(userId)">{{userId}},</span>
          </div>
        </div>
        
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="actionUser">
            {{!edit ? 'Crear' : 'Editar'}} Usuario
          </button>
          <button class="btn btn-wd" @click.prevent="close">
            Cancelar
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
  <!-- 
        role: { type: String, required: true},
        birthday: { type: Date } -->
</template>
<script>
import UserService from 'services/users.service';

export default {
  props: ['closeUserForm', 'addNewUser', 'editUser', 'user', 'edit'],
  data () {
    return {
      options: [
        { id: 'patient', name: 'Paciente' },
        { id: 'doctor', name: 'Doctor' },
        { id: 'monitor', name: 'Monitor' }
      ],
      userToLinked: ''
    };
  },
  methods: {
    actionUser () {
      const view = this;
      if (!view.edit) {
        UserService.createUser(this.user).then(function (response) {
          view.addNewUser(response.data);
        });
      } else {
        UserService.editUser(this.user).then(function (response) {
          view.editUser(response.data);
        });
      }
      this.close();
    },
    close () {
      this.closeUserForm();
      this.clear();
    },
    clear () {
      this.user = { linkedUsers: [] };
    },
    addLinkedUser () {
      if (this.userToLinked) {
        if (!this.user.linkedUsers) this.user.linkedUsers = [];
        this.user.linkedUsers.push(this.userToLinked);
        this.userToLinked = '';
      }
    },
    removeLinkedUser (userId) {
      this.user.linkedUsers = this.user.linkedUsers.filter(lu => lu !== userId);
    }
  }
};
</script>
<style>
.linked-users {
  margin: 0px 3px 20px !important;
  padding: 10px;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
}
.linked-users-plus {
  position: relative;
  top: 25px;
  width: 100%;
  font-size: 16px;
}

</style>
