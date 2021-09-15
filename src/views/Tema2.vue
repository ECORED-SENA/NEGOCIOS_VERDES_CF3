<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Programas Regionales de Negocios Verdes (PRNV)
  
    Separador
    #t_2_1.titulo-segundo
      h2 2.1 Programa Regional de Negocios Verdes - Región Pacífico

    Separador
    #t_2_2.titulo-segundo
      h2 2.2 Programa Regional de Negocios Verdes – Región Caribe

    Separador
    #t_2_3.titulo-segundo
      h2 2.3 Programa Regional de Negocios Verdes – Región Amazonía

    Separador
    #t_2_4.titulo-segundo
      h2 2.4 Programa Regional de Negocios Verdes – Región Orinoquía

    Separador
    #t_2_5.titulo-segundo
      h2 2.5 Programa Regional de Negocios Verdes – Región Central

    Separador
    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
