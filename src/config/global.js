export default {
  global: {
    componenteFormativo: 'Informe de control de inventarios',
    descripcionCurso:
      'En este componente formativo se abordan los conocimientos relacionados con el control de inventarios, con el fin de que los aprendices reconozcan cada una de las herramientas y mecanismos de control establecidos por el establecimiento farmacéutico y de tal forma puedan realizar de manera eficaz el seguimiento al inventario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Promesa del cliente',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Contabilidad básica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Bioestadística',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación de la estadística',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Conceptos básicos de estadística',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Presentación de la información',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Gráficos',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/331502_CF28_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Contabilidad básica',
      referencia:
        'Gerencie.com. (2020). <i>Contabilidad - Qué es y para qué sirve.</i>',
      tipo: 'Página web',
      link: 'https://www.gerencie.com/contabilidad.html',
    },
    {
      tema: 'Contabilidad básica',
      referencia:
        'Economía desde casa. (2021). <i>Libro diario y mayor [Video].</i> YouTube. ',
      tipo: 'Vídeo',
      link:
        'https://www.youtube.com/watch?v=SCw71-zsyBo&ab_channel=EconomiaDesdeCasa ',
    },
    {
      tema: 'Estadística',
      referencia:
        'Shurprofe. (2019). <i>Gráficos estadísticos, diagrama de barras, histograma, diagrama sectores, Estadística Descriptiva [Video].</i> YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=RE9eNdJuMGQ&ab_channel=shurprofe',
    },
    {
      tema: 'Estadística',
      referencia:
        'Alex, M. (2017). <i>Varianza, Desviación Estándar y Coeficiente de Variación | Datos agrupados en intervalos [Video].</i> YouTube.',
      tipo: 'Vídeo',
      link: 'https://youtu.be/1myBo87lYyU',
    },
    {
      tema: 'Estadística',
      referencia:
        'Alex, M. (2017). <i>Media, mediana y moda | Datos agrupados en intervalos Ejemplo 1 [Video].</i> YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=5bZXpfxwHqk',
    },
    {
      tema: 'Estadística',
      referencia:
        'Alex, M. (2017). <i>Tabla de frecuencias agrupada en intervalos | Ejemplo 1. [Video].</i> YouTube.',
      tipo: 'Vídeo',
      link: 'https://youtu.be/CuKr7GzohbI',
    },
  ],
  glosario: [
    {
      termino: 'Anticiparse',
      significado:
        'Hacer una cosa antes que otra persona o antes de lo previsto o actuar con mayor rapidez de reflejos que ella, previendo de antemano su reacción o respuesta.',
    },
    {
      termino: 'Cuantía',
      significado:
        'Número de unidades, tamaño o porción de una cosa, especialmente cuando es indeterminado.',
    },
    {
      termino: 'Diferido (contabilidad)',
      significado:
        'Gastos ya pagados, pero aún no utilizados, cuyo objetivo es no afectar la información financiera de la empresa en los periodos en los que aún no se han consumido esos recursos.',
    },
    {
      termino: 'Ecuación contable',
      significado:
        'Es la representación matemática de la igualdad presente en la conformación patrimonial de la empresa, donde lo que se debe es igual a lo que se tiene.',
    },
    {
      termino: 'Persona jurídica',
      significado:
        'También denominada persona moral o ficticia, es una organización o institución formada por varias personas físicas y que posee personalidad jurídica, es decir, tiene capacidad independiente de la de sus miembros para ser titular de obligaciones y derechos.',
    },
    {
      termino: 'Persona natural',
      significado:
        'Es aquel individuo que al actuar en su propio nombre se ocupa de alguna o algunas actividades que la ley considera mercantiles',
    },
    {
      termino: 'Protocolización de la escritura pública',
      significado:
        'Es el acto por el cual un notario o escribano incorpora los documentos y actas que autoriza a un "protocolo notarial", que a su vez constituye una serie ordenada de escrituras matrices dotadas de formalidades específicas determinadas por la ley, que posteriormente pueden ser convertidas en escrituras públicas.',
    },
    {
      termino: 'Rotación',
      significado:
        'Control o proceso de inventario que corresponde a la inspección y revisión de los materiales y el estado de los equipos con los que se cuentan.',
    },
    {
      termino: 'Terceros',
      significado:
        'Es cualquier persona natural o jurídica ajena a la empresa, como es un cliente, un proveedor, un trabajador, un banco, etc.',
    },
    {
      termino: 'Valor residual',
      significado:
        'El valor residual o de salvamento, es el mínimo valor por el cual se debe vender un activo, cuando se va a dar de baja, ya bien sea por venta, subasta, donación o chatarrización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bolaño, C. Yy Álvarez, J. (1995). Contabilidad Comercial. Editorial Norma 1995',
      link: '',
    },
    {
      referencia: 'Certus., (2019). ¿Qué es un proceso contable?',
      link: 'https://www.certus.edu.pe/blog/que-es-un-proceso-contable/',
    },
    {
      referencia:
        'GestioPolis.com Experto. (2017). Principios de Contabilidad ¿Qué son? ¿Cuáles son? ¿Para qué sirven? ',
      link:
        'https://www.gestiopolis.com/principios-de-contabilidad-que-son-cuales-son-para-que-sirven/',
    },
    {
      referencia:
        'Cajas Vissoni, J. (2005). Manual de contabilidad básica. 14/08/2018, de studylib Sitio web:',
      link: 'http://studylib.es/doc/640313/conceptos-generales-de-contabilidad',
    },
    {
      referencia:
        'Perea, Y. (2021). Estadística descriptiva. Instructor Centro de Servicios de Salud.',
      link: '',
    },
    {
      referencia:
        'Quijano, V. (2021). Importancia del cumplimiento de promesas con los clientes.',
      link:
        'https://victorquijano.com/blog/que-es-el-cumplimiento-de-promesas-y-por-que-es-tan-importante-para-los-clientes/',
    },
    {
      referencia: 'Sofistica, (2018). Cómo mejorar tus tiempos de entrega.',
      link:
        'https://blog.solistica.com/como-mejorar-tus-tiempos-de-entrega-infografia',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Marcela Ayala Pardo',
          cargo: 'Experta temática',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Lida Alzáte Suárez',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amézquita',
          cargo: 'Diseño web - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollo Fullstack - 2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
