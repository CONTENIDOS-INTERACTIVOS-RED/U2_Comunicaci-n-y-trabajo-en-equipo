export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Comunicación en el entorno empresarial',
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
        titulo: 'Importancia de la comunicación en la empresa',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Función estratégica de la comunicación',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de comunicación',
        desarrolloContenidos: true,
        subMenu: [],
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
        'Díaz Pérez, S. y Guzmán Góngora, C. D. L. Á. (2014). Una mirada a la racialidad desde la comunicación organizacional: ( ed.). La Habana, Cuba: Editorial Universitaria.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/71605?page=14',
    },
    {
      referencia:
        'Sayago, L. (2009). Investigación en comunicación organizacional: ( ed.). Santa Fe, Argentina, Argentina: El Cid Editor | apuntes.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/28706?page=4',
    },
    {
      referencia:
        'Fernández Belda, J. (2014). La empresa pendiente: cambio organizacional a través de personas: ( ed.). Ugerman Editor.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/78912?page=90',
    },
    {
      referencia:
        'Pacheco, R. (2006). Competencias claves para la comunicación organizacional: ( ed.). Red Revista Latinoamericana de Comunicación CHASQUI.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/17891?page=1',
    },
    {
      referencia:
        'Quintana, J. y Soler, C. (2011). Anticípate: (1 ed.). Madrid, LID Editorial España.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/271223?page=27',
    },
    {
      referencia:
        'Castro, A. D. (2014). Comunicación organizacional: técnicas y estrategias: ( ed.). Universidad del Norte.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69924?page=22',
    },
    {
      referencia:
        'García Soidán, P. & Días Fouces, O. (2014). Redes y retos: estudios sobre la comunicación en la era digital: ( ed.). Ediciones Octaedro, S.L.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/113684?page=10',
    },
  ],
  glosario: [
    {
      termino: 'Asertividad',
      significado:
        'Habilidad de expresar ideas y sentimientos de manera clara y respetuosa.',
    },
    {
      termino: 'Canal de comunicación',
      significado:
        'Medio a través del cual se transmite un mensaje en la organización.',
    },
    {
      termino: 'Clima organizacional',
      significado:
        'Percepción colectiva sobre el ambiente de trabajo en una empresa.',
    },
    {
      termino: 'Colaboración',
      significado:
        'Trabajo conjunto entre personas para alcanzar un objetivo común.',
    },
    {
      termino: 'Comunicación',
      significado:
        'Proceso de intercambio de información entre individuos o grupos.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'Expresión de pensamientos y emociones de manera clara y sin agresividad.',
    },
    {
      termino: 'Comunicación verbal',
      significado:
        'Uso del lenguaje hablado o escrito para transmitir un mensaje.',
    },
    {
      termino: 'Confianza',
      significado:
        'Creencia en la fiabilidad y honestidad de los miembros de un equipo.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'Conjunto de valores y normas que caracterizan a una empresa.',
    },
    {
      termino: 'Empatía',
      significado:
        'Capacidad de comprender y compartir los sentimientos de otros.',
    },
    {
      termino: 'Escucha activa',
      significado:
        'Atención plena y comprensiva a los mensajes del interlocutor.',
    },
    {
      termino: 'Feedback',
      significado:
        'Retroalimentación sobre el desempeño o la comunicación en el trabajo.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'Capacidad de influir y motivar a un equipo para alcanzar objetivos.',
    },
    {
      termino: 'Trabajo en equipo',
      significado:
        'Cooperación entre personas para lograr una meta compartida.',
    },
    {
      termino: 'Transparencia',
      significado:
        'Honestidad y apertura en la comunicación dentro de una organización.',
    },
  ],
}
