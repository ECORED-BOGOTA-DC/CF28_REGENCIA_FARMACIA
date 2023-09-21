<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Contabilidad básica

    .row.justify-content-center.align-items-center
      .col-lg-8
        p(data-aos="fade-right") <b>La contabilidad es una técnica</b> que tiene como finalidad apoyar y optimizar los procesos de la administración y de la economía en una organización empresarial, su enseñanza requiere de objetivos claramente definidos y prácticos, factibles de aplicar con exacta precisión.
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-right")
          p.mb-0 <b>Decreto 2649 de 1993</b> Por el cual se reglamenta la contabilidad en general y se expiden los principios o normas de contabilidad generalmente aceptados… Art. 1°. <b>Definición</b>. De conformidad con el artículo 68 de la Ley 43 de 1990, se entiende por principios o normas de contabilidad generalmente aceptados en Colombia, el conjunto de conceptos básicos y de reglas que deben ser observados al registrar e informar contablemente sobre los asuntos y actividades de personas naturales  o jurídicas. Apoyándose en ellos, la contabilidad permite identificar, medir, clasificar, registrar, interpretar, analizar, evaluar e informar, las operaciones de un ente económico, en forma clara, completa y fidedigna.
        p(data-aos="fade-right") A continuación, se explicará su definición, funciones, objetivo, características de la información contable y principios de contabilidad.
      .col-8.col-lg-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.p-4.mt-5.bg-1-tema-2(data-aos="fade-up")
      .col-lg-9
        p <b>La contabilidad</b> es una actividad complementaria del proceso económico, cuyo fin es brindar apoyo a los procesos administrativos de una compañía haciéndola más eficiente. Los informes y resultados que se entregan como parte de esta actividad son de utilidad para que los Ejecutivos puedan tomar decisiones que orienten el futuro de la empresa. 
        p Es el arte de elaborar registros, clasificar información, resumirla y expresarla en dinero. En este proceso están involucradas todas las operaciones que realice la compañía dentro de su actividad económica.
      .col-10.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img2.svg', alt='Imágen decorativa').img2-tm2

    .row.justify-content-center.align-items-center.mb-5.mt-5
      p.text-center.mb-5(data-aos="fade-right") <b>La contabilidad tiene las siguientes funciones:</b>
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img3.png', alt='Imágen decorativa')
      .col-lg-8(data-aos="fade-left")
        TabsA.color-secundario
          .tarjeta.tarjeta-morada.p-5(titulo="Históricas")
            p Están relacionadas con todos los registros históricos organizados de manera cronológica, relacionados con los aspectos del orden económico que van sucediendo en la vida de la empresa, por ejemplo: llevar registros ordenados de las fechas de todos los procesos de cobros y pagos realizados.
          .tarjeta.tarjeta-morada.p-5(titulo="Estadística")
            p Es el resultado del análisis de todos hechos desde el punto de vista económico, presentados de manera cuantitativa, que otorgan una visión de la realidad de como se ve afectada positiva o negativamente la empresa,  por ejemplo: ver y analizar el crecimiento económico de la empresa en los últimos 6 años.
          .tarjeta.tarjeta-morada.p-5(titulo="Económica")
            p Se encarga de estudiar el proceso que se sigue para la generación de un producto final, por ejemplo: costo – beneficio.
          .tarjeta.tarjeta-morada.p-5(titulo="Financiera")
            p A través de esta se realiza un análisis de los mecanismos para obtener los recursos necesarios para dar cumplimiento con los compromisos adquiridos por la empresa, por ejemplo: determinar el presupuesto que tiene la empresa, los plazos para cobrarle a los clientes y pago a proveedores.
          .tarjeta.tarjeta-morada.p-5(titulo="Fiscal")
            p Es conocer qué y cómo impactan las decisiones fiscales, además de tener conocimiento de todos los impuestos existentes, por ejemplo: impuesto único, IVA, renta, etc.
          .tarjeta.tarjeta-morada.p-5(titulo="Legal")
            p Se trata de poder tener conocimiento de aquellas partes (artículos), relacionados con el código de comercio, del trabajo y otras leyes, que pueden impactar a la compañía desde el punto de vista contable, por  ejemplo: salud, riesgos laborales, asegurador de fondos de pensión, etc.

    .row.justify-content-center.mt-5
      p.text-center(data-aos="fade-right") <b>Sus objetivos son:</b>
      .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center Proveer una imagen basada en un número que refleje el contexto real de la compañía sus actividades, el conocimiento del patrimonio y las modificaciones que surjan.

      .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta-numerada.color-secundario.p-5.h-100(style="border-color: #CBBFF4 !important")
          .tarjeta-numerada__numero(style="background-color: #CBBFF4 !important")
            .h2 2
          p.text-center Facilitar resultados, expresado en cifras para dar orientación a la gerencia en la toma de decisiones.

      .col-lg-4.col-sm-8(data-aos="fade-left")
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            Cuando Brindar la correcta justificación para el adecuado manejo de los recursos de la compañía. 
   
    .row.justify-content-center.align-items-center.mt-5.bg-2-tema-2(data-aos="flip-down")
      .col-lg-2
        p <b>Ahora, la información contable tiene como característica que es:</b>
      .col-lg-6
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img4.png', alt='Imagen que contiene las características de la información contable que son:<br>Verdadera y fidedigna<br>Exacta<br>Oportuna<br>Económica<br>Referida a un nivel<br>Clara')

          .tarjeta.color-primario--borde.p-3(x="50%" y="4%" numero="+")
            .h5.mb-2 Exacta.
            p Coincidir con los datos contenidos y reportados en los documentos originales (facturas, cheques, y otros).
          .tarjeta.color-primario--borde.p-3(x="9%" y="25%" numero="+")
            .h5.mb-2 Verdadera y fidedigna.
            p Los registros e informes generados deben reflejar la situación real de los hechos.
          .tarjeta.color-primario--borde.p-3(x="9%" y="76%" numero="+")
            .h5.mb-2 Clara.
            p Reportar información que no induzca al error y que sea muy comprendida por los miembros de la compañía.
          .tarjeta.color-primario--borde.p-3(x="50%" y="97%" numero="+")
            .h5.mb-2 Referida a un nivel.
            p Elaborada según las necesidades de quien recibirá dicha información (destinatario).
          .tarjeta.color-primario--borde.p-3(x="91%" y="76%" numero="+")
            .h5.mb-2 Económica.
            p Con un costo inferior al beneficio que reporta.
          .tarjeta.color-primario--borde.p-3(x="91%" y="25%" numero="+")
            .h5.mb-2 Oportuna.
            p Disponible al momento que la información sea requerida.
      .col-lg-4
        p Con la finalidad que los estados de los aspectos financieros sean entendidos por terceros, es muy importante que sean preparados siguiendo unas reglas establecidas o convenciones que se conozcan previamente y que sean aceptadas de manera general.
        p Dichos principios son muy puntuales y representan reglas básicas relacionadas con las normas, derivados de los factores económicos y políticos del medio ambiente, culturas, formas de pensar y la forma como esté segmentada la comunidad que está involucrada en el mundo de los negocios.

    .row.justify-content-center.align-items-center.mt-3
      .col-9(data-aos="fade-right")
        p.text-center <b>Por último, a continuación se puede reconocer los principios contables de aceptación general, definidos según características del medio ambiente en el que se mueve el mundo de la contabilidad.</b>

    LineaTiempoD.color-acento-contenido.mt-5(data-aos="fade-right")
      .row(numero="1" titulo="Equidad")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 Este principio contable debe ser una preocupación constante en contabilidad, ya que cada una de las partes involucradas, que utilizan los datos contables, pueden poner sus intereses particulares por encima del bien común. Por esta misma razón, se debe tener muy presente que los estados financieros reflejen equidad entre las partes. Este principio es la base sobre la que se sostienen los demás principios.

      .row(numero="2" titulo="Entidad contable")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 Los estados financieros se relacionan con entidades económicas muy específicas, que deben ser diferentes al dueño o dueños de esta.
      
      .row(numero="3" titulo="Empresa en marcha")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 La empresa debe presentar constancia de su situación financiera y esta debe estar relacionada con el tiempo que lleve constituida.

      .row(numero="4" titulo="Bienes económicos")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 Los estados financieros se refieren a hechos, recursos y obligaciones económicas susceptibles de ser valorizados en términos monetarios.

      .row(numero="5" titulo="Moneda")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 La medición de la contabilidad en términos monetarios, permite simplificar todo a un común denominador.

      .row(numero="6" titulo="Período de tiempo")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 Debido a requerimientos legales, ciclos operacionales u otros, los estados financieros reflejan la información relativa a períodos de tiempo específicos.
      
      .row(numero="7" titulo="Devengado")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 Cuando se compra o se vende mercancías si que eso esté saldado con los proveedores o clientes, eso debe ser registrado en caso de que sea una venta o compra y el cobro o pago cuando se produzca.

      .row(numero="8" titulo="Realización")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 Es aquel principio que identifica los ingresos en las cuentas cuando todo el proceso está completo y se puede verificar la venta de la mercancía o la prestación del servicio al cliente. 

      .row(numero="9" titulo="Costo histórico")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 El principio de costo histórico determina que la empresa proporcione información de sus activos específicos como propiedades, cuentas por cobrar, equipos, planta e inventarios.

      .row(numero="10" titulo="Objetividad")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 El principio de la objetividad busca evaluar de manera contable todas aquellas actividades económicas y financieras en que la empresa participa. Sólo se debe registrar las operaciones cuando se tenga soportes que evidencien qué sucedió y se conozca su valor. 
      
      .row(numero="11" titulo="Criterio prudencial")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 Dicho criterio contable representa uno clasificado como general o genérico, el cual obliga a tomar en cuenta todos la información y criterios de juicios que se encuentren disponibles para que la elección, dentro de las alternativas que se tengan, sea la correcta. Esto con el objetivo de cuantificar todos los aspectos contables con una certeza mayor.

      .row(numero="12" titulo="Importancia relativa")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 Este principio considerado como básico en contabilidad, se refiere a que la información que pertenezca a los estados contables debe incluir cualquier información que se considere influyente o significativa para una mejor toma de decisiones.

      .row(numero="13" titulo="Uniformidad")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 Este principio se considera una norma de contabilidad que indica que una compañía, debe mantener sus criterios contables en el tiempo y no variarlos. En caso de querer cambiarlo, esto debe quedar registrado o ser comunicado.

      .row(numero="14" titulo="Fondo sobre la forma")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 Dicho principio contable se refiere a que la contabilidad enfatiza en el contenido económico de todos los eventos, aunque los entes regulatorios no lo consideren así.
      
      .row(numero="15" titulo="Dualidad económica")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 El principio de la dualidad económica es muy importante debido a que se basa en temas fundamentales relacionados con la contabilidad. Dicho principio manifiesta que los recursos pertenecientes a la empresa sean propios o de otros, deben ser los mismos a los que den origen a las transacciones.

      .row(numero="16" titulo="Estados financieros")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 Este principio contable indica que los resultados contables deben de ser reportados integralmente: por medio de un informe del estado financiero y un estado de cuentas como respaldo.

      .row(numero="17" titulo="Información financiera")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 Dicho principio indica que la información financiera tiene como objetivo principal servir de manera objetiva a todos los usuarios que estén involucrados con el lenguaje de la contabilidad y las prácticas operacionales de la compañía.

      .row(numero="18" titulo="Exposición")
        .col-md-12.mb-4.mb-md-0
          p.mb-0 Este principio se refiere a que toda la información contable debe estar al alcance de los interesados, con el objetivo de ser juzgada e interpretada de acuerdo con los resultados operacionales y la situación en la que se encuentre la empresa.

    
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

<style lang="sass"></style>
