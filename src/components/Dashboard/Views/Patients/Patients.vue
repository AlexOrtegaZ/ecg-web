<template>
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <patients-list-card v-bind:patients="patients"></patients-list-card> 
      </div>
    </div>
</template>
<script>
  import PatientsListCard from './PatientsListCard.vue'
  import UsersService from 'services/users.service'
  export default {
    components: {
      PatientsListCard
    },
    data () {
      return {
        patients: []
      }
    },
    created: function () {
      // `this` points to the vm instance
      UsersService.getLinkedUsers().then((response) => {
        this.patients = response.data;
      })
    }
  }

</script>
<style>

</style>
