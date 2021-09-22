export default {
  global: {
    componenteFormativo: 'Marco de referencia de Negocios verdes',
    descripcionCurso:
      'Los Negocios verdes son las actividades económicas que responden a la visión del desarrollo sostenible en las regiones. En Colombia, estos son considerados como una nueva forma de realizar negocios, teniendo en cuenta las expectativas de los clientes potenciales y el impacto que estos bienes y servicios generen en el medio ambiente.<br>Colombia se caracteriza por tener un alto potencial de promover y desarrollar estos modelos de negocios, aprovechando sus características físicas, ambientales y culturales, en especial su riqueza en recursos renovables y su biodiversidad.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Negocios verdes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Política de Producción y Consumo Sostenible',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Plan Nacional de Negocios Verdes(PNNV) ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Clasificación de los Negocios verdes',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Criterios para identificación de Negocios verdes',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Programas Regionales de Negocios Verdes (PRNV)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Programa Regional de Negocios Verdes - Región Pacífico',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Programa Regional de Negocios Verdes – Región Caribe',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Programa Regional de Negocios Verdes – Región Amazonía',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Programa Regional de Negocios Verdes – Región Orinoquía',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Programa Regional de Negocios Verdes – Región Central',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas para la promoción de Negocios verdes en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Instrumentos económicos y tributarios',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Ferias para promocionar los Negocios verdes',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Ecodiseño',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Nodo de Negocios verdes',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Sello ambiental',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'European Quality Assurance ISO 14006. (2012). Gestión Ambiental de Proceso de Diseño y Desarrollo de Ecodiseño. Obtenido de ',
      link: 'http://www.eqa.org/productos/',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (2015) Aprendamos sobre negocios verdes y sostenibles ',
      link: 'https://youtu.be/rfD-UKuod18',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2014). Módulo 1: ¿Qué son los negocios verdes e inclusivos?',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2014). Plan Nacional de Negocios Verdes. Bogotá D.C.',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2014). Programa Nacional de Biocomercio Sostenible (2014-2024). ',
      link:
        'https://www.minambiente.gov.co/index.php/negocios-verdes-y-sostenibles/negocios-verdes/que-son-los-negocios-verdeshttps://www.minambiente.gov.co/index.php/negocios-verdes-y-sostenibles/negocios-verdes/que-son-los-negocios-verdes',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2010). Política Nacional de Producción y Consumo. Bogotá D.C. Ministerio de Ambiente, Vivienda y Desarrollo Territorial. ',
      link:
        'https://www.icesi.edu.co/blogs/pycs/files/2011/09/Pol%C3%ADtica-de-PyCS-FINAL.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Banca de segundo piso',
      significado:
        'Instituciones financieras dirigidas por el gobierno para desarrollar algunos sectores de la economía, atender y solucionar problemas de financiamiento regional y fomentar actividades específicas. En Colombia existen tres Finagro, Bancóldex y Findeter. ',
    },
    {
      termino: 'Biocomercio',
      significado:
        'Conjunto de actividades de recolección, producción, procesamiento o comercialización de bienes y servicios derivados de la biodiversidad nativa, bajo criterios de sostenibilidad ambiental, social y económica.',
    },
    {
      termino: 'Demanda',
      significado:
        'Cantidad de bienes y servicios que son adquiridos por los consumidores.',
    },
    {
      termino: 'Desarrollo limpio',
      significado:
        'El Mecanismo de Desarrollo Limpio (MDL) es un mecanismo cooperativo, establecido bajo el protocolo de Kyoto, el cual tiene el potencial de ayudar a los países en desarrollo a alcanzar un desarrollo sostenible mediante la promoción de inversiones ambientalmente amigables por parte de gobiernos o empresas de los países industrializados.',
    },
    {
      termino: 'Eco-etiquetado',
      significado:
        'Son distintivos otorgados por la administración o por otra organización que garantizan el cumplimiento de unos criterios ambientales por parte de un producto.',
    },
    {
      termino: 'Ecoproducto',
      significado:
        'Aquel producto en el cual, en todas las etapas de su vida, desde el diseño hasta el fin de su vida útil, se han tenido en cuenta los impactos que la materia prima, las fuentes de energía usadas, los procesos involucrados y los usos finales, tienen o pueden tener en el medio ambiente y en la salud de las personas.',
    },
    {
      termino: 'Ecoturismo',
      significado:
        'Es la actividad turística que se desarrolla sin alterar el equilibrio del medio ambiente y evitando los daños a la naturaleza.',
    },
    {
      termino: 'Impuesto de renta',
      significado:
        'Impuesto que grava la utilidad de las personas, ​ empresas, u otras entidades legales.',
    },
    {
      termino: 'Impuesto predial',
      significado:
        'Son los impuestos que se tiene que pagar por las viviendas que tiene cada individuo.',
    },
    {
      termino: 'Impuesto sobre el Valor Agregado (IVA)',
      significado:
        'Es un impuesto indirecto que grava el consumo doméstico final de productos y servicios producidos tanto en el territorio nacional como en el exterior.',
    },
    {
      termino: 'Maderables',
      significado:
        'Son aquellos productos que provienen del cuerpo de las plantas leñosas, es decir, que tienen un cuerpo elaborado con madera.',
    },
    {
      termino: 'Mercado de carbono',
      significado:
        'Son sistemas de comercio a través de los cuales se pueden vender o adquirir reducciones de emisiones de gases de efecto invernadero (GEI). Se dividen en mercado regulado y mercado voluntario.',
    },
    {
      termino: 'Negocios para la restauración',
      significado:
        'Es el desarrollo de procesos de restauración de ecosistemas naturales degradados, a partir de la producción, provisión o transacción de material vegetal, biorremediación, entre otros.',
    },
    {
      termino: 'No maderables',
      significado:
        'Son aquellos productos que provienen de otras partes de los bosques que no provienen de la tala. Por ejemplo: semillas, hojas, hongos, fibras, frutos o inclusive, la miel de abeja.',
    },
    {
      termino: 'Oferta',
      significado:
        'Cantidad de bienes y servicios que están dispuestos para la venta.',
    },
  ],
  complementario: [
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2015). Aprendamos sobre negocios verdes y sostenibles.',
      tipo: 'Video',
      link: 'https://youtu.be/rfD-UKuod18',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2014). Plan Nacional de Negocios Verdes',
      tipo: 'Documento PDF',
      descarga: '/downloads/Plan_Nacional_de_Negocios_Verdes.pdf',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2014). Programa Nacional de Biocomercio Sostenible (2014-2024)',
      tipo: 'Documento PDF',
      descarga: '/downloads/Programa_Nacional_Biocomercio_Sostenible.pdf',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2014). “Programa Regional de Negocios Verdes” Región Pacifico',
      tipo: 'Documento PDF',
      descarga:
        '/downloads/Programa_Regional_Negocios_Verdes_Region_Pacifico.pdf',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2014). “Programa Regional de Negocios Verdes” Región Caribe',
      tipo: 'Documento PDF',
      descarga:
        '/downloads/Programa_Regional_Negocios_Verdes_Region_Caribe.pdf',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2014). “Programa Regional de Negocios Verdes” Región Amazona',
      tipo: 'Documento PDF',
      descarga:
        '/downloads/Programa_Regional_Negocios_Verdes_Region_Amazonia_.pdf',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2014). “Programa Regional de Negocios Verdes” Región Orinoquia',
      tipo: 'Documento PDF',
      descarga:
        '/downloads/Programa_Regional_Negocios_Verdes_Region_Orinoquia.pdf',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2014). “Programa Regional de Negocios Verdes” Región Central',
      tipo: 'Documento PDF',
      descarga:
        '/downloads/Programa_Regional_Negocios_Verdes_Region_Central.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Kateryn Valderrama Varón',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'José Gregorio Ramírez',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá',
      },
      {
        nombre: 'Adriana Lozano Zapata',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortes García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María camila Ovalle Ospina ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
