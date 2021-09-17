<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Herramientas para la promoción de Negocios verdes en Colombia

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-out")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Anteriormente se han estudiado los criterios para tener en cuenta cuando se desea validar si un bien o servicio cumple con cada uno de los requisitos para ser catalogados como Negocios verdes y como negocios sostenibles. Del mismo modo, se han identificado las regiones, sus potencialidades y características. Por ende, es momento de identificar cuáles son los procesos a seguir para lograr innovar y desarrollar bienes y servicios que no solo proporcionen beneficios económicos particulares, sino que también permitan el cuidado y conservación del medio ambiente. 

    p.mb-0 En primer lugar, se relacionan los instrumentos económicos y tributarios en materia ambiental aplicables a los Negocios verdes en Colombia; en segundo lugar, se hace un compendio de las principales ferias a las que pueden acceder los productores, como plataforma para los Negocios verdes. A continuación se describe la metodología del ecodiseño, como herramienta aplicable a la producción verde, y el nodo de Negocios verdes y el Ecoetiquetado, como mecanismos de promoción y apoyo. Para terminar, se detallan algunos mecanismos de financiación, desarrollo y fortalecimiento de los Negocios verdes en el país.
    
    Separador
    #t_3_1.titulo-segundo
      h2 3.1 Instrumentos económicos y tributarios

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Instrumentos económicos")
        .row.justify-content-center
          .col-lg-10
            p.mb-5 Su objetivo principal es cambiar el comportamiento de los agentes regulados para alcanzar objetivos ambientales.<br>Estos son: 
            figure.mb-5(data-aos="fade-right")
              img(src='@/assets/curso/tema3/img03.svg')  
      .py-3.py-md-4(titulo="Instrumentos tributarios")
        .row.justify-content-center
          .col-lg-10
            p.mb-5 Estos mecanismos se encargan de brindar beneficios tributarios a las personas naturales o jurídicas que desarrollen actividades que generen impacto positivo ambiental. Entre estos se encuentran: 
            figure.mb-5(data-aos="fade-right")
              img(src='@/assets/curso/tema3/img04.svg')  

    Separador
    #t_3_2.titulo-segundo
      h2 3.2 Ferias para promocionar los Negocios verdes

    p.mb-4 En segundo lugar, encontramos las ferias, estas son eventos de carácter económico, cultural y social, que permiten la exhibición temporal o fija de productos y servicios, las cuales sirven como plataforma para promocionar los Negocios verdes en Colombia. 
    p.mb-5 Dentro de las más importantes se destacan: 
    .row.justify-content-between
      .col-lg-2
        figure.mb-4(data-aos="slide-right")
          img(src='@/assets/curso/tema3/img05.svg')
        h4.text-center Bioexpo
      .col-lg-2
        figure.mb-4(data-aos="slide-down")
          img(src='@/assets/curso/tema3/img06.svg')
        h4.text-center Feria Internacional del Medio Ambiente (FIMA)
      .col-lg-2
        figure.mb-4(data-aos="slide-up")
          img(src='@/assets/curso/tema3/img07.svg')
        h4.text-center Expoartesanías
      .col-lg-2
        figure.mb-4(data-aos="slide-down")
          img(src='@/assets/curso/tema3/img08.svg')
        h4.text-center Feria de las Colonias
      .col-lg-2
        figure.mb-4(data-aos="slide-left")
          img(src='@/assets/curso/tema3/img09.svg')
        h4.text-center Alimentec


    Separador
    #t_3_3.titulo-segundo
      h2 3.3 Ecodiseño

    p.mb-4 El ecodiseño es una metodología que tiene en cuenta la afección ambiental de los productos a lo largo de su ciclo de vida (selección y utilización de la materia prima; fabricación; embalaje, transporte y distribución; instalación y mantenimiento; uso; y fin de vida), mediante la integración sistemática de las cuestiones medioambientales desde la etapa más temprana del diseño del producto.
    p.mb-4 La Norma Internacional ISO 14006, denominada ECODISEÑO, estandariza la gestión ambiental del proceso de desarrollo de cualquier producto o servicio que quiera diseñarse a partir de esta metodología. (European Quality Assurance ISO 14006, 2012)
    p.mb-5 Las fases del Ecodiseño, a partir de la norma mencionada anteriormente, son las siguientes: 

    .row.justify-content-center
      .col-lg-6
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Selección del producto y determinación de los factores motivantes.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Determinación de los aspectos ambientales significativos del producto.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Generación de las ideas de mejora y del pliego de condiciones para el desarrollo del nuevo producto.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Desarrollo de alternativas conceptuales. Evaluación y selección.
          li
      .col-lg-6
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Diseño de detalle del nuevo producto.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Definición de las acciones de mejora a futuro para el producto y para la empresa.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Campaña de lanzamiento.
          li 
            .lista-ol--cuadro__vineta
              span 8
            | Evaluación del proyecto y sus resultados.
          li
     
    Separador
    #t_3_4.titulo-segundo
      h2 3.4 Nodo de Negocios verdes

    .row.justify-content-center.mb-4
      .col-lg-6
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/img10.svg')
    .row.justify-content-center
      .col-lg-10
        p.mb-0 Los nodos de Negocios verdes son grupos técnicos y de gestión al interior de las CAR o alianzas entre la autoridad ambiental regional y una entidad de emprendimiento, que tienen como misión posicionar los Negocios verdes como un nuevo renglón de la economía regional.

    Separador
    #t_3_5.titulo-segundo
      h2 3.5 Sello ambiental

    .row.justify-content-center
      .col-lg-10
        p.mb-4 En esta herramienta nos detendremos un momento para analizar los diferentes aspectos relevantes de su implementación en los Negocios verdes. El Sello Ambiental Colombiano está regulado mediante la resolución 1555 de 2005, del MADS. En esta se define el ecoetiquetado como un instrumento económico que permite la incorporación de costos ambientales, al establecer criterios que garantizan un mejor desempeño ambiental del producto respecto de aquellos sustitutos. Estos costos, causados por el deterioro ambiental generado por la producción de determinado bien o servicio, de otra manera habrían sido asumidos por la sociedad.
        p.mb-5 Con este instrumento se busca brindar a los consumidores información verificable, precisa y no engañosa sobre los aspectos ambientales de los productos, estimular el mejoramiento ambiental de los procesos productivos y alentar la demanda y el suministro de productos que afecten en menor medida el medio ambiente. Se han creado diez (10) Normas Técnicas Colombianas (NTC) para los productos que se mencionan a continuación:

        table.mb-5
          tr  
            td.t1-table-th(colspan="3")
              h4.text-center Normas Técnicas Colombianas
            td.t1-table-th(colspan="7")
              h4.text-center Productos
                      
          tr  
            td.t1-table-td1(colspan="3")
              p NTC 5131
            td.t1-table-td1(colspan="7")
              p Detergentes de limpieza.
            
          tr  
            td.t1-table-td2(colspan="3")
              p NTC 5133
            td.t1-table-td2(colspan="7")
              p Establecimientos de alojamiento y hospedaje.

          tr  
            td.t1-table-td1(colspan="3")
              p NTC 5517
            td.t1-table-td1(colspan="7")
              p Embalajes, empaques, cordeles, hilos, sogas y telas de fique.

          tr  
            td.t1-table-td2(colspan="3")
              p NTC 5585
            td.t1-table-td2(colspan="7")
              p Aceites lubricantes para motores de dos tiempos a gasolina.

          tr  
            td.t1-table-td1(colspan="3")
              p NTC 5637
            td.t1-table-td1(colspan="7")
              p Artesanías, manualidades, hilos, telas, y otros productos del diseño, elaborados con fibras de fique con tecnología artesanal.

          tr  
            td.t1-table-td2(colspan="3")
              p NTC 5714
            td.t1-table-td2(colspan="7")
              p Artesanías, sombreros y otros productos del diseño elaborados en fibra de caña flecha elaborados con tecnología artesanal.
          tr  
            td.t1-table-td1(colspan="3")
              p NTC 5720
            td.t1-table-td1(colspan="7")
              p Tableros y celdas para alojar equipos eléctricos y electrónicos de media y baja tensión
          tr  
            td.t1-table-td2(colspan="3")
              p NTC 5757
            td.t1-table-td2(colspan="7")
              p Aparatos sanitarios de alta eficiencia.
          tr  
            td.t1-table-td1(colspan="3")
              p NTC 5871
            td.t1-table-td1(colspan="7")
              p Accesorios de suministro en fontanería.
          tr  
            td.t1-table-td2(colspan="3")
              p NTC 5911
            td.t1-table-td2(colspan="7")
              p Artesanías y otros productos del diseño, elaborados en fibras de enea y junco elaborados con tecnología artesanal.
        p.mb-4 Finalmente, se mencionan algunos sellos ambientales a nivel mundial:     

        .row.justify-content-center.t3-div1.p-4.mb-3
          .col-lg-3
            div.t3-borde1.pe-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/img11.svg')
          .col-lg-9.d-flex.align-items-center
            p Green Seal (Estados Unidos) - El programa de certificación considera criterios como consumo de recursos renovables y energía, la contaminación atmosférica y de las aguas, y la generación de residuos. 

        .row.justify-content-center.t3-div2.p-4.mb-3
          .col-lg-3
            div.t3-borde2.pe-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/img12.svg')
          .col-lg-9.d-flex.align-items-center
            p Environmental Choice (Canadá) - Certifica productos y servicios que ahorran energía, que utilizan material reciclado o que puedan reutilizarse.

        .row.justify-content-center.t3-div1.p-4.mb-3
          .col-lg-3
            div.t3-borde1.pe-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/img13.svg')
          .col-lg-9.d-flex.align-items-center
            p Eco-Mark (Japón) - Evalúa por separado las fases del ciclo de vida total del producto, basándose en los siguientes criterios: mínimo impacto ambiental en la fase de uso, mejora del medio ambiente durante el uso, mínimos efectos ambientales en la fase pastuso (residuos), contribución a la conservación del medio ambiente.
      
        .row.justify-content-center.t3-div2.p-4.mb-3
          .col-lg-3
            div.t3-borde2.pe-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/img14.svg')
          .col-lg-9.d-flex.align-items-center
            p Agricultura Ecológica (Unión Europea)  -  Permite identificar productos que manejan una explotación agrícola autónoma, basada en la utilización óptima de los recursos naturales, sin emplear productos químicos de síntesis u organismos genéticamente modificados (OGM) ni para abono ni para combatir las plagas, logrando de esta forma obtener alimentos orgánicos, a la vez que se conserva la fertilidad de la tierra y se respeta el medio ambiente. 
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
