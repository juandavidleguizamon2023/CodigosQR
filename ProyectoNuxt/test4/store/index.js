export const state = () => ({
    datoCompartido: null,
  })
  
  export const mutations = {
    setDatoCompartido(state, dato) {
      state.datoCompartido = dato
    },
  }