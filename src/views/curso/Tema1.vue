<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Importancia de la comunicación en la empresa'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-marron.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") Hablar de comunicación y reconocer su importancia puede parecer una obviedad para muchos. A fin de cuentas, las personas se comunican constantemente: es la manera en que transmiten ideas, construyen relaciones, generan acuerdos y resuelven conflictos. Sin embargo, a pesar de ser una parte integral de la vida cotidiana, entender y gestionar la comunicación, no es tan sencillo como podría parecer a primera vista.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')

    p.mb-4 La comunicación entre los seres humanos, está cargada de una complejidad considerable. Esta complicación se deriva de múltiples factores que influyen en la interpretación del mensaje:
    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo='El tono de voz', :icon="require('@/assets/curso/unidad/img-10.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-11.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') El tono de voz
            p(data-aos='fade-up') Puede alterar radicalmente la percepción de lo que se dice; un mismo mensaje puede ser interpretado de maneras muy distintas, dependiendo de cómo se exprese.
      .tabs-content.border.px-4.p-md-5.py-3(titulo='El contexto', :icon="require('@/assets/curso/unidad/img-10.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-12.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') El contexto
            p(data-aos='fade-up') En el que se produce la comunicación, juega un papel crucial. Un mensaje puede tener significados diferentes, según el entorno cultural, social o emocional, en el que se emita.

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        p.mb-4(data-aos='fade-up') Además, es importante considerar las diferencias entre: 
        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-13.svg', style='width: 80px')
              p.text-bold.mb-4.text-center La comunicación verbal
              p.px-1.text-small.mb-0.d-flex.text-center Permite la interacción en tiempo real y la posibilidad de recibir retroalimentación instantánea, lo que puede facilitar la aclaración de malentendidos.
          .col-10.col-md-8.col-lg-6.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-14.svg', style='width: 80px')
              p.text-bold.mb-4.text-center La comunicación escrita
              p.px-1.text-small.mb-0.d-flex.text-center Puede carecer de matices y entonaciones, lo que puede dar lugar a interpretaciones erróneas.
        .row.mb-4
          .col-12.col-xl-8
            .bg-azul.p-4.mb-4(data-aos='fade-up')
              span De igual manera se puede precisar que la comunicación verbal se refiere a lo que se expresa mediante el lenguaje hablado o escrito, pero esta categoría abarca mucho más que las palabras. Es esencial tener en cuenta aspectos como el tono de voz, que puede transmitir emociones y matices que complementan el mensaje verbal. Asimismo, el ritmo de la conversación es crucial; un discurso pausado puede sugerir reflexión, mientras que un ritmo acelerado puede transmitir urgencia o entusiasmo. Además, la elección de palabras debe ser contextual y adecuada al interlocutor, lo que requiere atención cuidadosa para asegurar que el mensaje sea comprendido efectivamente.
            span La claridad y precisión son también componentes esenciales de la comunicación verbal. Un mensaje bien estructurado y articulado no solo facilita la comprensión, sino que también reduce el riesgo de malentendidos. Por lo tanto, es fundamental prestar atención a estos diversos elementos para lograr interacciones más efectivas y enriquecedoras.
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
        span En cuanto a la comunicación no verbal, esta abarca todas las expresiones que se transmiten más allá de las palabras. Incluye elementos como:
    .row.position-relative.mb-0.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold La gesticulación de las manos
              p Esta expresión puede enfatizar o contradecir lo  que se dice verbalmente.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Las posturas corporales
              p Ya sean abiertas o cerradas, también juegan un papel crucial en la recepción del mensaje; una postura abierta indica receptividad y confianza, mientras que una postura cerrada puede expresar desinterés o estilo defensivo.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold La forma en que se sitúa
              p Ya sea de pie o sentados, influye en la dinámica comunicativa. Estar de pie puede transmitir autoridad, mientras que sentarse puede fomentar una atmósfera de cercanía. Todos estos aspectos son indispensables para entender el contexto de una interacción y pueden enriquecer o dificultar el mensaje deseado.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold El medio a través del cual se establece
              p Décadas atrás, comunicarse con alguien en otro país podía era un reto, podía demorar semanas o meses, a través de cartas o medios telefónicos costosos. En contraste, la tecnología actual permite una comunicación instantánea a través de medios como correos electrónicos, aplicaciones de mensajería instantánea y plataformas de chat empresarial.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

    .d-flex.align-items-start.bg-verde.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-20.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 Estas herramientas no solo permiten el uso de palabras escritas, sino que también incorporan elementos como notas de voz y recursos visuales, enriqueciendo la transmisión del mensaje. Esta evolución ha transformado radicalmente la forma de comunicarse, demostrando que el contacto físico no es un requisito para un diálogo efectivo.

    .row.mb-4
      .col-12.col-xl-8
        .bg-amarillo.p-4.mb-4(data-aos='fade-up')
          p.mb-3 Otro aspecto fundamental es la experiencia única de cada receptor. Cada individuo trae consigo su propia experiencia, su bagaje cultural y sus propias emociones, lo que puede influir en la manera en que recibe y procesa un mensaje. Por ello, ser un comunicador efectivo implica no solo expresar claramente las ideas, sino también ser receptivo a las señales que envían los demás. 
          span Es por este motivo que el modelo tradicional de comunicación, que establecía un emisor que envía un mensaje a un receptor, a través de un medio, ha quedado obsoleto, puesto que no abarca completamente la complejidad del proceso comunicativo. 
        p.mb-0 Como se evidencia, aunque la comunicación es un acto cotidiano y aparentemente simple, su adecuada gestión requiere un entendimiento profundo de sus múltiples dimensiones y de la sensibilidad hacia la complejidad que la rodea. Solo a través de esta comprensión, se podrán mejorar las interacciones y cultivar relaciones más sólidas y efectivas.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')

    .row.bg-marron.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Contexto organizacional-empresarial
          p.mb-5(data-aos="fade-up") La comprensión del contexto organizacional-empresarial es esencial para analizar cómo se configuran las dinámicas internas de las organizaciones y el papel que desempeña la comunicación en su funcionamiento. En el PDF Contexto organizacional-empresaria l, se estudia la evolución de la comunicación organizacional como disciplina, su relevancia en la estructura y cultura de las empresas, así como las consecuencias de una gestión inadecuada. A través de este contenido, se evidencian los efectos que puede tener la comunicación en la productividad, la motivación del personal, la toma de decisiones y la reputación corporativa, destacando su función como eje estratégico en el desarrollo organizacional.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Contexto organizacional-empresarial.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Contexto organizacional-empresarial
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')

    p.mb-4 Para mitigar estos problemas, resulta fundamental que las empresas implementen estrategias de comunicación efectivas. Esto incluye:

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        .row.mb-4
          .col-12.col-xl-8
            .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
              img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-23.svg', alt='Texto descriptivo de la imagen')
              .my-auto
                p.pe-xl-3.mb-0 La creación de canales claros.
            .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
              img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-24.svg', alt='Texto descriptivo de la imagen')
              .my-auto
                p.pe-xl-3.mb-0 La promoción de retroalimentación constante.
            .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
              img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-25.svg', alt='Texto descriptivo de la imagen')
              .my-auto
                p.pe-xl-3.mb-0 El establecimiento de un ambiente que fomente la apertura y la confianza entre todos los miembros de la organización.
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
        .row.mb-4.mx-0
          .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
            img.h-100(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8.d-flex.align-items-center.bg-azul.p-4(data-aos="fade-left")
            p.mb-0(data-aos="fade-up") Por otro lado, también es necesario entender la nueva forma de comunicación, pues representa retos significativos que las organizaciones deben enfrentar. Es esencial construir una cultura que fomente el fortalecimiento de las relaciones interpersonales, asegurando que la comunicación fluya de manera efectiva y que los objetivos empresariales se logren colaborativamente. La adaptación a estos cambios, es crucial para el éxito en un entorno cada vez más digital y globalizado.
    p.mb-4 Por este motivo, sin duda, al hablar de comunicación organizacional, se debe incluir la cultura de la empresa. La comunicación y la cultura organizacional son dos elementos interrelacionados que desempeñan un papel crucial en el éxito de cualquier empresa. En un entorno laboral en constante evolución, donde la digitalización y la globalización redefinen las dinámicas de trabajo, es fundamental que las organizaciones aborden estos aspectos, con una estrategia clara y adaptable.
    p.mb-4 En cuanto a la comunicación organizacional:
    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Primero
              p Ha <b>evolucionado</b> hacia una multicanalidad, que trasciende los correos electrónicos y las reuniones presenciales. Con el surgimiento de herramientas como plataformas de mensajería instantánea, videoconferencias y redes sociales internas, las organizaciones ahora tienen nuevas oportunidades para conectar. Sin embargo, esta transformación también plantea el desafío de gestionar la sobrecarga de información y asegurar que los mensajes se transmitan de manera clara, oportuna y efectiva.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Segundo
              p Los colaboradores esperan <b>transparencia</b> en la comunicación, característica que cobra mayor importancia. Aquellas organizaciones que comparten abiertamente información sobre su visión, objetivos y resultados, logran generar confianza y compromiso entre sus empleados. Este enfoque implica un cambio de mentalidad hacia una comunicación más horizontal, en la que se valoran las opiniones y se fomenta el feedback.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Tercero
              p La <b>flexibilidad</b> de los horarios de trabajo y la diversidad geográfica de los equipos, han hecho que la comunicación asincrónica sea cada vez más relevante. Por lo tanto, las organizaciones deben adaptar sus prácticas para que la información esté disponible, sin importar la ubicación o el horario de trabajo de cada miembro del equipo.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')

    p.mb-4 De igual manera, en el reto de construir una cultura organizacional fuerte, se comienza con:
    
    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        LineaTiempoD.color-secundario.large
          p(numero='1' titulo='Promoción de valores compartidos') Los cuales guíen el comportamiento de todos los miembros de la organización. Estos valores deben ser claramente comunicados y reflejados en las acciones cotidianas de líderes y empleados
          p(numero='2' titulo='Fomentar relaciones interpersonales sólidas') Esencial para lograr una comunicación efectiva. Actividades de <i>team building</i>, espacios para la interacción informal y la creación de equipos multidisciplinarios, pueden ayudar a derribar barreras y a cultivar un ambiente colaborativo.  
    p.mb-4 El desarrollo de habilidades comunicativas en todos los niveles también es crucial, por lo que las organizaciones deben invertir en programas de capacitación que aborden, tanto las habilidades técnicas como las habilidades blandas, tales como:

    .row.mb-4
      .col-6.col-md-4(data-aos="fade-right")
        .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-32.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-3.text-bold Tema 1
            span Empatía
      .col-6.col-md-4(data-aos="fade-up")
        .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-33.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-3.text-bold Tema 2
            span Escucha activa
      .col-6.col-md-4(data-aos="fade-left")
        .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-34.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-3.text-bold Tema 3
            span Resolución de conflictos

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4(data-aos="fade-up") La exposición constante al entorno actual digital y globalizado, fomentar una cultura de innovación y adaptabilidad, es esencial. Las organizaciones necesitan estar abiertas a experimentar con nuevas herramientas y métodos de comunicación, para mejorar la colaboración y la eficacia. Además, en un contexto globalizado, los diversos equipos aportan distintas perspectivas, lo que enriquece la comunicación y la toma de decisiones, al tiempo que minimiza los malentendidos culturales.
        .bg-azul.p-4
          span Implementar mecanismos de evaluación y retroalimentación sobre la efectividad de la comunicación y la cultura organizacional, resulta crucial, porque permite identificar áreas de mejora y adaptarse a las necesidades cambiantes de los empleados y del mercado.

      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

    .row.mb-4.bg-azul-claro.bg-full-width.p-4
      .rounded.col-10.col-md-8.col-xl-3.bg-naranja.p-4.d-flex.mx-auto
        p.my-auto En este orden de ideas:
      .col-2.col-xl-1.d-flex
        img.my-auto(src='@/assets/curso/unidad/img-36.svg', alt='Texto que describa la imagen')
      .rounded.col-10.col-md-8.col-xl-3.bg-naranja.p-4.d-flex.mx-auto
        p.my-auto Entender la comunicación como oportunidad de encuentro con el otro, plantea una amplia gama de posibilidades de interacción en el ámbito social, 
      .col-2.col-xl-1.d-flex
        img.my-auto(src='@/assets/curso/unidad/img-36.svg', alt='Texto que describa la imagen')
      .rounded.col-10.col-md-8.col-xl-3.bg-naranja.p-4.d-flex.mx-auto
        p.my-auto Porque es allí donde tiene su razón de ser, debido a que es a través de ella como las personas logran el entendimiento, la coordinación y la cooperación que posibilitan el crecimiento y desarrollo de las organizaciones. 
      
    .d-flex.align-items-start.bg-verde-oscuro.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-37.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0.text-white Las relaciones que se dan entre los miembros de una organización, se establecen gracias a la comunicación; en esos procesos de intercambio, se asignan y se delegan funciones, se establecen compromisos, y se le encuentra sentido a ser parte de ella. 
    
    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4(data-aos="fade-up")      ¿De qué otra manera se predicen e interpretan comportamientos, se evalúan y planifican estrategias que movilicen el cambio, se proponen metas individuales y grupales en un esfuerzo conjunto, de beneficio común, si no es a través de una comunicación motivada, consentida y eficaz?  
        .bg-verde.p-4.mb-4
          span Por estas razones, toda institución que se respete, debe priorizar dentro de su estructura organizacional, un sistema de comunicaciones e información que dinamice los procesos que, a nivel interno, vivifican la entidad y la proyectan hacia su área de influencia.
    
        p.mb-0 Las comunicaciones institucionales internas, deben promover la participación, la integración y la convivencia en el marco de la cultura organizacional, en donde cobra sentido el ejercicio de funciones y el reconocimiento de las capacidades individuales y grupales (Sayago, 2009). 

    .row.mb-4
      .col-12.col-xl-8
        .d-flex.align-items-start.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-39.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Dado lo anterior se evidencia que la comunicación y la cultura organizacional, son pilares fundamentales que, si se gestionan adecuadamente, pueden impulsar el rendimiento y la satisfacción laboral. A medida que las organizaciones navegan por un entorno cada vez más complejo y digital, es vital que se comprometan a construir una cultura que no solo gestione la comunicación efectiva, sino que también fomente relaciones sólidas y un sentido de pertenencia. La adaptación y la evolución constante, son claves para prosperar en este nuevo panorama organizacional. 
        span Sin duda al hablar de comunicación, por ende, se debe contar con líderes competentes para comunicar. La habilidad para transmitir mensajes claros y precisos, así como para interpretar señales no verbales, se convierte en una herramienta poderosa para inspirar y guiar a otros. Además, la evolución de los medios de comunicación en la era digital, presenta tanto oportunidades como desafíos, lo que exige a los líderes adaptarse y promover una cultura de comunicación abierta y colaborativa. Invertir en el desarrollo de estas habilidades comunicativas, no solo beneficiará a los líderes sino también a sus equipos y a la organización en su conjunto, creando un entorno más cohesionado y orientado hacia la consecución de objetivos comunes.
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
    
    .row.mb-4
      .col-12.col-xl-10.mx-auto
        .row
          .col-12.bg-azul-oscuro.p-4.text-center
            span Como se evidencia, <b>la comunicación</b> se erige como la competencia esencial que todo líder debe dominar y permear en sus equipos, para lograr el éxito en su gestión.
          .col-12.bg-azul.px-4
            .row
              .col-12.col-xl-8.d-flex
                p.my-auto(data-aos="fade-up") A lo largo de este análisis, se ha observado que tanto la comunicación verbal como la no verbal, son fundamentales para establecer relaciones sólidas, motivar equipos y resolver conflictos, de manera efectiva.
              .col-4.d-none.d-xl-block(data-aos="fade-left")
                img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
        .row
          .col-12.bg-azul-claro.px-4
            .row
              .col-12.col-xl-8.d-flex
                p.my-auto(data-aos="fade-up") Aunque se demuestra la importancia de la comunicación organizacional, en la actualidad, aún en muchas organizaciones, prevalece una tendencia adversa al intercambio de información. Esta falta de comunicación suele originarse en la creencia errónea que poseer información equivale a tener poder.
              .col-4.d-none.d-xl-block(data-aos="fade-left")
                img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
          .col-12.bg-azul-oscuro.p-4.text-center
            span Algunas personas, al retener datos o conocimientos, piensan que aseguran una posición de ventaja sobre sus colegas.

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-verde.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") Este comportamiento, lejos de reflejar autoridad, es en realidad un signo de inseguridad. La retención de información no solo obstaculiza el trabajo colaborativo, sino que también puede generar desconfianza y un ambiente laboral tóxico. Por lo tanto, es crucial fomentar una cultura de apertura y transparencia, donde el intercambio de información sea considerado una fortaleza que beneficie a toda la organización.

    .row.mb-5
      .col-12.col-xl-8
        p.mb-4(data-aos="fade-up") Sin duda alguna como se ha expuesto a lo largo de este recorrido para lograr una comunicación efectiva, es fundamental cultivar una cultura organizacional que favorezca conversaciones sin barreras. La evidencia sugiere que cuando se comunican cambios, novedades o situaciones significativas a los colaboradores de manera oportuna y a través de la persona adecuada y el canal correcto, se reduce el impacto negativo en el clima laboral. Además, se fomenta la participación activa en la gestión del cambio y se minimizan los rumores y las especulaciones que pueden surgir. 
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-44.png', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Para concluir, la comunicación en el contexto organizacional es un fenómeno complejo que puede ofrecer tanto oportunidades  como desafíos. Su impacto depende de cómo los miembros de la organización eligen utilizarla, siendo fundamental fomentar un entorno donde esta comunicación sea constructiva y beneficiosa para todos. 
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/5560?page=12") Silvestrin, C. B. (2009). Comunicación, lenguaje y comunicación organizacional: ( ed.). Red Signo y Pensamiento.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=Npxfcf0C5Ik") [Vídeo] Ricardo Peri. (2014, 10 octubre). Comunicación organizacional: conceptos básicos.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
