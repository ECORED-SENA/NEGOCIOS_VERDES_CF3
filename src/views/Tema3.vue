<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Herramientas para la promoción de Negocios verdes en Colombia

    Separador
    #t_3_1.titulo-segundo
      h2 3.1 Instrumentos económicos y tributarios

    Separador
    #t_3_2.titulo-segundo
      h2 3.2 Ferias para promocionar los Negocios verdes

    Separador
    #t_3_3.titulo-segundo
      h2 3.3 Ecodiseño

    Separador
    #t_3_4.titulo-segundo
      h2 3.4 Nodo de Negocios verdes

    Separador
    #t_3_5.titulo-segundo
      h2 3.5 Sello ambiental

    Separador
</template>

<script>
export default {
  name: 'Tema3',
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
