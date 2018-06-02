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
                        <div class="col-md-8 col-sm-10 col-sm-offset-2">
                            <form method="#" action="#">
                                <div class="card aboutus-container" data-background="color" data-color="blue">
                                    <div class="card-header">
                                        <h3 class="card-title">Acerca de CardioNuola</h3>
                                    </div>
                                    <div class="card-content">
                                        <div class="form-group">
                                            <p>Es un sistema de gestión de datos médicos y de contexto de pacientes 
                                                ambulatorios con anomalías cardiacas, permite el monitoreo de los pacientes 
                                                notificaciones de alertas en tiempo real a los familiares y a los médicos.</p>
                                        </div>
                                        <div class="form-group">
                                            <h3>Nosotros</h3>
                                            <ul>
                                                <li>Julian Alejandro Ortega Zepeda</li>
                                                <li>Jose Manuel Rodriguez Delgado</li>
                                                <li>Cesar Enrique Rose Gomez</li>
                                                <li>Beatriz Zamorano Castro</li>
                                            </ul>
                                        </div>
                                        <div class="card-footer text-center">
                                            <a class="login-link" href="#/login">Regresar a login</a>
                                        </div>
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
  background-color: #ffffff;
}
.foo img {
  width: 525px;
}
.aboutus-container {
    padding: 20px;
}
.login-link {
    font-size: 16px;
}
</style>
