<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--gris.p-4.p-md-5.mb-5
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

    Separador
    #t_5_2.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 5.2. Vistas en base de datos

    p(data-aos="zoom-in") Se invita a conocer un poco más sobre las bases de datos, en esta ocasión descubra todo sobre las vistas en las bases de datos.

    .row.justify-content-center.mt-5(data-aos="fade-right")
      .col-lg-8
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta--azul")
          .row(titulo="Vistas en base de datos")
            .col-12
              p Una vista puede unir información de varias tablas o puede decir que las vistas son útiles para ocultar información no deseada, por ejemplo, para agregar el campo de esmalte a la información del pedido. La vista de base de datos es un subconjunto de la base de datos ordenada y mostrada de una manera particular. Una vista de la base de datos muestra uno o más registros de la base de datos en la misma página. Una vista puede mostrar algunos o todos los campos de la base de datos.
              p Las vistas tienen filtros para determinar qué registros muestran. Las vistas pueden ordenarse para controlar el orden de los registros y agruparse para mostrar registros en conjuntos relacionados. Las vistas tienen otras opciones, como totales y subtotales. Una consulta devuelve información de una tabla o un conjunto de tablas que coincide con criterios particulares. La mayoría de los usuarios interactúan con la base de datos utilizando las vistas de la base de datos. Una clave para crear una base de datos útil es un conjunto de vistas bien elegido. Afortunadamente, aunque las vistas son poderosas, también son fáciles de crear. Cree vistas personalizadas de una base de datos para organizar, filtrar y ordenar registros.

          .row(titulo="Puede utilizar vistas para")
            .col-12
              ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Centrarse en los datos que les interesan y en las tareas de las que son responsables. Los datos que no son de interés para un usuario pueden quedar fuera de la vista.
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Definir las combinaciones, proyecciones y selecciones de uso frecuente como vistas para que los usuarios no tengan que especificar todas las condiciones y calificaciones cada vez que se realiza una operación en esos datos.
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Mostrar diferentes datos para diferentes usuarios, incluso cuando estén usando los mismos datos al mismo tiempo. Esta ventaja es particularmente importante cuando los usuarios de diferentes intereses y niveles de habilidad comparten la misma base de datos. 

          .row(titulo="Ventajas")
            .col-12
              ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Proporcione un nivel adicional de seguridad de la tabla al restringir el acceso a un conjunto predeterminado de filas o columnas de una tabla. 
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Ocultar la complejidad de los datos: por ejemplo, una sola vista se puede definir con una combinación, que es una colección de columnas o filas relacionadas en varias tablas; sin embargo, la vista oculta el hecho de que esta información en realidad se origina en varias tablas.
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  |	Simplifique las declaraciones para el usuario: las vistas permiten a los usuarios seleccionar información de varias tablas sin saber realmente cómo realizar la unión.
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Presentar datos en una perspectiva diferente: las columnas de vistas se pueden renombrar sin afectar las tablas en las que se basan las vistas.
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Aislar las aplicaciones de los cambios en las definiciones de las tablas base. Si una vista hace referencia a tres columnas de una tabla de cuatro columnas, si se agrega una quinta columna o se cambia la cuarta columna, la vista y las aplicaciones asociadas no se ven afectadas.
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Consulta expresa que no se puede expresar sin usar una vista, por ejemplo, se puede definir una vista que une un grupo por vista con una tabla o se puede definir una vista que une una vista UNION con una tabla.
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Ahorro de consultas complejas.

          .row(titulo="Desventajas")
            .col-12
              ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Las filas disponibles a través de una vista no se ordenan, ni tampoco se ordenan.
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | No se pueden utilizar operaciones DML en una vista.
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Cuando la tabla se descarta, la vista se vuelve inactiva, depende de los objetos de la tabla. 
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | Afecta al rendimiento, la consulta desde la vista lleva más tiempo que la consulta directa desde la tabla.

          .row(titulo="Tipos de vistas")
            .col-12
              ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | <b>Vistas definidas por el sistema:</b> son vistas predefinidas que ya existen en la base de datos maestra de SQL Server. También se utilizan como vistas de plantilla para todas las bases de datos recién creadas. Estas vistas del sistema se adjuntarán automáticamente a cualquier base de datos definida por el usuario. Se tienen los siguientes tipos de vistas definidas por el sistema.
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | <b>Vista de esquema de información:</b> en SQL Server se tienen veinte vistas de esquemas diferentes. Se utilizan para mostrar información de una base de datos, como tablas y columnas. 
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | <b>Vista de catálogo:</b> se introdujeron con SQL Server 2005. Se utilizan para mostrar información de autodescripción de la base de datos.
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | <b>Vista de gestión dinámica:</b> se introdujeron en SQL Server 2005. Estas vistas brindan al administrador información de la base de datos sobre el estado actual de la máquina SQL Server. Estos valores ayudan al administrador a analizar problemas y ajustar el servidor para un rendimiento óptimo. Estos son de dos tipos:
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | <b>Vista de administración dinámica con ámbito de servidor:</b> estos se almacenan solo en la base de datos maestra.
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | <b>Vista de administración dinámica con ámbito de base de datos:</b> estos se almacenan en cada base de datos.

          .row(titulo="Vistas definidas por el usuario")
            .col-12
              p Estos tipos de vista los definen los usuarios. Se tiene dos tipos de vistas definidas por el usuario.

              ul.lista-ul--color
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | <b>Vista simple:</b> cuando se crea una vista en una sola tabla, se denomina vista simple. En la vista simple se puede insertar, actualizar, eliminar datos. Solo se puede insertar datos en una vista simple si se tiene una clave principal y todos los campos no nulos en la vista.
                li(data-aos="zoom-in")
                  i.fas.fa-database 
                  | <b>Vista compleja:</b> cuando se crea una vista en más de una tabla, se denomina vista compleja. Solo se puede actualizar datos en una vista compleja. No se puede insertar datos en una vista compleja.

      .col-lg-4.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema5/img8.png", alt="").m-auto

    Separador
    #t_5_3.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 5.3. Reportes o informes en bases de datos

    .row.justify-content-center.align-items-center.py-0
      .col-12(data-aos="fade-up")
        p.mb-5  En el siguiente video podrá revisar los reportes o informes en las bases de datos, cómo realizarlos y aplicarlos.
      .col-12.mt-2(data-aos="fade-up")
        figure.mt-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/NaoMfuuuJks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      

    Separador
    #t_5_4.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 5.4. Permisos, roles y control de acceso de usuarios

    .tarjeta.row.mb-5(style="width:100%")(data-aos="fade-right")
      .col-md.caja.color-secundario
        .row.justify-content-center.mb-4
          .col-auto(style="padding:0px")
            figure
              img(src='@/assets/curso/temas/tema5/img9.png', alt='')
          
        p.p-3 Se refiere a las diferentes autorizaciones que se deben establecer en una base de datos, en otras palabras, es la función de especificar derechos / privilegios de acceso a los recursos relacionados con la seguridad de la información. Más formalmente, "autorizar" es definir una política de acceso; con la gestión de identidad controlada, el control de acceso de usuario se concede en función de los permisos asignados a un rol.
      .col-md.caja.color-primario
        .row.justify-content-center.mb-4
          .col-auto(style="padding:0px")
            figure
              img(src='@/assets/curso/temas/tema5/img10.png', alt='')
          
        p.p-3 Cada aplicación protegida por el habilitador de la base de datos puede definir un conjunto de permisos, es decir, un conjunto de cosas que se pueden hacer dentro de la aplicación que gestiona la base de datos, por ejemplo, dentro de la aplicación, la capacidad de enviar un comando para desbloquear una puerta inteligente. De manera similar, la capacidad de enviar un comando para hacer sonar la alarma y la capacidad de alterar los precios.
      .col-md.caja.color-secundario.text-white
        .row.justify-content-center.mb-4
          .col-auto(style="padding:0px")
            figure
              img(src='@/assets/curso/temas/tema5/img11.png', alt='')
          
        p.p-3 Estos permisos se agrupan en una serie de roles, por ejemplo, el desbloqueo de la puerta y la de activar una alarma podrían asignarse al rol de seguridad, lo que significa que los usuarios a los que posteriormente se les otorgue ese rol obtendrían ambos permisos. Los permisos pueden superponerse y asignarse a múltiples roles, también se asignan al rol de administración.

    .row 
      .col-1(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema5/img12.svg', alt='')
      .col-11(data-aos="fade-right")
        p A su vez, los usuarios u organizaciones serán asignados a uno o más roles: cada usuario obtendrá la suma de todos los permisos para cada rol que tenga. El concepto de un rol es desconocido para un usuario: solo conocen la lista de permisos que se les ha otorgado, no cómo se dividen los permisos dentro de una determinada aplicación. En resumen, los permisos son todas las acciones posibles que se pueden realizar a los recursos dentro de una aplicación, mientras que los roles son grupos de acciones que puede realizar un tipo de usuario de esa aplicación.

    .mb-4.mt-5
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
        .h3.col-auto.mb-0.ms-2 Conceptos estándar de gestión de identidades

    p(data-aos="zoom-in") Los siguientes objetos comunes se encuentran con la base de datos: 

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4(style="background-color:#ABC4E7")
        .row.justify-content-center.mb-3
          .col-auto
            img(src='@/assets/curso/temas/tema5/img13.svg' alt='')
        h2.text-center Usuario
        p.text-center Cualquier usuario registrado capaz de identificarse con un correo electrónico y una contraseña. A los usuarios se les puede asignar derechos individualmente o como grupo.

      .tarjeta.p-4(style="background-color:#ABC4E7")
        .row.justify-content-center.mb-3
          .col-auto
            img(src='@/assets/curso/temas/tema5/img14.svg' alt='')
        h2.text-center Aplicación
        p.text-center Cualquier aplicación asegurable que consta de una serie de microservicios.

      .tarjeta.p-4(style="background-color:#ABC4E7")
        .row.justify-content-center.mb-3
          .col-auto
            img(src='@/assets/curso/temas/tema5/img15.svg' alt='')
        h2.text-center Organización
        p.text-center Grupo de usuarios a los que se les puede asignar una serie de derechos. La alteración de los derechos de la organización afecta el acceso de todos los usuarios de esa organización.

      .tarjeta.p-4(style="background-color:#ABC4E7")
        .row.justify-content-center.mb-3
          .col-auto
            img(src='@/assets/curso/temas/tema5/img16.svg' alt='')
        h2.text-center Organización de roles
        p.text-center Los usuarios pueden ser miembros o administradores de una organización, los administradores pueden agregar y eliminar usuarios de su organización, los miembros simplemente obtienen los roles y permisos de una organización. Esto permite que cada organización sea responsable de sus miembros y elimina la necesidad de que un súper administrador administre todos los derechos.

      .tarjeta.p-4(style="background-color:#ABC4E7")
        .row.justify-content-center.mb-3
          .col-auto
            img(src='@/assets/curso/temas/tema5/img17.svg' alt='')
        h2.text-center Rol
        p.text-center Es un depósito descriptivo para un conjunto de permisos. Un rol se puede asignar a un solo usuario o a una organización. Un usuario que ha iniciado sesión obtiene todos los permisos de todos sus propios roles, además de todos los roles asociados a su organización.

      .tarjeta.p-4(style="background-color:#ABC4E7")
        .row.justify-content-center.mb-3
          .col-auto
            img(src='@/assets/curso/temas/tema5/img18.svg' alt='')
        h2.text-center Permiso
        p.text-center La capacidad de hacer algo en un recurso dentro del sistema.

    .mb-4.mt-5
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
        .h3.col-auto.mb-0.ms-2 Protección de los datos dentro de la base de datos

    p(data-aos="zoom-in") La autorización es un permiso otorgado al usuario, programa o proceso para acceder a un objeto o conjunto de objetos. El tipo de acceso a datos otorgado a un usuario puede ser de solo lectura o lectura y escritura. Los privilegios especifican el tipo de operaciones del lenguaje de manipulación de datos (DML) como seleccionar, insertar, actualizar, eliminar, etc., que el usuario puede realizar con los datos. Los dos métodos mediante los cuales se realiza el control de acceso son mediante el uso de privilegios y roles.

    .row 
      .col-7
        p(data-aos="zoom-in") <b>Privilegios:</b> son permisos para acceder a un objeto con nombre de una manera prescrita, por ejemplo, permiso para consultar una tabla. Se pueden otorgar privilegios para permitir que un usuario en particular se conecte a la base de datos (crear una sesión); seleccionar filas de la tabla de otra persona; o ejecutar el procedimiento almacenado de otra persona.
        p(data-aos="zoom-in") <b>Privilegios de la base de datos:</b> un privilegio es un derecho a ejecutar un tipo particular de declaración SQL o acceder al objeto de otro usuario. Algunos ejemplos de privilegios incluyen:

        .tarjeta.tarjeta--blanca.p-4
          ul.lista-ul--color
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | El derecho a conectarse a la base de datos (crear una sesión).
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | El derecho para crear una mesa.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | El derecho a seleccionar filas de la tabla de otro usuario.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | El derecho a ejecutar el procedimiento almacenado de otro usuario.

        p(data-aos="zoom-in") Se otorgan privilegios a los usuarios para que puedan realizar las tareas necesarias para su trabajo. Debe otorgar un privilegio solo al usuario que lo requiera, absolutamente para realizar el trabajo necesario. La concesión excesiva de privilegios innecesarios puede comprometer la seguridad.
        p(data-aos="zoom-in") <b>Privilegios del sistema:</b> un privilegio del sistema es el derecho a realizar una acción en particular, en un tipo particular de objeto, por ejemplo, los privilegios para crear tablas y eliminar el OWS de cualquier tabla en una base de datos son privilegios del sistema. En muchos sistemas comerciales de administración de bases de datos hay cientos de privilegios de sistema distintos.
        p(data-aos="zoom-in") <b>Privilegios de objeto:</b>  un privilegio de objeto es un privilegio o derecho para realizar una acción particular en una tabla, vista, secuencia, procedimiento, función o paquete específico, por ejemplo, el privilegio de eliminar filas de la tabla DEPT es un privilegio de objeto. Los privilegios de objeto otorgados para una tabla, vista, secuencia, procedimiento, función o paquete se aplican tanto si se hace referencia al objeto base por su nombre como si se utiliza un sinónimo.
      
      .col-5
        figure
          img(src='@/assets/curso/temas/tema5/img19.png', alt='')
    p(data-aos="zoom-in") <b>Roles:</b> son mecanismos que se pueden utilizar para proporcionar autorización. Se puede otorgar un rol o un grupo de roles a una sola persona o un grupo de personas. Se puede otorgar un rol a su vez a otros roles. Al definir diferentes tipos de roles, los administradores pueden administrar los privilegios de acceso con mucha más facilidad.
 
    .row 
      .col-6
        figure
          img(src='@/assets/curso/temas/tema5/img20.png', alt='')
      
      .col-6
        p(data-aos="zoom-in") Los sistemas de administración de bases de datos brindan una administración de privilegios fácil y controlada a través de roles. Los roles son grupos con nombre de privilegios relacionados que otorga a los usuarios u otros roles. Los roles están diseñados para facilitar la administración del sistema del usuario final y los privilegios de objetos. Las siguientes propiedades de los roles permiten una administración de privilegios más sencilla dentro de una base de datos:

        .tarjeta.tarjeta--blanca.p-4
          ul.lista-ul--color
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | Administración de privilegios reducidos: en lugar de otorgar explícitamente el mismo conjunto de privilegios para varios usos, puede otorgar los privilegios a un grupo de usuarios relacionados con un rol. Entonces, solo se debe otorgar el rol a cada miembro del grupo.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | Administración dinámica de privilegios: si los privilegios de un grupo deben cambiar, solo se deben modificar los privilegios del rol.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | Disponibilidad selectiva de privilegios: puede habilitar o deshabilitar selectivamente los roles otorgados a un usuario. Esto permite un control específico de los privilegios de un usuario en cualquier situación dada.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | Seguridad específica de la aplicación: puede proteger el uso de roles con una contraseña. Las aplicaciones se pueden crear específicamente para habilitar un rol cuando se proporciona la contraseña correcta. Los usuarios no pueden habilitar el rol si no conocen la contraseña.   

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
                      p.text-small.mb-0 Anexo 4 - Concesión y revocación de privilegios y funciones usando comandos.
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
                      p.text-small.mb-0 Anexo 5 - Gestionar permisos de usuario en Microsoft Access.
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://docs.google.com/document/d/1ojd75qS-nmacZ1P0AaHxt-56VS9Gezhbf_V-sVsJuH4/edit?usp=sharing" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

    Separador
    #t_5_5.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 5.5. Optimización de bases de datos

    p(data-aos="zoom-in") Por medio de la siguiente infografía sabrá cómo optimizar las bases de datos.

    .row.justify-content-center.mb-4
      .col-4.text-center
        .bloque-texto-e.color-primario(style="border-radius: 20px")
          p.text-white Optimización de bases de datos

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4(style="background-color:#ABC4E7")
        .row.justify-content-center.mb-3
          .col-auto
            img(src='@/assets/curso/temas/tema5/img21.svg' alt='')
        p.text-center La optimización de la base de datos se refiere a una variedad de estrategias para reducir el tiempo de respuesta del sistema de la base de datos. Siga leyendo para obtener más información sobre la optimización de bases de datos y los profesionales que administran bases de datos en una amplia gama de industrias.

      .tarjeta.p-4(style="background-color:#ABC4E7")
        .row.justify-content-center.mb-3
          .col-auto
            img(src='@/assets/curso/temas/tema5/img22.svg' alt='')
        p.text-center Tener en cuenta cómo se realiza la optimización de  la base de datos para mejor la velocidad, un ejemplo de esto es Magneto.

      .tarjeta.p-4(style="background-color:#ABC4E7")
        .row.justify-content-center.mb-3
          .col-auto
            img(src='@/assets/curso/temas/tema5/img23.svg' alt='')
        p.text-center Las bases de datos pueden almacenar enormes cantidades de información, petabytes de información. Se accede a bits específicos de datos mediante consultas escritas en un lenguaje de interfaz particular, como SQL. La optimización de la base de datos implica maximizar la velocidad y la eficiencia con la que se recuperan los datos. 

      .tarjeta.p-4(style="background-color:#ABC4E7")
        .row.justify-content-center.mb-3
          .col-auto
            img(src='@/assets/curso/temas/tema5/img24.svg' alt='')
        p.text-center Los diseñadores, administradores y analistas de bases de datos trabajan juntos para optimizar el rendimiento del sistema a través de diversos métodos. El diseño cuidadoso que aborda cuidadosamente las necesidades funcionales es la base de la mejora del rendimiento.

      .tarjeta.p-4(style="background-color:#ABC4E7")
        .row.justify-content-center.mb-3
          .col-auto
            img(src='@/assets/curso/temas/tema5/img25.svg' alt='')
        p.text-center La construcción de consultas también puede producir resultados más rápidos. Los administradores y analistas buscan mejorar los métodos de acceso a los datos de sus servidores y los tiempos de recuperación a través de técnicas de diseño, análisis estadístico y monitoreo del tráfico del sistema.

      .tarjeta.p-4(style="background-color:#ABC4E7")
        .row.justify-content-center.mb-3
          .col-auto
            img(src='@/assets/curso/temas/tema5/img26.svg' alt='')
        p.text-center En esta función se esfuerza por aprovechar al máximo el potencial de su servidor al poseer un sólido conocimiento de la estructura de los datos, las aplicaciones instaladas en el servidor y el impacto que tienen las diversas tareas en el rendimiento general de la base de datos.

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
                      p.text-small.mb-0 Anexo 6 - Usar el analizador de rendimiento para optimizar una base de datos de Microsoft Access.
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
                      p.text-small.mb-0 Anexo 7 - Aumentar la velocidad de ejecución de Microsoft Access.
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://docs.google.com/document/d/1ojd75qS-nmacZ1P0AaHxt-56VS9Gezhbf_V-sVsJuH4/edit?usp=sharing" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

    Separador
    #t_5_6.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 5.6. Limpieza de la base de datos

    p(data-aos="zoom-in") En este apartado descubrirá todo sobre la limpieza de una base de datos.

    .row.justify-content-center.mt-5(data-aos="fade-right")
      .col-6
        figure
          img(src='@/assets/curso/temas/tema5/img27.png', alt='')

      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Limpieza de la base de datos")
            .col-auto
              p La cantidad de datos disponibles ha seguido aumentando y por lo tanto, existen oportunidades de error. Como resultado se confia en la limpieza de datos para optimizar nuestros procesos de gestión de base datos. La limpieza de los datos de una base de datos aumenta la integridad y relevancia de los datos al reducir las inconsistencias, eliminar errores y permitir que las empresas tomen decisiones precisas e informadas.

          .row(numero="2" titulo="¿Qué es la limpieza de datos?")
            .col-auto
              p Es el proceso de identificación y resolución de datos corruptos, inexactos o irrelevantes. Esta etapa crítica del procesamiento de datos, también conocida como depuración o limpieza de datos aumenta la coherencia, la confiabilidad, la gestión de las bases de datos y el valor de los datos de una empresa u organización.

          .row(numero="3" titulo="Las inexactitudes comunes en los datos ")
            .col-auto
              p Incluye valores perdidos, entradas extraviadas y errores tipográficos. En algunos casos, la limpieza de datos requiere que se completen o corrijan ciertos valores, mientras que en otros casos, los valores deberán eliminarse por completo.

          .row(numero="4" titulo="Datos sucios o con errores")
            
            .col-auto
             p Los datos que contienen este tipo de errores e inconsistencias se denominan “datos sucios” y sus consecuencias son reales. Se estima que solo el 3% de los datos cumplen con los estándares básicos de calidad y que los datos sucios les cuestan a las empresas u organizaciones en los EE. UU. Más de $3 billones de dólares cada año.
                
          .row(numero="5" titulo="El poder de los datos limpios")
            
            .col-auto
              p Una decisión es tan buena como los datos que la informan, y con cantidades masivas de datos que fluyen desde múltiples fuentes, una herramienta de limpieza de datos es más importante que nunca para garantizar la precisión de la información, la eficiencia de los procesos e impulsar la ventaja competitiva de una empresa u organización. Algunos de los principales beneficios de la depuración de datos incluyen:
    
    .row.justify-content-center.mt-5(data-aos="fade-right")
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="6" titulo="Toma de decisiones mejorada")
            .col-auto
             p La calidad de los datos es fundamental porque afecta directamente la capacidad de su empresa para tomar decisiones acertadas y calcular estrategias efectivas. Ninguna empresa puede permitirse perder tiempo y energía corrigiendo errores provocados por datos sucios. 

          .row(numero="7" titulo="Considere una empresa que se basa en datos generados por el cliente")
            
            .col-auto
              p Para desarrollar cada nueva generación de sus sistemas de pedidos en línea y móviles como AnyWare de Domino's Pizza. Sin un programa de limpieza de datos es posible que los cambios y revisiones de la aplicación no se basen en información precisa o exacta. Como resultado, la nueva versión de la aplicación puede perder su objetivo y no cumplir con las necesidades o expectativas del cliente.

          .row(numero="8" titulo="Eficiencia mejorada ")
            .col-auto
             p Utilizar datos limpios no solo es beneficioso para las necesidades externas de su empresa, sino que también puede mejorar la eficiencia y la productividad internas. Cuando la información se limpia adecuadamente, revela información valiosa sobre las necesidades y los procesos internos, por ejemplo, una empresa puede usar datos para rastrear la productividad de los empleados o la satisfacción laboral en un esfuerzo por predecir y reducir la rotación. La limpieza de los datos de las revisiones de desempeño, los comentarios de los empleados y otros documentos de recursos humanos relacionados puede ayudar a identificar rápidamente a los empleados que tienen un mayor riesgo de desgaste.

          .row(numero="9" titulo="Ventaja competitiva")
            .col-auto
              p Cuanto mejor satisfaga una empresa las necesidades de sus clientes, más rápido se elevará por encima de sus competidores. Una herramienta de limpieza de datos ayuda a proporcionar información completa y confiable para que pueda identificar las necesidades cambiantes de los clientes y mantenerse al tanto de las tendencias emergentes. La limpieza de datos puede producir tasas de respuesta más rápidas, generar clientes potenciales de calidad y mejorar la experiencia del cliente.

          .row(numero="10" titulo="Limpieza de datos paso a paso")
            .col-auto
              p Una herramienta de limpieza de datos puede automatizar la mayoría de los aspectos del programa de limpieza de datos general de una empresa; pero una herramienta es solo una parte de una solución continua y a largo plazo para la limpieza de datos. 
              
      .col-6
        figure
          img(src='@/assets/curso/temas/tema5/img28.png', alt='')

    Separador
    #t_5_7.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 5.7. Pruebas en la base de datos

    .row.justify-content-center.align-items-center.py-0
      .col-12(data-aos="fade-up")
        p.mb-5 A continuación puede consultar las pruebas correspondientes.
    
    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row.mt-5
          .col-md-7.mb-4.mb-md-0
            p En el desarrollo de software, el procesamiento y almacenamiento de datos en diferentes estados refleja las reglas comerciales sobre las que se basa una aplicación. El corazón y el alma de cualquier aplicación de software son los datos que se conservan en las bases de datos para su recuperación y procesamiento posterior. El sistema de base de datos (SQL o no SQL) elegido para una aplicación debe satisfacer las necesidades de almacenamiento y procesamiento de datos requeridos por la aplicación.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema5/img29.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            .h5.mb-3 ¿Qué son las pruebas de bases de datos?
            p Se ha analizado el código de prueba y también cómo probar correctamente las API, pero ¿qué pasa con la capa de datos de esta aplicación?, ¿de qué se trata la prueba de base de datos?
            p Las pruebas de bases de datos se componen principalmente de la construcción de consultas SQL para afirmar y validar diferentes operaciones, estructuras y atributos de la base de datos requeridos por la aplicación para la que es la base de datos. 
            p Este proceso puede incluir validar el esquema, probar operaciones y transacciones CRUD para asegurarse de que la base de datos esté configurada correctamente. Estas pruebas pueden ser completamente automatizadas, completamente manuales o un enfoque híbrido, utilizando una combinación de procesos manuales y automatizados, por ejemplo, en una prueba completamente manual, podría ingresar al sistema de administración de la base de datos y ejecutar consultas para validar las suposiciones. O puede probar la interfaz de usuario de la aplicación para ver que devuelve los datos correctos después de una operación.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img30.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            p Los probadores de bases de datos trabajan con los desarrolladores de aplicaciones para probar adecuadamente los escenarios en los que debe operar la base de datos. Un evaluador de bases de datos debe comprender completamente las reglas comerciales de la aplicación, además de estar familiarizado con la estructura de la base de datos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img31.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            .h5.mb-3 ¿Por qué son importantes las pruebas de bases de datos?
            p Cuando la integridad de los datos en una aplicación se ve comprometida, puede provocar enormes pérdidas monetarias que podrían provocar el colapso de todo el negocio. La gravedad de estas consecuencias varía desde características menos sensibles a los datos, como la cantidad de retweets en un tweet, hasta el valor real de las acciones en una aplicación comercial. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img32.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            p Si bien las pruebas de la base de datos no pueden evitar todas las violaciones de datos o los compromisos de integridad, las peores consecuencias se pueden mitigar probando minuciosamente el sistema de base de datos utilizado para una aplicación. Algunas de las razones comunes para probar bases de datos son:

            ul.lista-ul--color
              li(data-aos="zoom-in")
                i.fas.fa-database 
                | Para prevenir ataques como ataques de inyección SQL.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                | Asegurarse de que los problemas de la red o los cortes de energía no afecten la integridad de los datos, ni provoquen la pérdida o la corrupción de datos.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                | Eliminar errores de la base de datos para mantener la calidad de los datos.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                | Para verificar que todos los datos se almacenan en el formato correcto.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                | Para validar relaciones entre entidades dentro de la base de datos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img33.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            .h5.mb-3 ¿Qué se debe probar?
            p Una vez que comprenda de qué se tratan las pruebas de bases de datos y por qué son importantes, puede aplicar lo que sabe para asegurarse de que todos los casos de prueba están bien cubiertos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img34.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            .h5.mb-3 CRUD
            p El primer conjunto de casos de prueba es para las operaciones de creación, lectura, actualización y eliminación (CRUD) que realiza su aplicación. Esto es para garantizar que los datos se almacenen y recuperen de manera que se asegure la integridad de los datos. Un evaluador puede hacer esto directamente desde la interfaz de la aplicación o usar un sistema de administración de bases de datos (DBMS) para ejecutar consultas, usando comandos de lenguaje de manipulación de datos SQL (DML). Los comandos SQL maliciosos que pueden dañar los datos de la base de datos también se pueden ejecutar en un entorno de prueba para garantizar que la base de datos esté protegida contra ataques de inyección SQL.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img35.png', alt='')

    p.mt-5(data-aos="zoom-in") Actas: las transacciones son operaciones sensibles de la base de datos porque requieren que se realicen diferentes consultas con una recuperación adecuada de las fallas. Una transacción de base de datos estándar es seguir los principios de ACID.
   
    .row 
      .col-7
        .tarjeta.tarjeta--blanca.p-4
          ul.lista-ul--color
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | A de atomicity - atomicidad: debe completar todas las operaciones o no realizar ninguna operación en absoluto.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	C de consistency - consistente: el estado de la base de datos siempre debe ser válido y se deben cumplir todas las restricciones.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	I de isolation - aislamiento: cada transacción debe realizarse de forma aislada de otras transacciones que se ejecutan al mismo tiempo. El estado final de la base de datos debe ser como si las transacciones se ejecutaran secuencialmente.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	D de durability - durabilidad: sin pérdida de datos por ningún motivo, una vez que se confirma la transacción.
        
        p(data-aos="zoom-in") El probador de la base de datos elabora consultas SQL para verificar y validar estas propiedades en las operaciones de transacción en la aplicación. Este tipo de prueba es especialmente importante para probar aplicaciones financieras.
      .col-5
        figure
          img(src='@/assets/curso/temas/tema5/img35.svg', alt='')

    p(data-aos="zoom-in") Esquema: es el modelo de la estructura de la base de datos y los evaluadores deben estar muy familiarizados con él. Los evaluadores pueden usar el comando DESC de SQL para revelar el esquema de la base de datos y asegurarse de que se ajuste a lo que espera la aplicación. Los evaluadores también usan expresiones regulares para validar los nombres de los campos de la tabla y verificar que el valor se ajuste al tipo de datos esperado.

    .row 
      .col-5
        figure
          img(src='@/assets/curso/temas/tema5/img36.png', alt='')
  
      .col-7

        p(data-aos="zoom-in") Disparadores: los desencadenadores son como controladores de eventos en el código. Cuando ocurre una operación en una tabla (por ejemplo, cuando se agrega una nueva fila) se puede configurar un disparador para ejecutar un fragmento de código o consulta en respuesta a la operación que acaba de ocurrir. Los disparadores crean un efecto de cascada en algunas operaciones, por ejemplo, eliminar a un usuario de una base de datos puede provocar que las publicaciones del usuario también se eliminen. Como evaluador desea asegurarse de que esta operación se realice con precisión y no elimine las publicaciones de otro usuario.
        p(data-aos="zoom-in") Un evaluador puede ejecutar una consulta SQL para iniciar la operación de origen que desencadena la cascada. El probador también podría realizar la operación desde la interfaz de la aplicación para examinar su efecto en los registros de la base de datos.
        p(data-aos="zoom-in") Otros: las operaciones que describí anteriormente no son el único conjunto de operaciones que se pueden probar, son solo algunas de las más importantes para la mayoría de las aplicaciones sensibles a los datos. Otras operaciones y atributos que se pueden probar son:

        .caja.color-acento-contenido-b.p-4(style="border-radius: 20px")
          ul.lista-ul--color
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | Restricciones de la base de datos.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	Procedimientos almacenados.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	Vista.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	Índices.
        
    .row.mt-5
      .col-7
        .h5.mb-3 ¿Cómo probar las bases de datos?
        p(data-aos="zoom-in") Ahora que se sabe qué probar ¿cómo se deben realizar las pruebas? Sorprendentemente, ejecutar las pruebas de las bases de datos no es tan diferente a ejecutar pruebas en aplicaciones. Como se mencionó anteriormente, estas pruebas se pueden realizar manualmente realizando operaciones desde la interfaz de usuario de la aplicación para asegurarse de que se devuelvan los datos correctos después de cada operación o verificando los registros de la base de datos para ver los resultados de la operación. También puede utilizar un DBMS para ejecutar sus consultas de prueba y validar los resultados. Si se prefiere no realizar pruebas manualmente, puede sentirse aliviado al saber que las pruebas automatizadas de bases de datos son muy similares a las pruebas automatizadas en el código de la aplicación. La principal diferencia es que esta vez sus pruebas ejecutan consultas en lugar de código de aplicación, también se aplican los siguientes pasos que se encuentran en el código de la aplicación de prueba:

        .tarjeta.tarjeta--blanca.p-4
          ul.lista-ul--color
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | Prepare su entorno de prueba.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	Ejecute sus pruebas con un corredor de prueba (por ejemplo, Selenium).
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	Verifique y valide sus resultados.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	Informe sus afirmaciones.
        
        p(data-aos="zoom-in") Esta es la razón por la que el mejor atributo de un probador de bases de datos es poder crear consultas SQL para cada caso de prueba requerido.
      .col-5
        figure
          img(src='@/assets/curso/temas/tema5/img37.svg', alt='')

    .mb-4.mt-5
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
        .h3.col-auto.mb-0.ms-2 Herramientas de prueba de las bases de datos

    .row.mt-5
      .col-7
        p(data-aos="zoom-in") Existen muchas herramientas de prueba de bases de datos. La herramienta que elija dependerá de uno o más de los siguientes:

        .caja.color-primario-b.p-4
          ul.lista-ul--color
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | Estrategia de prueba (manual, automatizada o híbrida).
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	Tipo de base de datos (SQL o No-SQL).
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	Proveedor de base de datos (MySQL, MSSQL, Oracle u otro).
        
        p(data-aos="zoom-in") La mayoría de los sistemas de prueba de bases de datos se componen de más de una herramienta, por ejemplo, Selenium se puede utilizar con TestNG para pruebas de bases de datos en aplicaciones Java. De manera similar, SeLite usa Selenium para probar bases de datos SQLite, mientras que SQL Server viene con herramientas para bases de datos de pruebas unitarias. 

        .tarjeta.color-primario.p-3.mt-5
              .row.justify-content-around.align-items-center
                .col-auto
                  img(src="@/assets/curso/temas/tema3/img1.svg").img65
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4.mb-1 Para mayor comprensión diríjase al:
                      p.text-small.mb-0 Anexo 8 - Lista de herramientas de prueba de bases de datos.
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://docs.google.com/document/d/1ojd75qS-nmacZ1P0AaHxt-56VS9Gezhbf_V-sVsJuH4/edit?usp=sharing" target="_blank")
                        span Descargar
                        i.fas.fa-file-download
      .col-5
        figure
          img(src='@/assets/curso/temas/tema5/img38.png', alt='')
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
