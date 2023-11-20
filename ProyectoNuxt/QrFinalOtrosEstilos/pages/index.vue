<template>
  
  <v-container class="login-container">
    <v-card class="login-card">
      <v-card-title class="text-h5">Inicio de Sesión</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field v-model="username" label="Usuario" required></v-text-field>
          <v-text-field v-model="password" label="Contraseña" type="password" required></v-text-field>
          <v-btn type="submit" color="primary">Iniciar Sesión</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
  
</template>


<script>
export default {
 
}
</script>

<style scoped>
/* Estilo específico para la etiqueta en el formulario */
.custom-label {
  font-weight: bold;
  color: #e01783;
}

/* Estilo global para resaltar los campos */
.resaltado {
  border-color: #e01783 !important;
}

/* Estilo para el botón de mostrar/ocultar contraseña */
.toggle-button {
  cursor: pointer;
  margin-left: -30px;
}
</style>




