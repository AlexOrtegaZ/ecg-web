<template>
    <div class="row">
      <div class="col-sm-12" v-if="showUserForm">
        <user-form :closeUserForm="closeUserForm" :addNewUser="addNewUser" :editUser="editUser" :user="currentUser" :edit="edit" />
      </div>
      <div class="col-lg-12 col-md-12">
        <button class="btn btn-info btn-fill btn-wd new-btn" @click.prevent="displayUserForm" v-if="!showUserForm">
          Crear Usuario
        </button>
        <users-list-card v-bind:users="users" :removeUser="removeUser" :displayAndEditUserForm="displayAndEditUserForm"> 

        </users-list-card>
      </div>
    </div>
</template>
<script>
  import UsersListCard from './UsersListCard.vue'
  import UserForm from './UserForm.vue'
  import UserService from 'services/users.service'
  export default {
    components: {
      UsersListCard,
      UserForm
    },
    data () {
      return {
        showUserForm: false,
        users: [],
        currentUser: { linkedUsers: [] },
        edit: false
      }
    },
    created: function () {
      // `this` points to the vm instance
      UserService.getAllUsers().then((response) => {
        this.users = response.data;
      })
    },
    methods: {
      displayUserForm () {
        this.showUserForm = true
      },
      displayAndEditUserForm (user) {
        this.currentUser = user;
        this.showUserForm = true;
        this.edit = true;
      },
      closeUserForm () {
        this.showUserForm = false;
        this.currentUser = {};
        this.edit = false;
      },
      addNewUser (newUser) {
        this.users.push(newUser);
      },
      editUser (user) {
        this.users = this.users.map(function (userItem) {
          return userItem._id !== user._id ? userItem : user;
        })
      },
      removeUser (userId) {
        const view = this;
        UserService.removeUser(userId).then(function (response) {
          view.users = view.users.filter(function (user) {
            return user._id !== userId
          })
        })
      }
    }
  }

</script>
<style>

</style>
