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
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Componentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Encabezados',
            hash: 'encabezados',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Párrafos',
            hash: 'parrafos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Botones',
            hash: 'botones',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Listas',
            hash: 'listas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Tablas',
            hash: 'tablas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Imagen',
            hash: 'imagen',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Imagen Infográfica',
            hash: 'imagen_infografica',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Video',
            hash: 'video',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Bloques de texto destacado',
            hash: 'texto_destacado',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Sliders',
            hash: 'sliders',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo: 'Acordiones',
            hash: 'acordiones',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.12',
            titulo: 'Pestañas o Tabs',
            hash: 'tabs',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.13',
            titulo: 'Líneas de tiempo',
            hash: 'lineas_tiempo',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.14',
            titulo: 'Pasos',
            hash: 'pasos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.15',
            titulo: 'Llamados a la acción',
            hash: 'llamados_accion',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.16',
            titulo: 'Tarjetas',
            hash: 'tarjetas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.17',
            titulo: 'Tarjetas con número',
            hash: 'tarjeta_numero',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.18',
            titulo: 'Modal',
            hash: 'modal',
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
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2014). Programa Nacional de Biocomercio Sostenible (2014-2024)',
      tipo: 'Documento PDF',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2014). “Programa Regional de Negocios Verdes” Región Pacifico',
      tipo: 'Documento PDF',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2014). “Programa Regional de Negocios Verdes” Región Caribe',
      tipo: 'Documento PDF',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2014). “Programa Regional de Negocios Verdes” Región Amazona',
      tipo: 'Documento PDF',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2014). “Programa Regional de Negocios Verdes” Región Orinoquia',
      tipo: 'Documento PDF',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2014). “Programa Regional de Negocios Verdes” Región Central',
      tipo: 'Documento PDF',
      descarga: '/downloads/prueba.pdf',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
