<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El <b>seguimiento de inventarios</b> implica utilizar las herramientas y mecanismos de control establecidos por el establecimiento farmacéutico. Algunos de los temas que se abordan en este informe incluyen la promesa del cliente, la contabilidad básica y la estadística.

    p.mb-5 En resumen, el informe de control de inventarios proporciona a los aprendices los conocimientos necesarios para aplicar los mecanismos de control y utilizar las herramientas establecidas por el establecimiento farmacéutico. Esto les permite realizar un seguimiento efectivo del inventario y tomar decisiones informadas basadas en la información estadística y contable disponible. El siguiente esquema proporciona una breve revisión de los temas abordados.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis que resume los temas vistos durante el desarrollo del componente formativo denominado Informe control de inventarios, que comprende grandes temas como son: la promesa del cliente que se refiere a entender y cumplir con las espectativas del cliente; otra gran tema es la contabilidad básica que es una técnica que optimiza los procesos de administración y que es reglamentada por el decreto 2649 de 1993. Finalmente el tema de las estadísticas que permite recopilar y analizar la información, utilizada para la toma de decisiones en el contexto farmacéutico.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
