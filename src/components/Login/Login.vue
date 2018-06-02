<template>
<div>
    <div class="wrapper wrapper-full-page">
        <div class="header row">
            <div class="col-xs-6">
                <img src="static/img/CardioNubola5.png" alt="">
            </div>
            <div class="col-xs-6">
                
            </div>
        </div>
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
                                     <div class="card-footer text-center">
                                        <a class="login-link" href="#/aboutus">Mas información click aqui</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <div class="full-page-background" style="background-image: url(static/img/hospital.jpg) "></div>
        </div>

        <div class="foo row">
            <img src="static/img/LogoInferior.png" alt="">
        </div>
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
<style>
    .header {
        position: relative;
        z-index: 4;
        margin: 0 !important;
    }
    .header img {
        width: 200px;
        margin: 20px;
    }
    .foo {
        text-align: center;
        z-index: 5;
        background-color: white;
        position: relative;
        margin: 0 !important;
        height: 140px;
        border-radius: 6px 6px 0 0;
        box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
        background-color: #FFFFFF;
    }
    .foo img {
        width: 525px;
    }
    .login-link {
        font-size: 16px;
    }
</style>
