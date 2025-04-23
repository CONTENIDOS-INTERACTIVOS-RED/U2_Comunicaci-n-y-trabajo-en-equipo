<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Concepto de trabajo en equipo'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-azul.p-4(data-aos="fade-left")
          p.mb-0(data-aos="fade-up") Continuando con la exploración de los aspectos fundamentales del liderazgo, uno de los componentes más relevantes es el trabajo en equipo. Al igual que el liderazgo, el trabajo en equipo es un concepto amplio, multifacético y cargado de diversas características interrelacionadas. Describirlo adecuadamente, implica no solo identificar las cualidades que lo definen, sino también entender cómo estas cualidades interactúan y contribuyen al éxito colectivo.
        .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
      
      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          p.mb-4(data-aos="fade-up") Antes de profundizar en los componentes de trabajo en equipo, es necesario realizar una diferenciación entre equipo y grupo, que aunque parecen similares hay una brecha entre sí:
          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-25.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Grupo
                p.px-1.text-small.mb-0.text-center En cuanto al grupo, lo conforman dos o más individuos que forman un conjunto. 
            .col-10.col-md-8.col-lg-6.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-26.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Equipo
                p.px-1.text-small.mb-0.text-center Para llegar a ser equipo, es necesario que se reconozcan entre sí, que tengan un identidad y les de coherencia y sin duda debe haber una interacción entre sus miembros que les permitirá alcanzar los objetivos propuestos.

          #t_2_1.titulo-segundo(data-aos="flip-up")
            div.d-flex
              span.me-3 2.1
              h2 Componentes del trabajo en equipo

          .row.mb-4
            .col-12.col-xl-8
              .bg-verde.p-4.mb-4(data-aos="fade-up")
                span Ahora, profundizando en cuanto al trabajo en equipo, va más allá de la simple colaboración entre individuos; se trata de un proceso dinámico en el que cada miembro aporta sus fortalezas, habilidades y perspectivas únicas, para alcanzar objetivos comunes. La verdadera esencia del trabajo en equipo, radica en la capacidad de coordinar esfuerzos de manera armoniosa, respetando las diferencias y complementarse mutuamente en la consecución de metas compartidas.
              h2 Claridad en los objetivos
              span Los equipos en el contexto organizacional, pueden presentarse de cuatro maneras diferentes:
            .col-4.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
      
      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row.mb-4
            .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Equipos auto gestionados
                  p.text-small.px-4.text-center.pb-2 Los cuales son responsables de realizar un producto, componente o servicio.
            .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Equipos de proyecto
                  p.text-small.px-4.text-center.pb-2 Se caracterizan por tener un proyecto con un comienzo y fin determinado.
            .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Equipos paralelos
                  p.text-small.px-4.text-center.pb-2 Quienes se centran en un problema o cuestión que requiere solo un compromiso a tiempo parcial.
            .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Equipos virtuales
                  p.text-small.px-4.text-center.pb-2 Que, como su nombre lo indica, se caracterizan por estar conectados a través de herramientas tecnológicas en diferentes lugares del mundo (Varios, 2013).

      .row.bg-verde-oscuro.p-4.py-xl-0.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex(data-aos="fade-up")
          p.my-auto.text-white Para entender un poco sobre el hecho de trabajar todos por un objetivo en común, se expondrá y abordará sobre “Ubuntu”. Es un concepto profundamente arraigado en las culturas africanas, especialmente en las comunidades de Sudáfrica, que se refiere a la interconexión y solidaridad entre las personas. Su significado literal puede traducirse como "Yo soy porque nosotros somos", lo que refleja la idea de que el bienestar de un individuo está estrechamente vinculado al bienestar de la comunidad. Este principio subraya la importancia de la cooperación, el respeto mutuo y la empatía, y se considera fundamental en las relaciones humanas.


      .row.mb-4
        .col-12.col-xl-8
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-33.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 En el contexto del trabajo en equipo, Ubuntu resalta la idea de que las personas no deben ser vistas como individuos aislados, sino como partes de un todo colectivo. En lugar de enfocarse en logros personales o individuales, este concepto enfatiza el trabajo conjunto hacia un objetivo común, donde cada miembro del grupo contribuye con sus habilidades y fortalezas, al bienestar colectivo. La clave de Ubuntu es la colaboración armónica, el apoyo mutuo y la importancia de escuchar y entender a los demás. 
          span Es un concepto que se ha traído al occidente y su aplicabilidad en las organizaciones modernas es significativa, especialmente en aquellas que buscan crear un entorno laboral inclusivo, colaborativo y productivo. Integrar los principios de Ubuntu en un equipo o en una organización, implica fomentar una cultura de cooperación y respeto, en la que cada miembro se sienta valorado y parte esencial del éxito común.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')

      .row.mb-4.mx-0
        .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.align-items-center.bg-azul.p-4(data-aos="fade-left")
          p.mb-0(data-aos="fade-up") En términos prácticos, aplicar Ubuntu en las organizaciones, significa promover la idea de que el éxito colectivo es más importante que los logros individuales. Esto puede traducirse en prácticas como la toma de decisiones colaborativas, la construcción de relaciones de confianza, el fomento del trabajo en equipo y el apoyo mutuo frente a los desafíos.
 
      p.mb-4 Además, Ubuntu inspira a los líderes a ser conscientes de las necesidades de sus colaboradores, a empoderar a sus equipos y a reconocer la importancia de la solidaridad, para alcanzar los objetivos organizacionales.
      p.mb-4 Si duda hablar de Ubuntu pone énfasis en:

      .row.mb-4
        .col-10.col-md-6.col-xl-4
          .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-36.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-3.text-bold Primero
              span La interdependencia
        .col-10.col-md-6.col-xl-4
          .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-37.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-3.text-bold Segundo
              span La solidaridad
        .col-10.col-md-6.col-xl-4
          .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-38.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-3.text-bold Tercero
              span El respeto mutuo

      .row.mb-4
        .col-12.col-xl-8
          .row.bg-marron.p-4.pb-xl-0.mb-4(data-aos="fade-up")
            .col-3.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
            .col-12.col-xl-9.d-flex
              p.my-auto Su aplicación en las organizaciones no solo promueve un ambiente de trabajo más armonioso, sino que también fortalece la capacidad del equipo para lograr objetivos comunes de manera más eficiente y con un mayor sentido de propósito compartido.
          p.mb-4 Como ya se ha mencionado, el trabajo en equipo se presenta como un concepto fundamental en el ámbito organizacional, describiendo la colaboración de un grupo de individuos que se unen para alcanzar un objetivo común. Este enfoque trasciende más allá de la suma de esfuerzos individuales, enfocándose en la interacción, la comunicación y la sinergia que emergen, cuando las personas trabajan juntas de manera coordinada.

          span Dentro de las características del trabajo en equipo, se destaca:
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')

      TabsC.mb-0
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Objetivo común', :icon="require('@/assets/curso/unidad/img-41.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-42.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Objetivo común
              p(data-aos='fade-up') La existencia de un objetivo común, que une a los integrantes del equipo bajo un propósito específico. Este objetivo proporciona una dirección clara y motiva a cada miembro a colaborar en la consecución de metas compartidas.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Diversidad de habilidades', :icon="require('@/assets/curso/unidad/img-41.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-43.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Diversidad de habilidades
              p(data-aos='fade-up') Es otra característica esencial, dado que cada integrante aporta un conjunto único de conocimientos y experiencias. Esta variedad permite abordar problemas desde distintas perspectivas y encontrar soluciones más creativas y efectivas.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Interdependencia', :icon="require('@/assets/curso/unidad/img-41.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-44.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Interdependencia
              p(data-aos='fade-up') La interdependencia entre los miembros del equipo es igualmente crucial, dado que todos dependen unos de otros, para completar tareas y alcanzar el objetivo. Esta dinámica fomenta la cohesión y el compromiso entre los integrantes.

      .bg-verde-oscuro.mb-4.p-4(data-aos='fade-up')
        span.text-white Promover el trabajo en equipo dentro de una organización, es fundamental, lo cual debe ser parte de la cultura organizacional, y aunque parece sencillo y hasta obvio, debe ser gestionado desde la estrategia y los líderes.
          
      p.mb-4 Sin duda será necesario para alcanzar objetivos comunes y fomentar un ambiente de colaboración. Por ello, para lograr este objetivo, es necesario que ciertas características y acciones claves se integren en la cultura organizacional, como son:

      .row.mb-4
        .col-12.col-xl-8
          LineaTiempoD.color-secundario.large
            p(numero='1' titulo='Claridad en la comunicación ') Para iniciar, la <b>comunicación abierta y efectiva</b>, es fundamental en un equipo de trabajo, puesto que facilita la colaboración al permitir que los miembros compartan ideas, opiniones y preocupaciones, de manera constructiva. Para que esto ocurra, es esencial establecer un clima de confianza donde los empleados se sientan seguros al expresar sus pensamientos, y se valore la integridad y la sinceridad. Adicionalmente, la definición clara de roles y responsabilidades, evita confusiones y conflictos, contribuyendo al buen funcionamiento del equipo y reforzando su capacidad de trabajar juntos hacia objetivos comunes.
            p(numero='1' titulo='Diversidad e inclusión') Por otro lado está la <b>diversidad y la inclusión</b>, acciones que, en la actualidad juegan un papel importante y transciende de la inclusión de la comunidad LGBTI. Pues es necesario valorar diferentes perspectivas y habilidades, lo cual enriquece el equipo y genera soluciones más creativas e innovadoras. Asimismo, es fundamental establecer objetivos comunes que alineen los esfuerzos de todos los miembros, brindándoles un sentido de propósito y dirección. El reconocimiento y la valoración de los logros individuales y colectivos, refuerzan la cohesión del grupo, al igual que la flexibilidad, que permite a los equipos adaptarse a los cambios y desafíos, beneficiando la colaboración.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
      
      .row.bg-marron.p-4.py-xl-0.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex(data-aos="fade-up")
          p.my-auto Sin duda hablar de trabajo en equipo, incluye el respeto mutuo, porque se hace necesario promover un ambiente donde se valoren las opiniones y el trabajo de cada miembro del equipo se hace esencial para la cohesión. Un ambiente de confianza y respeto mutuo es esencial para el óptimo funcionamiento del equipo, debido a que los integrantes deben sentirse valorados y seguros al expresar sus opiniones. La importancia del trabajo en equipo en el contexto organizacional es evidente, dado que es vital para el éxito de cualquier organización. Este enfoque promueve la innovación y la creatividad, permitiendo que surjan ideas nuevas y se desarrollen soluciones efectivas a problemas complejos. Además, mejora la eficiencia al permitir que las tareas sean divididas y realizadas simultáneamente, acelerando así el proceso de trabajo.

      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 Acciones que orientan el trabajo en equipo

      p.mb-4 Para facilitar y fomentar el trabajo en equipo, se pueden llevar a cabo diversas acciones:
      ImagenInfografica.color-secundario.mb-0.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-47.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='43.4%' y='83%' numero='+')
          .h5.mb-2 1. Organizar actividades de <i>team building</i>
          p  <b>Organizar actividades de <i>team building</i></b>, que fortalezcan las relaciones interpersonales y la cohesión del grupo. También es importante ofrecer capacitación en habilidades interpersonales, tales como comunicación, resolución de conflictos y liderazgo, que son esenciales para un trabajo en equipo efectivo.
        .tarjeta.bg-white.p-4(x='43.4%' y='16%' numero='+')
          .h5.mb-2 2. Asignación de proyectos en grupo
          p  <b>Asignación de proyectos en grupo</b>, permite que los miembros practiquen el trabajo en equipo en un contexto real, mientras que un sistema de <i>feedback</i> constructivo, promueve la mejora continua al permitir que los miembros evalúen su desempeño y el de sus compañeros. Esto
        .tarjeta.bg-white.p-4(x='57.5%' y='16%' numero='+')
          .h5.mb-2 3. Facilitar la mentoría entre compañeros
          p  <b>Facilitar la mentoría entre compañeros</b>, donde los miembros más experimentados guían a los nuevos, contribuye a un ambiente de apoyo. Además, la celebración de los éxitos del equipo, mediante protocolos o prácticas, refuerza la motivación y el sentido de pertenencia.
        .tarjeta.bg-white.p-4(x='57.5%' y='83%' numero='+')
          .h5.mb-2 4. Definir claramente los roles y responsabilidades de cada miembro dentro del equipo
          p  <b>Definir claramente los roles y responsabilidades de cada miembro dentro del equipo</b>, para evitar confusiones y asegurar que todos sepan cómo contribuir al objetivo común. 

      .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 100px' src='@/assets/curso/unidad/img-48.png', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0 Al implementar estas características y acciones en la cultura organizacional, se puede crear un entorno que no solo fomente el trabajo en equipo, sino que también mejore el rendimiento y la satisfacción de los empleados, un aspecto esencial en cualquier organización, ya que el éxito a menudo depende de la colaboración efectiva entre individuos.

      #t_2_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.3
          h2 Responsabilidades del líder 

      p.mb-4 Sin duda, una organización que promueve e implementa el trabajo en equipo, también fomenta un ambiente de aprendizaje continuo, donde los miembros pueden aprender unos de otros, compartir conocimientos y desarrollar nuevas habilidades, enriqueciendo su experiencia profesional y personal. Desde la perspectiva organizacional, esta práctica contribuye a una mayor satisfacción laboral; cuando los empleados sienten que forman parte de un equipo, su compromiso y motivación aumentan, lo que se traduce en una menor rotación de personal y un mejor rendimiento general.
      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Primero 
                p Para los líderes, fomentar el trabajo en equipo es una de las claves fundamentales para el éxito organizacional. Un buen líder no solo debe ser capaz de guiar, sino también de crear un ambiente propicio para la colaboración, donde cada miembro se sienta motivado, valorado y parte esencial del proyecto.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Segundo
                p Esto requiere la capacidad de establecer objetivos claros, así como proporcionar el apoyo y los recursos necesarios para que el equipo los alcance. El liderazgo efectivo en este contexto, no solo se basa en orientar, sino en inspirar, motivar y facilitar la interacción entre los miembros, integrando sus fortalezas, asignando tareas de manera adecuada y cultivando un entorno donde todos se sientan responsables del éxito colectivo.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Tercero
                p Dentro de sus responsabilidades, los líderes deben actuar como facilitadores de la comunicación y resolver conflictos que puedan surgir. Un liderazgo efectivo, en este contexto, incluye el reconocimiento y celebración de los logros del grupo, así como el fomento del desarrollo de habilidades interpersonales y de resolución de problemas.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')

      .row.mb-5
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-53.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Para finalizar, es importante destacar que, en un equipo de alto rendimiento, la comunicación efectiva, la confianza mutua y el compromiso con los objetivos son elementos cruciales. Además, un equipo exitoso debe ser capaz de manejar conflictos de manera constructiva, reconocer y aprovechar las fortalezas de cada miembro, y mantener un enfoque conjunto hacia los resultados. En este sentido, el trabajo en equipo no solo impulsa el éxito organizacional, sino que también fomenta un ambiente de crecimiento y aprendizaje constante, entre los miembros.

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/53968?page=1") Aguado, D. & Arranz, V. (2014). Habilidades para el trabajo en equipo: programa de entrenamiento. Editorial Universidad Autónoma de Madrid.
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/53545") Kaufmann, A. (2011). Equipos de trabajo: de la emoción a la transfor-acción. Editorial Universidad de Alcalá.
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/4SHKXPD_9no?si=efOyNfBlPErAhWdR") [Vídeo] Empleabilidad y Negocios con Katya (2022, 2 de mayo). El poder del trabajo en equipo.
            
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
