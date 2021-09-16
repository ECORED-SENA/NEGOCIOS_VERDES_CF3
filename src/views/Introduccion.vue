<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        figure.mb-5
          img(src='@/assets/curso/img01.svg')   

    p.mb-4 Colombia se caracteriza por ser un país que cuenta con una gran variedad de recursos naturales, los cuales se han convertido en la base de la economía, desarrollo social y cultural de la nación y a su vez, en el patrimonio que se pretende heredar a presentes y futuras generaciones. 
    p.mb-4 El desarrollo económico de nuestro país se basa en el aprovechamiento de estos recursos; realizando actividades económicas que se centran en la producción de petróleo y carbón, la extracción de piedras preciosas, la producción agrícola y ganadera. Del mismo modo, las fuentes hídricas, las selvas, paisajes, la flora y la fauna, es decir, la biodiversidad colombiana. 
    p.mb-4 No obstante, las principales actividades económicas se realizan basadas en el uso, en ocasiones exagerado y desmedido de los mismos, sin crear estrategias en las cuales se puedan subsanar los daños causados al medio ambiente para el desarrollo en otros aspectos. 
    p.mb-5 En consecuencia, Colombia y las demás economías mundiales, han enfocados sus esfuerzos por implementar modelos de crecimiento económico innovadores y diferentes a los actuales, en donde el desarrollo económico no sea sinónimo de deterioro ambiental y en el cual resalten los procesos de producción eficientes, la reducción del consumo y daños ocasionados a los recursos naturales y desarrollo de bienes y servicios de alta calidad, novedosos y, sobre todo, con mayor conciencia ambiental.  

    .cajon.color-acento-contenido.p-4.mb-4
      p.mb-0 Adicionalmente, se requiere de un cambio de paradigma de una producción lineal, hacia una producción circular, que tome en cuenta el enfoque de ciclo de vida del producto, en el que se apliquen criterios ambientales, económicos y sociales a lo largo del proceso productivo. En conclusión, para el sector productivo, este cambio de paradigma consiste en incorporar conceptos y tecnologías que impulsen prácticas más sostenibles, introducir innovaciones en los procesos y sistemas de producción o extracción de recursos para producir bienes y servicios más limpios, invertir en biotecnología y bioprospección para desarrollar productos a partir de la biodiversidad colombiana y aplicar esquemas de negocios inclusivos que promuevan la distribución justa y equitativa de los beneficios a través del fortalecimiento de las cadenas de valor (Ministerio de Ambiente y Desarrollo Sostenible, 2014).

    Separador
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
