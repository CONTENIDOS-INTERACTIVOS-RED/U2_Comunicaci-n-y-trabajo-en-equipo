<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Función estratégica de la comunicación'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p.mb-4 Como ya se ha evidenciado, la comunicación en las organizaciones se presenta como un componente fundamental; para alcanzar el éxito y la eficacia de cualquier estrategia, trasciende del simple hecho de comunicar una idea o transmitir un mensaje.
      p.mb-4 Por este motivo, es crucial considerar diversas maneras en las que se puede integrar la comunicación de forma estratégica, en las organizaciones:
      .row.mb-4
        .col-12.col-xl-8
          LineaTiempoD.color-secundario.large
            p(numero='1' titulo='Primer tema') En primer lugar, una comunicación clara y efectiva es esencial para definir y difundir la visión y misión de la organización. No se trata de garantizar lectura de lo de estipulado o simplemente publicar estos documentos para conocimientos de todos.<br>Esto no solo establece una dirección clara, sino que también asegura que todos los empleados comprendan los objetivos a largo plazo y su papel en el logro de estos. Además, la comunicación desempeña un papel clave en la construcción y mantenimiento de la cultura organizacional. A través de mensajes coherentes y consistentes, se pueden promover los valores, comportamientos y actitudes que alinean a los empleados con los objetivos de la organización.
 
            p(numero='2' titulo='Segundo tema') Lo anterior implica no solo enunciar estos conceptos; se trata que el colaborador, a todo nivel, interiorice el propósito de la organización, su norte y, sobre todo, cómo su rol impacta en lograr estos objetivos. De igual manera, contextualizarlos de forma que todos los empleados comprendan su significado y relevancia. La claridad en la comunicación ayuda a que cada miembro del equipo se sienta parte del propósito general, lo que a su vez fomenta un sentido de pertenencia y compromiso.
            p(numero='3' titulo='Tercer tema') Por lo demás, en otra circunstancia donde la comunicación juega un papel clave, es en situaciones de cambio, la comunicación se vuelve aún más crítica. Minimizar la resistencia y facilitar la transición requiere una estrategia de comunicación bien diseñada que informe a los empleados sobre los cambios, sus razones y beneficios, así como su impacto en el trabajo diario. Del mismo modo, establecer canales de comunicación bidireccionales, permite a los empleados expresar sus opiniones y sugerencias, lo que no solo mejora la moral del equipo, sino que también proporciona información valiosa para la toma de decisiones.
        .col-4.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
        
      .row.mb-4
        .col-4.d-none.d-xl-block(data-aos="fade-right")
          img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .d-flex.align-items-start.bg-azul.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-48.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 La comunicación juega un papel fundamental en los momentos de cambio organizacional. La ausencia o disfuncionalidad de la comunicación interna de una empresa es un obstáculo en un proceso de cambio organizacional. 
          span En contraste, una comunicación interna plural, cooperativa y en positivo, es una importante aliada de los procesos de cambio, adaptación, evolución o transformación. Es importante que en la comunicación interna se impliquen sus directivos y cargos intermedios y se realicen en espacios de conversación próximos y reducidos para favorecer la comprensión de los beneficios que el proceso de cambio aporta. 

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          .row.mb-4
            .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Primer tema
                  p.text-small.px-4.text-center.pb-2 En la etapa de impacto de un proceso, este ha de comunicarse de forma concreta, rápida y transparente y acompañarse de mensajes de futuro y fortaleza.
            .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Segundo tema
                  p.text-small.px-4.text-center.pb-2 En las etapas de elaboración y acción, deben habilitarse y consolidarse espacios de conversación, destacarse los nuevos valores, creencias, conductas y vincularse con la idea de oportunidad (Quintana y Soler, 2011).

      p.mb-4 Durante estos períodos, es esencial que los empleados comprendan el motivo detrás del cambio, así como sus objetivos y expectativas:
      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Primero
                p Una comunicación clara reduce la confusión y alinea a todos los miembros de la organización con la nueva dirección. Además, los cambios pueden generar resistencia entre los empleados, muchas veces debido al miedo a lo desconocido.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Segundo
                p Una comunicación abierta y transparente puede abordar estos temores, proporcionando información sobre cómo el cambio impactará tanto a los empleados como a la organización en su conjunto, lo que ayuda a mitigar dicha resistencia.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Tercero
                p La efectividad de la comunicación también contribuye a la construcción de confianza entre líderes y empleados. Cuando los líderes son transparentes acerca de los cambios y mantienen una comunicación constante, los empleados se sienten más seguros y valorados, lo que facilita la aceptación del cambio.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Cuarto
                p Asimismo, involucrar a los empleados en el proceso mediante una comunicación bidireccional puede fomentar un sentido de pertenencia y compromiso. Escuchar sus opiniones y preocupaciones proporciona valiosos insights que pueden enriquecer el proceso de cambio.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-3.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')
        
        .col-12.col-xl-9
          p.mb-4 De igual manera la comunicación oportuna moviliza el aprendizaje para los miembros de la organización; sin embargo, el reto está en ser flexibles casi que todo el tiempo, para poder recibir y gestionar el cambio de manera correcta. Ser parte activa del aprendizaje organizacional exige el desarrollo de habilidades de nuevas competencias organizacionales para “navegar” de la manera más eficiente la transición/cambio. Entre estas habilidades se encuentra la capacidad de aprender rápida y continuamente, capacidad para flexibilizarse y cambiar, habilidad de comunicarse y recibir el mensaje oportuno (Fernández, 2014).
          .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-56.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 La comunicación constante permite a la organización compartir aprendizajes y mejores prácticas durante la implementación del cambio, lo que ayuda a los empleados a adaptarse más rápidamente y a encontrar soluciones a los desafíos que puedan surgir. Informar a los empleados sobre plazos, hitos y resultados esperados del cambio, es crucial para gestionar sus expectativas, dado que una comunicación proactiva puede prevenir malentendidos y descontentos que podrían surgir de expectativas no cumplidas. 

      .row.mb-4
        .col-12.col-xl-9
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-57.png', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Durante períodos de cambio, la cohesión organizacional puede verse amenazada, por lo que una comunicación efectiva es vital para mantener el sentido de equipo y recordar a los empleados la visión compartida y los objetivos comunes. Finalmente, es importante señalar que la comunicación no termina con la implementación del cambio; es esencial seguir comunicando y evaluando el proceso, permitiendo que los empleados proporcionen retroalimentación sobre lo que está funcionando y lo que no. Esto puede llevar a unos ajustes necesarios en la estrategia.
          span Como se evidencia, la comunicación se erige como un pilar esencial en cualquier proceso de cambio organizacional. Su efectividad puede determinar el éxito o el fracaso de la iniciativa de cambio, impactando no solo la implementación de nuevas estrategias, sino también la cultura y el clima laboral de la organización.
        .col-3.d-none.d-xl-block(data-aos="fade-right")
          img(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')

      p.mb-4 Desde una mirada estratégica, la comunicación se erige como una competencia clave en los líderes de una organización. Los líderes son los responsables de guiar y motivar a sus equipos, y su capacidad para comunicar de manera efectiva, influye directamente en el clima organizacional, en la alineación de objetivos y en la implementación de estrategias. La habilidad de comunicarse con claridad y empatía, permite a los líderes establecer conexiones significativas con sus colaboradores, fomentando un ambiente de confianza y apertura:

      .row.mb-4
        .col-4.d-none.d-xl-block(data-aos="fade-right")
          img(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          LineaTiempoD.color-secundario.large
            p(numero='1' titulo='Una comunicación efectiva') No solo se limita a transmitir información, sino que implica también escuchar activamente. Los líderes que practican la escucha activa, pueden entender mejor las necesidades y preocupaciones de su equipo, lo que les permite tomar decisiones más informadas y abordar problemas de manera proactiva. Esta dinámica bidireccional en la comunicación, crea un sentido de pertenencia y compromiso entre los miembros del equipo, lo que a su vez potencia la productividad y la creatividad.
            p(numero='2' titulo='La transparencia en la comunicación') Como ya se evidencia en situaciones de cambio o crisis, la comunicación se vuelve aún más crucial. Los líderes tienen la responsabilidad y deben ser capaces de articular una visión clara y motivadora, que inspire a sus equipos a adaptarse y a enfrentar desafíos. La transparencia en la comunicación durante estos momentos difíciles, puede mitigar la incertidumbre y el miedo, proporcionando un marco de referencia que ayuda a los colaboradores a navegar en tiempos turbulentos.
            p(numero='3' titulo='La gestión de conflictos') Los líderes que dominan la comunicación también son más efectivos en la gestión de conflictos. Al abordar desacuerdos de manera constructiva y mantener un diálogo abierto, pueden resolver tensiones antes de que se conviertan en problemas mayores. Esto no solo mejora las relaciones interpersonales dentro del equipo, sino que también contribuye a un ambiente laboral más saludable y colaborativo.
      
      .row.bg-marron.bg-full-width.px-4.mb-4
        .col-12.col-xl-7.d-flex
          p.my-auto Sin duda la habilidad de comunicación en los líderes, es fundamental para el éxito organizacional. No solo facilita la transmisión de información y la alineación de objetivos, sino que también fortalece la cohesión del equipo, mejora la gestión del cambio y fomenta un entorno propicio para la resolución de conflictos. Por lo tanto, invertir en el desarrollo de esta competencia, es esencial para cualquier líder que aspire a guiar eficazmente a su organización hacia el futuro. 
        .col-5.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          p.mb-4 Entre las conductas que desarrolla un líder para favorecer la comunicación organizacional, están principalmente:
          .row.mb-4
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center La confianza
                  p.text-small.px-4.text-center.pb-2 Logra que sus colaboradores sean capaces de confiar en él y, además, en ellos mismos.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-62.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center La integridad
                  p.text-small.px-4.text-center.pb-2 Se relaciona fundamentalmente con la honestidad y responsabilidad que demuestra el líder en sus actos.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-63.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center La credibilidad
                  p.text-small.px-4.text-center.pb-2 Se vincula a la capacidad de ser creído, independientemente de la veracidad del mensaje.
          p.mb-4 En el liderazgo basado en la credibilidad, intervienen factores claves como (Pacheco, 2006): 

          .row.mb-4
            .col-6.col-xl-4
              .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 75px' src='@/assets/curso/unidad/img-64.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.mb-0 La comunicación interpersonal efectiva.
            .col-6.col-xl-4
              .d-flex.align-items-start.bg-verde-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 75px' src='@/assets/curso/unidad/img-65.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.mb-0 La valoración de la creatividad y esfuerzo personal.
            .col-6.col-xl-4
              .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 75px' src='@/assets/curso/unidad/img-66.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.mb-0 La veracidad como paradigma de comportamiento del líder.
            .col-6.col-xl-3
              .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 75px' src='@/assets/curso/unidad/img-67.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.mb-0 La motivación.
            .col-6.col-xl-3
              .d-flex.align-items-start.bg-verde-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 75px' src='@/assets/curso/unidad/img-68.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.mb-0 El cumplimiento de promesas.
            .col-6.col-xl-3
              .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 75px' src='@/assets/curso/unidad/img-69.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.mb-0 La delegación de responsabilidades.
            .col-6.col-xl-3
              .d-flex.align-items-start.bg-verde-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 75px' src='@/assets/curso/unidad/img-70.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.mb-0 La valoración del trabajo en equipo. 
        
      .row.mb-4
        .col-4.d-none.d-xl-block(data-aos="fade-right")
          img(src='@/assets/curso/unidad/img-71.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Comunicar de manera transparente debe hacer parte de la cultura organizacional. Siendo un aspecto fundamental, puesto que ayuda a construir confianza entre la dirección y los empleados. Informar sobre decisiones, resultados y desafíos, fomenta un ambiente de confianza y compromiso. En este sentido, es importante que las organizaciones desarrollen estrategias de comunicación tanto internas, que faciliten la interacción entre empleados y departamentos, como externas, que fortalezcan las relaciones con clientes, proveedores y socios. Esto asegura una imagen coherente y robusta ante todas las partes interesadas.
          .bg-amarillo.p-4(data-aos='fade-up')
            span De igual manera, incluir la comunicación en los programas de capacitación y desarrollo personal, contribuye a mejorar las habilidades comunicativas de los empleados, lo que a su vez puede potenciar la colaboración y la productividad en la organización. La implementación de herramientas tecnológicas para la comunicación, como plataformas de colaboración y redes sociales corporativas, también facilita una comunicación efectiva y mejora la conectividad entre equipos, especialmente en entornos de trabajo remoto.
      
      .row.mb-5.bg-verde-oscuro.px-4.text-white
        .col-12.col-xl-8.d-flex.d-flex
          p.my-auto Como se evidencia, la comunicación tiene un gran valor en las organizaciones, por lo cual, es fundamental evaluar y medir la efectividad de las estrategias de comunicación. Realizar encuestas o análisis de clima organizacional puede proporcionar información sobre cómo se percibe la comunicación dentro de la organización y señalar áreas que requieren mejoras. Finalmente, comunicar los esfuerzos de responsabilidad social y sostenibilidad, no solo mejora la imagen de la organización, sino que también fortalece la lealtad de empleados y clientes. Incorporar la comunicación de manera estratégica en todas las áreas de una organización, no solo mejora la eficiencia operativa, sino que también contribuye al bienestar de los empleados y a la satisfacción del cliente. 
        .col-4.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/unidad/img-72.png', alt='Texto que describa la imagen')
          
      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/174622?page=8") Fullan, M. (2020). Liderar en una cultura de cambio: ( ed.). Ediciones Morata, S. L.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=qgaaekq6-xE") [Vídeo] El Observador TV. (2017, 27 marzo). Seminario "La comunicación de las empresas y organizaciones de la economía social" UCLM.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
