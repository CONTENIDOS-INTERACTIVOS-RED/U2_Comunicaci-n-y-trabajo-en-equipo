<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Perfil del líder'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 La noción de liderazgo ha evolucionado considerablemente en las últimas décadas, y es crucial desmitificar la idea de que ser líder está intrínsecamente ligado a ocupar una posición jerárquica, o de autoridad. Ser un líder no se trata únicamente de tener un título o un equipo directamente subordinado; implica, en esencia, la capacidad de influir, inspirar y guiar a otros, independientemente de la posición que se ocupe en una estructura organizativa. Además es importante puntualizar que “liderazgo”, a pesar de ser una sola palabra, abarca una serie de complejidades que superan su definición habitual, lo cual requieren revisar diferentes habilidades cuando se quiere reconocer a un líder.
    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Habilidades requeridas para ser líder

    p.mb-4 El liderazgo es una competencia esencial que puede desarrollarse en diversos contextos de la vida personal, académica y profesional, más allá de los cargos formales.

    .row.bg-marron.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Habilidades requeridas para ser líder
          p.mb-5(data-aos="fade-up") En el PDF Habilidades requeridas para ser líder , se analiza cómo el liderazgo puede ejercerse desde el autoliderazgo hasta la influencia positiva en grupos, destacando habilidades como la empatía, la toma de decisiones, la comunicación y el aprendizaje continuo, que son fundamentales para construir relaciones efectivas y liderar con propósito.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Habilidades requeridas para ser líder
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Características del líder

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Después de explorar los distintos tipos de liderazgo, se llega a la conclusión de que ser un líder no depende exclusivamente del cargo que se ocupa, sino que se basa en las características intrínsecas de cada individuo. Por lo tanto, es fundamental identificar las habilidades que conforman un liderazgo efectivo.
        .row.bg-amarillo.p-4.pb-xl-0(data-aos="fade-up")
          .col-3.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
          .col-12.col-xl-9.d-flex
            p.my-auto Estas habilidades pueden clasificarse en dos amplias categorías: las relacionadas con el "ser" y las vinculadas con el "hacer". En primer lugar, las cualidades del "ser" son, sin duda, las más significativas y, al mismo tiempo, las más desafiantes para desarrollar.
        p.mb-4 Estas competencias blandas, que incluyen aspectos como la empatía, la comunicación efectiva y la capacidad de inspirar confianza, son esenciales para influir, conectar y movilizar a otros.
        span Conozcamos un poco más sobre estas características:

      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Conocimiento del sector y de la organización
              p También esta clasificación podría darse en competencias de negocio, competencias interpersonales y competencias personales. Las primeras hacen referencia al conocimiento del sector y de la organización, a la gestión y negociación de los recursos, al trato con clientes y todo lo que tenga una repercusión directa en los beneficios económicos; en cuanto al segundo grupo, son aquellas competencias que permiten el desarrollo de las capacidades de los empleados y su correcta funcionalidad en el trabajo. Y, finalmente, las personales son aquellos aspectos del autoliderazgo que promueven la profesionalidad y la ejemplaridad del directivo (Cardona, 2008).
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Autoformación
              p Para iniciar, está la <b>capacidad</b> que presenta el líder; se presenta como una figura que no solo guía a otros, sino que también se dirige a sí mismo con claridad y propósito. Este tipo de líder se caracteriza por una profunda autoconciencia, que le permite reconocer sus fortalezas y debilidades. En su interior cultiva  una mentalidad de crecimiento, entendiendo que cada desafío es una oportunidad para aprender y evolucionar.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Empatía
              p La <b>empatía</b> es otra de las cualidades fundamentales de un líder en esta esfera. Al comprender y conectar con las emociones y necesidades de los demás, este líder no solo crea un ambiente de confianza, sino que también inspira a su equipo a alcanzar su máximo potencial. La autenticidad se convierte en su estandarte; actúa de  acuerdo con sus valores y principios, lo que le otorga credibilidad y respeto.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Capacidad de comunicación
              p Probablemente la habilidad con mayor importancia y más retadora de desarrollar es la de un <b>excelente comunicador</b>. No solo se trata de  transmitir la visión de manera efectiva, sino que también escucha activamente, fomentando un diálogo abierto que permite a todos sentirse valorados y escuchados. Esta comunicación bidireccional, es esencial para la cohesión y el compromiso del equipo.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Resiliencia
              p Continuando con la explicación de las habilidades del “ser”, se encuentra la <b>resiliencia</b>. Ante la adversidad, este líder se mantiene firme y adaptable, aprendiendo de las dificultades y motivando a su equipo a hacer lo mismo. Su capacidad para gestionar el estrés y mantener una actitud positiva frente a los obstáculos, es contagiosa y crea un ambiente donde los demás se sienten seguros para innovar y experimentar.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Ser integro
              p De igual manera <b>la integridad</b> también juega un papel vital, puesto que la honestidad y la ética generan confianza y respeto, entre los seguidores. Por otro lado, la adaptabilidad es esencial; los líderes deben ser flexibles y capaces de enfrentarse a cambios y desafíos, mostrando resiliencia y una disposición para aprender en un entorno en constante evolución.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')

    .d-flex.align-items-start.bg-verde.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 110px' src='@/assets/curso/unidad/img-17.png', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 Como se evidencia, ser líder tiene diferentes características con una gran importancia y relevancia en el accionar del líder, para así generar un ser integral, consciente de sí mismo y de su entorno, capaz de inspirar y guiar a otros, mientras continúa su propio viaje de desarrollo personal y profesional.

    h2 Conocimiento técnico y toma de decisiones
    .row.mb-4
      .col-10.col-lg-6.col-xl-4.bg-azul.p-4.d-flex(data-aos='fade-up')
        span Por otro lado, las habilidades del "hacer" se refieren a las acciones concretas y estrategias que un líder implementa para alcanzar objetivos y resolver problemas. Aunque estas habilidades son importantes, carecen del mismo impacto transformador que las cualidades del "ser". Un líder puede poseer un gran conocimiento técnico y ser capaz de tomar decisiones acertadas, pero sin las competencias interpersonales adecuadas, su influencia será limitada. 
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
      .col-10.col-lg-6.col-xl-4.bg-naranja.p-4.d-flex(data-aos='fade-up')
        span Un liderazgo efectivo se fundamenta en un equilibrio entre el "ser" y el "hacer", donde las características personales juegan un papel crucial en la capacidad de un individuo para guiar y motivar a otros hacia el logro de metas compartidas. Este entendimiento permite desarrollar líderes más completos y capaces de enfrentar los retos del entorno actual.

    h2 Motivación al logro
    .row.mb-4.bg-verde-oscuro.p-4.py-xl-0
      .col-12.col-xl-8.d-flex(data-aos='fade-up')
        p.my-auto.text-white Ya entrando en contexto organizacional, un buen líder también sabe cómo motivar a su equipo, reconociendo sus logros y alentando su desarrollo personal y profesional. La confianza, tanto en uno mismo como en las habilidades del equipo, resulta ser un aspecto fundamental, porque un líder seguro puede inspirar a los demás a confiar en sus propias capacidades. La competencia de delegar tareas es igualmente importante, pues un líder efectivo sabe cuándo y cómo hacerlo, lo que permite a los miembros del equipo desarrollarse y asumir responsabilidades.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Resolución de conflictos
              p También es necesario tener la habilidad para resolver conflictos, pues al gestionar  personas, cada una con características y personalidades distintas, se hace indispensable mantener un ambiente de trabajo positivo, así como la pasión y el compromiso por su trabajo, que pueden inspirar a los demás a dar lo mejor de sí mismos. Estas características pueden manifestarse de diferentes maneras, según el estilo de liderazgo de cada individuo, ya sea autoritario, democrático, transformacional, entre otros; sin embargo, en general, un líder efectivo combina varias de estas cualidades, para guiar a su equipo hacia el éxito.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Toma de decisiones
              p Además, los líderes son responsables de tomar decisiones, incluso en situaciones difíciles o bajo presión. Deben ser capaces de evaluar información y asumir riesgos calculados, siempre buscando soluciones creativas para los problemas que surgen. La inspiración y la motivación son otras de sus cualidades claves. Un buen líder sabe cómo inspirar a su equipo, creando un entorno en el que cada miembro se sienta valorado y motivado para dar lo mejor de sí mismo. Reconocer los logros y fomentar un sentido de propósito en el trabajo, son aspectos esenciales para mantener a todos enfocados y comprometidos.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Adaptación y flexibilidad 
              p Sin duda, el mundo actual exige de parte del líder y cualquier colaborador, adaptabilidad y flexibilidad. Los contextos cambian constantemente, por lo que un líder debe ser capaz de ajustarse a nuevas situaciones y desafíos. La disposición para aprender y la capacidad para modificar estrategias, son esenciales para continuar avanzando con éxito. La integridad y la ética son igualmente cruciales, debido a que un líder debe actuar con honestidad, coherencia y mantener altos estándares morales. Esto genera confianza y respeto, lo que facilita la construcción de relaciones duraderas, dentro del equipo y con otros <i>stakeholders</i>.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Capacidad para trabajar en equipo
              p Aunque un líder tiene una posición destacada, el trabajo en equipo es igualmente esencial. Un buen líder fomenta la colaboración, el respeto mutuo y la cooperación dentro del grupo, lo que lleva a la construcción de equipos más cohesionados y efectivos. Finalmente, características adicionales como la autoconfianza, la humildad y la capacidad de innovación, también contribuyen al perfil de un líder. La autoconfianza permite tomar decisiones con seguridad, la humildad facilita el reconocimiento de los logros ajenos, y la capacidad de innovación lleva a cuestionar lo establecido y proponer soluciones novedosas.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')

    .d-flex.align-items-start.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-5
      img.me-3(style='width: 95px' src='@/assets/curso/unidad/img-68.png', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 Como se evidencia, el perfil del líder se caracteriza por un equilibrio entre habilidades técnicas, sociales y emocionales. No se trata simplemente de dar órdenes, sino de influir positivamente en su equipo, motivar a los miembros y guiar al grupo hacia el éxito común.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/80021?page=4") Pazmiño Cruzatti, I. (2010). Liderazgo, más que una estrategia gerencial. EDITEKA Ediciones.
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/116513?page=6") Adame, R. (2017). La invención del futuro: el desafío del liderazgo. Bubok Publishing S.L.
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/podcast-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://open.spotify.com/episode/0IGJGoiDAHILJfeo2XOqLq?si=5WxOP0jOTcW93IMA0ei_2A") [Podcast] Cebrián M, González M y Muiño L (2019, 1 de mayo). ¿Cómo ser un buen líder?
          
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
