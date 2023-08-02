<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--gris.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 6
      h1 MySQL

    .caja.p-4(style="background-color:#B1D5F7")
      .row.align-items-around
        .col-1
         figure
          img(src='@/assets/curso/temas/tema6/img1.svg', alt='')

        .col-11
          p MySQL es un verdadero servidor de base de datos SQL multiproceso y multiusuario. SQL es el lenguaje de bases de datos más popular del mundo. MySQL es una implementación cliente / servidor que consta de un dominio de servidor MySQLD y muchos programas y bibliotecas cliente diferentes.


    .row.mt-5
      .col-7
        p(data-aos="zoom-in") SQL es un lenguaje estandarizado que facilita el almacenamiento, la actualización y el acceso a la información, por ejemplo, puede utilizar SQL para recuperar información de productos y almacenar información de clientes para un sitio web. MySQL también es lo suficientemente rápido y flexible como para permitirle almacenar registros e imágenes.
        p(data-aos="zoom-in") Los principales objetivos de MySQL son la velocidad, la solidez y la facilidad de uso. MySQL se desarrolló originalmente porque en TcX se necesitaba un servidor SQL que pudiera manejar bases de datos muy grandes en un orden de magnitud más rápido de lo que cualquier proveedor de bases de datos podría ofrecer. Ahora se ha estado usando MySQL desde 1996 en un entorno con más de 40 bases de datos que contienen 10.000 tablas, de las cuales más de 500 tienen más de 7 millones de filas. Se trata de unos 100 gigabytes de datos de misión crítica. La base sobre la que se construye MySQL es un conjunto de rutinas que se han utilizado en un entorno de producción muy exigente durante muchos años. Aunque MySQL todavía está en desarrollo, ya ofrece un conjunto de funciones poderosas y muy útil. 

        .tarjeta.color-primario.p-3.mt-5.mb-4
              .row.justify-content-around.align-items-center
                .col-auto
                  img(src="@/assets/curso/temas/tema3/img1.svg").img65
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4.mb-1 Para mayor comprensión diríjase al:
                      p.text-small.mb-0 Anexo 9 - Más sobre MySQL 
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_9_Mas_sobre_MySQL.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download
      .col-5
        figure
          img(src='@/assets/curso/temas/tema6/img2.svg', alt='')

    p(data-aos="zoom-in") En el material complementario de este componente se recomiendan una serie de videos donde se explica paso a paso el diseño de una base de datos completa desde cero utilizando la aplicación Microsoft Access. Este material de apoyo amplía mucho más el conocimiento sobre base de datos y permite generar una gran experiencia de diseño. 
      
</template>

<script>
export default {
  name: 'Tema6',
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
