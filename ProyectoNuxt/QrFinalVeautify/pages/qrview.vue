<template>
  <v-app style="background-color: #ffffff; color: #333;">
    <v-app-bar app color="#ffff" >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
       <!-- Logotipo a la izquierda -->
       <img
        src="@/static/lili&yoi.png"
        alt="Logo"
        class="mb-4"
        style="max-height: 50px; /* ajusta según tus necesidades */"
      ></img>
      <v-spacer></v-spacer>
      <v-toolbar-title  class="custom-drawer" right>{{fechaYHora}}</v-toolbar-title>
    </v-app-bar>
    <!-- Contenido principal -->

    <v-main>
      <v-container fluid>

        <v-row>
        <!-- Primera tarjeta (Tarjeta de crédito virtual) -->
        <v-col>
            <v-card class="pa-4" elevation="12" rounded color="#e0a1c2" style="width: 550px; border-radius: 50px; height: 400px;">
            <v-row>
                <!-- Detalles de la tarjeta -->
                <v-col>
                <div class="numero-tarjeta">{{ $route.query.user_name }}</div>
                <div class="nombre-titular">{{ $route.query.user_last_name }}</div>
                <div class="fecha-expiracion">VENCE 12/23</div>
                </v-col>
            </v-row>
            <!-- Código QR centrado -->
            <v-row class="text-center mb-0 mr-0">
                <v-col>
                <qrcode
                    v-if="qrvalor"
                    :value="qrvalor"
                    :options="{
                    color: {
                        dark: '#ffffff',
                        light: '#e0a1c2',
                    },
                    width: 200,
                    }"
                ></qrcode>
                </v-col>
            </v-row>
            <!-- Logo de la tarjeta en la esquina inferior derecha -->
            <v-row class="text-center mb-0">
                <v-col class="text-right">
                <img
                    src="@/static/logolilipink.png"
                    alt="Logo de la Tarjeta"
                    class="mb-4"
                ></img>
                </v-col>
            </v-row>
            </v-card>
        </v-col>
   
        <!-- Segunda tarjeta (Información adicional) -->
        <v-col>
            <div v-if="!mostrarTarjeta2">
              <!-- ... -->
            </div>
            <div v-if="mostrarTarjeta2">
                <v-card class="pa-4" elevation="12" rounded color="#ffffff" style="width: 550px; border-radius: 50px; height: 400px;">
                <!-- Contenido de la segunda tarjeta -->


                <div>
                <v-icon class="mr-2">mdi-emoticon-excited-outline</v-icon> 
                <div class="custom-drawer" > Saldo: ${{ progreso }} / ${{ total }}</div>
                <v-progress-linear :value="calcularPorcentaje()" height="10" color="green"></v-progress-linear>
                </div>

                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                    <tr>
                    <th>Movimento</th>
                    <th>Valor</th>
                    <th>Fecha</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="fila in filas" :key="fila.id">
                    <td>{{ fila.columna1 }}</td>
                    <td>{{ fila.columna2 }}</td>
                    <td>{{ fila.columna3 }}</td>
                    </tr>
                    </tbody>
                    </template>
                </v-simple-table>

            </v-card>
        </div>
        </v-col>
        </v-row>

      </v-container>
    </v-main>

        <!-- Barra de navegación lateral -->
        <v-navigation-drawer app v-model="drawer" class="custom-drawer" left>
      <v-list expand>
        <v-list-item v-for="item in menuItems" :key="item.title" @click="seleccionarItem(item)" >
          <v-list-item-icon>
            <v-icon class="custom-icon">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-if="drawer" class="custom-drawer-item">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </v-app>
  
</template>
  
  <script>


import VueQrcode from "@chenfengyuan/vue-qrcode"
import axios from 'axios';


  export default {
    data() {
      return {
        cedula: '',
        clave: '',
        qrvalor:this.$route.query.codigo,
        infoQR: '',
        drawer: false,
        fechaYHora: '',
        progreso: 200,
        total: 500,
        menuItems: [
        { title: 'Tu  QR', icon: 'mdi-qrcode' },
        { title: 'Tu Saldo', icon: 'mdi-cash' },
        { title: 'Salir', icon: 'mdi-exit-to-app' },
       ],
       filas: [
        { id: 1, columna1: 'Valor1', columna2: 'Valor2', columna3: 'Valor3' },
        { id: 2, columna1: 'Valor4', columna2: 'Valor5', columna3: 'Valor6' },
        { id: 3, columna1: 'Valor7', columna2: 'Valor8', columna3: 'Valor9' },
      ],
      mostrarTarjeta2: false,
        
      };
    },
    methods: {
  
        generarQR() {
        },  
        
        actualizarFechaYHora() {
                const fecha = new Date();
                const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
                const opcionesHora = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

                const fechaFormateada = fecha.toLocaleDateString(undefined, opcionesFecha);
                const horaFormateada = fecha.toLocaleTimeString(undefined, opcionesHora);

                this.fechaYHora = `${fechaFormateada} - ${horaFormateada}`;
        },

        calcularPorcentaje() {
        return (this.progreso / this.total) * 100;
        },
        seleccionarItem(item) {


            if (item.title === 'Tu  QR') {
            // Lógica para la Tarjeta 1
            } 
            if (item.title === 'Tu Saldo') {
            // Lógica para la Tarjeta 2
            console.log('Mostrar Saldo');
            this.mostrarTarjeta2 = true;
            }
            if (item.title === 'Salir') {
             this.$router.push('/index');
            } 



        },
      },
      created() {
        // Actualizar la hora cada segundo
        setInterval(() => {
        this.actualizarFechaYHora();
        }, 1000);
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

.numero-tarjeta,
.nombre-titular,
.fecha-expiracion {
  font-size: 16px;
  font-weight: bold;
}

.logo-tarjeta {
  max-width: 100px;
  max-height: 50px;
}

.custom-drawer {
  font-family: 'Montserrat', sans-serif; /* Cambia 'TuFuenteEspecifica' por la fuente que desees usar */
  font-size: 16px; /* Ajusta el tamaño del texto según tus necesidades */
  font-weight: bold;
}
.custom-drawer-item {
  font-size: 16px; /* Ajusta el tamaño del texto de los elementos de la lista según tus necesidades */
  font-weight: bold;
}

.numero-tarjeta{
    font-family: 'Montserrat', sans-serif; /* Cambia 'TuFuenteEspecifica' por la fuente que desees usar */
  font-size: 16px; /* Ajusta el tamaño del texto según tus necesidades */
  font-weight: bold;
  color: white;
}
.nombre-titular{
    font-family: 'Montserrat', sans-serif; /* Cambia 'TuFuenteEspecifica' por la fuente que desees usar */
  font-size: 16px; /* Ajusta el tamaño del texto según tus necesidades */
  font-weight: bold;
  color: white;
}
.fecha-expiracion{
    font-family: 'Montserrat', sans-serif; /* Cambia 'TuFuenteEspecifica' por la fuente que desees usar */
  font-size: 16px; /* Ajusta el tamaño del texto según tus necesidades */
  font-weight: bold;
  color: white;
}
</style>