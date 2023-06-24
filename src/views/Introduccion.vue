<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción a las bases de datos

    .row.justify-content-center.align-items-center.py-0
      .col-12(data-aos="fade-up")
        p.mb-5 A partir del siguiente recurso podrá explorar el inicio de las bases datos y cómo funcionan.
    
    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row.mt-5
          .col-md-6.mb-4.mb-md-0
            p Los datos son una colección de una pequeña unidad de información distinta. Se puede usar en una variedad de formas como texto, números, medios, bytes, etc., se puede almacenar en hojas de papel o en memoria electrónica, etc. La palabra ‘datos' se origina a partir de la palabra 'datum' que significa 'pieza única de información'. Es plural de la palabra datum. En informática, los datos son información que se puede traducir a una forma para un movimiento y procesamiento eficientes. Los datos son intercambiables.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/introduccion/img1.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            p Una base de datos es una colección organizada de datos, de modo que se puede acceder fácilmente y gestionar. Los datos se pueden organizar en tablas, filas, columnas e indexarlos para facilitar la búsqueda de información relevante. Los gestores de bases de datos crean una base de datos, de tal manera que solo un conjunto de programas de software proporciona acceso a los datos a todos los usuarios. El propósito principal de la base de datos es operar una gran cantidad de información almacenando, recuperando y administrando datos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/introduccion/img2.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            p En la actualidad, existen muchos sitios web dinámicos en la World Wide Web que se manejan a través de bases de datos, por ejemplo, un modelo que comprueba la disponibilidad de habitaciones en un hotel. Es un ejemplo de un sitio web dinámico que utiliza una base de datos. Hay muchas bases de datos disponibles como MySQL, Sybase, Oracle, MongoDB, Informix, PostgreSQL, SQL Server, etc. Las bases de datos modernas son administradas por el sistema de administración de bases de datos (DBMS).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/introduccion/img3.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            p El SQL o lenguaje de consulta estructurado se utiliza para operar con los datos almacenados en una base de datos. Este depende del álgebra relacional y del cálculo relacional de tuplas. Para mostrar la imagen de una base de datos se utiliza una estructura cilíndrica como se muestra en la siguiente figura.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/introduccion/img4.png', alt='')
        

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
