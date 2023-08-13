<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-right")
      p.titulo.pb-0.mb-0 <b>Tecnología en gestión eficiente de la energía</b> 
      p.mb-0 Síntesis: Base de datos

    .row.justify-content-center
      .col-12
        p El componente formativo bases de datos abarca diversos aspectos clave para su comprensión y aplicación. En primer lugar, se explora la introducción a las bases de datos, incluyendo la evolución y los diferentes tipos existentes, así como las herramientas de #[em software] más conocidas utilizadas en este ámbito. Luego, se analizan las fases del proceso de desarrollo de bases de datos, centrándose en la conceptualización de entidades, relaciones y atributos, y el modelo ER. Se examinan también los procedimientos fundamentales en bases de datos, como los índices, las vistas, los reportes o informes, los permisos y roles de usuario, la optimización y la limpieza de la base de datos, así como las pruebas necesarias. Finalmente, se destaca la importancia de MySQL, una popular herramienta de gestión de bases de datos ampliamente utilizada en la industria.
      .col-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
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
