<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1 Procedimientos más importantes en bases de datos
      

    .caja.color-acento-contenido-b.p-4.p-md-5.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-6
          p Los procedimientos de la base de datos son compilados, almacenados y administrados por el servidor DBMS. Los procedimientos de la base de datos se pueden utilizar junto con las reglas para hacer cumplir la integridad de la base de datos o para realizar operaciones que se repiten con frecuencia. Cuando se crea el procedimiento se guarda su plan de ejecución, reduciendo la sobrecarga de ejecución.
          p Los procedimientos de la base de datos se pueden crear de forma interactiva o en un programa integrado. Un procedimiento de base de datos se puede ejecutar en un programa de lenguaje host, en el monitor de terminal, en otro procedimiento de base de datos o en un programa 4GL. Los procedimientos de la base de datos también pueden invocarse mediante reglas.

        .col-5
          img(src="@/assets/curso/temas/tema5/img1.svg")

    Separador
    #t_5_1.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 5.1. Índice de base de datos

    p(data-aos="zoom-in") En este espacio conocerá todo sobre el índice de las bases de datos.

    .row.justify-content-center.mt-5(data-aos="fade-right")
      .col-4
        figure
          img(src='@/assets/curso/temas/tema5/img2.png', alt='')

      .col-lg-8
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Índice de base de datos")
            .col-auto
              p La indexación es una forma de optimizar el rendimiento de una base de datos minimizando el número de accesos al disco necesarios cuando se procesa una consulta. Es una técnica de estructura de datos que se utiliza para localizar y acceder rápidamente a los datos en una base de datos. 

          .row(numero="2" titulo="Los índices se crean utilizando algunas columnas de la base de datos")
            .col-auto
              ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | La primera columna es la clave de búsqueda que contiene una copia de la clave principal o clave candidata de la tabla. Estos valores se almacenan en orden para que se pueda acceder rápidamente a los datos correspondientes. 
              
              p <b>Nota:</b> los datos pueden o no almacenarse en orden.

              ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | La segunda columna es la referencia de datos o puntero que contiene un conjunto de punteros que contienen la dirección del bloque de disco donde se puede encontrar ese valor de clave en particular.
              
              figure
                img(src='@/assets/curso/temas/tema5/img3.png', alt='')

          .row(numero="3" titulo="La indexación tiene varios atributos")
            
            .col-auto
              ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | <b>Tipos de acceso:</b> se refiere al tipo de acceso, como búsqueda basada en valores, acceso a rango, etc.
                  ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | <b>Tiempo de acceso:</b> se refiere al tiempo necesario para encontrar un elemento de datos o un conjunto de elementos en particular.
                  ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | <b>Tiempo de inserción:</b> se refiere al tiempo que se tarda en encontrar el espacio adecuado e insertar un nuevo dato.
                  ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | <b>Tiempo de eliminación:</b> tiempo necesario para encontrar un elemento y eliminarlo, así como para actualizar la estructura del índice.
                  ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | <b>Sobrecarga de espacio:</b> se refiere al espacio adicional requerido por el índice.

              p En general, existen dos tipos de mecanismos de organización de archivos que son seguidos por los métodos de indexación para almacenar los datos.

          .row(numero="4" titulo="Organización de archivo secuencial o archivo de índice ordenado ")
            
            .col-auto
             p En este, los índices se basan en un orden de los valores. Por lo general, son un mecanismo de almacenamiento rápido y más tradicional. Estas organizaciones de archivos ordenadas o secuenciales pueden almacenar los datos en un formato denso o disperso: 
             .h5 Índice denso: 
              ul.lista-ul--color.mt-3
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Para cada valor de clave de búsqueda en el archivo de datos hay un registro de índice.
                  ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Este registro contiene la clave de búsqueda y también una referencia al primer registro de datos con ese valor de clave de búsqueda.
                
          .row(numero="5" titulo="Índice disperso")
            
            .col-auto
              p El registro de índice aparece solo para algunos elementos en el archivo de datos. Cada elemento apunta a un bloque como se muestra.
              ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Para localizar un registro se busca el registro de índice con el valor de clave de búsqueda más grande menor o igual al valor de clave de búsqueda que se está buscando.
                  ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Comienza en ese registro al que apunta el registro de índice y se sigue con los punteros en el archivo, (es decir, secuencialmente) hasta encontrar el registro deseado.

              figure
                img(src='@/assets/curso/temas/tema5/img4.png', alt='')

          .row(numero="6" titulo="Organización del archivo hash ")
            
            .col-auto
             p Los índices se basan en los valores que se distribuyen uniformemente en una variedad de depósitos. Los depósitos a los que se asigna un valor se determinan mediante una función denominada función hash. Hay principalmente tres métodos de indexación:  
              ul.lista-ul--color.mt-3
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Indexación agrupada.
                  ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Indexación secundaria o no agrupada.
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Indexación multinivel.

          .row(numero="7" titulo="Indexación agrupada: ")
            
            .col-auto
              p Cuando se almacenan más de dos registros en el mismo archivo, estos tipos de almacenamiento se conocen como indexación agrupada. Al usar la indexación de clústeres, se puede reducir el costo de búsqueda, ya que se almacenan múltiples registros relacionados con lo mismo en un solo lugar y también brinda la unión frecuente de más de dos tablas (registros). Básicamente, los registros con características similares se agrupan y se crean índices para estos grupos. 

    .mb-4.mt-5
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
        .h3.col-auto.mb-0.ms-2 Índice agrupado ordenado según el nombre (tecla de búsqueda)

    .row 
      .col-7
        .caja.color-acento-contenido-b(data-aos="fade-right")
          p.p-5 <b>Indexación principal:</b> este es un tipo de indexación agrupada en el que los datos se ordenan de acuerdo con la clave de búsqueda y la clave principal de la tabla de la base de datos y se utiliza para crear el índice. Es un formato predeterminado de indexación donde induce la organización secuencial de archivos; como las claves primarias son únicas y se almacenan ordenadas, el rendimiento de la operación de búsqueda es bastante eficiente.
        
        p(data-aos="zoom-in") <b>Indexación secundaria o no agrupada:</b> un índice no agrupado simplemente dice dónde se encuentran los datos, es decir, da una lista de punteros virtuales o referencias a la ubicación donde se almacenan realmente los datos. Los datos no se almacenan físicamente en el orden del índice. En cambio, los datos están presentes en los nodos hoja, por ejemplo, la página de contenido de un libro; cada entrada da el número de página o la ubicación de la información almacenada. Los datos reales aquí (información en cada página del libro) no están organizados; pero se tiene una referencia ordenada (página de contenido) de dónde se encuentran realmente los puntos de datos. Solo se puede tener un orden denso en el índice no agrupado, ya que el orden disperso no es posible porque los datos no están organizados físicamente en consecuencia.

      .col-5
        figure
          img(src='@/assets/curso/temas/tema5/img5.svg', alt='')
    
    .row.align-items-center.justify-content-center
      .col-10
        .caja--blanca--borde.mt-5.p-5
          p(data-aos="zoom-in") Requiere más tiempo en comparación con el índice agrupado porque se realiza una cierta cantidad de trabajo adicional para extraer los datos siguiendo más el puntero. En el caso de un índice agrupado los datos están directamente delante del índice.
          .row.align-items-center.justify-content-center
            .col-6
              img(src='@/assets/curso/temas/tema5/img6.png', alt='')

    .row.align-items-center.justify-content-center
      .col-10
        .caja--blanca--borde.mt-5.p-5
          p(data-aos="zoom-in") Indexación multinivel: con el crecimiento del tamaño de la base de datos los índices también crecen. Como el índice se almacena en la memoria principal, un índice de un solo nivel puede llegar a ser de un tamaño demasiado grande para almacenarlo con múltiples accesos al disco. La indexación multinivel segrega el bloque principal en varios bloques más pequeños para que el mismo pueda almacenarse en un solo bloque. Los bloques externos se dividen en bloques internos que, a su vez, apuntan a los bloques de datos. Esto se puede almacenar fácilmente en la memoria principal con menos gastos generales. Ver figura.
          .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-right")
            p.titulo.pb-0.mb-0 <b>Figura 2.</b> Índice multinivel
              
          .row.align-items-center.justify-content-center
            .col-6
              
              img(src='@/assets/curso/temas/tema5/img7.png', alt='')

    .row 
      .col-6
        .row.align-items-center.justify-content-center
          .col-auto
            .tarjeta.color-primario.p-3.mt-5
              .row.justify-content-around.align-items-center
                .col-auto
                  img(src="@/assets/curso/temas/tema3/img1.svg").img65
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4.mb-1 Para mayor comprensión diríjase al:
                      p.text-small.mb-0 Anexo 2 - Índices basados en varios campos utilizando Microsoft Access.
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://docs.google.com/document/d/1ojd75qS-nmacZ1P0AaHxt-56VS9Gezhbf_V-sVsJuH4/edit?usp=sharing" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

      .col-6              
        .row.align-items-center.justify-content-center
          .col-auto
            .tarjeta.color-primario.p-3.mt-5
              .row.justify-content-around.align-items-center
                .col-auto
                  img(src="@/assets/curso/temas/tema3/img1.svg").img65
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4.mb-1 Para mayor comprensión diríjase al:
                      p.text-small.mb-0 Anexo 3 - Crear un índice y utilizarlo para mejorar el rendimiento en Microsoft Access. 
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://docs.google.com/document/d/1ojd75qS-nmacZ1P0AaHxt-56VS9Gezhbf_V-sVsJuH4/edit?usp=sharing" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema5',
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
