<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--gris.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Modelo ER en base de datos
      
    .row.mt-5.BGIMG01.align-items-center(data-aos="fade-up")
      .col-5(style="color:white").p-5
        p(style="color:white") Se utiliza para modelar la vista lógica del sistema desde la perspectiva de los datos, que consta de estos componentes: 
        ul.lista-ul
          li(data-aos="zoom-in")
            i.fas.fa-database 
            | Entidad.
          li(data-aos="zoom-in")
            i.fas.fa-database 
            | Tipo de entidad.
          li(data-aos="zoom-in")
            i.fas.fa-database 
            |	Conjunto de entidades.
      .col-md.col-lg-7.p-5
        figure
          img(src='@/assets/curso/temas/tema4/img1.png')

    Separador
    #t_4_1.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 4.1. Entidad

    .tarjeta.tarjeta--azul.p-4(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.mt-5
          .col-md-6.mb-4.mb-md-0
            p Puede ser un objeto con existencia física - una persona, automóvil, casa o empleado en particular - o puede ser un objeto con existencia conceptual - una empresa, un trabajo o un curso universitario.
            p Una entidad es un objeto de tipo de entidad y el conjunto de todas las entidades se denomina conjunto de entidades, por ejemplo, E1 es una entidad que tiene el tipo de entidad estudiante y el conjunto de todos los estudiantes se denomina conjunto de entidades. En el diagrama ER, el tipo de entidad se representa como:

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img2.png', alt='')

        .row.mt-5
          .col-md-6.mb-4.mb-md-0
            .h5 Atributos: 
            p Son las propiedades que definen el tipo de entidad, por ejemplo, No. ID, nombre, DOB, edad, dirección, No.  de teléfono son los atributos que definen el tipo de entidad estudiante. En el diagrama ER el atributo está representado por un óvalo.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img3.png', alt='')

        .row.mt-5
          .col-md-6.mb-4.mb-md-0
            .h5 Atributo clave: 
            p Identifica de manera única a cada entidad en el conjunto de entidades, por ejemplo, No. ID será único para cada estudiante. En el diagrama ER el atributo clave está representado por un óvalo con líneas subyacentes.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img4.png', alt='')

        .row.mt-5
          .col-md-6.mb-4.mb-md-0
            .h5 Atributo compuesto: 
            p Está compuesto por muchos otros atributos, por ejemplo, el atributo dirección del tipo de entidad del estudiante consta de calle, ciudad, departamento y país. En el diagrama ER, el atributo compuesto está representado por un óvalo que consta de óvalos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img5.png', alt='')

        .row.mt-5
          .col-md-6.mb-4.mb-md-0
            .h5 Atributo multivalor: 
            p Consta de más de un valor para una entidad determinada, por ejemplo, el número de teléfono (puede ser más de uno para un estudiante determinado). En el diagrama ER, el atributo multivalor está representado por un óvalo doble.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img6.png', alt='')

        .row.mt-5
          .col-md-6.mb-4.mb-md-0
            .h5 Atributo derivado: 
            p Un atributo que puede derivarse de otros atributos del tipo de entidad, por ejemplo, edad (se puede derivar de DOB). En el diagrama ER, el atributo derivado está representado por un óvalo punteado.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img7.png', alt='')

    Separador
    #t_4_2.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 4.2. Tipo de relación y conjunto de relaciones

    p(data-aos="zoom-in") A partir de este recurso podrá descubrir los tipos de relación y el conjunto de relaciones.

    .tarjeta.tarjeta--azul.p-4(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.mt-5
          p Un tipo de relación representa la asociación entre tipos de entidad, por ejemplo, “inscrito en” es un tipo de relación que existe entre el tipo de entidad estudiante y curso. En el diagrama ER, el tipo de relación está representado por un diamante y conecta las entidades con líneas.
          
          figure
            img(src='@/assets/curso/temas/tema4/img8.png', alt='')

        .row.mt-5
          p Un conjunto de relaciones del mismo tipo se conoce como conjunto de relaciones. El siguiente conjunto de relaciones muestra que S1 está inscrito en C2, S2 está inscrito en C1 y S3 está inscrito en C3.

          figure
            img(src='@/assets/curso/temas/tema4/img9.png', alt='')

        .row.mt-5
          p <b>Grado de un conjunto de relaciones:</b> el número de conjuntos de entidades diferentes que participan en un conjunto de relaciones se denomina grado de un conjunto de relaciones.  
          p <b>Relación unaria:</b> cuando solo hay un conjunto de entidades que participa en una relación, la relación se denomina relación unaria, por ejemplo, una persona está casada con una sola persona.

          figure
            img(src='@/assets/curso/temas/tema4/img10.png', alt='')

        .row.mt-5
          p <b>Relación binaria:</b> cuando hay dos entidades establecidas que participan en una relación, la relación se denomina relación binaria, por ejemplo, el alumno está inscrito en el curso.

          figure
            img(src='@/assets/curso/temas/tema4/img11.png', alt='')

        .row.mt-5
          p <b>Relación unaria:</b> Cuando hay un conjunto de “n” entidades que participan en una relación, la relación se denomina relación unaria. 
          p <b>Cardinalidad:</b> El número de veces que una entidad de un conjunto de entidades participa en un conjunto de relaciones se conoce como cardinalidad. La cardinalidad puede ser de diferentes tipos:
          p <b>Uno a uno:</b> cuando cada entidad de cada conjunto de entidades puede participar sólo una vez en la relación, la cardinalidad es uno a uno. Supongamos que un hombre puede casarse con una mujer y una mujer puede casarse con un hombre. Entonces la relación será uno a uno.


          figure
            img(src='@/assets/curso/temas/tema4/img12.png', alt='')

        .row.mt-5
          p <b>Muchos a uno:</b> Cuando las entidades de un conjunto de entidades solo pueden participar una vez en el conjunto de relaciones y las entidades de otro conjunto de entidades pueden participar más de una vez en el conjunto de relaciones, la cardinalidad es de muchos a uno. Supongamos que un estudiante solo puede tomar un curso, pero muchos estudiantes pueden tomar un curso. Entonces, la cardinalidad será “n” a 1. Significa que para un curso puede haber “n” estudiantes, pero para un estudiante, solo habrá un curso.

          figure
            img(src='@/assets/curso/temas/tema4/img13.png', alt='')

        .row.mt-5
          p <b>De muchos a muchos:</b> cuando las entidades de todos los conjuntos de entidades pueden participar más de una vez en la relación, la cardinalidad es de muchos a muchos. Suponga que un estudiante puede tomar más de un curso y que muchos estudiantes pueden tomar un curso. Entonces, la relación será de muchos a muchos.

          figure
            img(src='@/assets/curso/temas/tema4/img14.png', alt='')

    .mb-4.mt-5
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
        .h3.col-auto.mb-0.ms-2 Restricción de participación 

    .row 
      .col-7
        .caja.color-primario-b.p-4
          p Se aplica a la entidad que participa en el conjunto de relaciones.  
          ul.lista-ul--color
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | <b>Participación total:</b> cada entidad del conjunto de entidades debe participar en la relación. Si cada alumno debe matricularse en un curso, la participación del alumno será total. La participación total se muestra con una línea doble en el diagrama ER. 
            li(data-aos="zoom-in").mt-5
              i.fas.fa-database 
              |	<b>Participación parcial:</b> la entidad en el conjunto de entidades puede o no participar en la relación. Si algunos cursos no están matriculados por ninguno de los alumnos, la participación del curso será parcial. 
      
      .col-5
        figure
          img(src='@/assets/curso/temas/tema4/img15.svg', alt='')

    p.mt-5(data-aos="zoom-in") El diagrama muestra el conjunto de relaciones “inscrito en” con el conjunto de entidad de estudiante con participación total y el conjunto de entidad del curso con participación parcial.

    .row.justify-content-center 
      .col-10
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 2.] #[i Diagrama conjunto de relaciones.]
        figure
          img(src='@/assets/curso/temas/tema4/img16.png', alt='')

    .mb-4.mt-5
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
        .h3.col-auto.mb-0.ms-2 Tipo de entidad débil y relación de identificación 

    .row 
      .col-7
        .caja.color-primario-b.p-4
          p Como se discutió anteriormente, un tipo de entidad tiene un atributo clave que identifica de manera única a cada entidad en el conjunto de entidades; pero existe algún tipo de entidad para la cual no se puede definir un atributo clave, este se denomina tipo de entidad débil, por ejemplo, una empresa puede almacenar la información de los dependientes (padres, hijos, cónyuge) de un empleado; pero los dependientes no tienen existencia sin el empleado. Por lo tanto, el dependiente será un tipo de entidad débil y el empleado será el tipo de entidad de identificación para el dependiente. 
          p Un tipo de entidad débil está representado por un rectángulo doble, la participación del tipo de entidad débil es siempre total.   
          
      .col-5
        figure
          img(src='@/assets/curso/temas/tema4/img17.svg', alt='')

    .row.justify-content-center.mt-5 
      .col-10
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 3.] #[i Diagrama relación de identificación.]
        figure
          img(src='@/assets/curso/temas/tema4/img18.png', alt='')

</template>

<script>
export default {
  name: 'Tema4',
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
