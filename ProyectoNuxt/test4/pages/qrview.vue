<template>
  
<div class="outer-container">
    <div class="container">

          <div class="sidebar">
              
              <img class="logo3" id="img1" src="@/static/logolili&yoi.png" alt="Logo 3">
              <button @click="switchVisibility"> <span>📷</span> QR</button>
              <button @click="switchVisibility"> Tu Saldo</button>
              <button @click="switchVisibility"> Salir</button>
            </div>
         
          <div class="form-container"> 
              <div class="tarjeta">
                <div class="numero-tarjeta">CC. {{ $route.query.cedula }}</div>
                <div class="nombre-titular">JUAN DAVID LEGUIZAMON L</div>
                <div class="qr">
                  <qrcode v-if="qrvalor" :value="$route.query.clave" :options="{
                        color: {
                          dark: '#ffffff',
                          light: '#e01783',
                        },
                        width: 150,
                      }" ></qrcode>
                </div>
                <div class="logotarjeta">
                <img class="logo2" id="img1" src="@/static/logolilipink.png" alt="Logo 2">
              </div>
             </div>
              <div class="form-group">
                  <label> Ingresa tus datos para redimir el bono</label>
            </div>
          </div>
    </div>
</div>

</template>

<script>
import VueQrcode from "@chenfengyuan/vue-qrcode"
 import axios from 'axios';
export default {
  data() {
    return {
      cedula: '',
      clave: '',
      qrvalor:2023,
      infoQR: '',
      
    };
  },
  methods: {

    generarQR() {

      var  img1 = document.getElementById('img1');
      //// //#e01783;  este el codigo de #00a89f codigo 
      // Utilizar el valor de cedula para generar el código QR
      this.qrvalor = `${this.cedula} - ${this.clave}`;
      this.infoQR = 'Código QR generado con éxito';

      },  
    
    },
  
  props:{},
  computed:{},
  components:{
    qrcode: VueQrcode,
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

  .outer-container {
    border: 1px solid #ddd; /* Borde del contenedor exterior */
    border-radius: 10px; /* Bordes redondeados */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra */
    padding: 20px; /* Espaciado interno */
  }

  .container {
    display: flex;
    height: 80vh;
    gap: 10px;
  }
  
.form-group {
  
    margin-bottom: 10px;
    label {
      font-family: 'Montserrat', sans-serif;
      color: #000000; 
    }
  
    input{
      font-family: 'Montserrat', sans-serif;
      color: #000000; 
      border: 1px solid #ccc; /* Estilo de borde predeterminado */
      border-radius: 4px;
      padding: 8px;
      transition: border-color 0.3s ease-in-out;
      width: 300px; 
      
      &:focus,
      &:not(:focus){
      border: 1px solid #e01783;
    }
    }
    button{
      font-family: 'Montserrat', sans-serif;
      color: #ffffff; 
      background-color: #e01783;
      border-radius: 4px;
      padding: 8px;
      width: 300px; 
     }
    img{
      font-family: 'Montserrat', sans-serif;
      color: #000000; 
     } 
     label {
      font-family: 'Montserrat', sans-serif;
      color: #000000; 

    }


  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #fFfFfF;
  }

  .tarjeta {
    width: 500px;
    height: 300px;
    background-color: #e01783;  
    border-radius: 15px;
    padding: 20px;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    
  }

  .numero-tarjeta {
    font-size: 18px;
    margin-bottom: 15px;
  }

  .nombre-titular {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .fecha-expiracion {
    font-size: 14px;
  }
  .logo2 {
    position:relative;
    max-width: 200px;
    max-height: 80px;
    left: 300px;
    bottom: 10px;
    left: 280px;
  }

  .logo3 {
    position:relative;
    max-width: 220px;
    max-height: 100px;
  }

  .logotarjeta{
   place-items: center;
  }
  .qr{
    position:relative;
    left: 150px;
  }
  .mostrar {
    display: block !important;;
}

.ocultar {
    display: none !important;;
}
.resaltado {
  border-color: #e01783; /* Cambia el color del borde al enfocar */
}
.eye-icon {
  width: 20px;
  height: 20px;
}

.toggle-button {
  display: inline-flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: unset;
  right: 12px;
  cursor: pointer;
}
.password-wrapper {
  position: relative;
}

.sidebar {
     width: 250px;
     background-color: #00a89f;
     color: white;
     padding: 20px;
     border-radius: 10px; /* Bordes redondeados */
 }

 .sidebar a {
     color: white;
     text-decoration: none;
     display: block;
     padding: 10px;
     margin-bottom: 10px;
     transition: background-color 0.3s;
     gap: 10px;
 }

 .sidebar a:hover {
     background-color: #555;
 }

 .sidebar button {

      padding: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      width: 100%; /* Ocupa todo el ancho del contenedor */
      text-align: left; /* Alinea el texto a la izquierda */
      transition: background-color 0.3s;
      font-family: 'Montserrat', sans-serif;
      color: #ffffff; 
      background-color: #00a89f;
      border-radius: 4px;
   
    }

    .sidebar button:hover {
      background-color: #555;
    }

</style>


