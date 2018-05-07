<template>
  <div class="row alert-table" >
      <table>
          <tr>
              <th class="header">Variable</th>
              <th class="header">Valor</th>
          </tr>
          <tr>
              <td class="name">Caida</td>
              <td class="value">{{alert.caida ? 'No': 'Si'}}</td>              
          </tr>
          <tr>
              <td class="name">Postura</td>
              <td class="value">{{alert.postura}}</td>              
          </tr>
          <tr>
              <td class="name">Spo2</td>
              <td class="value">{{alert.spo2}}</td>              
          </tr>
          <tr>
              <td class="name">Presión Sistólica</td>
              <td class="value">{{alert.ps}}</td>              
          </tr>
          <tr>
              <td class="name">Presión Diastólica</td>
              <td class="value">{{alert.pa}}</td>              
          </tr>
          <tr>
              <td class="name">Frecuencia Cardíaca</td>
              <td class="value">{{alert.fc}}</td>              
          </tr>
          <tr>
              <td class="name">Promedio RR</td>
              <td class="value">{{alert.rr}}</td>              
          </tr>
          <tr>
              <td class="name">Promedio PR</td>
              <td class="value">{{alert.pr}}</td>              
          </tr>
          <tr>
              <td class="name">Promedio QRS</td>
              <td class="value">{{alert.qrs}}</td>              
          </tr>
          <tr>
              <td class="name">Promedio ST</td>
              <td class="value">{{alert.st}}</td>              
          </tr>
          <tr>
              <td class="name">Promedio QT</td>
              <td class="value">{{alert.qt}}</td>              
          </tr>
      </table>
  </div>
</template>
<script>
export default {
  props: ['alert']
}
</script>
<style>
    .alert-table {
        margin: 0;
        padding: 10px 30px 20px;
    }
    .alert-table table {
        width: 100%;
    }
    .alert-table .header {
        background: #e74c3c;
        color: white;
        padding: 10px !important;
        font-size: 15px;
    }
    .name, .value {
        padding: 15px 10px;
        font-size: 15px;
    }
    .name {
        font-weight: bold;
    }
    tr:nth-child(even){background-color: #f2f2f2}
</style>
