<template>
  <div class="row alert-information" v-if="alert">
       <div class="row alert-content green" v-if="alert.verde && alert.verde !== -1">
            <h4>Alerta Verde</h4>
            <ul>
                <li v-if="checkByte(alert.verde, 1)">Hipertensión</li>
                <li v-if="checkByte(alert.verde, 2)">Hipotensión</li>
                <li v-if="checkByte(alert.verde, 4)">Hipoxia</li>
                <li v-if="checkByte(alert.verde, 8)">Caída</li>
                <li v-if="checkByte(alert.verde, 16)">Anomalia Cardiaca</li>
            </ul>
        </div>
        <div class="row alert-content arrhythmia" v-if="alert.arritmia && alert.arritmia !== -1">
            <h4>Alerta de Arritmia</h4>
            <ul>
                <li v-if="checkByte(alert.arritmia, 1)">Bloqueo Rama Izquierda</li>
                <li v-if="checkByte(alert.arritmia, 2)">Bloqueo Rama Derecha</li>
                <li v-if="checkByte(alert.arritmia, 4)">Bloqueo APB</li>
                <li v-if="checkByte(alert.arritmia, 8)">Bradicardia</li>
                <li v-if="checkByte(alert.arritmia, 16)">Bradicardia Extrema</li>
                <li v-if="checkByte(alert.arritmia, 32)">Taquicardia Ventricular</li>
                <li v-if="checkByte(alert.arritmia, 64)">Taquicardia Extrema</li>
                <li v-if="checkByte(alert.arritmia, 128)">Taquicardia Auricular</li>
                <li v-if="checkByte(alert.arritmia, 256)">AVNRT (Taquicardia de reentrada nódulo AV)</li>
                <li v-if="checkByte(alert.arritmia, 512)">QTc Prolongado</li>
            </ul>
        </div>
        <div class="row alert-content red" v-if="alert.roja && alert.roja !== -1">
            <h4>Alerta Roja</h4>
            <ul>
                <li v-if="checkByte(alert.roja, 1)">Infarto</li>
                <li v-if="checkByte(alert.roja, 2)">Asistolia</li>
                <li v-if="checkByte(alert.roja, 4)">Fibrilación Auricular</li>
                <li v-if="checkByte(alert.roja, 8)">Fibrilación Ventricular</li>
            </ul>
        </div>
  </div>
</template>
<script>
export default {
  props: ['alert'],
  methods: {
    checkByte (num, byte) {
      return (num & byte) === byte;
    }
  }
}
</script>
<style>
    .alert-content {
        margin: 0 !important;
        padding: 20px 25px;
        border-top: #EEEEEE solid 1px;
        border-bottom: #EEEEEE solid 1px;
    }
    .alert-content li {
        font-size: 18px;
    }
    .green h4{
       color: #2ecc71;
    }
    .arrhythmia h4{
       color: #f1c40f;
    }
    .red h4{
       color: #e74c3c;
    }
</style>
