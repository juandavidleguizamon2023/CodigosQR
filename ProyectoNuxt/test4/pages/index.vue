<template>
<div class="outer-container">
  <div class="form-container">
  <div class="logo-container">
    <img src="@/static/logolili&yoi.png" alt="Logo" class="logo" />
  </div>

  <div class="form-group">
      <label> Ingresa tus datos para redimir el bono</label>
  </div>
    <div class="form-group">   
      <input type="text" v-model="cedula" id="cedula"   placeholder="N° de identificación">
    </div>
    <div class="form-group">
      <div class="password-wrapper">
                    <input type="password" v-model="clave" id="password-field" class="form-control"  placeholder="Codigo" />
                    <div class="toggle-button" @click="switchVisibility">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="eye-icon">
                          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                          <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                      </svg>
                  </div>
      
      </div>
    </div>

    <div class="form-group">
      <nuxt-link :to="{ path: '/qrview', query:{cedula,clave} }" >
      <span> Entrar</span>
      </nuxt-link>
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
      qrvalor: 2023,
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
    switchVisibility() {

      const eyeIcons = {
      open: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="eye-icon"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" /></svg>',
      closed: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="eye-icon"><path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" /><path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" /><path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" /></svg>'
      };

      const passwordField = document.getElementById('password-field');
      const toggleButton = document.querySelector(".toggle-button");

      if (passwordField.getAttribute('type') === 'password') 
      {
        toggleButton.classList.toggle("open");
        const isEyeOpen = toggleButton.classList.contains("open");
        toggleButton.innerHTML = isEyeOpen ? eyeIcons.closed : eyeIcons.open;
        passwordField.type = isEyeOpen ? "text" : "text";
   
      }
      else
      {

        toggleButton.classList.toggle("closed");
        const isEyeClosed = toggleButton.classList.contains("closed");
        toggleButton.innerHTML = isEyeClosed ? eyeIcons.closed : eyeIcons.open;
        passwordField.type = isEyeClosed ? "text" : "password";
      }

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
    place-items: center;
  }

  .form-container {
    display: grid;
    place-items: center;
    gap: 10px;
  }
  
.logo-container {
    text-align: center;
  }
  
.logo {
    width: 500px; 
    height: 110px; 
  }

.form-group {
  
    margin-bottom: 10px;
    label {
      font-family: 'Montserrat', sans-serif;
      color: #000000; 
    }

    span{
      font-family: 'Montserrat', sans-serif;
      color: #ffffff; 
      background-color: #e01783;
      border-radius: 4px;
      padding: 8px;
      width: 300px; 
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

</style>