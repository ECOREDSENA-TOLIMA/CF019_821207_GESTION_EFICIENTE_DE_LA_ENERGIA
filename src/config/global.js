export default {
  global: {
    componenteFormativo: 'Base de datos',
    descripcionCurso:
      'Los datos están en constante evolución y transformación en todo el mundo. Ha introducido nuevos mecanismos de mejora para todos los sistemas, también ha hecho que su operación sea más desafiante.  El registro, la supervisión y el almacenamiento de datos precisos ayuda a abordar de una manera más eficaz estos desafíos y necesidades que contemplan los sistemas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción a las bases de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evolución de las bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de bases de datos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Herramientas de <i>software</i> más conocidas para bases de datos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fases del proceso de desarrollo de bases de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Entidades, relaciones y atributos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Modelo ER en base de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Entidad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipo de relación y conjunto de relaciones',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Procedimientos más importantes en bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Índice de base de datos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Vistas en base de datos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Reportes o informes en bases de datos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Permisos, roles y control de acceso de usuarios',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Optimización de bases de datos',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Limpieza de la base de datos',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo: 'Pruebas en la base de datos',
            hash: 't_5_7',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'MySQL',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_019_821207.zip',
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
  complementario: [
    {
      tema: 'Evolución de las bases de datos',
      referencia:
        'Edteam. (2020, 13, febrero). ¿Que son las bases de datos? [Archivo de video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=knVwokXITGI',
    },
    {
      tema: 'Evolución de las bases de datos',
      referencia:
        'Edteam. (2022, 9, septiembre). ¿SQL o NoSQL? ¿Cuál base de datos es mejor? [Archivo de video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8K1PKSqHFRQ',
    },
  ],
  glosario: [
    {
      termino: 'ACIDO',
      significado:
        'El acrónimo de las propiedades mantenidas por sistemas de gestión de bases de datos estándar, que significa atomicidad, consistencia, aislamiento y durabilidad.',
    },
    {
      termino: 'Atomicidad',
      significado:
        'La propiedad de una transacción que garantiza que todos o ninguno de los cambios realizados por la transacción se escriben en la base de datos.',
    },
    {
      termino: 'AVL-Árbol',
      significado: 'Es un árbol de búsqueda binaria autoequilibrado.',
    },
    {
      termino: 'Caché',
      significado:
        'La memoria de la computadora que se reserva para contener una parte de los datos de la base de datos a los que el programa de aplicación de la base de datos ha accedido más recientemente.',
    },
    {
      termino: 'Cascada',
      significado:
        'Cascada	Un atributo de clave externa que migra automáticamente los cambios realizados a una referencia (es decir, clave primaria), tabla a todas las referencias (clave externa), filas de la tabla.',
    },
    {
      termino: 'Columna',
      significado:
        'Una sola unidad de datos con nombre que tiene un tipo de datos en particular (por ejemplo, número, texto o fecha). Las columnas solo existen en tablas.',
    },
    {
      termino: 'Compilador',
      significado:
        'Una herramienta de desarrollo de <em>software</em> que traduce programas de lenguaje de alto nivel a instrucciones en lenguaje de máquina, que un procesador en particular puede comprender y ejecutar.',
    },
    {
      termino: 'DBMS',
      significado: 'Un acrónimo de sistema de administración de base de datos.',
    },
    {
      termino: 'Depurador',
      significado:
        'Una herramienta utilizada para probar y depurar <em>software</em>. Un depurador remoto típico se ejecuta en una computadora <em>host</em> y se conecta al destino a través de un puerto serie o en una red.',
    },
    {
      termino: 'DML',
      significado:
        'Lenguaje de manipulación de bases de datos. En SQL, declaraciones como <em>update, insert y delete</em> se consideran DML.',
    },
    {
      termino: 'Durabilidad',
      significado:
        'La propiedad de una transacción en la que el DBMS garantiza que todas las transacciones comprometidas sobrevivirán a cualquier tipo de falla del sistema.',
    },
    {
      termino: 'E / S',
      significado:
        'De entrada y salida. Para un DBMS, normalmente se trata de una unidad de disco que se utiliza para crear una base de datos, durabilidad.',
    },
    {
      termino: 'Gota',
      significado:
        'Abreviatura de <em>Binary Large Object</em>. En SQL, BLOB puede ser un término general para cualquier dato de tipo <em>varbinary</em> largo, <em>varchar</em> largo o largo <em>varchar</em>.',
    },
    {
      termino: 'IEC',
      significado:
        'Comisión Electrotécnica Internacional. Junto con ISO, IEC controla el estándar SQL (ISO / IEC 9075) y muchos otros también.',
    },
    {
      termino: 'IIOT',
      significado: 'Abreviación de Internet industrial de las cosas.',
    },
    {
      termino: 'Índice',
      significado:
        'Una estructura separada que permite un acceso rápido a las filas de una tabla en función de los valores de datos de las columnas utilizadas en el índice.',
    },
    {
      termino: 'Java',
      significado:
        'Un lenguaje de programación multiplataforma, orientado a objetos, similar a C ++, que está disponible gratuitamente para todos y cada uno de los desarrolladores de <em>software</em>.',
    },
    {
      termino: 'JDBC',
      significado:
        'API de conectividad de base de datos de Java. JDBC proporciona una API estándar de manipulación y acceso a la base de datos para programas Java.',
    },
    {
      termino: 'JSON',
      significado:
        'Una representación de datos ofrecida como una alternativa más compacta; pero aún legible por humanos para XML.',
    },
    {
      termino: 'Little-Endian',
      significado:
        'Es un tipo de direccionamiento que se refiere al orden de los datos almacenados en la memoria.',
    },
    {
      termino: 'Marcas',
      significado:
        'Marcas comerciales, nombres comerciales, marcas de servicio o logotipos identificados en el sitio web y/o material impreso de una empresa.',
    },
    {
      termino: 'Metadatos',
      significado:
        'Metadatos	"Datos sobre datos". En un contexto DBMS, los datos almacenados en columnas de una tabla tienen ciertos atributos, como el tipo, largo, descripción u otras características que permitan al DBMS procesar los datos de manera significativa o permitir que los usuarios los comprendan mejor.',
    },
    {
      termino: 'Mesa',
      significado:
        'Una colección de columnas estrechamente relacionadas. Una tabla consta de filas, cada una de las cuales comparte las mismas columnas; pero varían en los valores de las columnas.',
    },
    {
      termino: 'Pila',
      significado:
        'Es una estructura conceptual que consta de un conjunto de elementos homogéneos y se basa en el principio último en entrar, primero en salir (LIFO).',
    },
    {
      termino: 'Replicación',
      significado:
        'Un proceso en el que las modificaciones seleccionadas en una base de datos maestra se replican (reproducen) en otra base de datos.',
    },
    {
      termino: 'RTOS',
      significado:
        'Abreviatura común de sistema operativo en tiempo real. Raima Database Manager se ejecuta en la mayoría de RTOS, como <em>VxWorks, Integrity, Linux integrado y QNX.</em>',
    },
    {
      termino: 'Servidor (<em>software</em>)',
      significado:
        'Un asiento que reside en una sola máquina servidor y es capaz de aceptar conexiones desde uno o más asientos que residen en las máquinas cliente.',
    },
    {
      termino: 'Sincronización',
      significado:
        'El método de implementación (con frecuencia semáforos) mediante el cual la ejecución simultánea de múltiples subprocesos o procesos informáticos pueden acceder de forma segura y actualizar los datos compartidos.',
    },
    {
      termino: 'SQL',
      significado:
        'SQL	Es el lenguaje comúnmente aceptado que se utiliza para definir, consultar y manipular una base de datos relacional. La etimología de "SQL" no está clara, posiblemente una progresión de "QueL" (Query Language) a "SeQueL"  y a "SQL".',
    },
    {
      termino: 'XML',
      significado:
        'Lenguaje de marcado extensible. Los documentos XML se utilizan mucho en la World Wide Web de Internet; pero también se utilizan en muchos contextos informáticos en los que es necesario compartir datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, L. (s.f.). <em>Big data Análisis de grandes volúmenes de datos en organizaciones.</em> Alfaomega Grupo Editor. ',
    },
    {
      referencia:
        'Cowart, R. (1993). <em>El ABC de base.</em> Ventura Ediciones. ',
    },
    {
      referencia:
        'Cuadra, D. (s.f.). <em>Desarrollo de bases de datos. Casos prácticos desde el análisis a la implementación.</em> RA-MA.',
    },
    {
      referencia:
        'Godoc, E. (s.f.). <em>Los fundamentos del lenguaje.</em> Eni. ',
    },
    {
      referencia:
        'Orbegozo, A. (2016). <em>Access 2016: Manual práctico paso a paso.</em> Alfaomega Grupo Editor.',
    },
    {
      referencia:
        'Peña, R. (2013). <em>Access 2013: manual práctico para todos.</em> Alfaomega Grupo Editor. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Mauricio Peñaloza Trespalacios',
          cargo: 'Experto Técnico',
          centro:
            'Distrito Capital - Centro Electricidad Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Leidy Carolina Arias Aguirre',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
