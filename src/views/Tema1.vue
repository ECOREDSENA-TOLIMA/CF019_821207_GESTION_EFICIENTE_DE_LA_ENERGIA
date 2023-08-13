<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--gris.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Evolución de las bases de datos

    p(data-aos="zoom-in") La base de datos ha completado más de 50 años de viaje desde su evolución del sistema de archivos planos a los sistemas relacionales y relacionales de objetos. Ha pasado por varias generaciones y esta evolución ha sido así:

    .tarjeta.tarjeta--gris.p-4.mt-5
      PasosB.color-acento-botones
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p <b>Basado en archivos: </b>
            p En 1968 fue el año en que se introdujeron las bases de datos basadas en archivos. En las bases de datos basadas en archivos, los datos se mantenían en un archivo plano. Aunque los archivos tienen muchas ventajas, existen varias limitaciones. Una de las principales ventajas es que el sistema de archivos tiene varios métodos de acceso, por ejemplo, secuencial, indexado y aleatorio. Requiere una programación extensa en un lenguaje de tercera generación como #[em COBOL, BASIC].

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1.png', alt='')

        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p <b>Modelo de datos jerárquico:  </b>
            p En 1968-1980 fue la era de la base de datos jerárquica. El prominente modelo de base de datos jerárquica fue el primer DBMS de IBM. Se llamó IMS (Sistema de Gestión de la Información). En este modelo, ¿los archivos están relacionados de manera padre / hijo?. Al igual que el sistema de archivos este modelo también tenía algunas limitaciones, como una implementación compleja, falta de independencia estructural, no puede manejar fácilmente una relación de muchos a muchos, etc.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img2.png', alt='')

        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p <b>Modelo de datos de red:  </b>
            p #[em Charles Bachman] desarrolló el primer em DBMS en #[em Honeywell] llamado #[em Integrated Data Store] (IDS). Fue desarrollado a principios de la década de 1960; pero fue estandarizado en 1971 por el grupo CODASYL (Conference on Data Systems Languages). En este modelo, los archivos están relacionados como propietarios y miembros, como en el modelo de red común. El modelo de datos de red identificó los siguientes componentes:
            ul.lista-ul--color
              li(data-aos="zoom-in")
                i.fas.fa-database 
                | Esquema de red (organización de la base de datos).
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Subesquema (vistas de la base de datos por usuario).
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Lenguaje de gestión de datos (procedimental).

            p Este modelo también tenía algunas limitaciones como la complejidad del sistema y era difícil de diseñar y mantener.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img3.png', alt='')

        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p <b>Base de datos relacional:   </b>
            p En 1970 - presente, es la era de las bases de datos relacionales y la gestión de bases de datos. En 1970 EF Codd propuso el modelo relacional. El modelo de base de datos relacional tiene dos terminologías principales llamadas instancia y esquema. La instancia es una tabla con filas o columnas. El esquema especifica la estructura como nombre de la relación, tipo de cada columna y nombre. Este modelo utiliza algún concepto matemático como la teoría de conjuntos y la lógica de predicados. La primera aplicación de base de datos de Internet se creó en 1995. Durante la era de la base de datos relacional se habían introducido muchos más modelos como el modelo orientado a objetos, el modelo relacional de objetos, etc.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='')

        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p <b>Base de datos en la nube:  </b>
            p Le permite almacenar, administrar y recuperar sus datos estructurados y no estructurados a través de una plataforma en la nube. Se puede acceder a estos datos a través de Internet. Las bases de datos en la nube también se denominan base de datos como servicio (DBaaS) porque se ofrecen como un servicio administrado. Algunas de las mejores opciones en la nube son:
            ul.lista-ul--color
              li(data-aos="zoom-in")
                i.fas.fa-database 
                | AWS (servicios web de <i>Amazon</i>).
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Computación de copo de nieve.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Servicios de <i>Oracle Database Cloud</i>.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Servidor <i>Microsoft SQL</i>.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Llave de nube de <i>Google</i>.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img5.png', alt='')

        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p <b>Ventajas de la base de datos en la nube:  </b>
            p <b>Costos más bajos</b>: generalmente, el proveedor de la empresa no tiene que invertir en bases de datos. Puede mantener y dar soporte a uno o más centros de datos.
            p <b>Automatizado</b>: las bases de datos en la nube están enriquecidas con una variedad de procesos automatizados, como recuperación, conmutación por error y escalado automático.
            p <b>Mayor accesibilidad</b>: puede acceder a su base de datos basada en la nube desde cualquier ubicación en cualquier momento. Todo lo que necesita es una conexión a Internet.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img6.png', alt='')

        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p <b>Base de datos NoSQL:  </b>
            p Es un enfoque para diseñar tales bases de datos que pueden adaptarse a una amplia variedad de modelos de datos. NoSQL significa "no solo SQL". Es una alternativa a las bases de datos relacionales tradicionales en las que los datos se colocan en tablas y el esquema de datos está perfectamente diseñado antes de crear la base de datos. Las bases de datos NoSQL son útiles para un gran conjunto de datos distribuidos. Algunos ejemplos de sistema de base de datos NoSQL con su categoría son:

            ul.lista-ul--color
              li(data-aos="zoom-in")
                i.fas.fa-database 
                | <i>MongoDB, CouchDB, Cloudant</i> (basado en documentos).
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	<i>Memcached, Redis, Coherence</i> (almacén de valores-clave).
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	<i>HBase</i>, mesa grande, acumulación (tabular).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='')

        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p <b>Ventaja de NoSQL:  </b>
            p <b>Alta escalabilidad</b>: NoSQL puede manejar una gran cantidad de datos debido a su escalabilidad. Si los datos crecen, la base de datos NoSQL la escala para manejar esos datos de manera eficiente.
            p <b>Alta disponibilidad</b>: NoSQL admite la replicación automática. La replicación automática lo hace altamente disponible porque en caso de falla, los datos se replican al estado consistente anterior.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img8.png', alt='')

        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p <b>Desventaja de NoSQL:</b>
            p <b>Fuente abierta</b>: NoSQL es una base de datos de código abierto, por lo que todavía no existe un estándar confiable para NoSQL.
            p <b>Desafío de gestión</b>: la gestión de datos en NoSQL es mucho más complicada que las bases de datos relacionales. Es muy difícil de instalar y aún más complicado de administrar a diario.
            p <b>La GUI no está disponible:</b> las herramientas de GUI para la base de datos NoSQL no están fácilmente disponibles en el mercado.
            p <b>Respaldo</b>: la copia de seguridad es un gran punto débil para las bases de datos NoSQL. Algunas bases de datos como MongoDB no tienen enfoques potentes para la copia de seguridad de datos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='')

        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p <b>Las bases de datos orientadas a objetos:</b>
            p Contienen datos en forma de objetos y clases. Los objetos son la entidad del mundo real y los tipos son la colección de objetos. Una base de datos orientada a objetos es una combinación de características del modelo relacional con principios orientados a objetos. Es una implementación alternativa a la del modelo relacional. Las bases de datos orientadas a objetos mantienen las reglas de la programación orientada a objetos. Un sistema de gestión de bases de datos orientado a objetos es una aplicación híbrida. <b>El modelo de base de datos orientada a objetos contiene las siguientes propiedades</b>:

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='')

        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p <b>Propiedades de programación orientada a objetos:</b>
            ul.lista-ul--color
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |  Objetos.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Clases.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Herencia.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Polimorfismo.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Encapsulamiento.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img11.png', alt='')

        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p <b>Propiedades de la base de datos relacional:</b>
            ul.lista-ul--color
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |  Atomicidad.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Consistencia.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Integridad.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Durabilidad.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Concurrencia.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Procesamiento de consultas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img12.png', alt='')

        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            p <b>Bases de datos de gráficos: </b>
            p Es una base de datos NoSQL. Es una representación gráfica de datos. Contiene nodos y aristas. Un nodo representa una entidad y cada borde representa una relación entre dos bordes. Cada nodo de una base de datos gráfica representa un identificador único. Las bases de datos de gráficos son beneficiosas para buscar la relación entre los datos porque resaltan la relación entre los datos relevantes. Las bases de datos de gráficos son muy útiles cuando la base de datos contiene una relación compleja y un esquema dinámico. Se utiliza principalmente en la gestión de la cadena de suministro, identificando la fuente de telefonía IP.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img13.png', alt='')

    .mb-4.mt-5
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
        .h3.col-auto.mb-0.ms-2 DBMS (Sistema de gestión de bases de datos):      

    p(data-aos="zoom-in") El sistema de gestión de bases de datos es un #[em software] que se utiliza para almacenar y recuperar la base de datos, por ejemplo, Oracle, MySQL, etc.; estas son algunas herramientas populares de DBMS.

    .row 
      .col-7
        .tarjeta.tarjeta--blanca.p-4
          ul.lista-ul--color
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | DBMS proporciona la interfaz para realizar las diversas operaciones como creación, eliminación, modificación, etc.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	DBMS permite al usuario crear sus bases de datos según sus necesidades.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	DBMS acepta la solicitud de la aplicación y proporciona datos específicos a través del sistema operativo.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	DBMS contiene el grupo de programas que actúa de acuerdo con las instrucciones del usuario.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	Proporciona seguridad a la base de datos.
      
      .col-5
        figure
          img(src='@/assets/curso/temas/tema1/img14.svg', alt='')

    .mb-4.mt-5
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
        .h3.col-auto.mb-0.ms-2 Ventaja de DBMS:
      
    .row 
      .col-5
        figure
          img(src='@/assets/curso/temas/tema1/img15.svg', alt='')

      .col-7
        .tarjeta.tarjeta--blanca.p-4
          ul.lista-ul--color
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | <b>Controla la redundancia</b>: almacena todos los datos en un solo archivo de base de datos, por lo que puede controlar la redundancia de datos.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	<b>Compartir datos</b>: un usuario autorizado puede compartir los datos entre varios usuarios.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	<b>Respaldo</b>: proporciona un subsistema de copia de seguridad y recuperación. Este sistema de recuperación crea datos automáticos a partir de fallas del sistema y restaura los datos si es necesario.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	<b>Varias interfaces de usuario</b>: proporciona un tipo diferente de interfaces de usuario como GUI, interfaces de aplicaciones.

    .mb-4.mt-5
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
        .h3.col-auto.mb-0.ms-2 Desventaja de DBMS:

    .row 
      .col-7
        ul.lista-ul--color
            li(data-aos="zoom-in")
              i.fas.fa-database 
              | <b>Tamaño</b>: ocupa un gran espacio en disco y una gran memoria para funcionar de manera eficiente.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	<b>Costo</b>: DBMS requiere un procesador de datos de alta velocidad y una memoria más grande para ejecutar el <em>software</em> DBMS, por lo que es costoso.
            li(data-aos="zoom-in")
              i.fas.fa-database 
              |	<b>Complejidad</b>: DBMS crea requisitos y complejidad adicionales.
        
        .mb-4.mt-5
          .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
            img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
            .h3.col-auto.mb-0.ms-2 RDBMS (Sistema de gestión de bases de datos relacionales): 
        
        p(data-aos="zoom-in") Se representa como una tabla que contiene filas y columnas. RDBMS se basa en el modelo relacional; fue presentado por EF Codd. Una base de datos relacional contiene los siguientes componentes:
        .row
          .tarjeta.tarjeta--blanca.p-4
            .row.align-items-end
              .col-10
                ul.lista-ul--color
                  li(data-aos="zoom-in")
                    i.fas.fa-database 
                    |  Mesa.
                  li(data-aos="zoom-in")
                    i.fas.fa-database 
                    |	Grabar / tupla.
                  li(data-aos="zoom-in")
                    i.fas.fa-database 
                    |	Campo / nombre de columna / atributo.
                  li(data-aos="zoom-in")
                    i.fas.fa-database 
                    |	Ejemplo.
                  li(data-aos="zoom-in")
                    i.fas.fa-database 
                    |	Esquema.
                  li(data-aos="zoom-in")
                    i.fas.fa-database 
                    |	Teclas.

              .col-auto
                  figure
                  img(src='@/assets/curso/temas/tema1/img17.svg', alt='')

      .col-5
        figure
          img(src='@/assets/curso/temas/tema1/img16.svg', alt='')

      .row.align-items-center.justify-content-center(data-aos="zoom-in")
        .col-8
          .caja.color-acento-contenido.mt-5
            p.p-4 Un RDBMS es un DBMS tabular que mantiene la seguridad, integridad, precisión y consistencia de los datos.

    Separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 1.1 Tipos de bases de datos

    p(data-aos="zoom-in") Hay varios tipos de bases de datos que se utilizan para almacenar diferentes variedades de datos. A través del siguiente recurso se invita a explorar los tipos de bases de datos.

    .tarjeta.tarjeta--azul.p-4(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.mt-5.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h5 Ventajas de la base de datos NoSQL
            ul.lista-ul--color
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |  Permite una buena productividad en el desarrollo de aplicaciones, ya que no es necesario almacenar datos en un formato estructurado.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Es una mejor opción para administrar y manejar grandes conjuntos de datos.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Proporciona alta escalabilidad.
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	Los usuarios pueden acceder rápidamente a los datos de la base de datos a través de valores clave.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img18.png', alt='')

        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h5 Base de datos en la nube:
            p Un tipo de base de datos donde los datos se almacenan en un entorno virtual y se ejecutan sobre la plataforma de computación en la nube. Proporciona a los usuarios varios servicios de computación en la nube (SaaS, PaaS, IaaS, etc.) para acceder a la base de datos. 
            p Existen numerosas plataformas en la nube, pero las mejores opciones son:
            ul.lista-ul--color
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |  Servicios web de #[em Amazon] (AWS).
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	#[em Microsoft Azure].
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	#[em Kamatera].
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	#[em PhonixNAP].
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	#[em ScienceSoft].
              li(data-aos="zoom-in")
                i.fas.fa-database 
                |	#[em Google Cloud SQL], etc.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img19.png', alt='')

        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h5 Bases de datos orientadas a objetos
            p El tipo de base de datos que utiliza el enfoque del modelo de datos basado en objetos para almacenar datos en el sistema de base de datos. Los datos se representan y almacenan como objetos que son similares a los objetos utilizados en el lenguaje de programación orientado a objetos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img20.png', alt='')

        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h5 Bases de datos jerárquicas
            p Es el tipo de base de datos que almacena datos en forma de nodos de relación padre-hijo. Aquí, organiza los datos en una estructura en forma de árbol. Los datos se almacenan en forma de registros que están conectados a través de enlaces. Cada registro secundario del árbol contendrá solo un padre. Por otro lado, cada registro principal puede tener varios registros secundarios.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img21.png', alt='')

        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h5 Bases de datos de red
            p Es la base de datos que normalmente sigue el modelo de datos de red. Aquí, la representación de los datos se realiza en forma de nodos conectados a través de enlaces entre ellos. A diferencia de la base de datos jerárquica, permite que cada registro tenga varios nodos secundarios y principales para formar una estructura gráfica generalizada.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img22.png', alt='')

    .mb-4.mt-5
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
        .h3.col-auto.mb-0.ms-2 Base de datos relacional

    p(data-aos="zoom-in") Esta base de datos se centra en el modelo de datos relacionales, que almacena datos en forma de filas (tupla) y columnas (atributos), y juntos forman una tabla (relación). Una base de datos relacional utiliza SQL para almacenar, manipular y mantener los datos. EF Codd inventó la base de datos en 1970. Cada tabla de la base de datos lleva una clave que hace que los datos sean únicos, los demás ejemplos de bases de datos relacionales son #[em MySQL, Microsoft SQL Server, Oracle], etc.
    
    p(style="color:#6530CE")(data-aos="zoom-in") Propiedades de la base de datos relacional: existen las siguientes cuatro propiedades comúnmente conocidas de un modelo relacional denominadas propiedades ACID, donde:

    .caja.color-acento-contenido-b.p-4.p-md-5.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-end
        .col-md.col-lg-7
          .tarjeta.tarjeta--blanca.p-4
            p.mb-4 <b>A</b> de <i>atomicity</i> que significa atomicidad: asegura que la operación de datos se completará con éxito o con fracaso. Sigue la estrategia de "todo o nada", por ejemplo, una transacción se confirmará o se abortará.
            p.mb-4 <b>C</b> de <i>consistency</i> que significa consistencia: si se realiza alguna operación sobre los datos se debe conservar su valor antes y después de la operación, por ejemplo, el saldo de la cuenta antes y después de la transacción debe ser correcto, es decir, debe permanecer conservado.
            p.mb-4 <b>I</b> de <i>isolation</i> que significa aislamiento: puede haber usuarios concurrentes para acceder a los datos al mismo tiempo desde la base de datos. Por lo tanto, el aislamiento entre los datos debe permanecer aislado, por ejemplo, cuando ocurren múltiples transacciones al mismo tiempo los efectos de una transacción no deben ser visibles para las otras transacciones en la base de datos.
            p.mb-4 <b>D</b> de <i>durability</i> que significa durabilidad: asegura que una vez que completa la operación y confirma los datos, los cambios de datos deben quedar permanentes.
          
        .col-5
          img(src="@/assets/curso/temas/tema1/img23.svg")

    .mb-4.mt-5
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
        .h3.col-auto.mb-0.ms-2 Base de datos NoSQL

    p(data-aos="zoom-in") NonSQL / Not Only SQL es un tipo de base de datos que se utiliza para almacenar una amplia gama de conjuntos de datos. No es una base de datos relacional, ya que almacena datos no solo en forma tabular, sino de varias formas diferentes. Surgió cuando aumentó la demanda de crear aplicaciones modernas, por lo tanto, NoSQL presentó una amplia variedad de tecnologías de bases de datos en respuesta a las demandas; se puede dividir aún más una base de datos NoSQL en los siguientes cuatro tipos:

    .row.justify-content-around.align-items-center
      .col-6
        img(src="@/assets/curso/temas/tema1/img24.svg")
      .col-6
        ul.lista-ul--color
          li(data-aos="zoom-in")
            i.fas.fa-database 
            | Almacenamiento de clave-valor: es el tipo más simple de almacenamiento de base de datos donde almacena cada elemento individual como una clave (o nombre de atributo) que mantiene su valor juntos.
          li(data-aos="zoom-in")
            i.fas.fa-database 
            | Base de datos orientada a documentos: un tipo de base de datos que se utiliza para almacenar datos como documentos similares a JSON. Ayuda a los desarrolladores a almacenar datos utilizando el mismo formato de modelo de documento que se utiliza en el código de la aplicación.
          li(data-aos="zoom-in")
            i.fas.fa-database 
            |	Bases de datos de gráficos: se utiliza para almacenar grandes cantidades de datos en una estructura similar a un gráfico. Por lo general, los sitios web de redes sociales utilizan la base de datos de gráficos.
          li(data-aos="zoom-in")
            i.fas.fa-database 
            |	Almacenes de columna ancha: es similar a los datos representados en las bases de datos relacionales. Aquí, los datos se almacenan juntos en columnas grandes, en lugar de almacenarse en filas. Ver figura 1.
    
    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mt-5
          p.mb-0 #[b Figura 1.] #[i Bases de datos SQL y NoSQL.]

        figure
          img(src='@/assets/curso/temas/tema1/img25.svg')

    .caja.color-primario--borde.mt-5(data-aos="fade-right")
      .row.p-5.align-items-end
        .col-7
          .mb-4.mt-5
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
              .h3.col-auto.mb-0.ms-2 Base de datos personal

          p La recopilación y el almacenamiento de datos en el sistema del usuario define una base de datos personal. Dicha base de datos está diseñada básicamente para un solo usuario.

          .mb-4.mt-5
            .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
              img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
              .h3.col-auto.mb-0.ms-2 Ventaja de la base de datos personal

          ul.lista-ul--color
            li(data-aos="zoom-in")
              ul
                li
                  i.fas.fa-database 
                  | Es simple y fácil de manejar.
            li(data-aos="zoom-in")
              ul
                li
                  i.fas.fa-database 
                  | Ocupa menos espacio de almacenamiento, ya que es de tamaño pequeño.

          .mb-4.mt-5
            .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
              img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
              .h3.col-auto.mb-0.ms-2 Base de datos operativa

          p El tipo de base de datos que crea y actualiza la base de datos en tiempo real. Básicamente está diseñada para ejecutar y manejar las operaciones diarias de datos en varios negocios, por ejemplo, una organización utiliza bases de datos operativas para administrar transacciones diarias.

          .mb-4.mt-5
            .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
              img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
              .h3.col-auto.mb-0.ms-2 Base de datos empresarial

          p Las grandes organizaciones o empresas utilizan esta base de datos para gestionar una gran cantidad de datos. Ayuda a las organizaciones a aumentar y mejorar su eficiencia. Una base de datos de este tipo permite el acceso simultáneo a los usuarios.

          .mb-4.mt-5
            .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
              img(src='@/assets/curso/temas/icono.svg' style="max-width: 15px;")
              .h3.col-auto.mb-0.ms-2 Ventajas de la base de datos empresarial

          ul.lista-ul--color
            li(data-aos="zoom-in")
              ul
                li
                  i.fas.fa-database 
                  | Los procesos múltiples son compatibles con la base de datos empresarial.
            li(data-aos="zoom-in")
              ul
                li
                  i.fas.fa-database 
                  | Permite ejecutar consultas paralelas en el sistema.

        .col-5
          figure
            img(src='@/assets/curso/temas/tema1/img26.svg', alt='')

    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 1.2 Herramientas de #[em software] más conocidas para bases de datos

    p A continuación puede ver las herramientas más comunes.

    figure
      img(src='@/assets/curso/temas/tema1/img27.svg')


</template>

<script>
export default {
  name: 'Tema1',
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
