<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--gris.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Entidades, relaciones y atributos

    .row.justify-content-center.align-items-center.py-0
      .col-12(data-aos="fade-up")
        p.mb-5 Por medio del siguiente recurso explore todo sobre entidades, relaciones y atributos.
      .col-12.mt-2(data-aos="fade-up")
        //- figure.mt-0
        //- .video
        //-   iframe(width="560" height="315" src="https://www.youtube.com/embed/NaoMfuuuJks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
        .tarjeta.tarjeta--white.p-4
          LineaTiempoD.color-secundario
            p.text-small(numero="1" titulo="La entidad") La entidad de la base de datos es una cosa, persona, lugar, unidad, objeto o cualquier elemento sobre el cual los datos deben capturarse y almacenarse en forma de propiedades, flujo de trabajo y tablas. Si bien el flujo de trabajo y las tablas son opcionales para la entidad de base de datos, las propiedades son obligatorias (porque la entidad sin propiedades no es una entidad).
            div.text-small(numero="2" titulo="Propiedades de la entidad") 
              p Las propiedades de la entidad son atributos clave en una base de datos. La diferencia entre entidad y propiedad se determina según si el elemento es de interés directo para la base de datos. Por ejemplo, en una base de datos de correo electrónico, la dirección de correo electrónico es relevante, mientras que, en una base de datos de clientes, el cliente es la entidad principal y la dirección de correo electrónico es una propiedad asociada al cliente. 
              p Algunas de las propiedades de la entidad pueden representar relaciones de entidad de base de datos, es decir, relacionar una entidad con otra entidad, por ejemplo, la entidad “trabajo” puede tener la propiedad “cliente” que se refiere a la entidad “cliente”, para que cuando cree un nuevo trabajo pueda desplegar la lista de clientes y seleccionar un cliente para el que se realizará ese trabajo.
            div.text-small(numero="3" titulo="Tablas de entidades") 
              p Son una especie de subentidad dentro de la entidad principal (porque la tabla de entidad tiene sus propias propiedades), por ejemplo, la entidad “pedido” que tiene propiedades como ID de pedido, fecha de pedido, etc., puede tener una tabla “artículos” que tiene sus propias propiedades como nombre de producto, cantidad, precio, etc.
              p Además, a veces puede ser difícil decidir si es necesario crear una tabla de entidad o agregar varias propiedades a la propia entidad, por ejemplo, para la entidad “contacto” necesita capturar información de dirección que incluya propiedades “calle” , “ciudad”, “estado”, etc. Si cada contacto tiene solo una dirección, entonces estas propiedades pueden pertenecer a la entidad, mientras que, si el contacto puede tener varias direcciones, estas propiedades deben pertenecer a la tabla de entidades.
            div.text-small(numero="4" titulo="Flujo de trabajo de la entidad") 
              p Es una especie de ciclo de vida de la entidad que consta de estados, transiciones y razones por las que la entidad pasa de un estado a otro, por ejemplo, cuando los usuarios cambian el estado de la entidad “tarea” de “en curso” a “cerrado”, pueden seleccionar uno de los motivos disponible: “completado” o “cancelado”.
              p Además, el flujo de trabajo puede tener acciones realizadas automáticamente cuando tiene lugar la transición entre los estados, por ejemplo, si el estado de la entidad “oportunidad” cambia de “abierto” a “cerrado”, el sistema ingresará automáticamente la fecha y hora actuales en el campo “fecha de cierre”.



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
                  p.text-small.mb-0 Para mayor comprensión, diríjase al Anexo 1 - Relaciones en una base de datos. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_Relaciones_en_una_base_de_datos.pdf')" target="_blank")
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
