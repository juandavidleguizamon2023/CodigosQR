<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12 pa-6">
          <!-- Agregamos una imagen al encabezado del formulario -->
          <img
            src="@/static/lili&yoi.png"
            alt="Imagen de inicio de sesión"
            class="mb-4"
            width="500"
            height="100"
          ></img>

          <v-card-title class=" custom-card-title text-h5 text-center">Ingresa tus datos para redimir el bono</v-card-title>

          <v-form @submit.prevent="login">
            <v-text-field
              v-model="username"
              label="N°  identificacion"
              prepend-icon="mdi-account"
              type="text"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Codigo"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              required
            ></v-text-field>
  
            <v-btn type="submit" color="#e01783"  class=" custom-card-title"  @click="ValidarLogin"  block>
              Entrar
               <!-- <nuxt-link  :to="{ path: '/qrview', query:{username,password} }"  class="custom-link"> Entrar </nuxt-link>
               -->            
              </v-btn>
            <div>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  
import VueQrcode from "@chenfengyuan/vue-qrcode"
 import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {

    
    login() {
      // Aquí puedes implementar la lógica de inicio de sesión
      console.log('Iniciar sesión con:', this.username, this.password);
    },

    async ValidarLogin()
    {
          var banderaInicioSesion;
          var token2;
          var bandera2;
          var codigoQr;
          var primerNombre;
          var segundoNombre;


          const response = await axios.post('https://app.credipink.com/api/v1/login', {
          email: 'analista.sistemas@lilipink.com',
          password: '1023911054'
        })
        .then(function (response) {

        console.log(response);
        console.log(response.data.access_token);
        console.log(response.status);
        if(response.status==200)
        {
           banderaInicioSesion=1;
           token2=response.data.access_token;
        }
        })
        .catch(function (error) {
        console.log(error);
        });
  
      
        if(banderaInicioSesion==1)
        {
         

        const response = await axios.post('https://app.credipink.com/api/gift/gi/vo/auth',
        {
        documento: this.username,
        token: this.password
        },
        {
          headers: {
          'Authorization': `Bearer ${token2}`
          }
        }
        )
        .then(function (response) {
          console.log(response);
          bandera2=1;
          primerNombre=response.data.user_name;
          segundoNombre=response.data.user_last_name;
          codigoQr=response.data.token;

      
        })
        .catch(function (error) {
        alert('¡Inicio de sesión incorrecto! Por favor, verifica tus credenciales.');
        });
      
        }
        if(bandera2==1)
        {
          //this.$router.push('/qrview');
          this.$router.push({ path: '/qrview', query: { user_name: primerNombre ,user_last_name: segundoNombre ,codigo: codigoQr } });
        }

    },
  },
};
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
/* Agrega estilos personalizados según tus necesidades */
.custom-card-title {
  font-family: 'Montserrat', sans-serif; /* Reemplaza 'Tu-Fuente-Deseada' con la fuente que prefieras */
  font-weight: bold;
  /* Otros estilos que desees aplicar */
}
.custom-link {
  text-decoration: none; /* Elimina el subrayado predeterminado */
  color: #000000;

   /* Cambia el color del texto a tu preferencia */
  /* Agrega otros estilos según tus necesidades */
}

.custom-link:hover {
  /* Estilos cuando el enlace está en el estado de hover */
  text-decoration: none; /* Agrega un subrayado al pasar el ratón sobre el enlace si lo deseas */
}
</style>