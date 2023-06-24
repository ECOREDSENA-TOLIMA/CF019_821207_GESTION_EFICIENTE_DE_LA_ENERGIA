<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Entidades, relaciones y atributos

    .row.justify-content-center.align-items-center.py-0
      .col-12(data-aos="fade-up")
        p.mb-5 Por medio del siguiente recurso explore todo sobre entidades, relaciones y atributos.
      .col-12.mt-2(data-aos="fade-up")
        figure.mt-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/NaoMfuuuJks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
          
    .row.align-items-center.justify-content-center
      .col-8
        .tarjeta.color-primario.p-3.mt-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema3/img1.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Para mayor comprensión diríjase al:
                  p.text-small.mb-0 Para mayor comprensión diríjase al Anexo 1 - Relaciones en una base de datos. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://docs.google.com/document/d/1ojd75qS-nmacZ1P0AaHxt-56VS9Gezhbf_V-sVsJuH4/edit?usp=sharing" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema3',
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
