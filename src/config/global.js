export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Liderazgo y trabajo en equipo',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Perfil del líder',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-image',
            numero: '1.1',
            titulo: '',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-image',
            numero: '1.2',
            titulo: 'Características del líder',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Concepto de trabajo en equipo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-image',
            numero: '2.1',
            titulo: 'Componentes del trabajo en equipo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-image',
            numero: '2.2',
            titulo:
              'Para facilitar y fomentar el trabajo en equipo, se pueden llevar a cabo diversas acciones',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-image',
            numero: '2.3',
            titulo: 'Responsabilidades del líder',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Técnicas y habilidades personales y sociales necesarias para el trabajo en equipo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-image',
            numero: '3.1',
            titulo: 'La comunicación efectiva como pilar del trabajo en equipo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-image',
            numero: '3.2',
            titulo: 'La empatía y su importancia en el entorno colaborativo',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-image',
            numero: '3.3',
            titulo: 'Valorización de la diversidad en el trabajo en equipo',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-image',
            numero: '3.4',
            titulo: 'Resiliencia: la clave para superar desafíos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-image',
            numero: '3.5',
            titulo: 'La gestión de conflictos como oportunidad de crecimiento',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-image',
            numero: '3.6',
            titulo: 'La autoeficacia y su impacto en el compromiso del equipo',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Cardona, P. (2008). Cómo desarrollar las competencias de liderazgo: (3 ed.). Pamplona, Spain: EUNSA.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/47456?page=39',
    },
    {
      referencia:
        'Villa Sánchez, A. (2024). 13 perspectivas del liderazgo: (1 ed.). Dykinson.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/279524?page=132',
    },
    {
      referencia:
        'Vértice, P. (2008). Coordinación de equipos de trabajo: ( ed.). Editorial Publicaciones Vértice.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/59349?page=11',
    },
    {
      referencia:
        'Varios, A. (2013). Manual trabajo en equipo: ( ed.). Editorial CEP, S.L.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/50717?page=11',
    },
    {
      referencia:
        'Cruz Lablanca, I. D. L. (2014). Comunicación efectiva y trabajo en equipo: ( ed.). Madrid, Spain: Ministerio de Educación y Formación Profesional de España.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/49382?page=11',
    },
    {
      referencia:
        'Fernández López, F. (2022). Comunicación efectiva y trabajo en equipo. UF0346: (1 ed.). Logroño, Editorial Tutor Formación.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/217781?page=14',
    },
  ],
  glosario: [
    {
      termino: 'Adaptabilidad',
      significado: 'Capacidad de ajustarse a cambios y nuevas situaciones.',
    },
    {
      termino: 'Comunicación',
      significado: 'Proceso de intercambio de información entre personas.',
    },
    {
      termino: 'Coordinación',
      significado:
        'Organización eficiente de tareas y recursos para lograr un objetivo.',
    },
    {
      termino: 'Creatividad',
      significado: 'Habilidad de generar ideas nuevas y originales.',
    },
    {
      termino: 'Empatía',
      significado: 'Capacidad de comprender y compartir sentimientos de otros.',
    },
    {
      termino: 'Escucha',
      significado:
        'Habilidad para prestar atención activa y comprender mensajes.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Plan de acción diseñado para alcanzar un objetivo específico.',
    },
    {
      termino: 'Liderazgo',
      significado: 'Capacidad de guiar, motivar e influir en un grupo.',
    },
    {
      termino: 'Motivación',
      significado: 'Impulso interno que lleva a las personas a actuar.',
    },
    {
      termino: 'Negociación',
      significado: 'Proceso de diálogo para alcanzar acuerdos beneficiosos.',
    },
    {
      termino: 'Organización',
      significado: 'Estructuración eficiente de tareas y recursos.',
    },
    {
      termino: 'Responsabilidad',
      significado: 'Capacidad de cumplir compromisos y asumir consecuencias.',
    },
    {
      termino: 'Resolución',
      significado: 'Habilidad para solucionar problemas de manera efectiva.',
    },
    {
      termino: 'Sinergia',
      significado:
        'Trabajo en conjunto que genera mejores resultados que por separado.',
    },
    {
      termino: 'Trabajo en equipo',
      significado: 'Colaboración entre personas para alcanzar una meta común.',
    },
  ],
}
