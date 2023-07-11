<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Titulo de primer nivel


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='alt')

      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 La estadística juega un papel de suma importancia en la investigación científica, siendo soporte en el proceso de toma de decisiones, además es útil como direccionamiento y control en diferentes campos (como el de la salud).

        p La salud de las personas es un bien de innumerable valor que debe ser administrado de la mejor manera; por lo tanto, los alcances de la gestión pública requieren en gran parte de la calidad de la información respecto al objeto que es administrado y de los procedimientos utilizados para exponer dicha información.

        b A nivel salud las estadísticas se agrupan en:

        .row.mt-3
          .col-lg-3
            ul.lista-ul--color
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                | Demográficas    

          .col-lg-2
            ul.lista-ul--color
              li 
                i.fas.fa-atom(style="color: #7E5EE3")
                | Vitales  

          .col-lg-4
            ul.lista-ul--color
              li 
                i.fas.fa-atom(style="color: #7E5EE3")
                | Recursos y servicios  

          .col-lg-3
            ul.lista-ul--color
              li 
                i.fas.fa-atom(style="color: #7E5EE3")
                | De saneamiento

    .row.mb-4
      p Estas son utilizadas para describir aspectos como el grado de salud y el diagnóstico de las patologías, precisar el alcance y restricción de los programas de salud, así como el éxito y fracaso de estos, entre otros.

      p Como se mencionó anteriormente, tener información clara y veraz es fundamental para lograr tomar decisiones certeras en la solución de problemas, por lo cual se requiere de un procesamiento adecuado de los datos.

      p La estadística es un campo del conocimiento que proporciona al investigador las herramientas para sacar conclusiones de cierta población en base a la información proporcionada por la muestra, en conclusión, es una ciencia que estudia la recolección, el análisis y la interpretación de datos ya sea como apoyo en la toma de decisiones o para aclarar situaciones regulares o irregulares de algún fenómeno o estudio aplicado (ver figura 1).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-4
          h5 Figura 1.
          span <i>¿Qué hace la estadística?</i>

        figure
          img(src='@/assets/curso/temas/tema3/img2.png', alt='alt')


    separador

    #t_3_1.titulo-segundo.color-acento-contenido
       h2 3.1 Bioestadística

    .row.mb-5
      p Es la aplicación de la estadística a información o datos provenientes de mediciones u observaciones tomadas en las áreas de la biología. Actualmente, estas técnicas son parte fundamental del proceso de investigación; son un argumento muy fuerte para convencer, si bien la estadística no demuestra nada. El proceso de toma de decisiones en la empresa moderna tiene en la estadística una de sus herramientas más poderosas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p La estadística es aplicada para explicar cómo se comportan los fenómenos que son de interés para las personas, por lo cual es importante determinar en esta ciencia que se entiende por fenómenos.

        .cajon.color-primario.p-4.mb-3
          p.mb-0 Un fenómeno es cualquier exteriorización de una actividad que se da por los humanos o por la naturaleza y puede ser percibida a nivel sensitivo o racional. 

        h5.mb-3 Ejemplos de fenómenos:

        ul.lista-ul--color
          li
            i.fas.fa-atom(style="color: #7E5EE3")
            | El paso de estado líquido a gaseoso del agua.
          li
            i.fas.fa-atom(style="color: #7E5EE3")
            | Las personas por día que se contagian de un virus.
          li
            i.fas.fa-atom(style="color: #7E5EE3")
            | Los cambios climáticos.
          li
            i.fas.fa-atom(style="color: #7E5EE3")
            | La variación de los costos de los productos de consumo humano.
          li
            i.fas.fa-atom(style="color: #7E5EE3")
            | Secar el cabello mojado con el aire caliente del secador.

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img3.svg', alt='alt')

    
    .row.justify-content-center.align-items-center.mb-3
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img4.png')})`}"
        )
        .bloque-texto-g__texto.p-3
          p.mb-0 Por diferentes razones, las personas desean obtener información acerca del comportamiento de diferentes fenómenos, por lo cual se realizan registros del estado de estos, en diversos momentos o espacios. Cuando hay viabilidad de extraer datos de un fenómeno, o también cuando no es posible, es necesario hacer uso de algún proceso que convierta dichos datos en información que permita la toma de decisiones relevantes, es decir, escoger la opción más pertinente dentro de un número considerable de posibilidades.

    .row.mb-4
      p Del registro y la medición de un fenómeno se generan datos en gran volumen, por lo cual se deben procesar adecuadamente para lograr convertirlos en información aportante. Una manera de tratar los datos y extraer la información allí contenida es usar las técnicas estadísticas, este proceso se representa en la siguiente figura 2:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-botones.mb-4
          h5 Figura 2.
          span <i>Proceso para extraer información</i>

        figure
          img(src='@/assets/curso/temas/tema3/img5.svg', alt='alt')    


    separador

    #t_3_2.titulo-segundo.color-acento-contenido
       h2 3.2 Clasificación de la estadística

    
    .bg1-tema3.mb-5
      figure
        img(src='@/assets/curso/temas/tema3/img6.svg', alt='alt')


    separador

    #t_3_3.titulo-segundo.color-acento-contenido
       h2 3.3 Conceptos básicos de estadística

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img7.svg', alt='alt')

      .col-lg-7
        p El estudio de la estadística acoge una serie de significados, ideas y palabras con un determinado sentido en el día a día, pero que presentan una ligera diferencia o implicaciones completamente opuestas, estas son:

        .row.mb-5
          .col-lg-7
            .list.mb-3(data-aos="fade-down")
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
              .list__txt
                h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Datos</span>

        p Un dato es un registro o anotación que se realiza del estado de un fenómeno en un momento específico.

        .row.mb-5
          .col-lg-7
            .list.mb-3(data-aos="fade-down")
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
              .list__txt
                h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Elementos</span>

        p El elemento se refiere a los entes que poseen una o varias características y su estado es de interés de registro. Ese registro es lo que integra los datos, los elementos pueden ser: 


    .bg1-tema3.mb-5
      figure
        img(src='@/assets/curso/temas/tema3/img8.svg', alt='alt')


    .row.justify-content-center.align-items-center.mb-5
      .row.mb-3
        .col-lg-7
          .list.mb-3(data-aos="fade-down")
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
            .list__txt
              h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Población</span>

      .col-lg-9
        p Se habla de una población cuando: 

        ul.lista-ul--color.ps-lg-4
          li
            i.fas.fa-atom(style="color: #7E5EE3")
            | Se manifiesta una característica igual en todos los elementos.
          li
            i.fas.fa-atom(style="color: #7E5EE3")
            | Todos los elementos integran un acontecimiento que se está analizando y sobre el cual se intenta sacar conclusiones.

        h5 Cuando se habla de población es importante tener claridad y hacer precisión con respecto a:

      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/img9.svg', alt='alt')


    .row.justify-content-center.align-items-center.mb-5
      TabsB.color-primario(style="background: #E6F7FE")
        .py-4.py-md-5(titulo="Definición" :icono="require('@/assets/curso/temas/tema3/img10.svg')")
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-md-0
              p Al momento de definir poblaciones, se debe hacer con claridad, a tal punto que no haya confusión de la pertenencia de un elemento a la población.

              p Para hacer más fácil la definición de una población, los componentes de esta se pueden organizar como se muestra en el diagrama.

              p Ejemplo: en un estudio del grado salarial de los conductores de bus del sector Guayabal de la ciudad de Medellín, se podría definir la población así:

              p Todos los conductores de bus del sector Guayabal de la ciudad de Medellín.
          
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img11.svg', alt='Texto que describa la imagen')

        .py-4.py-md-5(titulo="Tamaño" :icono="require('@/assets/curso/temas/tema3/img12.svg')")
          .row.justify-content-center.align-items-center
            .col-md-10.mb-4.mb-md-0
              p.text-center Son todos los elementos sin excepción que conforman una población. El tamaño de esta se representa por con la letra N.

              p.text-center Ejemplo: para mostrar que una población tiene 700 elementos se expresa así: N = 700
          
            .col-md-10
              figure
                img(src='@/assets/curso/temas/tema3/img13.png', alt='Texto que describa la imagen')

        .py-4.py-md-5(titulo="Definición" :icono="require('@/assets/curso/temas/tema3/img14.svg')")
          .row.justify-content-center.align-items-center
            .col-md-10.mb-4.mb-md-0
              p.text-center Las poblaciones se dividen en dos clases:
          
            .col-md-11
              figure
                img(src='@/assets/curso/temas/tema3/img15.svg', alt='Texto que describa la imagen')

        .py-4.py-md-5(titulo="Clases de población" :icono="require('@/assets/curso/temas/tema3/img16.svg')")
          .row.justify-content-center.align-items-center
            .col-md-11.mb-4.mb-md-0
              p.mb-0 Lo observable a los componentes de una población son sus peculiaridades o la potencia con la que se enseña una magnitud.
              p Dichas peculiaridades observables en los elementos de una población se clasifican en:
          
            .col-md-11.mt-4
              ImagenInfografica.color-acento-botones
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/tema3/img17.svg', alt='Texto que describa la imagen')

                .tarjeta.color-primario--borde.p-3(x="17%" y="12%" numero="+")
                  p #[b Constantes.] Son esas características que tienen una variación nula o muy mínima entre un elemento y otro; por ejemplo, la talla de calzado de una persona en edad adulta observada en los últimos 3 años.

                .tarjeta.color-primario--borde.p-3(x="62%" y="12%" numero="+")
                  p #[b Variables.] Son esas características que tienen una variación frecuente de valor en el momento de observar algunos o todos los elementos de la población. Cabe aclarar que la estadística solo se enfoca en el estudio de las características variables.

                .tarjeta.color-primario--borde.p-3(x="34%" y="49%" numero="+")
                  p #[b Variables cualitativas.] Estas describen solo por medio de palabras el estado de la característica de los elementos. Se refieren a atributos, cualidades, comportamientos o preferencias de los elementos que están siendo estudiados.

                  p.mb-0 Ejemplos:
                  p.mb-0 - La textura de un tapete elaborado con lana: suave, áspero, etc. 
                  p - El color de los ojos de una familia: cafés, negros, azules, verdes, etc.

                  p.mb-0 Como se puede observar, en los ejemplos, cada una de las variables se manifiesta por medio de dos o más categorías: suave, áspero, cafés, negros, azules, verdes.

                  p Los datos registrados cuando las variables son cualitativas o categóricas pertenecen a la cantidad o proporción de elementos que caben dentro de cada categoría que toma la variable, por ejemplo: la cantidad de regentes de farmacia o de instructores, la cantidad de personas que prefieren el color azul, la proporción de productos defectuosos.

                .tarjeta.color-primario--borde.p-3(x="24%" y="87%" numero="+")
                  p #[b Variables nominales.] Una variable cualitativa nominal presenta modalidades no numéricas que no admiten un criterio de orden. Por ejemplo, no hay una manera común para darle orden a los colores o al estado civil de las personas.

                .tarjeta.color-primario--borde.p-3(x="42%" y="87%" numero="+")
                  p #[b Variables ordinales.] Presenta modalidades no numéricas, en las que existe un orden. Por ejemplo: las categorías como se puede calificar un periodo escolar, que se puede ordenar como excelente, bueno, mal

                .tarjeta.color-primario--borde.p-3(x="81%" y="49%" numero="+")
                  p.mb-0 #[b Variable cuantitativa.] Son las que se describen por medio de números, por ejemplo, la edad de los empleados de una empresa, los individuos que ingresan por día a una IPS, las ventas por día de un establecimiento farmacéutico, la cantidad de productos que vende una distribuidora, etc. 

                  p Estas variables se clasifican en discretas o continuas:

                .tarjeta.color-primario--borde.p-3(x="61%" y="87%" numero="+")
                  p #[b Variables discretas.] Estas solamente toman valores enteros como por ejemplo el número de productos que vende un establecimiento farmacéutico, o el número de personas que ingresan a un supermercado.

                .tarjeta.color-primario--borde.p-3(x="80%" y="87%" numero="+")
                  p #[b Variables continúas.] Por medio de estas se realizan mediciones de magnitudes físicas o a características estimables en dinero. También permiten valores fraccionarios o decimales como por ejemplo el peso de una caja con productos, los saldos de las cuentas bancarias, o el tiempo que demora el recorrido de un barco.

                .tarjeta.color-primario--borde.p-3(x="98%" y="87%" numero="+")
                  p #[b Variables categóricas.] Está variable facilita el manejo de los datos y por ende ayuda a comprender mejor un fenómeno. Por ejemplo, como cuando las personas que miden menos de 1.50 metros se determinan de estatura baja, las personas que miden entre 1.50 metros y menos de 1.70 se determinan de estatura normal y los individuos que miden 1.70 metros o más se determinan de estatura alta.

    .row.mb-4
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Censo</span>

    .row.mb-4
      p Observación y registro del estado de una característica, examinado a todos los elementos de una población.

      p Los censos son una técnica muy aplicable ya que los costos y el tiempo que demandan son muy altos. Por lo tanto, lo más viable es tomar los datos reportados por el estado de la variable en forma aleatoria de elementos de la población.


    .row.mb-4
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Muestra</span>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Cuando de una población total, se sustrae una porción conformando un subgrupo, esto quiere decir que solo se le realiza la observación y el registro de la característica a este subgrupo. Se utiliza cuando la población es infinita o extremadamente grande y por ende es casi imposible observar todos sus elementos.

        p Las muestras deben ser representativas y para ello se necesita que haya una equivalencia entre las características de la población escogida y las características de la población total.

        p El tamaño de la muestra es la cantidad de elementos que conforman la muestra. Se representa con la letra n. Un ejemplo de esto es: para expresar que una muestra tiene 180 elementos se representa así: n = 180.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img18.svg', alt='alt')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img19.svg', alt='alt')

      .col-lg-8
        .row.mb-0
          .col-lg-7
            .list.mb-3(data-aos="fade-down")
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
              .list__txt
                h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Parámetro</span>

        p El resultado de una medida o cálculo que se hace utilizando los datos relacionados con el valor que toma una variable cuando se observan todos los elementos de una población, es decir, cuando se hace un censo. Por ejemplo, la edad promedio de los niños que cursan primer grado, este año, en todas las escuelas oficiales de la ciudad. El parámetro siempre es un valor constante.

        .row.mb-0
          .col-lg-7
            .list.mb-3(data-aos="fade-down")
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
              .list__txt
                h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Estadístico o estadígrafo</span>

        p Tiene el mismo modo de operación que el parámetro, pero con la diferencia que en este solo se observan algunos de los elementos de una población, o sea, una muestra. Por ejemplo, la edad promedio de los jóvenes de octavo grado de algunos colegios privados de la Medellín-Antioquía escogidos al azar. El estadístico no es un valor constante ya que varía de una muestra a otra. 

    .row.mb-2
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Estadístico o estadígrafo</span>

    .row.justify-content-center.align-items-center.mb-5
      h5.text-center.mb-4 Los estudios estadísticos pueden ser:

      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-tarjeta1.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema3/img20.svg', alt='alt')
              
            h4.text-center Estudios estadísticos experimentales
            p Quien está investigando es el encargado de controlar o manipular una o diferentes variables con el propósito de establecer su comportamiento en una condición definida.

          .col-md.tarjeta.color-tarjeta2.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema3/img21.svg', alt='alt')
              
            h4.text-center Estudios estadísticos de observación
            p Quien está investigando se encarga de registrar el estado de la característica variable que es de su interés sin producir influencia alguna sobre esta. La investigación estadística de observación que es más comúnmente utilizada es la encuesta.      

    .row.mb-2
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Muestreo</span>

    .row.mb-5
      p Es el proceso mediante el cual se seleccionan los elementos de una población. Hay una variedad de técnicas que se pueden utilizar para realizar el muestreo, claro está que, según el caso se debe escoger la que aplique. A continuación, se mencionan algunas:


    .bg2-tema3
      .row.justify-content-center.align-items-center
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema3/img22.svg', alt='alt')      

    .row.mb-2
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Unidad de observación</span>

    .row.justify-content-center.align-items-center.mb-5
      p Conformada por cada uno de los elementos que constituyen la población objeto de estudio y la cual se define con antelación, destacando cada una de sus características puesto que en definitiva es a esta a quien se le aplicara la medición. Uno o varios individuos pueden constituirla y nombrarse simple o compleja, respectivamente.

      b Ejemplos:

    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p En un estudio a nivel de hogares sobre el estado higiénico de la familia, la unidad de observación son los diferentes sitios que existen en la vivienda y en quienes se evalúa su estado higiénico y la unidad de análisis es la vivienda.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          p En un estudio donde se desea evaluar la situación laboral de las personas que conforman las familias de una comunidad, mayores de 18 años, la unidad de observación son las personas mayores de 18 años en quienes se analizará su situación laboral y la unidad de análisis es la familia.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 3
          p En un estudio donde se pretende determinar la relación entre el peso y la talla del recién nacido, la unidad de observación y la unidad de análisis coinciden, esto es, el recién nacido.

    
    .row.mb-2
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Unidad de medida</span>

    .row.mb-5
      p Consiste en dar los valores de una variable en términos de una medición; por ejemplo, el investigador establecerá el criterio si el peso se da en kilos, en libras o en gramos; si la talla se da en metros, en centímetros, en pies o en pulgadas; si el tiempo de permanencia de los pacientes en un hospital se da en horas, días o semanas.

    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Formas del conocimiento</span>

    .row
      h5.text-center Existen dos formas del conocimiento:

    .bg3-tema3.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          ImagenInfografica.color-acento-botones.my-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/img23.svg', alt='Texto que describa la imagen')

            .tarjeta.color-primario--borde.p-3(x="21%" y="19%" numero="+")
              p #[b Popular.] Es aquel que se logra por la experiencia que brinda la cotidianidad. Se caracteriza por ser superficial y no sistemático 

            .tarjeta.color-primario--borde.p-3(x="77%" y="19%" numero="+")
              p #[b Científico.] Es aquel que es objetivo, real, exhaustivo, sistemático, racional y trascendente. Utiliza el razonamiento y la intuición con el fin de llegar a la verdad, basándose en una evaluación objetiva. Las etapas del método científico son:

            .tarjeta.color-primario--borde.p-3(x="54%" y="79%" numero="+")
              p #[b Observación.] Observación del fenómeno objeto de estudio por un determinado periodo de tiempo con la pretensión de lograr conocimiento de este.

            .tarjeta.color-primario--borde.p-3(x="76%" y="79%" numero="+")
              p #[b Formulación.] Formulación de hipótesis contrastables que están encaminadas a dar una explicación, a nivel hipotético, del comportamiento del fenómeno.

            .tarjeta.color-primario--borde.p-3(x="98%" y="79%" numero="+")
              p #[b Verificación.] Verificación del cumplimiento de las hipótesis mediante una nueva observación del fenómeno con el propósito de comprobar las hipótesis planteadas. Si los experimentos funcionan, la hipótesis sale reforzada y puede convertirse en una teoría o una ley natural.

    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Etapas del conocimiento científico</span>


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img24.png', alt='alt')

      .col-lg-7
        p El método científico utiliza el razonamiento y la intuición con el fin de llegar a la verdad, basándose en una evaluación objetiva. Sus etapas son:

        ol.lista-ol--cuadro.fa-ul2
          li
            .lista-ol--cuadro__vineta(style="background-color: #7E5EE3")
              span 1
            | Observación del fenómeno objeto de estudio por un determinado periodo de tiempo con la pretensión de lograr conocimiento del mismo.  
          li 
            .lista-ol--cuadro__vineta(style="background-color: #7E5EE3")
              span 2
            | Formulación de hipótesis contrastables que están encaminadas a dar una explicación, a nivel hipotético, del comportamiento del fenómeno.
          li 
            .lista-ol--cuadro__vineta(style="background-color: #7E5EE3")
              span 3
            | Verificación del cumplimiento de las hipótesis mediante una nueva observación del fenómeno con el propósito de comprobar las hipótesis planteadas. Si los experimentos funcionan, la hipótesis sale reforzada y puede convertirse en una teoría o una ley natural.

    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>La investigación en el enfoque empírico analítico</span>

    .row.mb-5
      p La estadística es parte integrante del método científico, desde este punto de vista deben darse los siguientes pasos en una investigación:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-md-8.mb-4.mb-md-0
              h4 ¿Cuál es el problema?

              p Es necesario conocer la magnitud del problema y los vacíos que existen, con la finalidad de cubrir una necesidad.

              p Una vez especificado el problema, deben definirse los objetivos generales y específicos de la investigación y, en consecuencia, elaborar el marco teórico ya que es el sustento conceptual de la investigación.

            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img25.svg', alt='alt')

          .row.justify-content-center.align-items-center.text-start
            h4 ¿Cómo se hará la investigación?

            p El diseño metodológico implica definir el tipo de estudio, la población y la muestra, la unidad de observación y análisis, la identificación y operacionalización de variables, el plan de recolección, tabulación y análisis, los aspectos éticos del estudio, criterios de inclusión y exclusión, cronograma de actividades, presupuesto y bibliografía.

            p Las variables que se van a medir deben tener una definición operativa, es decir una unidad de medida, naturaleza y nivel de medición. (Se debe tener en cuenta la revisión bibliográfica realizada en el marco teórico).

            p Luego se definen las técnicas e instrumentos donde está la información (fuentes primarias o secundarias) y que técnica se va a utilizar (observación, encuesta o entrevista). Cualquiera de estas técnicas requiere de un instrumento para registrar la información.

            p En el plan de análisis o de tratamiento estadístico debe definirse si se procederá manualmente o por computador, qué medidas estadísticas se utilizarán para dar cumplimiento a los objetivos y cómo se presentarán los datos.
            

          .row.justify-content-center.align-items-center
            .col-md-8.mb-4.mb-md-0
              h4 ¿Es necesario hacer un muestreo?

              p Teóricamente, en una investigación, el estudio de toda la población sería lo ideal pues se llegaría al conocimiento exacto o casi exacto del fenómeno de interés. Sin embargo, en lo cotidiano esto no es usual, por lo que se puede recurrir a una muestra en vez de la totalidad de la población. 
          
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img26.svg', alt='alt')

          .row.justify-content-center.align-items-center  
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img27.svg', alt='alt')
                            
            .col-md-8.mb-4.mb-md-0
              h4 ¿Cómo se presentarán y analizarán los datos?

              p Comprende el resumen de la información de manera que sea fácil de entender. Se hace mediante cuadros y gráficos ilustrativos que presentan los resultados resumidos de una forma pertinente.


    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Fases de una investigación estadística</span>

    .row.mb-5
      p Ante una investigación estadística las fases varían mucho y dependen de diversas situaciones como los objetivos que se quieren alcanzar o el ambiente de realización del estudio. Aquí se presenta una de estas posibilidades:

    .row.justify-content-center.align-items-center.mb-5
        TabsA.color-secundario
          .tarjeta.tarjeta-morada.p-4(titulo="Planeamiento")
            p Durante todo el proceso la fase más relevante es la del planteamiento, ya que la calidad de los resultados obtenidos depende de la correcta elaboración y desarrollo, de cada una de las etapas que componen dicha fase. Esta fase incluye:

            ImagenInfografica.color-acento-botones
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/tema3/img28.svg', alt='Texto que describa la imagen')

              .tarjeta.color-primario--borde.p-3(x="22%" y="24%" numero="+")
                p #[b Finalidad de la investigación.] Resultado puntual que se va a logar del estudio estadístico. Normalmente se expresa en forma de una pregunta y a esta se le denomina: pregunta de investigación.

              .tarjeta.color-primario--borde.p-3(x="99%" y="24%" numero="+")
                p #[b Naturaleza o clase de los datos.] Todos los datos, que se recolectan sobre un fenómeno, se pueden clasificar básicamente en dos categorías: datos de naturaleza cualitativa y datos de naturaleza cuantitativa.

              .tarjeta.color-primario--borde.p-3(x="22%" y="76%" numero="+")
                p #[b Fuentes de la información.] Las fuentes de información de donde se pueden obtener los datos son fuentes de información primarias y secundarias. Las fuentes de información son primarias cuando los datos que se procesan se han obtenido directamente (realizadores del estudio) y son secundarias cuando los datos que se procesan se han obtenido a través de otras de otras personas o entidades, como, por ejemplo, el banco de la república, el DANE, la cámara de comercio o cualquier otro estudio ya realizado.

              .tarjeta.color-primario--borde.p-3(x="48%" y="76%" numero="+")
                p #[b Procedimiento para recolectar los datos.] Se refiere a las actividades que se van a ejecutar para recolectar estos datos. Estas actividades pueden ser: observación directa, encuestas individuales a nivel personal o virtual, entrevistas personales, entrevistas grupales, la experimentación.

              .tarjeta.color-primario--borde.p-3(x="73%" y="76%" numero="+")
                p #[b Diseño de instrumentos.] Los datos deben quedar registrados, por lo cual se requiere diseñar instrumentos para los registros. Por ejemplo, formatos para registro de observaciones, cuestionario o listado de asuntos que se llevaran cabo en una entrevista y la manera de registro de las respuestas de los entrevistados.

              .tarjeta.color-primario--borde.p-3(x="99%" y="76%" numero="+")
                p #[b Presupuesto.] Hace referencia la valoración o cálculo de los costos, de cada una de las etapas del estudio.

              .tarjeta.color-primario--borde.p-3(x="48%" y="24%" numero="+")
                p #[b Definir la población.] falta información

              .tarjeta.color-primario--borde.p-3(x="73%" y="24%" numero="+")
                p #[b Unidad de investigación.] falta información

          .tarjeta.tarjeta-morada.p-4(titulo="Recolección de los datos")
            .row.justify-content-center.align-items-center
              .col-lg-7
                p En esta fase se aplican los instrumentos diseñados anteriormente, como cuestionarios, entrevistas o registros de las observaciones.
              
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema3/img29.svg', alt='alt')              

          .tarjeta.tarjeta-morada.p-4(titulo="Crítica y codificación")
            .row.justify-content-center.align-items-center
              .col-lg-7
                p Hace referencia a la valoración de lo veraz, auténtico y pertinente de los datos recogidos. 

              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema3/img30.png', alt='alt')

          .tarjeta.tarjeta-morada.p-4(titulo="Tabulación, gráficas y medidas")
            .row.justify-content-center.align-items-center
              .col-lg-7
                p Este hace referencia a cada uno de los procesos, por medio de los cuales, los datos son convertidos en tablas, cuadros resúmenes, gráficas representativas o números, de tal manera que se pueda describir y entender el fenómeno que se está investigando.

              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema3/img31.svg', alt='alt')

          .tarjeta.tarjeta-morada.p-4(titulo="Análisis e interpretación")
            p Análisis e interpretación es la fase en la cual se precisa el fin del estudio, ya sea, porque se dé respuesta a la pregunta de investigación, o porque se describa el fenómeno en investigación o porque se saque alguna conclusión sobre él.

            h5 Este análisis tiene 2 clases de alcance:

            ul.lista-ul--color.ps-lg-4
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                | Análisis e interpretación descriptivos: tanto el análisis como la interpretación se ciñen solamente a los datos recogidos.
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                | Análisis e interpretación inferencial: el análisis y la interpretación se expande a todos los elementos de la población o cuando se estiman comportamientos futuros del fenómeno en investigación.


    separador
    #t_3_4.titulo-segundo.color-acento-contenido
       h2 3.4 Presentación de la información

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p La información que proporcionan las variables debe presentarse de una manera adecuada. En el campo estadístico existen dos formas básicas de presentación de la información siendo la primera las tablas o cuadros estadísticos y la segunda, la representación gráfica del fenómeno.

        p Una tabla o cuadro estadístico es una representación en forma ordenada de las variaciones de un fenómeno, clasificadas bajo una o más variables; si el fenómeno se clasifica bajo una sola variable recibe el nombre de cuadro o tabla simple y si se clasifica bajo dos o más variables recibe el nombre de cuadro o tabla compuesto.

        p La representación más usual del conjunto de datos que constituyen la muestra es la tabla de frecuencias; esta es un cuadro con títulos y leyendas explicativas en el cual aparecen los datos en forma organizada, incluyendo totales, frecuencias y porcentajes.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img32.png', alt='alt')

    .row.justify-content-center.align-items-center.mb-5
      .cajon.color-secundario.p-4.mb-4
        p.mb-0 Las tablas permiten organizar y realizar cálculos sobre datos estadísticos de tamaño considerable, además hacen que el trabajo sea mucho más fácil. Ordenan la información recogida de una muestra en la investigación de una sola variable. Cuando se tiene una cantidad considerable de datos, se deben repartir en categorías dentro de una tabla para así facilitar el análisis.  

      p La organización de los datos permite visibilizar las características de un acontecimiento o establecer el patrón de comportamiento de ese acontecimiento. En la estadística existe una metodología denominada tabla de distribución de frecuencias, la cual consiste en formar conjuntos de categorías con los datos recolectados y elaborar así la tabla. Es importante tener presente:

    .row.justify-content-center.align-items-center.mb-5
      TabsB.color-primario(style="background: #E6F7FE")
        .py-4.py-md-5(titulo="Concepto de clase o categoría" :icono="require('@/assets/curso/temas/tema3/img33.svg')")
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-md-0
              p En términos generales, una categoría es una agrupación de elementos que poseen una o varias características iguales. Ejemplo, los niños del equipo de baloncesto.

              p Un conjunto de categorías se considera como una agrupación de clases estadístico siempre y cuando todas las clases, del conjunto, tengan, sincronizadas, estas tres características:
          
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img34.svg', alt='alt')

        .py-4.py-md-5(titulo="Clase o categoría estadística" :icono="require('@/assets/curso/temas/tema3/img35.svg')")
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-md-0
              p En estadística se denomina clase, al conjunto de datos que hacen parte de un intervalo llamado valores. Por ejemplo, para datos correspondientes a ingresos de personas podemos crear una clase de las personas que tienen ingresos entre $500.000 y $800.000. Toda clase estadística tiene, por lo tanto, un límite inferior y un límite superior. en este caso $500.000 y $800.000 respectivamente.
          
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img36.png', alt='alt')

        .py-4.py-md-5(titulo="Amplitud de clase o intervalo" :icono="require('@/assets/curso/temas/tema3/img37.svg')")
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-md-0
              p Es la diferencia que hay entre los límites superior e inferior de un intervalo de clase. Retomando el ejemplo anterior la amplitud de la clase de ingresos es de $300.000. Es decir, que para calcular la amplitud de clase se resta del límite superior de la clase el límite inferior.

              p Para expresar estas ideas en símbolos, se llama “A” a la amplitud de la clase, “LS” al límite superior de la clase y LI al límite inferior de la clase, expresando aritméticamente la amplitud de la clase así: 

              i.mb-3 𝐴=𝐿𝑆−𝐿𝐼
              
              p Para el ejemplo:

              i.mb-3 𝐴=𝐿𝑆−𝐿𝐼 =$800.000−$500.000=$300.000
          
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img38.png', alt='alt')

        .py-4.py-md-5(titulo="Antes de empezar" :icono="require('@/assets/curso/temas/tema3/img39.svg')")
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-md-0
              p Para describir un acontecimiento representado por un conjunto de datos, la estadística establece que se deben agrupar los datos en un conjunto de clases o categorías y con este conjunto construir la tabla de frecuencias o distribución de frecuencias.

              p Para realizar este proceso se deben resolver, en primera instancia, las siguientes preguntas:

              ul.lista-ul--color.ps-lg-4.fa-ul2
                li
                  i.fas.fa-atom
                  | ¿Cuál es el tipo de la variable?
                li
                  i.fas.fa-atom
                  | ¿En cuántas clases o categorías es más pertinente agrupar los datos?
                li
                  i.fas.fa-atom
                  | ¿La amplitud de clases más pertinente es?
                li
                  i.fas.fa-atom
                  | ¿Cuáles son los límites que debe tener la primera clase?

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img40.png', alt='alt')

    .row.mb-5
      b.text-center Ahora bien, las tablas de frecuencia pueden variar de acuerdo con el tipo de variable, como se muestra a continuación:

    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Arreglo de datos por variable continua</span>

    p El procedimiento para construir un conjunto de clases estadístico para variable continua es:

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            b Identificar el tipo de variable relacionada con la situación en estudio.

          .row.justify-content-center.align-items-center.text-start
            h5.mb-4 Establecer el número de clases, que puede ser:

            ul.lista-ul--color.ps-lg-4.fa-ul2
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                p.mb-0 <b style= "color:#7E5EE3;">Por conveniencia:</b> cuando exista cierta particularidad que haga conveniente o deseable un determinado número de categorías.
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                p.mb-0 <b style= "color:#7E5EE3;">Norma empírica:</b> hay facilidad de elegir el número de categorías que se desee entre 6 y 20 obedeciendo al criterio o preferencia a nivel personal del analista y se hacen varios tanteos hasta encontrar un número de clases satisfactorio.
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                p.mb-0 <b style= "color:#7E5EE3;">Fórmulas exponencial o logarítmica:</b> utilizando la fórmula logarítmica.
          
          .row.justify-content-center.align-items-center
            h5.mb-4 Establecer la amplitud de las clases:

            ul.lista-ul--color.ps-lg-4.fa-ul2
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                | Determinar los valores de máximo y mínimo del conjunto de datos que se denomina así: 𝑥𝑚𝑎𝑥 y 𝑥𝑚𝑖𝑛
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                | Calcular el Rango, R o distancia entre el valor más pequeño y el valor más grande de los datos de la muestra con la expresión: R= 𝑥𝑚𝑎𝑥− 𝑥𝑚𝑖𝑛
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                p.mb-0 Calcular la amplitud de las clases con la expresión: <i>A= R/N<sub>0</sub>C</i>
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                | Modificar la amplitud calculada en el paso anterior, a esta amplitud la llamaremos “𝐴𝑚𝑜𝑑”, para la realización de este paso, se deben tener en cuenta diferentes criterios como:

            p.ps-lg-5.mb-0 <b style= "color:#7E5EE3;">-</b> Que la amplitud tenga la misma precisión de los datos del estudio.
            p.ps-lg-5.mb-0 <b style= "color:#7E5EE3;">-</b> Que los límites de las clases resultantes sean números fáciles de manejar. Por ejemplo, números enteros o valores terminados en número par.
            p.ps-lg-5 <b style= "color:#7E5EE3;">-</b> Que la marca de clase, que se estudiará más adelante, sea un valor fácil de manejar.

          .row.justify-content-center.align-items-center.text-start
            h5 Establecer los límites de primera clase.

            p Para realizar este paso se recomienda que siempre que sea posible, el límite inferior de la primera clase debe ser menor que el 𝑥𝑚𝑖𝑛. A continuación, se dará un ejemplo práctico de variable continua: la siguiente tabla se refiere a los galones de gasolina corriente que tanquearon la semana pasada, en un autoservicio, una muestra de vehículos escogidos al azar:

            .col-lg-8
              figure
                img(src='@/assets/curso/temas/tema3/img41.svg', alt='imagen decorativa')

    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Arreglo de datos por variable discreta</span>

    p El procedimiento para construir un conjunto de clases estadístico para variable discreta es:

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            b Identificar el tipo de variable relacionada con la situación en estudio.

          .row.justify-content-center.align-items-center.text-start
            h5.mb-4 Establecer el número de clases, que puede ser:

            ul.lista-ul--color.ps-lg-4.fa-ul2
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                p.mb-0 <b style= "color:#7E5EE3;">Por conveniencia:</b> cuando exista cierta particularidad que haga conveniente o deseable un determinado número de categorías.
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                p.mb-0 <b style= "color:#7E5EE3;">Norma empírica:</b> hay facilidad de elegir el número de categorías que se desee entre 6 y 20 obedeciendo al criterio o preferencia a nivel personal del analista y se hacen varios tanteos hasta encontrar un número de clases satisfactorio.
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                p.mb-0 <b style= "color:#7E5EE3;">Fórmulas exponencial o logarítmica:</b> utilizando la fórmula logarítmica.
          
          .row.justify-content-center.align-items-center
            h5.mb-4 Establecer la amplitud de las clases:

            ul.lista-ul--color.ps-lg-4.fa-ul2
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                | Determinar los valores máximo y mínimo del conjunto de datos que llamaremos aquí: 𝑥𝑚𝑎𝑥 y 𝑥𝑚𝑖𝑛.
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                | Calcular el rango, r o distancia entre el valor más pequeño y el valor más grande de los datos de la muestra con la expresión: R= 𝑥𝑚𝑎𝑥− 𝑥𝑚𝑖𝑛.
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                p.mb-0 Calcular la amplitud de las clases con la expresión: <i>A= R/N<sub>0</sub>C</i>
              li
                i.fas.fa-atom(style="color: #7E5EE3")
                | Modificar la amplitud calculada en el paso anterior. Tomar como amplitud modificada solamente la parte entera aquí se debe revisar si la amplitud modificada es un valor impar. Cuando se da este caso, se debe hacer una corrección como se muestra en el desarrollo del ejemplo práctico.

            p.ps-lg-5.mb-0 <b style= "color:#7E5EE3;">-</b> Que la amplitud tenga la misma precisión de los datos del estudio.
            p.ps-lg-5.mb-0 <b style= "color:#7E5EE3;">-</b> Que los límites de las clases resultantes sean números fáciles de manejar. Por ejemplo, números enteros o valores terminados en número par.
            p.ps-lg-5 <b style= "color:#7E5EE3;">-</b> Que la marca de clase, que se estudiará más adelante, sea un valor fácil de manejar.

          .row.justify-content-center.align-items-center.text-start
            h5.mb-4 Establecer los límites de primera clase.
            
            p Se toma como límite inferior de la primera clase el 𝑥𝑚𝑖𝑛. El límite superior de la primera clase se obtiene sumándole al límite inferior la amplitud modificada.

            p Las demás clases se construyen, teniendo en cuenta, que, por ser variable discreta, las clases no pueden ser contiguas, por lo que el límite inferior de cualquier clase es igual al límite superior de la clase anterior más uno.

    .row.justify-content-center.align-items-center.mb-5
      b.text-center A continuación, se dará un ejemplo práctico de variable discreta.


    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta-morada.p-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            p.text-center Una muestra de 41 días del número de transacciones que se realizan por día en un cajero automático se presenta en la siguiente tabla:

            .col-lg-8
              figure
                img(src='@/assets/curso/temas/tema3/img42.svg', alt='alt')

            p.text-center Siguiendo los pasos descritos anteriormente se tiene que: 

            p.text-center <b>Tipo de variable en estudio:</b> para este caso la variable es discreta.

          .row.justify-content-center.align-items-center
            h5.text-center Determinar el número de categorías

            p.text-center Como se manifestó en párrafos anteriores, el número de categorías se puede determinar de acuerdo con los siguientes criterios.

            .col-lg-10
              ul.lista-ul--color.ps-lg-4.fa-ul2
                li
                  i.fas.fa-atom(style="color: #7E5EE3")
                  | Por conveniencia.
                li
                  i.fas.fa-atom(style="color: #7E5EE3")
                  | Norma empírica.
                li
                  i.fas.fa-atom(style="color: #7E5EE3")
                  p.mb-0 <b>Aplicando las fórmulas exponencial o logarítmica.</b> Utilizando la fórmula logarítmica se tiene:
                   | N<sub>0</sub>C = 1 + 3,3 (41) = 6,3

          .row.justify-content-center.align-items-center
            b.text-center Establecer la amplitud de las clases:

            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema3/img43.svg', alt='alt')

            p En este cálculo se puede evidenciar que, para la construcción de la amplitud modificada, se elimina todo decimal de la amplitud, A, calculada. 

            p Cuando la amplitud modificada es un número impar, las marcas de clase, que se utilizan para representar a las clases, son valores fraccionarios, como ocurre en este ejemplo; esta situación no es cómoda ya que no muestra la realidad en los casos de variable discreta, por lo que es preferible agrupar los datos en clases que sean de amplitud par, como se presenta a continuación, para el mismo ejemplo, donde la amplitud se cambió de 9 transacciones por día a 8 transacciones por día, esto hace que el número de clases pase de 6 a 7.

            b Amod = 8

          .row.justify-content-center.align-items-center
            p.text-center <b>Establecer los límites de la primera clase:</b> el límite inferior de la primera clase es 𝑥𝑚𝑖𝑛=36

            .col-lg-8
              h5 Construcción de la distribución de frecuencias.

              p Se siguen los siguientes pasos:

              ol.lista-ol--cuadro.fa-ul2
                li
                  .lista-ol--cuadro__vineta(style="background-color: #7E5EE3")
                    span 1
                  | Establecer el número de observaciones dentro de cada clase (FA) (tabla de conteo).
                li
                  .lista-ol--cuadro__vineta(style="background-color: #7E5EE3")
                    span 2
                  | Calcular la frecuencia relativa (FR).
                li
                  .lista-ol--cuadro__vineta(style="background-color: #7E5EE3")
                    span 3
                  | Ajustar la frecuencia relativa para que la suma de igual a 1.
                li
                  .lista-ol--cuadro__vineta(style="background-color: #7E5EE3")
                    span 4
                  | Calcular la frecuencia relativa acumulada (FRA).

            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema3/img44.svg', alt='alt')


          .row.justify-content-center.align-items-center
            .col-lg-10
              p Se puede evidenciar que el límite inferior de cada clase es igual al límite inferior de la clase anterior más uno, también que el límite superior de la última clase, (98), no coincide con el Xmax, (91) de los datos y el límite inferior de la primera clase es el Xmín (36).

              p Las clases construidas de esta manera se llaman <b>clases cerradas,</b> porque en cada clase se contabilizan todos los datos, incluidos entre los dos límites de la clase. Sin embargo, estas clases, como se puede observar, son de amplitudes constantes, mutuamente excluyentes y exhaustivas.

    .row.justify-content-center.align-items-center.mb-5
      b.text-center Otro ejemplo práctico de variable discreta es el siguiente:

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.color-tarjeta1.p-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            p.text-center Una muestra de salarios semanales de 40 personas en miles de pesos se presenta en la siguiente tabla:

            .col-lg-8.my-4
              figure
                img(src='@/assets/curso/temas/tema3/img45.svg', alt='imagen decorativa')

            p.text-center Siguiendo los pasos, Tipo de variable en estudio: para este caso la variable es discreta
          
          .row.justify-content-center.align-items-center
            .col-lg-10
              ul.lista-ul--color.ps-lg-4.fa-ul2
                li
                  i.fas.fa-atom(style="color: #29A2D9")
                  p.mb-0 Se busca el valor mínimo y el valor máximo #[b Xmín=62 Xmáx = 119]
                li
                  i.fas.fa-atom(style="color: #29A2D9")
                  p.mb-0 Se calcula el rango: #[b 119 - 62 = 57.]
                li
                  i.fas.fa-atom(style="color: #29A2D9")
                  p.mb-0 Calcular la cantidad de clases (intervalos): Con la formula logarítmica para calcular intervalos:
                li
                  i.fas.fa-atom(style="color: #29A2D9")
                  b.mb-0 NoC = 1 + 3.322 x log (n=40) = 6.322 
                li
                  i.fas.fa-atom(style="color: #29A2D9")
                  p.mb-0 Esto quiere decir que se usan aproximadamente  ≈ 6 intervalos.
                li
                  i.fas.fa-atom(style="color: #29A2D9")
                  p.mb-0 Se calcula la amplitud de cada intervalo.
                li
                  i.fas.fa-atom(style="color: #29A2D9")
                  p.mb-0 #[b C] = rango / k 
                li
                  i.fas.fa-atom(style="color: #29A2D9")
                  p.mb-0 #[b C] = 57 / 6 = 9.5 ≈ 10

          .row.justify-content-center.align-items-center
            .col-lg-8
              h5 Se construye la tabla de frecuencia.
              p.mb-0 Todas las otras columnas se formarán de la misma forma que la tabla 1, donde: 

              p.mb-0 #[b n] = tamaño de la muestra

              p.mb-0 #[b Xi] = valor de la variable en el individuo i

              p.mb-0 #[b fi] = frecuencia absoluta: nº de veces que se repite la variable en la categoría i

              p.mb-0 #[b Fi] = frecuencia absoluta acumulada. Indica el nº de individuos hasta la categoría i

              p.mb-0 #[b hi] = frecuencia relativa. Porcentaje de la categoría respecto del total, se obtiene dividiendo la frecuencia de la clase por el tamaño de la muestra. 

              p.mb-0 #[b Hi] = frecuencia relativa acumulada. Porcentaje acumulado

              p.mb-0 #[b Yi] = marca de clase: su valor es igual a la mitad de la suma de los límites inferior y superior del intervalo de clase.

              p.mb-0 #[b C] = amplitud del intervalo: la diferencia entre los límites reales de un intervalo.

              p.mb-0 #[b Yi-1] = límite inferior del intervalo.

              p.mb-0 #[b Yi+1] = límite superior del intervalo.

            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema3/img46.svg', alt='imagen decorativa')


    separador
    #t_3_5.titulo-segundo.color-acento-contenido
       h2 3.5 Gráficos 


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-4
          p.mb-4 Son una manera muy funcional de presentar datos o de manifestar ideas que se desea destaquen. Los gráficos son la manera visual de representar los datos, en donde se evidencian fundamentalmente 3 características:

        ul.lista-ul--color.ps-lg-4.fa-ul2.mb-4
          li
            i.fas.fa-atom(style="color: #7E5EE3")
            | Forma 
          li
            i.fas.fa-atom(style="color: #7E5EE3")
            | Acumulación o tendencia
          li
            i.fas.fa-atom(style="color: #7E5EE3")
            | Dispersión o variabilidad

        p Los gráficos no son sustitutos de un análisis estadístico, sino que son un apoyo visual del comportamiento de los datos. Algunos de sus tipos son:

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img47.svg', alt='imagen decorativa')

    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Gráfico de barras</span>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img48.svg', alt='imagen decorativa')

      .col-lg-7
        p Su construcción se realiza sobre el sistema de ejes cartesianos. Por medio de este se representan datos no numéricos y que no requieren de un orden (nominal) o datos no numéricos pero que si requieren de orden (ordinal).

        p Cada categoría requiere de una línea vertical en que la altura es la frecuencia absoluta de la categoría. El ancho de la barra es a preferencia de quien realice el gráfico.

        p Otra razón para ser utilizado es cuando la variable en investigación es numérica discreta. 

    .row.mb-5
      h5.text-center Ejemplo: en el ejemplo del n° de hijos en 21 familias. El gráfico de barras sería:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema3/img49.svg', alt='imagen decorativa')


    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Histograma y polígono de frecuencias</span>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img50.svg', alt='imagen decorativa')

      .col-lg-7
        p El histograma se construye sobre el sistema de coordenadas cartesianas. Se utiliza cuando la variable en estudio es continua o está agrupada en una tabla de frecuencia con intervalos en cada categoría.

        p En el eje X se identifica la variable en estudio y en el eje Y se gráfica la frecuencia absoluta o la frecuencia relativa. Consiste en una serie de rectángulos en donde su altura depende del valor de cada frecuencia.

        p Cada categoría de la variable se representa por una barra. El ancho de cada barra depende de la amplitud del intervalo.

    .row.mb-5
      b.text.center Los polígonos de frecuencia hacen referencia a:


    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta-morada.p-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-10
              p El polígono de frecuencias se realiza partiendo del histograma unificando las marcas de clase proyectadas sobre el lado superior de los rectángulos y adjuntando, para el cierre de la figura, dos clases adicionales, una, por encima del límite superior de la clase más alta y la otra, por debajo del límite inferior de la clase más baja.

              p Para construir el polígono de frecuencias se necesita la introducción del concepto de Marca de Clase.

              p La marca de clase es el punto medio de una clase. Se calcula sumando los límites de cada clase y dividiendo este total por 2. El símbolo que normalmente es utilizado para representar la marca de clase es Xi. Estas también son utilizadas, cuando se necesita representar todos los valores de una clase por un solo número.

          .row.justify-content-center.align-items-center
            .col-lg-7
              p Por ejemplo, 1,95 galones representan todos los valores de la muestra que se encuentran entre 1,5 galones y 2,4 galones.

              p Se puede construir, entonces, con las marcas de clase, una tabla auxiliar de cálculos que permita elaborar fácilmente el polígono de frecuencias, como se presenta a continuación:

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img51.svg', alt='imagen decorativa')

          .row.justify-content-center.align-items-center
            .col-lg-10
              .tarjeta.tarjeta-morada2.p-4.mb-4
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    p La tabla cuenta en el momento con 8 clases, debido a que se le agregaron dos clases, la clase correspondiente al número cero y al número siete. A estas clases se les llama clases falsas, ya que no hay observaciones para estas; su propósito es presentar el polígono de frecuencias como una figura cerrada.

                  .col-lg-6
                    figure
                      img(src='@/assets/curso/temas/tema3/img52.svg', alt='imagen decorativa')

            .row.justify-content-center.align-items-center
              .col-lg-6
                p Tanto el histograma como el polígono de frecuencias dejan que se visualicen ciertas características del acontecimiento o fenómeno en estudio, tales como:

              .col-lg-6
                ul.lista-ul--color.ps-lg-4.fa-ul2
                  li
                    i.fas.fa-atom(style="color: #7E5EE3")
                    | El rango de los datos.              
                  li
                    i.fas.fa-atom(style="color: #7E5EE3")
                    | Alrededor de qué valores tienden a agruparse los datos.
                  li
                    i.fas.fa-atom(style="color: #7E5EE3")
                    | Valores de la muestra que se presentan con más o menos frecuencia.
                  li
                    i.fas.fa-atom(style="color: #7E5EE3")
                    | A qué lado de la gráfica parecen agruparse más los datos.

          .row.justify-content-center.align-items-center
            b.text-center.mb-4 Como interpretar un histograma o un polígono de frecuencias

            p En el momento en el que una persona requiere tomar una decisión acerca de una puntual situación, o necesita tener una visión rápida tanto del comportamiento como de las características de un acontecimiento en estudio, los histogramas y los polígonos de frecuencias son la mejor opción ya que favorecen esa toma de decisiones.

            p Algunas de las preguntas que se pueden responder observando estas gráficas son:

            .row.justify-content-center.align-items-center
              .col-lg-6
                ul.lista-ul--color.ps-lg-4.fa-ul2
                  li
                    i.fas.fa-atom(style="color: #7E5EE3")
                    | ¿Cuál es el rango de los datos?
                  li
                    i.fas.fa-atom(style="color: #7E5EE3")
                    | ¿En qué clases se concentran el mayor número de datos?
                  li
                    i.fas.fa-atom(style="color: #7E5EE3")
                    | ¿Cuál clase contiene menos datos?
                  li
                    i.fas.fa-atom(style="color: #7E5EE3")
                    | ¿Qué valores de la muestra se presentan con más o menos frecuencia?
                  li
                    i.fas.fa-atom(style="color: #7E5EE3")
                    | ¿A qué lado de la gráfica parecen concentrarse más los datos?
                  li
                    i.fas.fa-atom(style="color: #7E5EE3")
                    | ¿Se presentan huecos o clases vacías?
                  li
                    i.fas.fa-atom(style="color: #7E5EE3")
                    | ¿Se presentan valores aislados de los demás?
                  li
                    i.fas.fa-atom(style="color: #7E5EE3")
                    | ¿La gráfica presenta subidas o bajadas bruscas o suaves?
                  li
                    i.fas.fa-atom(style="color: #7E5EE3")
                    | ¿Cuántos picos tiene la gráfica?

              .col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema3/img53.svg', alt='imagen decorativa')


    .row.mb-5
      .col-lg-6
        .row
          .col-lg-7
            .list.mb-3(data-aos="fade-down")
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
              .list__txt
                h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Gráfico circular</span>      

        .row.justify-content-center.align-items-center.mb-3
          figure
            img(src='@/assets/curso/temas/tema3/img54.svg', alt='imagen decorativa')
        
        p Son otra manera de representar los datos, especialmente cuando se trata de cualidades. Es un gráfico dibujado dentro de un círculo.

        p La forma de realizarlo es primeramente calcular el porcentaje de cada una de las categorías respecto del total y posteriormente dividir en forma proporcional dichos porcentajes en todo el círculo.


      .col-lg-6
        .row
          .col-lg-7
            .list.mb-3(data-aos="fade-down")
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
              .list__txt
                h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Barras subliminales</span>      

        .row.justify-content-center.align-items-center.mb-3
          figure
            img(src='@/assets/curso/temas/tema3/img55.svg', alt='imagen decorativa')
        
        p Este tipo de gráfico es muy aplicable cuando se desean evidenciar subdivisiones en la variable.

        p Por ejemplo: % de estudiantes en diferentes carreras, separadas por sexo. Cada barra equivale al 100%.







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
