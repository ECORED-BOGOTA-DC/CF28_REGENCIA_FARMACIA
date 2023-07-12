<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Promesa del cliente

    .row.justify-content-center.align-items-center
      .col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='alt')
      .col-lg-8
        .cajon.color-secundario.p-4
          p.mb-0 Los clientes son la razón de ser de una empresa, por lo cual ofrecerles un buen servicio y a tiempo es de vital importancia para su fidelización.  

        p.mt-3 Es importante tener presente que son los clientes quienes determinan si la organización cumple o no cumple con las promesas divulgadas, porque para ellos cumplir con lo prometido es:

        .row.justify-content-center.mb-4
          .col-lg-4
            ul.lista-ul--color
              li
                i.fas.fa-atom(style='color: #7E5EE3') 
                | Una venta a tiempo

          .col-lg-4
            ul.lista-ul--color
              li
                i.fas.fa-atom(style='color: #7E5EE3') 
                | Cantidades completas

          .col-lg-4
            ul.lista-ul--color
              li
                i.fas.fa-atom(style='color: #7E5EE3') 
                | Excelente calidad en los productos.

        p Según estudios, un 93% de los consumidores manifiestan incumplimiento en su adquisición, lo que significa que muy posiblemente la mayoría de las organizaciones están trabajando soportados más sobre su propia percepción que en la del cliente.

        p A continuación, se plantean algunos ejemplos de promesas al cliente y cómo se puede caer fácilmente en el incumplimiento.     

    .bg1-tema1
      .row.justify-content-center.align-items-center.mt-5
        .col-md-4.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.w_t_s_2(style="border-color: #81D4FA !important")
            .tarjeta-numerada__numero(style="background-color: #81D4FA !important")
              .h2 1

            p.text-center Cuando quedamos pendientes de entregar un producto de la prescripción médica y prometemos enviarlo a cierta hora y lo hacemos llegar más tarde, al otro día o ni se hace llegar.

        .col-md-4.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario.p-5.w_t_s_2.bgColor_numeral
            .tarjeta-numerada__numero(style="background-color: #CBBFF4 !important")
              .h2 2

            p.text-center Cuando constantemente tenemos faltantes en el inventario, es decir, repetidas veces respondemos “me aparecen 50 unidades, pero no están físicas” o “de ese producto no tengo, se me agotó”.

        .col-md-4.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.w_t_s_2(style="border-color: #4CEBFF !important")
            .tarjeta-numerada__numero(style="background-color: #4CEBFF !important")
              .h2 3
            p.text-center 
              Cuando se entregan productos completos y a tiempo, pero sus empaques están sucios o rotos, lo que da muy mala impresión del producto al punto de poner en tela de juicio la calidad de este.

      .row.justify-content-center.align-items-center.mt-3
        .col-lg-4.mb-4
          .tarjeta-numerada.color-primario.p-5.w_t_s_2(style="border-color: #4CEBFF !important")
            .tarjeta-numerada__numero(style="background-color: #4CEBFF !important")
              .h2 4

            p.text-center Cuando prometemos que el domicilio llega en media hora y realmente le llega al cliente una hora o hasta más tiempo después.

        .col-lg-4.mb-4
          .tarjeta-numerada.color-primario.p-5.w_t_s_2(style="border-color: #81D4FA !important")
            .tarjeta-numerada__numero(style="background-color: #81D4FA !important")
              .h2 5

            p.text-center Cuando se da un precio al inicio y al momento de facturar este es mayor.


    .row.justify-content-center.align-items-center.mt-5
      p Ejemplos hay muchos más, lo importante es reflexionar y detectar todos los posibles errores que se pueden cometer en el momento de cumplir con las promesas del cliente y minimizarlas o erradicarlas. Una estrategia eficaz que ayuda a erradicar muchos errores es el manejo adecuado, claro y conciso del inventario.

    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Tiempos de entrega</span>

    .row.justify-content-center.align-items-center.mt-3
      p El tiempo de entrega o <i>lead time</i> está sujeto al proceso de distribución del producto, donde se mide el tiempo transcurrido desde la solicitud de este hasta el cliente final. 

      p Uno de los grandes objetivos de las empresas es lograr la excelencia en la atención, por lo cual es necesario contar con un proceso de logística que garantice la entrega de los productos en el tiempo acordado y en óptimas condiciones de calidad, teniendo presente que un porcentaje significativo de los compradores consideran de suma importancia los tiempos de entrega de los productos y por ende un mal servicio en este aspecto provoca que estos cambien de marca o proveedor.

    .row.justify-content-center.align-items-center.mt-3
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img2.png', alt='alt')

      .col-lg-8
        p <b>Estas son algunas estrategias claves a la hora de organizar los tiempos de entrega:</b>
        ul.lista-ul--color.lista-ul--separador(style="border-bottom: dotted 2px #B0C0D2;")
          li
            i.fas.fa-atom(style='color: #7E5EE3') 
            | Tener claros los canales de distribución.
          li
            i.fas.fa-atom(style='color: #7E5EE3') 
            | Tener actualizado el inventario general, para tener claridad en qué se tiene y qué hace falta.
          li
            i.fas.fa-atom(style='color: #7E5EE3') 
            | Conocer los productos de mayor demanda y así mismos puntos críticos (cierres parciales de laboratorios fabricantes por vacaciones colectivas) que pongan en riesgo la adquisición de estos.
          li
            i.fas.fa-atom(style='color: #7E5EE3') 
            | Planificar las rutas de distribución, con tiempos definidos reales.

          li
            i.fas.fa-atom(style='color: #7E5EE3') 
            | Usar las tecnologías que permiten ubicar los transportadores en tiempo real.

          li
            i.fas.fa-atom(style='color: #7E5EE3') 
            | Analizar y tener presente los indicadores de gestión de servicio al cliente.

          li
            i.fas.fa-atom(style='color: #7E5EE3') 
            | Capacitar el personal constantemente en servicio al cliente.

    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Volúmenes de despacho</span>
    

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Como se vio anteriormente, la calidad de los productos y la velocidad en la distribución marcan significativamente la decisión de fidelización de los clientes y es ahí donde se debe contar con suficiente flujo interno de producto, cuantía de referencias, rotación, entre otras, que permita comprometerse con el cliente y además anticiparse a eventos futuros.

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
