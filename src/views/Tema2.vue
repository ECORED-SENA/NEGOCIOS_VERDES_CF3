<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Programas Regionales de Negocios Verdes (PRNV)

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Como se estudió anteriormente, el Plan Nacional de Negocios Verdes comprende una serie de requisitos, criterios y características específicas que le permiten a los bienes y servicios ser catalogados como “bienes y servicios sostenibles”, los cuales son definidos como aquellos que en su proceso de producción, manejo, transformación y comercialización, incorporan las mejores prácticas ambientales, con el fin de garantizar la conservación del medio ambiente y la sostenibilidad de los recursos usados. Ahora es momento de conocer cómo se lograrán posicionar los Negocios verdes en las diferentes regiones del país y las herramientas existentes para la promoción de estos. 

    .row.justify-content-center.mb-5
      .col-lg-8
        p.mb-4 Para iniciar, los Programas Regionales de Negocios Verdes (PRNV)
        p.mb-4 Se consideran el instrumento usado por el Plan Nacional de Negocios Verdes para proponer y proporcionar herramientas para la planificación y la toma de decisiones que permiten el desarrollo y el fomento de los Negocios Verdes y Sostenibles, de acuerdo con las potencialidades y ventajas competitivas regionales, generando crecimiento económico, social y promoviendo la conservación de los recursos naturales (Ministerio de Ambiente y Desarrollo Sostenible, 2014).
        p.mb-4 En consecuencia, mediante el desarrollo de los PRNV se analiza cada región de Colombia, haciendo énfasis en su extensión, división política, autoridades ambientales, ventajas comparativas (características de la región que la hacen ser más atractiva para el desarrollo de bienes y servicios sostenibles) y las oportunidades o potencialidades de la región. 
        p A continuación se realizará un breve recorrido por cada uno de los PRNV propuestos en el plan. 
      .col-lg-4
        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img02.svg')  

    Separador
    #t_2_1.titulo-segundo
      h2 2.1 Programa Regional de Negocios Verdes - Región Pacífico

    .row.justify-content-center.mb-5
      .col-lg-4 
        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img03.svg')  
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta t1-acordeon1")
          div(titulo="Extensión:").ps-5
            p.mb-0 La región Pacífico tiene una extensión de 131.246 Km2, equivalente al 11,5% de la superficie total de Colombia.
          div(titulo="División política:").ps-5
            p.mb-0 Cuatro (4) departamentos; 179 municipios, de los cuales 64 corresponden a Nariño, 42 a Cauca, 42 a Valle del Cauca y 31 a Chocó.
          div(titulo="Autoridades ambientales:").ps-5
            ul.lista-ul--color
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional para el Desarrollo Sostenible del Chocó, (CODECHOCÓ).
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional del Valle del Cauca, (CVC).
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional del Cauca, (CRC).
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional de Nariño, (CORPONARIÑO).
          div(titulo="Ventajas Comparativas:").ps-5
            ul.lista-ul--color
              li 
                i.t1.fas.fa-circle.fa-xs
                | La alta presencia de grupos étnicos en la región representa un patrimonio social y cultural invaluable. 
              li 
                i.t1.fas.fa-circle.fa-xs
                | Este patrimonio (conocimientos ancestrales, costumbres, etc.) y el atractivo ecoturístico de estos territorios de gran belleza natural.
          div(titulo="Potencialidades:").ps-5
            p.mb-0 Sector agrosistemas sostenibles (72%, equivalente a 9 proyectos), seguido por ecosistemas (ecoturismo) (14%, equivalente a 3 proyectos) y negocios para la restauración y bienes o servicios verdes y sostenibles (15%; 1 proyecto cada uno).   

    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4 
          p.mb-0 Para profundizar en este programa regional consulte en el material complementario el: “Programa Regional de Negocios Verdes” Región Pacífico.  

    Separador
    #t_2_2.titulo-segundo
      h2 2.2 Programa Regional de Negocios Verdes – Región Caribe

    .row.justify-content-center.mb-5
      .col-lg-4 
        figure.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img04.svg')  
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta t1-acordeon1")
          div(titulo="Extensión:").ps-5
            p.mb-0 La región Caribe tiene una extensión de 153.896 Km2, 13,5% de la superficie total de Colombia.
          div(titulo="División política:").ps-5
            p.mb-0 9 departamentos, 234 municipios: 23 municipios en Atlántico, 45 Bolívar, 25 a Cesar, 28 a Córdoba, 15 a La Guajira, 30 a Magdalena, 40 a Norte de Santander, 2 a San Andrés y 26 a Sucre.
          div(titulo="Autoridades ambientales: ").ps-5
            ul.lista-ul--color
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación para el Desarrollo Sostenible del Archipiélago de San Andrés, Providencia y Santa Catalina (CORALINA)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional del Magdalena (CORPAMAG)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional del Cesar (CORPOCESAR)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional de la Guajira (CORPOGUAJIRA)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional del Canal del Dique (CARDIQUE)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional de la Frontera Nororiental (CORPONOR)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional del Atlántico (CRA)

          div(titulo="Ventajas Comparativas: ").ps-5
            ul.lista-ul--color
              li 
                i.t1.fas.fa-circle.fa-xs
                | La región Caribe ocupa el segundo lugar a nivel nacional en aves y el cuarto en mamíferos y plantas. El total de especies representa el 9.7% en el comparativo nacional.

          div(titulo="Potencialidades:").ps-5
            p.mb-0 El PRNV región Caribe hace un análisis de las agendas territoriales de competitividad relacionadas con los Negocios Verdes, identificando 17 apuestas productivas: 9 en Agrosistemas Sostenibles: productos maderables y no maderables, material de naturaleza biológica que contempla información genética, negocios de conservación, energías no convencionales, aprovechamiento y valoración de residuos, 8 en Ecosistemas (Ecoturismo).

    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4 
          p.mb-0 Para profundizar en este programa regional, consulte en el material complementario el: “Programa Regional de Negocios Verdes” Región Caribe. 

    Separador
    #t_2_3.titulo-segundo
      h2 2.3 Programa Regional de Negocios Verdes – Región Amazonía
    
    .row.justify-content-center.mb-5
      .col-lg-4 
        figure.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img05.svg')  
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta t1-acordeon1")
          div(titulo="Extensión:").ps-5
            p.mb-0 403.348 Km2 equivalente al 35,3% de la superficie total de Colombia.
          div(titulo="División política:").ps-5
            p.mb-0 4 departamentos, 39 municipios: de los cuales 16 municipios pertenecen al Caquetá, 13 al Putumayo, 4 al Guaviare, 3 al Vaupés, 2 a Amazonía y 1 al Guainía.
          div(titulo="Autoridades ambientales: ").ps-5
            ul.lista-ul--color
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación para el Desarrollo Sostenible del Sur de la Amazonía (CORPOAMAZONÍA)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación para el Desarrollo Sostenible del Norte y Oriente Amazónico (CDA).
          div(titulo="Ventajas Comparativas: ").ps-5
            ul.lista-ul--color
              li 
                i.t1.fas.fa-circle.fa-xs
                | En la Región Amazonía se destaca la presencia de grupos étnicos, con predominio de los indígenas en los departamentos de Vaupés (66,6%) y Guainía (64,9%).
              li 
                i.t1.fas.fa-circle.fa-xs
                | Su diversidad y riqueza natural propicia la prestación de servicios de ecoturismo, generación de productos nativos y sistemas agropecuarios sostenibles, mejorando las condiciones económicas y de calidad de vida de la población. 
          div(titulo="Potencialidades:").ps-5
            ul.lista-ul--color
              li 
                i.t1.fas.fa-circle.fa-xs
                | Agrosistemas sostenibles
              li 
                i.t1.fas.fa-circle.fa-xs
                | Especies maderables
              li 
                i.t1.fas.fa-circle.fa-xs
                | Ecosistemas (Ecoturismo)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Mercado de Carbono
              li 
                i.t1.fas.fa-circle.fa-xs
                | No maderables

    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4 
          p.mb-0 Para profundizar en este programa regional consulte en el material complementario el: “Programa Regional de Negocios Verdes” Región Amazonía. 

    Separador
    #t_2_4.titulo-segundo
      h2 2.4 Programa Regional de Negocios Verdes – Región Orinoquía

    .row.justify-content-center.mb-5
      .col-lg-4 
        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img06.svg')  
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta t1-acordeon1")
          div(titulo="Extensión:").ps-5
            p.mb-0 254.335 Km2, equivalente al 22,3% de la superficie total del país.
          div(titulo="División política:").ps-5
            p.mb-0 4 departamentos, 59 municipios, de los cuales 29 corresponden a Meta, 19 a Casanare, 7 a Arauca y 4 a Vichada.
          div(titulo="Autoridades ambientales: ").ps-5
            ul.lista-ul--color
              li 
                i.t1.fas.fa-circle.fa-xs
                | La Corporación para el Desarrollo Sostenible del Área de Manejo Especial de La Macarena (CORMACARENA)
              li 
                i.t1.fas.fa-circle.fa-xs
                | La Corporación Autónoma Regional de la Orinoquía CORPORINOQUÍA).
          div(titulo="Ventajas Comparativas: ").ps-5
            ul.lista-ul--color
              li 
                i.t1.fas.fa-circle.fa-xs
                | Se destaca la presencia de grupos étnicos, con predominio de los indígenas (44,4%) en el departamento de Vichada.
              li 
                i.t1.fas.fa-circle.fa-xs
                | Los parques naturales en la región representan el 12,5% del total nacional de áreas protegidas del país. Representa una gran oportunidad para la promoción y posicionamiento del ecoturismo en la región. 
          div(titulo="Potencialidades:").ps-5
            ul.lista-ul--color
              li 
                i.t1.fas.fa-circle.fa-xs
                | La mayor parte de las actividades económicas de la región relacionadas con Negocios verdes se enmarcan en agrosistemas sostenibles, ecoturismo, energías renovables y negocios para la restauración.

    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4 
          p.mb-0 Para profundizar en este Programa regional consulte en el material complementario el “Programa Regional de Negocios Verdes” Región Orinoquía. 


    Separador
    #t_2_5.titulo-segundo
      h2 2.5 Programa Regional de Negocios Verdes – Región Central

    .row.justify-content-center.mb-5
      .col-lg-4 
        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img06.svg')  
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta t1-acordeon1")
          div(titulo="Extensión:").ps-5
            p.mb-0 La región central tiene una extensión de 198.873 km2, equivale al 17.4% de la superficie total de Colombia.
          div(titulo="División política:").ps-5
            p.mb-0 9 departamentos, hacen parte de la región 589 municipios, de los cuales 125 corresponden a Antioquia, 123 a Boyacá, 27 a Caldas, 117 a Cundinamarca, 37 a Huila, 12 a Quindío, 14 a Risaralda, 87 a Santander y 47 al departamento del Tolima.
          div(titulo="Autoridades ambientales: ").ps-5
            ul.lista-ul--color
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional de Cundinamarca (CAR)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional del Guavio (CORPOGUAVIO)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional de Boyacá (CORPOBOYACÁ)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional de Chivor (CORPOCHIVOR)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional de Santander (CAS)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional del Tolima (COROLINA)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional del Alto Magdalena (CAM)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional del Quindío (CRQ)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional de Risaralda (CARDER)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional de Caldas (CORPOCALDAS)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación para el Desarrollo Sostenible del Urabá (CORPOURABÁ)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional del Centro de Antioquia (CORANTIOQUIA)
              li 
                i.t1.fas.fa-circle.fa-xs
                | Corporación Autónoma Regional de las Cuencas de los Ríos Negro y Nare (CORNARE).
          div(titulo="Ventajas Comparativas: ").ps-5
            ul.lista-ul--color
              li 
                i.t1.fas.fa-circle.fa-xs
                | La biodiversidad de la región central ocupa el primer lugar en anfibios, reptiles, plantas, mamíferos y aves, y el segundo lugar en peces de agua dulce. 
              li 
                i.t1.fas.fa-circle.fa-xs
                | El total de especies en la región representa el 29,4% del comparativo nacional.
              li 
                i.t1.fas.fa-circle.fa-xs
                | La región central, cuenta con un total de 20 Parques Nacionales, lo que representa el 35,71% del total nacional. 
          div(titulo="Potencialidades:").ps-5
            ul.lista-ul--color
              li 
                i.t1.fas.fa-circle.fa-xs
                | El PRNV región central, hace un análisis de las agendas territoriales de competitividad, identificando apuestas regionales de Negocios verdes. Los proyectos identificados se encuentran dentro de la categoría Bienes y servicios sostenibles, provenientes de los recursos naturales, principalmente en el sector Agrosistemas sostenibles, con 14 proyectos, seguido por Ecoturismo con 8 proyectos.  
    
    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4 
          p.mb-0 Para profundizar en este Programa regional consulte en el material complementario el “Programa Regional de Negocios Verdes” Región Central. 

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
