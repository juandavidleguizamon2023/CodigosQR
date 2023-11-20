<template>
  
  <div class="outer-container">
      <div class="form-group">
                    <label> Ingresa tus datos para redimir el bono</label>
              </div>
      <div class="container">
  
            <div class="sidebar">
                
              <!-- <img class="logo3" id="img1" src="@/static/logo2remove.png" alt="Logo 3">-->
              

                <div style="display: flex; align-items: center; justify-content: center;">
                <button @click="switchVisibility" style="display: flex; align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" fill="black"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"/></svg>
                    <span style="margin-left: 8px;">Tu QR</span>                 
                </button>
                </div>

                <div style="display: flex; align-items: center; justify-content: center;">
                <button @click="switchVisibility" style="display: flex; align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512" fill="black" ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></svg>
                    <span style="margin-left: 8px;">Tu saldo</span>                 
                </button>
                </div>

                <div style="display: flex; align-items: center; justify-content: center;">
                <button @click="switchVisibility" style="display: flex; align-items: center;">
                  <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512" fill="black"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                    <span style="margin-left: 8px;">Salir</span>                 
                </button>
                </div>
              </div>
           
            <div class="form-container"> 
                <div class="tarjeta">
                  <div class="numero-tarjeta">CC. {{ $route.query.cedula }}</div>
                  <div class="nombre-titular">JUAN DAVID LEGUIZAMON L</div>
                  <div class="qr">
                    <qrcode v-if="qrvalor" :value="$route.query.clave" :options="{
                          color: {
                            dark: '#000000',
                            light: '##e01783',
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
      height: 50vh;
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
        background-color: #fff4fa;
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
      max-width: 140px;
      max-height: 70px;
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
       width: 200px;
       color: white;
       background-color: #00a89f;
       padding: 20px;
       border-radius: 10px; /* Bordes redondeados */
       place-items: center;
       justify-content: center; /* Centra los elementos verticalmente */
       align-items: center; /* Centra los elementos horizontalmente */
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
       background-color: #f1bad8;
   }
  
   .sidebar button {
  
        padding: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        width: 100%; /* Ocupa todo el ancho del contenedor */
        text-align: left; /* Alinea el texto a la izquierda */
        transition: background-color 0.3s;
        font-family: 'Montserrat', sans-serif;
        color: #000000; 
        background-color: #fff4fa;
        border-radius: 4px;
        place-items: center;
     
      }
  
      .sidebar button:hover {
        background-color: #f1bad8;
      }

     

  </style>
  
  
  