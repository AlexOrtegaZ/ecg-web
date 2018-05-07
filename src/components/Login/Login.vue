<template>
<div>
    <div class="wrapper wrapper-full-page">
        <div class="full-page login-page" data-color="" data-image="static/img/hospital.jpg">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                            <form method="#" action="#">
                                <div class="card" data-background="color" data-color="blue">
                                    <div class="card-header">
                                        <h3 class="card-title">Inicio de sesión</h3>
                                    </div>
                                    <div class="card-content">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="email" placeholder="Ingrese su email" class="form-control input-no-border" v-model="email">
                                        </div>
                                        <div class="form-group">
                                            <label>Contraseña</label>
                                            <input type="password" placeholder="Ingrese su contraseña" class="form-control input-no-border" v-model="password">
                                        </div>
                                    </div>
                                    <div class="card-footer text-center">
                                        <button type="submit" class="btn btn-fill btn-wd " @click.prevent="login()">Iniciar Sesión</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <div class="full-page-background" style="background-image: url(static/img/hospital.jpg) "></div></div>
    </div>
</div>
</template>

<script>
import AuthService from '../../services/auth.service';

export default {
  data () {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function () {
      if (this.email && this.password) {
        AuthService.login(this.email, this.password, this.$router);
      }
    }
  }
};
</script>
