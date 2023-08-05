<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--gris.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fases del proceso de desarrollo de bases de datos

    p(data-aos="zoom-in") Serie de fases en las que cada una de ellas tiene su propia experiencia. Las fases principales son la planificación, el análisis de requisitos y la implementación; cada proceso se divide en pasos. El diagrama de estas fases se muestra como:

    .row.justify-content-center
      .col-10
        figure
          img(src='@/assets/curso/temas/tema2/img1.png')

    .row.justify-content-center.mt-5(data-aos="fade-right")
      .col-lg-8
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta--azul")
          .row(titulo="Fase 1 - Planificación")
            .col-12
              p La fase de planificación comienza cuando un cliente solicita desarrollar un proyecto de base de datos. Es un conjunto de tareas o actividades que deciden el recurso requerido en el desarrollo de la base de datos y el tiempo límite de las diferentes actividades. Durante la fase de planificación se realizan cuatro actividades principales:
              ul.lista-ul--color
                li
                  i.fas.fa-database 
                  | Revise y apruebe la solicitud del proyecto de la base de datos.
                li
                  i.fas.fa-database 
                  | Priorice el proyecto de la base de datos.
                li
                  i.fas.fa-database 
                  |	Asigne recursos como dinero, personas, herramientas, etc.
                li
                  i.fas.fa-database 
                  |	Organice un equipo de desarrollo para desarrollar el proyecto de la base de datos.
    

          .row(titulo="Fase 2 - Análisis de requisitos")
            .col-12
              p El análisis de requisitos se realiza para comprender un problema que no se resuelve. Es una actividad muy importante para el desarrollo del sistema de base de datos en el ciclo de vida de desarrollo de la base de datos. La persona responsable de la identificación de análisis de requisitos se llama analista. En la fase de análisis de requisitos se recopilan y analizan los requisitos y las expectativas de los usuarios. Los requisitos recopilados ayudan a comprender el sistema lo que aún no existe en la forma requerida. Hay dos actividades principales en el análisis de requisitos. Estos son:

              ul.lista-ul--color
                li
                  i.fas.fa-database 
                  | Comprensión o análisis de problemas.
                li
                  i.fas.fa-database 
                  | Especificación de requerimiento.

          .row(titulo="Pasos del análisis")
            .col-12
              p Existen los siguientes pasos incluidos en el análisis de requisitos:
              ul.lista-ul--color
                li
                  i.fas.fa-database 
                  | Desarrollar un modelo de datos conceptual.
                li
                  i.fas.fa-database 
                  | Desarrollar modelo de proceso.
                li
                  i.fas.fa-database 
                  |	Diagrama de flujo de datos.

          .row(titulo="Fase 3 - Diseño")
            .col-12
              p El diseño es la fase principal del proceso de desarrollo de bases de datos. En esta fase, el modelo de información que desarrolla durante el análisis se utiliza para diseñar un esquema conceptual para la base de datos y para diseñar la aplicación. Es una fase importante de las fases del proceso de desarrollo de bases de datos.
              p En el diseño del esquema conceptual se examinan los requisitos de datos recopilados en la fase de análisis de requisitos y se produce un esquema de base de datos conceptual que es más importante en la fase de diseño del proceso de desarrollo de la base de datos. En el diseño de la sección y de la aplicación se examina la aplicación de la base de datos analizada en la fase de análisis de requisitos y se produce la especificación de esta aplicación. Los dos pasos principales en la fase de diseño son:

              ul.lista-ul--color
                li
                  i.fas.fa-database 
                  | Diseño de base de datos.
                li
                  i.fas.fa-database 
                  | Diseño de procesos.

          .row(titulo="Fase 4 - Selección DBMS")
            .col-12
              p En esta fase se selecciona el DBMS apropiado para apoyar el sistema de información. Varios factores están involucrados en la selección de DBMS. Pueden ser factores técnicos y económicos.
              p <b>Factor técnico</b>: los factores técnicos están relacionados con la idoneidad del DBMS para el sistema de información. Se consideran los siguientes factores técnicos:

              ul.lista-ul--color
                li
                  i.fas.fa-database 
                  | Tipo de DBMS como relacional, orientado a objetos, etc.
                li
                  i.fas.fa-database 
                  | Estructura de almacenamiento y métodos de acceso que admite el DBMS en la base de datos.
                li
                  i.fas.fa-database 
                  | Interfaces disponibles para usuarios y programadores.
                li
                  i.fas.fa-database 
                  | Tipos de lenguaje de consulta.
                li
                  i.fas.fa-database 
                  | Herramientas de desarrollo.

              p <b>Factores financieros</b>: están relacionados con el costo del DBMS y su operación. En este caso se consideran los siguientes costos

              ul.lista-ul--color
                li
                  i.fas.fa-database 
                  | Costo del <i>software</i>.
                li
                  i.fas.fa-database 
                  | Costo de mantenimiento.
                li
                  i.fas.fa-database 
                  | Costo de <i>hardware</i>.
                li
                  i.fas.fa-database 
                  | Costo de creación y mantenimiento de la base de datos.
                li
                  i.fas.fa-database 
                  | Costo de formación.

          .row(titulo="Fase 5 - Implementación")
            .col-12
              p Después de la fase de diseño y la selección de un DBMS adecuado, el sistema de base de datos se implementa o se instala para su uso. El propósito de esta fase es instalar el sistema de información de acuerdo con el plan y diseño descrito en la fase anterior. La implementación implica una serie de pasos que conducen al sistema de información operativo, que incluye la creación de definiciones de base de datos, desarrollo de aplicaciones, prueba del sistema, desarrollo de procedimientos operativos y documentación, capacitación de usuarios y llenado de bases de datos en el mismo archivo de datos de la misma organización. Es una fase importante de fases en el proceso de desarrollo de bases de datos. La implementación implica dos pasos, estos son:
              ul.lista-ul--color
                li
                  i.fas.fa-database 
                  | Definición de base de datos.
                li
                  i.fas.fa-database 
                  | Creando aplicación.

          .row(titulo="Fase 6 - Mantenimiento")
            .col-12
              p Una vez implementada la base de datos comienza la fase de mantenimiento del sistema de base de datos. El mantenimiento es el proceso de seguimiento y mantenimiento del sistema de base de datos. El mantenimiento incluye actividades como agregar nuevos campos, cambiar el tamaño del archivo existente, agregar nuevas tablas, etc.
              p A medida que cambia el requisito del sistema de la base de datos es necesario agregar una tabla nueva o eliminar tablas existentes y reconocer algunos archivos cambiando los métodos de acceso primario o eliminando índices antiguos y construyendo otros nuevos. Es posible que algunos requisitos se reescriban para un mejor rendimiento. El ajuste o la reorganización de la base de datos, continúa a lo largo de la vida de la base de datos, mientras que los requisitos siguen cambiando.

      .col-lg-4.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/img2.svg", alt="").m-auto
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
