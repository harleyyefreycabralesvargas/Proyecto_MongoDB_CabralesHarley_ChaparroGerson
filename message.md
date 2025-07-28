Proyecto MySQL 
Deivid Velasquez Gutierrez Paula Alejandra Muñoz Peñaranda 
P1 
Pedro Felipe Gómez Bonilla 
Campuslands 
Artemis - Ruta Java 
Floridablanca, Santander 
2024
1 
Tabla de contenido 
Introducción................................................................................................................................... 4 Caso de Estudio............................................................................................................................ 5 Instalación General........................................................................................................................6 Planificación...................................................................................................................................6 
Ejecución................................................................................................................................. 6 Construcción del Modelo Conceptual................................................................................ 6 Descripción........................................................................................................................ 7 
Las Entidades y Atributos............................................................................................ 7 Relaciones y Cardinalidades....................................................................................... 9 Gráfica............................................................................................................................. 12 Construcción del Modelo Lógico......................................................................................12 Descripción...................................................................................................................... 12 Las Entidades y Atributos.......................................................................................... 12 Relaciones y Cardinalidades..................................................................................... 15 Gráfica............................................................................................................................. 18 Normalización del Modelo Lógico..........................................................................................19 Primera Forma Normal (1FN).......................................................................................... 19 Descripción...................................................................................................................... 19 Descripción Técnica.........................................................................................................19 Gráfica............................................................................................................................. 21 Segunda Forma Normal (2FN)........................................................................................ 21 Descripción...................................................................................................................... 21 Descripción Técnica.........................................................................................................21 Gráfica............................................................................................................................. 24 Tercera Forma Normal (3FN)...........................................................................................24 Descripción...................................................................................................................... 24 Descripción Técnica.........................................................................................................24 Gráfica............................................................................................................................. 26 Construcción del Modelo Físico.......................................................................................26 Descripción...................................................................................................................... 27 Tablas...............................................................................................................................27 Construcción del Diagrama UML.....................................................................................31 Descripción...................................................................................................................... 31 Gráfica............................................................................................................................. 36 Inserciones de Datos....................................................................................................... 36 Descripción...................................................................................................................... 37 Consultas de Datos..........................................................................................................39 Descripción...................................................................................................................... 40
2 
Transacciones..................................................................................................................43 Descripción...................................................................................................................... 43 Funcion............................................................................................................................ 45 
1. Funcion: superficie_total_parque...........................................................................45 Procedimientos................................................................................................................ 45 1. Procedimiento: añadir_entidad.............................................................................. 45 2. Procedimiento: actualizar_entidad.........................................................................46 3. Procedimiento: añadir_departamento....................................................................47 4. Procedimiento: actualizar_departamento.............................................................. 47 5. Procedimiento: añadir_parque...............................................................................48 6. Procedimiento: actualizar_parque......................................................................... 49 7. Procedimiento:: añadir_parquedepartamento........................................................50 8. Procedimiento:: actualizar_parquedepartamento.................................................. 51 9. Procedimiento:: añadir_area..................................................................................52 10. Procedimiento:: actualizar_area.......................................................................... 52 11. Procedimiento:: añadir_especie...........................................................................53 12. Procedimiento:: actualizar_especie..................................................................... 54 13. Procedimiento:: añadir_personal......................................................................... 55 14. Procedimiento:: actualizar_personal....................................................................56 15. Procedimiento:: añadir_personal_gestion............................................................57 16. Procedimiento:: actualizar_personal_gestion...................................................... 58 17. Procedimiento:: añadir_personal_vigilancia........................................................ 59 18. Procedimiento: actualizar_personal_vigilancia.................................................... 60 19. Procedimiento: añadir_personal_conservacion................................................... 61 20. Procedimiento: actualizar_personal_conservacion..............................................62 21. Procedimiento: añadir_personal_investigador.....................................................63 22. Procedimiento: actualizar_personal_investigador............................................... 63 23. Procedimiento: añadir_proyecto.......................................................................... 64 24. Procedimiento: actualizar_proyecto.....................................................................65 25. Procedimiento: relacion_investigacion.................................................................66 26. Procedimiento: actualizar_investigacion..............................................................67 27. Procedimiento: añadir_visitante...........................................................................68 28. Procedimiento: actualizar_visitante..................................................................... 69 29. Procedimiento: anadir_alojamiento......................................................................70 30. Procedimiento: actualizar_alojamiento................................................................ 71 Triggers............................................................................................................................73 1. Trigger 1: after_visitante_insert..............................................................................73 2. Trigger 1: after_visitante_update........................................................................... 73 Evento..............................................................................................................................74 1. Evento 1: aumentar_sueldo_anual........................................................................ 74 Usuarios y Acceso........................................................................................................... 75
3 
Referencias......................................................................................................................77
4 
Introducción 
Este documento servirá como una guía detallada del proceso completo de diseño, estructuración e implementación de una base de datos para el Ministerio del Medio Ambiente. El objetivo principal es gestionar eficazmente los datos e información generados por los parques naturales administrados por las entidades y departamentos pertinentes. 
Inicialmente, se analizará el caso de estudio junto con sus requerimientos específicos. A partir de esta investigación, se procederá a desarrollar un modelo conceptual detallado donde se identificarán las entidades principales, sus atributos y las relaciones entre ellas. Este paso determina las bases para comprender la estructura esencial de la gestión de los parques naturales. 
A continuación, se realizará la conversión del modelo conceptual al modelo lógico. Este último ofrece una representación más precisa de cómo se organizará la información, facilitando una comprensión clara de la base de datos en desarrollo. Se aplicará el proceso de Normalización hasta la tercera forma normal (3FN) para optimizar la organización de los datos, reduciendo redundancias y eliminando dependencias transitivas. 
Posteriormente, se llevará a cabo la conversión del modelo lógico al modelo físico, el cual define la implementación real de entidades, atributos y relaciones, incorporando detalles técnicos como los tipos de datos adecuados para cada elemento. 
Para mejorar la comprensión del sistema, se incluirá un diagrama UML que visualice de manera gráfica y concisa la estructura de la base de datos y sus relaciones. 
Finalmente, se detallarán algunos procedimientos, funciones, consultas, triggers y eventos que complementarán la funcionalidad del sistema de información desarrollado, asegurando así su eficiencia y utilidad para el Ministerio del Medio Ambiente. 
Con estos pasos y elementos, se garantiza una guía completa y efectiva para el diseño y desarrollo de la base de datos necesaria para la gestión eficiente de los parques naturales administrados por el ministerio.
5 
Caso de Estudio 
El Ministerio del Medio Ambiente nos ha pedido crear un diseño inicial de un Software que permita manejar los datos e información que se generan sobre los parques naturales gestionados por cada departamento, por lo que comenzamos estructurando los requerimientos dados: 
1. Un departamento puede tener varios parques naturales. 
2. Todo departamento tiene solo una entidad responsable de los parques. 3. Aunque un departamento tiene una entidad responsable para sus parques, dicha entidad puede ser responsable de parques en varios departamentos. 
4. Un parque puede ser compartido por más de un departamento. 
5. Un parque natural se identifica por un nombre, el día en que fue declarado, tiene varias áreas identificadas por un nombre y una determinada extensión. Por motivos de eficiencia se desea favorecer las consultas que se refieran al número de parques existentes en cada departamento y la superficie total declarada de cada parque. 
6. En cada área residen diferentes especies, las cuales pueden ser de tres (3) tipos: Vegetales, Animales o Minerales. 
7. Cada especie tiene una denominación científica, una denominación vulgar y un número de inventario de individuos por área. 
8. Del personal del parque se guarda el número de cédula, nombre, dirección, teléfonos (incluido móvil) y sueldo. Se distinguen los siguientes tipos de personal: 8.1. 001: Personal de Gestión: Registra los datos de los visitantes del parque y están ubicados en las entradas del mismo, las cuales están identificadas con un número). 8.2. 002: Personal de Vigilancia: Vigila un área determinada del parque que recorre en un vehículo el cual está identificado por un tipo y una marca). 8.3. 003: Personal de Conservación: Mantiene y conserva un área determinada del parque. Cada uno lo realiza en una especialidad determinada (Limpieza, Caminos, etc.). 8.4. 004: Personal Investigador: Tiene una titulación y realizan funciones (incluso en equipo), a nivel de proyectos de investigación sobre una determinada especie. Un investigador trabaja en un proyecto analizando varias especies, una especie puede ser investigada por un investigador en varios proyectos y en un proyecto una especie puede ser investigada por varios investigadores. 
9. Un proyecto de investigación tiene un presupuesto y un periodo de realización. 10. De un visitante se tiene identificación, nombre, dirección y profesión, puede alojarse en cualquiera de los alojamientos de los que dispone el parque los cuales tienen capacidad limitada y una categoría establecida. 
Con base en la información anterior, se procederá a crear una base de datos en MySQL con el objetivo de agrupar y relacionar los datos de los parques naturales ubicados en cada departamento, así como la información del personal y de los visitantes.
6 
Instalación General 
Los archivos relacionados con la BBDD del Ministerio del Medio Ambiente, se encuentran en la plataforma GitHub, estos archivos se encuentran en formato sql y se dividen en 6 partes: 
❖ ModeloFisico.sql : Este archivo contiene el script para crear la base de datos y definir las tablas correspondientes. 
❖ Inserciones.sql : Este archivo contiene ejemplos de datos para gestionar los parques naturales, facilitando la inserción inicial de información. 
❖ Consultas.sql : En este archivo se encuentran las consultas relacionadas con los departamentos, parques e investigaciones realizadas en los parques naturales. ❖ funcionesYprocedimientos.sql : Se definen los procedimientos y funciones para añadir, actualizar y mostrar datos dentro del sistema. 
❖ Triggers_Eventos_Transacciones.sql : Contiene los triggers, eventos y transacciones configurados para registrar la entrada de cada visitante mediante la inserción y actualización de datos específicos. 
❖ usuarios.sql : Aquí se gestionan la creación de usuarios y la asignación de permisos necesarios para acceder y visualizar los datos pertinentes. 
Planificación 
Ejecución 
Una vez se analizó la información requerida por el Ministerio del Medio Ambiente, se inició la creación del modelo conceptual. Este modelo proporciona una descripción de alto nivel de las necesidades de información que están detrás del diseño de una base de datos. Representa los conceptos principales de la base de datos y las relaciones entre ellos. 
Construcción del Modelo Conceptual 
Se diseñó el modelo conceptual identificando cada una de las entidades, sus atributos y las relaciones entre ellas. Este modelo conceptual proporciona una visión clara y estructurada de cómo se organizarán y conectarán los diferentes elementos de la base de datos. 
Para entender el diseño del modelo conceptual, se debe tener en cuenta los elementos básicos de un modelo original.
7 
Descripción 
Las Entidades y Atributos 
1. Entidad: 
❖ id_entidad: id único de entidad. 
❖ nombre: nombre de la entidad. 
2. Departamento: 
❖ id_departamento: id único de departamento. 
❖ id_entidad: entidad responsable del departamento. 
❖ nombre: nombre del departamento. 
❖ capital: capital del departamento. 
3. Parque: 
❖ id_parque: id único del parque. 
❖ nombre: nombre del parque. 
❖ fecha_declaracion: fecha de declaración del parque. 
❖ superficie: superficie total declarada del parque. 
❖ N_de_entradas: número de entradas que tiene el parque. 
❖ id_entidad: entidad responsable del parque. 
4. Parque_Departamento: 
❖ id_parque: id del parque que se relaciona con el departamento. 
❖ id_departamento: id del departamento que se relaciona con el parque. 
5. area: 
❖ id : id único del área. 
❖ id_parque: id del parque que se relaciona con esa área. 
❖ nombre: nombre del área. 
❖ extension: extensión determinada del área. 
6. especie 
❖ id: id único de especie. 
❖ id_area: id del área a la que pertenece esa especie. 
❖ tipo (Vegetales, Animales o Minerales.): tipo de especie.
8 
❖ nombre_cientifico: nombre científico de la especie. 
❖ nombre_vulgar: nombre vulgar de la especie. 
❖ cantidad: cantidad de especies por área. 
7. personal: 
❖ id: id único del personal. 
❖ id_parque: id del parque en el que trabaja el personal. 
❖ cédula: cédula del personal. 
❖ nombre: nombre completo del personal. 
❖ direccion: dirección donde reside el personal. 
❖ telefono: teléfono fijo del personal. 
❖ celular: celular del personal. 
❖ sueldo: sueldo que tiene el personal. 
8. personal_gestion: 
❖ id: id único del personal de gestión. 
❖ id_personal: id al que pertenece el personal de gestión. 
❖ n_entrada: número de entrada a la que pertenece el personal de gestión. 
9. personal_vigilancia: 
❖ id: id único de personal_vigilancia. 
❖ id_personal: personal al que pertenece el personal_vigilancia. 
❖ id_area: área en el que está el personal_vigilancia. 
❖ tipo_vehiculo: tipo de vehículo del personal_vigilancia. 
❖ marca_vehiculo: marca de vehículo del personal_vigilancia. 
10. personal_conservacion: 
❖ id: id único del personal _conservacion. 
❖ id_personal: personal que pertenece a personal_conservacion. 
❖ id_area: área que cubre este personal_conservacion. 
❖ especialidad (limpieza, caminos, alojamiento): especialidad del personal_conservacion. 
11. personal_investigador: 
❖ id: id único del personal_investigador. 
❖ id_personal: personal al que pertenece el personal_investigador. 
❖ titulacion: titulación que tiene el personal_investigador. 
12. proyecto: 
❖ id: id único del proyecto. 
❖ nombre: nombre del proyecto. 
❖ presupuesto: presupuesto con el que cuenta el proyecto. 
❖ fecha_inicio: fecha en la que inició el proyecto. 
❖ fecha_fin: fecha en la que finalizó o tiene previsto finalizar el proyecto.
9 
13. investigacion: 
❖ id_proyecto: id que relaciona a proyecto con el personal_investigador y con la especie. 
❖ id_investigador: id que relaciona a personal_investigador con el proyecto y la especie. 
❖ id_especie: id que relaciona la especie con el proyecto y personal_investigador. 
14. visitante: 
❖ id: id único de visitante. 
❖ id_personal_gestion: id que relaciona el registro del visitante con el personal_gestion. 
❖ cedula: cédula única del visitante. 
❖ nombre: nombre completo del visitante. 
❖ direccion: dirección donde reside el visitante. 
❖ profesion: profesión que ejerce el visitante. 
15. alojamiento: 
❖ id: id único del alojamiento. 
❖ id_visitante: id que relaciona el alojamiento con el visitante. 
❖ nombre: nombre del alojamiento. 
❖ capacidad: capacidad de personas que se pueden alojar. 
❖ categoria (Cabaña, Camping, Hotel, Hostales): categoria del alojamiento. ❖ fecha_inicio: fecha de inicio del tiempo que se va a alojar el visitante. ❖ fecha_final: fecha final del tiempo que se va a alojar el visitante. 
Relaciones y Cardinalidades 
Se realizó las relaciones y cardinalidades respectivas del modelo conceptual con sus entidades para tener mejor visualización de la base de datos: 
1. Entidad - Departamento: 
❖ Relación: "Tiene", Una entidad puede tener varios departamentos y un departamento puede tener una entidad. 
❖ Cardinalidad: 1-N (uno a muchos). 
2. Entidad - Parque: 
❖ Relación: “Responsable”, Una entidad es responsable de varios parques y varios parques tienen una misma entidad. 
❖ Cardinalidad: 1-N (uno a muchos). 
3. Departamento - Parque Departamento:
10 
❖ Relación: "Tiene", Un departamento puede tener varios parques y un parque puede tener varios departamentos. 
❖ Cardinalidad: N-M (muchos a muchos). 
4. Parque - Parque Departamento: 
❖ Relación: “Comparte”, Un Parque puede compartir varios departamentos y un departamento comparte varios parques. 
❖ Cardinalidad: N-M (muchos a muchos). 
5. Parque - Area: 
❖ Relación: “Tiene”, Un parque tiene varias áreas y un área puede tener un parque. 
❖ Cardinalidad: 1-N (uno a muchos). 
6. Area - Especies: 
❖ Relación: “Residen”, En un área residen muchas especies y una especie reside en un área. 
❖ Cardinalidad: 1-N (uno a muchos). 
7. Parque - Personal: 
❖ Relación: “Trabaja”, En un parque trabajan muchas personas y una persona trabaja en un solo parque. 
❖ Cardinalidad: 1-N (uno a muchos). 
8. Personal - personal_gestion: 
❖ Relación: “asociado”, Un personal está asociado a un personal_gestion y un personal_gestion está asociado a un personal. 
❖ Cardinalidad: 1-1 (uno a uno). 
9. Personal - personal_vigilancia: 
❖ Relación: “asociado”, Un personal está asociado a un personal_vigilancia y un personal_vigilancia está asociado a un personal. 
❖ Cardinalidad: 1-1 (uno a uno). 
10. personal_vigilancia - area: 
❖ Relación: “vigila”, Un personal_vigilancia vigila un área y un área es vigilada por un personal_vigilancia.
11 
❖ Cardinalidad: 1-1 (uno a uno). 
11. Personal - personal_conservacion: 
❖ Relación: “asociado”, Un personal está asociado a un personal_conservacion y un personal_conservacion está asociado a un personal. 
❖ Cardinalidad: 1-1 (uno a uno). 
12. area - personal_conservacion: 
❖ Relación: “Conserva”, un area es conservada por muchos personal_conservacion y un personal_conservacion conserva un area. ❖ Cardinalidad: 1-M (uno a muchos). 
13. Personal - personal_investigador: 
❖ Relación: “asociado”, Un personal está asociado a un personal_investigador y un personal_investigador está asociado a un personal. 
❖ Cardinalidad: 1-1 (uno a uno). 
14. personal_investigador - investigacion: 
❖ Relación: “Trabaja”, Un personal_investigador trabaja en muchos proyectos, con muchas especies y un proyecto con una especie es trabajada por muchos personal_investigador. 
❖ Cardinalidad: N-M (muchos a muchos) 
15. Proyecto - investigacion: 
❖ Relación: “Tiene”, Un proyecto puede tener muchos investigadores con muchas especies, un investigador tiene muchos proyectos y una especie tiene muchos proyectos. 
❖ Cardinalidad: N-M (muchos a muchos). 
16. Especie - investigacion: 
❖ Relación: “Analizar”, Una especie es analizada por muchos investigadores y en muchos proyectos, Un investigador analiza muchas especies y un proyecto analiza muchas especies. 
❖ Cardinalidad: N-M (muchos a muchos). 
17. personal_gestion - visitante:
12 
❖ Relación: “Registra”, Un personal_gestion registra a muchos visitantes y un visitante es registrado por un personal_gestion. 
❖ Cardinalidad: 1-N (uno a muchos). 
18. alojamiento - visitante: 
❖ Relación: “Puede”, un alojamiento puede tener muchos visitantes y muchos visitantes pueden tener un alojamiento. 
❖ Cardinalidad: 1-N (uno a muchos). 
Gráfica 
Diseño completo del modelo conceptual en draw.io 
Construcción del Modelo Lógico 
Se ha diseñado el modelo lógico teniendo en cuenta el modelo conceptual, incorporando detalles más específicos como las características de cada atributo, incluidas las claves primarias, foráneas y las relaciones de cardinalidad. 
Descripción 
Las Entidades y Atributos 
1. entidad :
13 
❖ id_entidad: INT AUTO_INCREMENT PRIMARY KEY. 
❖ nombre: varchar(100) NOT NULL. 
2. departamento : 
❖ id_departamento: INT AUTO_INCREMENT PRIMARY KEY. 
❖ id_entidad: INT NOT NULL FOREIGN KEY. 
❖ nombre: VARCHAR(100) NOT NULL. 
❖ capital: VARCHAR(100) NOT NULL. 
3. parque : 
❖ id_parque: INT AUTO_INCREMENT PRIMARY KEY. 
❖ nombre: VARCHAR(100) NOT NULL. 
❖ fecha_declaracion: DATE NOT NULL. 
❖ superficie: DECIMAL(10,2) NOT NULL. 
❖ N_de_entradas: INT(3) NOT NULL. 
❖ id_entidad: INT NOT NULL FOREIGN KEY. 
4. parque_departamento : 
❖ id_parque: INT PRIMARY KEY, FOREIGN KEY. 
❖ id_departamento: INT PRIMARY KEY, FOREIGN KEY. 
5. area : 
❖ id_area: INT AUTO_INCREMENT PRIMARY KEY. 
❖ id_parque: INT NOT NULL FOREIGN KEY. 
❖ nombre VARCHAR(100) NOT NULL. 
❖ extension DECIMAL(10,2) NOT NULL. 
6. especie : 
❖ id_especie: INT AUTO_INCREMENT PRIMARY KEY. 
❖ id_area: INT NOT NULL FOREIGN KEY. 
❖ tipo: ENUM('Vegetales', 'Animales', 'Minerales') NOT NULL. 
❖ nombre_cientifico: VARCHAR(100) NOT NULL. 
❖ nombre_vulgar: VARCHAR(100) NOT NULL. 
❖ cantidad: INT(10) NOT NULL. 
7. personal : 
❖ id_personal: INT AUTO_INCREMENT PRIMARY KEY. 
❖ id_parque: INT NOT NULL.
14 
❖ cedula: INT(20) UNIQUE NOT NULL. 
❖ nombre: VARCHAR(100) NOT NULL. 
❖ direccion: VARCHAR(200) NOT NULL. 
❖ telefono: INT(50). 
❖ celular: int(50) NOT NULL. 
❖ sueldo: INT(20) NOT NULL. 
8. personal_gestion : 
❖ id_gestion: INT AUTO_INCREMENT PRIMARY KEY. 
❖ id_personal: INT NOT NULL FOREIGN KEY. 
❖ n_entrada: INT(3) NOT NULL. 
9. personal_vigilancia : 
❖ id_vigilancia: INT AUTO_INCREMENT PRIMARY KEY. 
❖ id_personal: INT NOT NULL FOREIGN KEY. 
❖ id_area: INT NOT NULL FOREIGN KEY. 
❖ tipo_vehiculo: VARCHAR(100) NOT NULL. 
❖ marca_vehiculo: VARCHAR(100) NOT NULL. 
10. personal_conservacion : 
❖ id_conservacion: INT AUTO_INCREMENT PRIMARY KEY, 
❖ id_personal INT NOT NULL FOREIGN KEY. 
❖ id_area INT NOT NULL FOREIGN KEY. 
❖ especialidad: ENUM('limpieza', 'caminos', 'alojamiento') NOT NULL. 11. personal_investigador : 
❖ id_investigador: INT AUTO_INCREMENT PRIMARY KEY. 
❖ id_personal INT NOT NULL FOREIGN KEY. 
❖ titulacion: VARCHAR(100). 
12. proyecto : 
❖ id_proyecto: INT AUTO_INCREMENT PRIMARY KEY. 
❖ nombre: VARCHAR(100) NOT NULL. 
❖ presupuesto: DECIMAL(12,2) NOT NULL. 
❖ fecha_inicio: DATE NOT NULL. 
❖ fecha_fin: DATE NOT NULL. 
13. investigacion :
15 
❖ id_proyecto: INT PRIMARY KEY, FOREIGN KEY. 
❖ id_investigador: INT PRIMARY KEY, FOREIGN KEY. 
❖ id_especie: INT PRIMARY KEY, FOREIGN KEY. 
14. visitante : 
❖ id_visitante: INT AUTO_INCREMENT PRIMARY KEY. 
❖ id_personal_gestion: INT NOT NULL FOREIGN KEY. 
❖ cedula: INT(20) UNIQUE NOT NULL. 
❖ nombre: VARCHAR(100) NOT NULL. 
❖ direccion: VARCHAR(100) NOT NULL. 
❖ profesion: VARCHAR(100). 
15. alojamiento : 
❖ id_alojamiento: INT AUTO_INCREMENT PRIMARY KEY. 
❖ id_visitante: INT NOT NULL FOREIGN KEY. 
❖ nombre: VARCHAR(100) NOT NULL. 
❖ capacidad: INT(10) NOT NULL. 
❖ categoria: ENUM ('Cabaña', 'Camping', 'Hotel', 'Hostales') NOT NULL. ❖ fecha_inicio: DATE NOT NULL. 
❖ fecha_final: DATE NOT NULL. 
Relaciones y Cardinalidades 
Se realizó las relaciones y cardinalidades respectivas del modelo lógico con sus entidades para tener mejor visualización de la base de datos: 
1. Entidad - Departamento: 
❖ Una entidad puede tener varios departamentos y un departamento puede tener una entidad.1-N (uno a muchos). 

2. Entidad - Parque: 
❖ Una entidad es responsable de varios parques y varios parques tienen una misma entidad.1-N (uno a muchos). 

3. Departamento - Parque Departamento: 
❖ Un departamento puede tener varios parques y un parque puede tener varios departamentos.N-M (muchos a muchos).
16 

4. Parque - Parque Departamento: 
❖ Un parque puede compartir varios departamentos y un departamento comparte varios parques.N-M (muchos a muchos). 

5. Parque - Area: 
❖ Un parque tiene varias áreas y un área puede tener un parque.1-N (uno a muchos). 

6. Area - Especies: 
❖ En un área residen muchas especies y una especie reside en un área.1-N (uno a muchos). 

7. Parque - Personal: 
❖ En un parque trabajan muchas personas y una persona trabaja en un solo parque.1-N (uno a muchos). 

8. Personal - personal_gestion: 
❖ Un personal está asociado a un personal_gestion y un personal_gestion está asociado a un personal.1-1 (uno a uno). 

9. Personal - personal_vigilancia: 
❖ Un personal está asociado a un personal_vigilancia y un personal_vigilancia está asociado a un personal.1-1 (uno a uno). 

10. personal_vigilancia - area:
17 
❖ Un personal_vigilancia vigila un área y un área es vigilada por un personal_vigilancia.1-1 (uno a uno). 

11. Personal - personal_conservacion: 
❖ Un personal está asociado a un personal_conservacion y un personal_conservacion está asociado a un personal.1-1 (uno a uno). 

12. area - personal_conservacion: 
❖ Un area es conservada por muchos personal_conservacion y un personal_conservacion conserva un area.1-N (uno a muchos). 

13. Personal - personal_investigador: 
❖ Un personal está asociado a un personal_investigador y un personal_investigador está asociado a un personal.1-1 (uno a uno). 

14. personal_investigador - investigacion: 
❖ Un personal_investigador trabaja en muchos proyectos, con muchas especies y un proyecto con una especie es trabajada por muchos personal_investigador.N-M (muchos a muchos). 

15. Proyecto - investigacion: 
❖ Un proyecto puede tener muchos investigadores con muchas especies, un investigador tiene muchos proyectos y una especie tiene muchos proyectos.N-M (muchos a muchos). 

16. Especie - investigacion:
18 
❖ Una especie es analizada por muchos investigadores y en muchos proyectos, Un investigador analiza muchas especies y un proyecto analiza muchas especies.N-M (muchos a muchos). 

17. personal_gestion - visitante: 
❖ Un personal_gestion registra a muchos visitantes y un visitante es registrado por un personal_gestion.1-N (uno a muchos). 

18. alojamiento - visitante: 
❖ Un alojamiento puede tener muchos visitantes y muchos visitantes pueden tener un alojamiento.1-N (uno a muchos). 

Gráfica 
Diseño completo del modelo logico en draw.io
19 
Normalización del Modelo Lógico 
Se realizó el proceso de la normalización de las tablas anteriormente visualizadas para organizar los datos de manera más eficiente,minimizando redundancias y dependencias transitivas en la base de datos en desarrollo. 
Primera Forma Normal (1FN) 
Una tabla está en 1FN si cumple con los siguientes criterios: 
❖ Todos los atributos contienen valores atómicos (indivisibles). 
❖ No debe haber grupos repetitivos de columnas. 
❖ Cada columna debe contener un solo valor en cada fila. 
Descripción 
La primera forma normal, es el primer nivel de normalización en el diseño de la base de datos que se aplicará a las tablas de la base de datos para garantizar la organización de los datos de manera que evite redundancias y asegure la consistencia de la información. 
Descripción Técnica 
1. entidad : 
❖ Se encuentra en 1FN, ya que cuenta con una clave primaria única y cada columna tiene valores únicos y no son repetitivos. 
2. departamento : 
❖ Se encuentra en 1FN, ya que cuenta con una clave primaria única y cada columna tiene valores únicos y no son repetitivos. 
3. parque : 
❖ Se encuentra en 1FN, ya que cuenta con una clave primaria única y cada columna tiene valores únicos y no son repetitivos. 
4. parque_departamento : 
❖ Se encuentra en 1FN, ya que cuenta con las claves primarias compuestas y cada columna tiene valores únicos y no son repetitivos. 
5. area :
20 
❖ Se encuentra en 1FN, ya que cuenta con una clave primaria única y cada columna tiene valores únicos y no son repetitivos. 
6. especie : 
❖ Se encuentra en 1FN, ya que cuenta con una clave primaria única y cada columna tiene valores únicos y no son repetitivos. 
7. personal : 
❖ Se encuentra en 1FN, ya que cuenta con una clave primaria única y cada columna tiene valores únicos y no son repetitivos. 
8. personal_gestion : 
❖ Se encuentra en 1FN, ya que cuenta con una clave primaria única y cada columna tiene valores únicos y no son repetitivos. 
9. personal_vigilancia : 
❖ Se encuentra en 1FN, ya que cuenta con una clave primaria única y cada columna tiene valores únicos y no son repetitivos. 
10. personal_conservacion : 
❖ Se encuentra en 1FN, ya que cuenta con una clave primaria única y cada columna tiene valores únicos y no son repetitivos. 
11. personal_investigador : 
❖ Se encuentra en 1FN, ya que cuenta con una clave primaria única y cada columna tiene valores únicos y no son repetitivos. 
12. proyecto : 
❖ Se encuentra en 1FN, ya que cuenta con una clave primaria única y cada columna tiene valores únicos y no son repetitivos. 
13. investigacion : 
❖ Se encuentra en 1FN, ya que cuenta con las claves primarias compuestas y cada columna tiene valores únicos y no son repetitivos. 
14. visitante :
21 
❖ Se encuentra en 1FN, ya que cuenta con una clave primaria única y cada columna tiene valores únicos y no son repetitivos. 
15. alojamiento : 
❖ Se encuentra en 1FN, ya que cuenta con una clave primaria única y cada columna tiene valores únicos y no son repetitivos. 
Gráfica 

Segunda Forma Normal (2FN) 
Una tabla está en 2FN si cumple con los siguientes criterios: 
❖ Está en 1FN. 
❖ Todos los atributos no clave (no pertenecientes a una clave primaria compuesta) dependen completamente de la clave primaria. 
Descripción 
La segunda forma normal, es el segundo nivel de normalización en el diseño de la base de datos que se aplicará a las tablas de una base de datos que ya cumplen con la primera forma normal y lleva a cabo la eliminación de dependencias parciales dentro de una tabla. 
Descripción Técnica 
1. entidad :
22 
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única y cada columna depende completamente de esa clave primaria. 
2. departamento : 
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única y cada columna depende completamente de esa clave primaria. 
3. parque : 
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única y cada columna depende completamente de esa clave primaria. 
4. parque_departamento : 
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única y cada columna depende completamente de esa clave primaria. 
5. area : 
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única y cada columna depende completamente de esa clave primaria. 
6. especie : 
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única y cada columna depende completamente de esa clave primaria. 
7. personal : 
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única y cada columna depende completamente de esa clave primaria. 
8. personal_gestion : 
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única y cada columna depende completamente de esa clave primaria. 
9. personal_vigilancia : 
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única y cada columna depende completamente de esa clave primaria.
23 
10. personal_conservacion : 
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única y cada columna depende completamente de esa clave primaria. 
11. personal_investigador : 
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única y cada columna depende completamente de esa clave primaria. 
12. proyecto : 
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única y cada columna depende completamente de esa clave primaria. 
13. investigacion : 
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única y cada columna depende completamente de esa clave primaria. 
14. visitante : 
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única y cada columna depende completamente de esa clave primaria. 
15. alojamiento : 
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única y cada columna depende completamente de esa clave primaria.
24 
Gráfica 

Tercera Forma Normal (3FN) 
Una tabla está en 3NF si cumple con los siguientes criterios: 
❖ Está en 2NF. 
❖ No hay dependencias transitivas: ningún atributo no clave depende de otro atributo no clave. 
Descripción 
La tercera forma normal, es el tercer nivel de normalización en el diseño de la base de datos que se aplicará a las tablas de una base de datos que ya cumplen con la segunda forma normal y se enfoca en la eliminación de dependencias transitivas, evitando que un atributo no clave dependa de otro no clave. 
Descripción Técnica 
1. entidad : 
❖ Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria. 
2. departamento : 
❖ Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria.
25 
3. parque : 
❖ Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria. 
4. parque_departamento : 
Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria. 
5. area : 
❖ Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria. 
6. especie : 
❖ Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria. 
7. personal : 
❖ Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria. 
8. personal_gestion : 
❖ Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria. 
9. personal_vigilancia : 
❖ Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria. 
10. personal_conservacion : 
❖ Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria. 
11. personal_investigador : 
❖ Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria.
26 
12. proyecto : 
❖ Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria. 
13. investigacion : 
❖ Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria. 
14. visitante : 
❖ Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria. 
15. alojamiento : 
❖ Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria. 
Gráfica 
Construcción del Modelo Físico 
Se diseñó el modelo físico considerando el modelo lógico que incluye todas las entidades, sus atributos y las relaciones entre ellas. Además, este modelo incorpora los tipos de datos de los atributos previamente definidos, los cuales fueron estructurados en tablas utilizando el lenguaje de un Sistema de Gestión de Bases de Datos (SGBD) compatible con la plataforma MySQL.
27 
Descripción 
El modelo físico se diseñó para funcionar en MySQL, donde cada entidad se representa como una tabla compuesta por sus atributos correspondientes, organizados en columnas con tipos de datos específicos según sea necesario. 
Tablas 
Para crear la base de datos utilice el siguiente comando: 
create database Ambientales; 
Para utilizar la base de datos ocupe el siguiente comando: 
use Ambientales; 
Comenzaremos creando las tablas junto con sus tipos de datos correspondientes. Para esto, utiliza los siguientes comandos: 
1. Creación de la tabla entidad 
create table entidad ( 
id_entidad INT AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(100) NOT NULL 
); 
2. Creación de la tabla departamento 
create table departamento ( 
id_departamento INT AUTO_INCREMENT PRIMARY KEY, 
id_entidad INT NOT NULL, 
Foreign Key (id_entidad) REFERENCES entidad(id_entidad), nombre VARCHAR(100) NOT NULL, 
capital VARCHAR(100) NOT NULL 
); 
3. Creación de la tabla parque 
create table parque ( 
id_parque INT AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(100) NOT NULL, 
fecha_declaracion DATE NOT NULL, 
superficie DECIMAL(10,2) NOT NULL, 
N_de_entradas INT(3) NOT NULL, 
id_entidad INT NOT NULL,
28 
Foreign Key (id_entidad) REFERENCES entidad(id_entidad) 
); 
4. Creación de la tabla parque_departamento 
create table parque_departamento ( 
id_parque INT, 
id_departamento INT, 
PRIMARY KEY (id_parque, id_departamento), 
Foreign Key (id_parque) REFERENCES parque(id_parque), 
Foreign Key (id_departamento) REFERENCES departamento(id_departamento) ); 
5. Creación de la tabla area 
create table area ( 
id_area INT AUTO_INCREMENT PRIMARY KEY, 
id_parque INT NOT NULL, 
Foreign Key (id_parque) REFERENCES parque(id_parque), 
nombre VARCHAR(100) NOT NULL, 
extension DECIMAL(10,2) NOT NULL 
); 
6. Creación de la tabla especie 
create table especie ( 
id_especie INT AUTO_INCREMENT PRIMARY KEY, 
id_area INT NOT NULL, 
Foreign Key (id_area) REFERENCES area(id_area), 
tipo ENUM('Vegetales', 'Animales', 'Minerales') NOT NULL, nombre_cientifico VARCHAR(100) NOT NULL, 
nombre_vulgar VARCHAR(100) NOT NULL, 
cantidad INT(10) NOT NULL 
); 
7. Creación de la tabla personal 
create table personal ( 
id_personal INT AUTO_INCREMENT PRIMARY KEY, 
id_parque INT NOT NULL, 
cedula VARCHAR(20) UNIQUE NOT NULL, 
nombre VARCHAR(100) NOT NULL, 
direccion VARCHAR(100) NOT NULL, 
telefono VARCHAR(20), 
celular VARCHAR(20) NOT NULL, 
sueldo DECIMAL(10,2) NOT NULL
29 
); 
8. Creación de la tabla personal_gestion 
create table personal_gestion ( 
id_gestion INT AUTO_INCREMENT PRIMARY KEY, 
id_personal INT NOT NULL, 
Foreign Key (id_personal) REFERENCES personal(id_personal), n_entrada INT(10) NOT NULL 
); 
9. Creación de la tabla personal_vigilancia 
create table personal_vigilancia ( 
id_vigilancia INT AUTO_INCREMENT PRIMARY KEY, 
id_personal INT NOT NULL, 
Foreign Key (id_personal) REFERENCES personal(id_personal), id_area INT NOT NULL, 
Foreign Key (id_area) REFERENCES area(id_area), 
tipo_vehiculo VARCHAR(100) NOT NULL, 
marca_vehiculo VARCHAR(100) NOT NULL 
); 
10. Creación de la tabla personal_conservacion 
create table personal_conservacion ( 
id_conservacion INT AUTO_INCREMENT PRIMARY KEY, 
id_personal INT NOT NULL, 
Foreign Key (id_personal) REFERENCES personal(id_personal), id_area INT NOT NULL, 
Foreign Key (id_area) REFERENCES area(id_area), 
especialidad ENUM('limpieza', 'caminos', 'alojamiento') NOT NULL ); 
11. Creación de la tabla personal_investigador 
create table personal_investigador ( 
id_investigador INT AUTO_INCREMENT PRIMARY KEY, 
id_personal INT NOT NULL, 
Foreign Key (id_personal) REFERENCES personal(id_personal), titulacion VARCHAR(100) 
); 
12. Creación de la tabla proyecto 
create table proyecto (
30 
id_proyecto INT AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(100) NOT NULL, 
presupuesto DECIMAL(10,2) NOT NULL, 
fecha_inicio DATE NOT NULL, 
fecha_fin DATE NOT NULL 
); 
13. Creación de la tabla investigacion 
create table investigacion( 
id_proyecto INT, 
id_investigador INT, 
id_especie INT, 
PRIMARY KEY (id_proyecto, id_investigador, id_especie), 
Foreign Key (id_proyecto) REFERENCES proyecto(id_proyecto), Foreign Key (id_investigador) REFERENCES 
personal_investigador(id_investigador), 
Foreign Key (id_especie) REFERENCES especie(id_especie) 
); 
14. Creación de la tabla visitante 
create table visitante( 
id_visitante INT AUTO_INCREMENT PRIMARY KEY, 
id_personal_gestion INT NOT NULL, 
Foreign Key (id_personal_gestion) REFERENCES 
personal_gestion(id_gestion), 
cedula VARCHAR(20) UNIQUE NOT NULL, 
nombre VARCHAR(100) NOT NULL, 
direccion VARCHAR(100) NOT NULL, 
profesion VARCHAR(100) 
); 
15. Creación de la tabla alojamiento 
create table alojamiento ( 
id_alojamiento INT AUTO_INCREMENT PRIMARY KEY, 
id_visitante INT NOT NULL, 
Foreign Key (id_visitante) REFERENCES visitante(id_visitante), nombre VARCHAR(100) NOT NULL, 
capacidad INT(10) NOT NULL, 
categoria ENUM ('Cabaña', 'Camping', 'Hotel', 'Hostales') NOT NULL, fecha_inicio DATE NOT NULL,
31 
fecha_final DATE NOT NULL 
); 
Finalmente para listar las tablas anteriormente creadas utilizamos este comando: SHOW TABLES; 
Construcción del Diagrama UML 
Se ha diseñado un diagrama UML tomando como referencia la normalización para entender mejor los diseños, la arquitectura del código y la implementación propuesta. Este enfoque nos permitirá tener una visión clara y detallada de cómo se manejarán cada una de las consultas, funcionalidades y los usuarios en la base de datos. De esta manera, podremos asegurar una implementación eficiente y coherente con los requisitos del sistema. 
Descripción 
El diagrama UML se ha diseñado con el objetivo de representar detalladamente la estructura de cada tabla y sus relaciones. Este diagrama ilustra claramente el tipo de dato correspondiente a cada atributo, así como la identificación de claves primarias (primary keys) y claves foráneas (foreign keys). Además, especifica la obligatoriedad de los atributos, proporcionando una visión precisa y exhaustiva de la base de datos. Este nivel de detalle facilita el entendimiento y la implementación técnica, asegurando que todos los componentes y sus interrelaciones estén correctamente definidos y alineados con los requisitos del sistema. 
Comenzaremos creando las tablas junto con sus tipos de datos correspondientes: 
1. Tabla entidad

32 
2. Tabla departamento 

3. Tabla parque 

4. Tabla parque_departamento 

5. Tabla area

33 
6. Tabla especie 

7. Tabla personal 

8. Tabla personal_gestion

34 
9. Tabla personal_vigilancia 

10. Tabla personal_conservacion 

11. Tabla personal_investigador 

12. Tabla proyecto

35 
13. Tabla investigacion 

14. Tabla visitante 

15. Tabla alojamiento

36 
Gráfica 
Diseño completo del diagrama UML en Github en la carpeta de ‘Diagramas’. 
Inserciones de Datos 
La inserción de datos en las tablas es una parte fundamental para la prueba de operatividad. Para insertar datos en una tabla específica, se utiliza la siguiente sintaxis: 
INSERT INTO nombre_de_tabla (columna1, columna2, columna3, ...) VALUES (valor1, valor2, valor3, ...); 
❖ nombre_de_tabla: El nombre de la tabla donde se insertarán los datos. ❖ columna1,columna2,columna3 : Son los atributos de las tablas en los cuales se ingresarán los datos específicamente.
37 
❖ VALUES(valor1, valor2, valor3): Se ingresan los valores que se desea en cada columna específica, los valores están en el mismo orden que las columnas. 
Descripción 
Para aclarar el proceso de inserción de datos en las tablas de la base de datos 'Ambientales', consideremos un ejemplo práctico acerca de los parques naturales más conocidos en Colombia. Para ingresar datos en la tabla 'entidad', la cual muestra la entidad responsable del parque natural, se emplea el siguiente comando: 
INSERT INTO entidad (nombre) VALUES 
('Sistema Nacional de Áreas Protegidas (SINAP)'); 
Para ingresar datos en la tabla 'departamento', la cual muestra la entidad responsable del parque natural, el nombre del departamento donde se encuentra el parque y su capital, se emplea el siguiente comando: 
INSERT INTO departamento (id_entidad,nombre,capital) VALUES (1,'Magdalena','Santa Marta'); 
Para ingresar datos en la tabla ‘parque’, la cual muestra el nombre, fecha de declaración, superficie, número de entradas y la id de la entidad encargada del parque natural, se emplea el siguiente comando: 
INSERT INTO parque 
(nombre,fecha_declaracion,superficie,N_de_entradas,id_entidad) VALUES ('Parque Nacional Natural Tayrona','1964-08-30',15000,3,1); 
Para ingresar datos en la tabla ‘parque_departamento’, la cual muestra el id del parque y el id del departamento en el que se encuentra, se emplea el siguiente comando: 
INSERT INTO parque_departamento (id_parque,id_departamento) VALUES (1,1); 
Para ingresar datos en la tabla ‘area’, la cual muestra el id del parque, nombre y extensión del área específica del parque, se emplea el siguiente comando: 
INSERT INTO area (id_parque,nombre,extension) VALUES 
(1,'Sector Cañaveral',2919); 
Para ingresar datos en la tabla ‘especie’, la cual muestra el id del área,tipo, nombre científico,nombre vulgar y cantidad de especies por área específica del parque, se emplea el siguiente comando:
38 
INSERT INTO especie 
(id_area,tipo,nombre_cientifico,nombre_vulgar,cantidad) VALUES (4,'Animales','Panthera onca','Jaguar',18); 
Para ingresar datos en la tabla ‘personal’, el id del parque, cedula, nombre, direccion, teléfono, celular y sueldo del personal que trabaja en el parque, se emplea el siguiente comando: 
INSERT INTO personal 
(id_parque,cedula,nombre,direccion,telefono,celular,sueldo) VALUES (1, '3456789012', 'Pedro Gómez', 'Avenida 5 #15-25', '3456789', '4567891234', 2700000); 
Para ingresar datos en la tabla ‘personal_gestion’, la cual muestra el id del personal de gestión y el número de entrada en la que se encuentra en el parque, se emplea el siguiente comando: 
INSERT INTO personal_gestion (id_personal,n_entrada) VALUES (5,1); 
Para ingresar datos en la tabla ‘personal_vigilancia’, la cual muestra el id del personal,id del área, tipo y marca del vehículo del personal de vigilancia por área específica del parque, se emplea el siguiente comando: 
INSERT INTO personal_vigilancia 
(id_personal,id_area,tipo_vehiculo,marca_vehiculo) VALUES (3, 3, 'Bicicleta', 'Toxica'); 
Para ingresar datos en la tabla ‘personal_conservacion’, la cual muestra el id del personal, el id del área y especialidad del personal de conservación por área específica del parque, se emplea el siguiente comando: 
INSERT INTO personal_conservacion (id_personal,id_area,especialidad) VALUES (8,1,'caminos'); 
Para ingresar datos en la tabla ‘personal_investigador’, la cual muestra el id del personal y titulación del personal investigador, se emplea el siguiente comando: 
INSERT INTO personal_investigador (id_personal,titulacion) VALUES (26,'Ecólogo Especialista en Vegetación'); 
Para ingresar datos en la tabla ‘proyecto’, la cual muestra el nombre,presupuesto,fecha de inicio y fecha de fin del proyecto de investigación de las especies, se emplea el siguiente comando: 
INSERT INTO proyecto (nombre,presupuesto,fecha_inicio,fecha_fin) VALUES
39 
('Estudio de hábitat del Jaguar en Parque Natural', 50000, '2024-08-01', '2025-07-31'); 
Para ingresar datos en la tabla ‘investigacion’, la cual muestra el id del proyecto,id del investigador y el id de la especie en investigación, se emplea el siguiente comando: 
INSERT INTO investigacion (id_proyecto,id_investigador,id_especie) VALUES (1,1,1); 
Para ingresar datos en la tabla ‘visitante’, la cual muestra el id del personal de gestión,cédula,nombre,dirección y profesión del visitante al parque natural, se emplea el siguiente comando: 
INSERT INTO visitante 
(id_personal_gestion,cedula,nombre,direccion,profesion) VALUES (1,'1234567890','Ana García','Carrera 10 #20-30','Ingeniera de Sistemas'); 
Para ingresar datos en la tabla ‘alojamiento’, la cual muestra el id del visitante,nombre,capacidad,categoria,fecha de inicio y final del alojamiento en un parque natural específico, se emplea el siguiente comando: 
INSERT INTO alojamiento 
(id_visitante,nombre,capacidad,categoria,fecha_inicio,fecha_final) VALUES (4, 'Cabaña La Tranquilidad', 4, 'Cabaña', '2024-07-10', '2024-07-15'); 
Consultas de Datos 
Las consultas en una base de datos son indispensables, ya que facilitan el acceso y la recuperación de información almacenada. Además, permiten mantener la base de datos actualizada mediante la inserción, modificación y actualización de datos. Son fundamentales para almacenar, manipular y recuperar datos de manera eficiente y segura. Para realizar consultas básicas,se utiliza la siguiente sintaxis: 
En esta consulta se muestran todos los datos ‘SELECT *’ de una tabla en especifico ‘FROM nombre_tabla’ : 
SELECT * FROM nombre_tabla; 
En esta consulta se muestran todos los datos ‘SELECT *’ de una tabla en especifico ‘FROM nombre_tabla’ donde el valor sea igual al de la columna especificada WHERE columna = 'valor'. 
SELECT * FROM nombre_tabla WHERE columna = 'valor';
40 
Descripción 
Para aclarar el proceso de consultas de datos en las tablas de la base de datos 'Ambientales', veamos algunos ejemplos prácticos utilizando información acerca de los parques naturales más conocidos en Colombia. Para realizar una consulta sobre los departamentos que cuentan con más de un parque relacionado, se utiliza el siguiente comando: 
1. En esta consulta se seleccionan las columnas que se desean mostrar de una tabla determinada y se realiza un conteo de parques por departamento usando ‘count(pd.id_parque) as Numero_parques’. Se realiza una unión de tablas ‘join’ para relacionar los datos que corresponden entre ellas y se agrupan los resultados usando ‘group by d.id_departamento’ para realizar el conteo por departamento, agregando un filtro ‘HAVING’ para mostrar aquellos que tienen más de un parque: 
select d.nombre as NombreDepartamento, count(pd.id_parque) as Numero_parques 
from departamento d 
join parque_departamento pd on d.id_departamento = 
pd.id_departamento 
group by d.id_departamento 
HAVING count(pd.id_parque) > 1; 
Además, se ha creado un índice denominado ‘idx_parque_count’ en la tabla parque, diseñado para facilitar la consulta de información de parques mediante su identificador: 
create index idx_parque_count on parque(id_parque); 
La consulta se visualiza de la siguiente manera: 

2. Para consultar sobre los parques existentes en cada departamento y su superficie total declarada, se seleccionan específicamente las columnas que se desean mostrar de una tabla determinada. Se realizan dos uniones ‘inner join’ entre tablas para relacionar los datos correspondientes y así obtener los resultados deseados:
41 
select d.nombre as NombreDepartamento, p.nombre as NombreParque, p.superficie 
from departamento d 
inner join parque_departamento pd on d.id_departamento = pd.id_departamento 
inner join parque p on pd.id_parque = p.id_parque; 
Además, se ha creado un índice denominado ‘idx_superficie_parque’ en la tabla parque, diseñado para facilitar la consulta de información de parques mediante su superficie: 
create index idx_superficie_parque on parque(superficie); La consulta se visualiza de la siguiente manera: 

3. Para consultar sobre los proyectos y el personal investigador, se seleccionan específicamente las columnas que se desean mostrar de una tabla determinada. Se realizan cuatro uniones ‘join’ entre tablas para relacionar los datos correspondientes y así obtener los resultados deseados: 
select p.nombre AS nombre_proyecto, p.presupuesto, p.fecha_inicio, p.fecha_fin, pi.titulacion, per.nombre AS nombre_personal, e.nombre_cientifico, e.nombre_vulgar, e.tipo, e.cantidad from investigacion i 
join proyecto p ON i.id_proyecto = p.id_proyecto 
join personal_investigador pi ON i.id_investigador = 
pi.id_investigador 
join personal per ON pi.id_personal = per.id_personal 
join especie e ON i.id_especie = e.id_especie;
42 
Además, se ha creado un índice denominado ‘idx_proyecto_presupuesto’ en la tabla parque, diseñado para facilitar la consulta de información de proyectos mediante su presupuesto: 
create index idx_proyecto_presupuesto on proyecto(presupuesto); La consulta se visualiza de la siguiente manera: 

4. Para consultar sobre un personal de vigilancia específico, se seleccionan específicamente las columnas que se desean mostrar de una tabla determinada. Se realizan tres uniones ‘join’ entre tablas para relacionar los datos correspondientes, buscando por medio un id específico ‘where’ y así obtener los resultados deseados: 
select p.nombre AS nombre_personal, pa.nombre AS nombre_parque, a.nombre AS nombre_area, pv.tipo_vehiculo, pv.marca_vehiculo from personal p 
join parque pa ON p.id_parque = pa.id_parque 
join personal_vigilancia pv ON p.id_personal = pv.id_personal join area a ON pv.id_area = a.id_area 
where p.id_personal = 3; 
La consulta se visualiza de la siguiente manera: 

5. Para consultar sobre la cantidad de especies por parque, se seleccionan específicamente las columnas que se desean mostrar de una tabla determinada. Se realizan dos uniones ‘join’ entre tablas para relacionar los datos correspondientes y así obtener los resultados deseados: 
select p.nombre as nombreParque, e.nombre_vulgar, e.cantidad as CantidadDeEspecie 
from parque p
43 
join area a on p.id_parque = a.id_parque 
join especie e on a.id_area = e.id_area; 
Además, se ha creado un índice denominado ‘idx_especie_cantidad’ en la tabla parque, diseñado para facilitar la consulta de información de especies mediante su cantidad: 
create index idx_especie_cantidad on especie(cantidad); 
La consulta se visualiza de la siguiente manera: 

Transacciones 
Las transacciones son secuencias de operaciones en bases de datos que se ejecutan de manera que se completan todas o ninguna, asegurando así la integridad de los datos. Estas operaciones utilizan comandos específicos como 'START TRANSACTION' para iniciar la transacción, 'COMMIT' para confirmar los cambios realizados, y la posibilidad de revertir esos cambios en caso de error ‘ROLLBACK’. 
Descripción 
Para aclarar la secuencia de las transacciones de datos en las tablas de la base de datos 'Ambientales', veamos un ejemplo práctico utilizando información acerca de los parques naturales más conocidos en Colombia. Para realizar una transacción que registre un nuevo proyecto de investigación de las especies, se utilizaran los siguiente comandos: 
La transacción se inicia de la siguiente manera: 
START TRANSACTION; 
insertamos los datos nuevos en la tabla de proyectos:
44 
INSERT INTO proyecto (nombre, presupuesto, fecha_inicio, fecha_fin) VALUES ('Ecología del Laurel en Ecosistemas Montañosos', 50000, '2024-06-17', '2025-05-18'); 
Obtenemos el id del proyecto agregado anteriormente: 
SET @id_proyecto = LAST_INSERT_ID(); 
Insertamos el investigador que está asociado a ese proyecto: 
INSERT INTO personal_investigador (id_personal, titulacion) VALUES (101, 'Ecólogo Especialista en Vegetación'); 
Obtenemos el id del personal investigador agregado anteriormente: 
SET @id_investigador = LAST_INSERT_ID(); 
Insertamos la especie que están involucradas en la investigación: 
INSERT INTO especie (id_area, tipo, nombre_cientifico, nombre_vulgar, cantidad) 
VALUES (16, 'Vegetales', 'Ocotea bullata', 'Laurel', 482); 
Obtenemos el id de la especie agregada anteriormente: 
SET @id_especie = LAST_INSERT_ID(); 
Insertamos la relación entre el proyecto, investigador y la especie: 
INSERT INTO investigacion (id_proyecto, id_investigador, id_especie) VALUES (@id_proyecto, @id_investigador, @id_especie); 
Confirmamos la transacción: 
COMMIT; 
En caso de error deshacemos los cambios realizados: 
ROLLBACK;
45 
Funcion 
Es un objeto que se crea con la sentencia CREATE FUNCTION y se invoca con la sentencia SELECT o dentro de una expresión. Una función puede tener cero o muchos parámetros de entrada y siempre devuelve un valor, asociado al nombre de la función. 
1. Funcion: superficie_total_parque 
a. Descripción: Esta función calcula y devuelve el valor total de la superficie de un parque natural, basándose en la suma de las extensiones de todas las áreas asociadas al p_id_parque proporcionado como parámetro. 
b. Sintaxis: 
delimiter // 
create function superficie_total_parque (p_id_parque int) returns decimal(10,2) DETERMINISTIC 
begin 
declare v_superficie_total decimal(10,2); 
select sum(extension) into v_superficie_total 
from area 
where id_parque = p_id_parque; 
return v_superficie_total; 
end // 
delimiter ; 
c. Parámetros: p_id_parque int 
d. Retorno: La funcion retorna el valor de la superficie total del parque en un decimal(10,2). 
e. Ejemplo de implementación: 
select superficie_total_parque(1) as 
superficie_total_parque_1; 
Procedimientos 
Se han desarrollado una serie de procedimientos destinados a facilitar al usuario la inserción de datos en diversas tablas, asegurando así la integridad y consistencia de la base de datos mediante el mantenimiento adecuado de las relaciones entre ellas. 
1. Procedimiento: añadir_entidad 
a. Descripción: Este procedimiento se creó con el fin de que se pueda mantener un buen registro en la tabla de entidades asegurándose de cumplir con el tipo de dato.
46 
b. Sintaxis: 
DELIMITER // 
create procedure añadir_entidad (e_nombre VARCHAR(100)) begin 
insert into entidad(nombre) 
values (e_nombre); 
end // 
DELIMITER ; 
c. Parámetros: e_nombre varchar(100) 
d. Retorno: El procedimiento va a retornar un insert hacia la tabla de entidad e. Ejemplo de implementación: 
call añadir_entidad('Ministerio de educacion Ambiental'); 
2. Procedimiento: actualizar_entidad 
a. Descripción: Este procedimiento se ha creado con el propósito de permitir la actualización del nombre de una entidad, asegurando que la entidad que se desea modificar exista mediante la validación del ID proporcionado. 
b. Sintaxis: 
delimiter // 
create Procedure actualizar_entidad(e_id_entidad INT, e_nombre VARCHAR(100)) 
begin 
if (select COUNT(*) from entidad where id_entidad = 
e_id_entidad) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Entidad no existe'; 
else 
update entidad 
set nombre = e_nombre 
where id_entidad = e_id_entidad; 
end if; 
end // 
delimiter ; 
c. Parámetros: e_id_entidad int, e_nombre varchar(100) 
d. Retorno: El procedimiento va a retornar un UPDATE hacia la tabla entidad e. Ejemplo de implementación: 
call actualizar_entidad(1, 'Ministerio de analisis 
hambiental');
47 
3. Procedimiento: añadir_departamento 
a. Descripción: Este procedimiento está diseñado para realizar una inserción en la tabla `departamento`, asegurando que se mantenga la integridad de la relación con la tabla `entidad` y que se preserve la estructura definida. 
b. Sintaxis: 
delimiter // 
create procedure añadir_departamento(d_id_entidad int, d_nombre VARCHAR(100), d_capital VARCHAR(100)) 
begin 
if (select count(*) from entidad where id_entidad = 
d_id_entidad) = 0 then 
signal sqlstate '45000' set MESSAGE_TEXT = 'Entidad no encontrada'; 
else 
insert into departamento(id_entidad, nombre, capital) 
value (d_id_entidad, d_nombre, d_capital); 
end if; 
end // 
delimiter ; 
c. Parámetros: d_id_entidad int, d_nombre varchar(100), d_capital varchar(100). d. Retorno: El procedimiento va a retornar un INSERT hacia la tabla departamento. 
e. Ejemplo de implementación: 
call añadir_departamento(1, 'Santander', 'Bucaramanga'); 
4. Procedimiento: actualizar_departamento 
a. Descripción: Este procedimiento permite actualizar o editar un registro en la tabla `departamento` a través de su ID, asegurando la correcta mantenimiento de las relaciones con otras tablas involucradas. 
b. Sintaxis: 
delimiter // 
create procedure actualizar_departamento(d_id_departamento int, d_id_entidad int, d_nombre VARCHAR(100), d_capital varchar(100)) 
begin 
if (select count(*) from departamento where id_departamento = d_id_departamento) = 0 THEN
48 
signal sqlstate '45000' set MESSAGE_TEXT = 
'Depastamento no existente'; 
elseif (select count(*) from entidad where id_entidad = d_id_entidad) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Entidad no encontrada'; 
else 
update departamento 
set id_entidad = d_id_entidad, nombre = d_nombre, 
capital = d_capital 
where id_departamento = d_id_departamento; 
end if; 
end // 
DELIMITER ; 
c. Parámetros: d_id_departamento int, d_id_entidad int, d_nombre VARCHAR(100), d_capital varchar(100). 
d. Retorno: El procedimiento va a retornar un UPDATE hacia la tabla departamento. 
e. Ejemplo de implementación: 
call actualizar_departamento(1, 1, 'Cundinamarca', 'Bogota'); 
5. Procedimiento: añadir_parque 
a. Descripción: Este procedimiento ayudará al usuario a realizar el INSERT a la tabla ‘parque’ cumpliendo correctamente con la relación correspondiente con la tabla de ‘Entidad’. 
b. Sintaxis: 
delimiter // 
create procedure añadir_parque (p_nombre VARCHAR(100), p_fecha_declaracion date, p_superficie decimal(10,2), 
p_N_de_entradas int(3), p_id_entidad int) 
begin 
if (select count(*) from entidad where id_entidad = 
p_id_entidad) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Entidad no encontrada'; 
else 
insert into parque(nombre, fecha_declaracion, 
superficie, N_de_entradas, id_entidad)
49 
value (p_nombre, p_fecha_declaracion, p_superficie, 
p_N_de_entradas, p_id_entidad); 
end if; 
end // 
delimiter ; 
c. Parámetros: p_nombre VARCHAR(100), p_fecha_declaracion date, p_superficie decimal(10,2), p_N_de_entradas int(3), p_id_entidad int. 
d. Retorno: El procedimiento va a retornar un INSERT hacia la tabla parque. e. Ejemplo de implementación: 
call añadir_parque('Parque Nacional Tayrona', '2024-07-15', 2500.00, 500, 1); 
6. Procedimiento: actualizar_parque 
a. Descripción: Este procedimiento cumple con la función de permitir al usuario actualizar en la tabla del parque según el ID y hacer cumplir las relaciones con las que cuenta la tabla parque. 
b. Sintaxis: 
delimiter // 
create procedure actualizar_parque(p_id_parque int, p_nombre VARCHAR(100), p_fecha_declaracion date, p_superficie 
decimal(10,2), p_N_entradas int(3), p_id_entidad int) 
begin 
if (select count(*) from parque where id_parque = 
p_id_parque) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Parque no 
existente'; 
elseif (select count(*) from entidad where id_entidad = p_id_entidad) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Entidad no encontrada'; 
else 
update parque 
set nombre = p_nombre, fecha_declaracion = 
p_fecha_declaracion, superficie = p_superficie, N_de_entradas = p_N_entradas, id_entidad = p_id_entidad 
where id_parque = p_id_parque; 
end if; 
end // 
delimiter ;
50 
c. Parámetros: p_id_parque int, p_nombre VARCHAR(100), p_fecha_declaracion date, p_superficie decimal(10,2), p_N_entradas int(3), p_id_entidad int. d. Retorno: El procedimiento va a retornar un UPDATE hacia la tabla parque. e. Ejemplo de implementación: 
call actualizar_parque(1, 'Parque Nacional Natural Tayrona', '2024-07-15', 2500.00, 500, 1); 
7. Procedimiento:: añadir_parquedepartamento 
a. Descripción: Este procedimiento se realizó con el fin de que el usuario pueda añadir de manera efectiva la relación entre la tabla de departamento y la de parque, teniendo en cuenta que los ID que se inserten existan en estas dos tablas 
b. Sintaxis: 
delimiter // 
create procedure añadir_parquedepartamento(p_id_parque int, p_id_departamento int) 
begin 
if (select count(*) from parque where id_parque = 
p_id_parque) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Parque no 
existente'; 
elseif (select count(*) from departamento where 
id_departamento = p_id_departamento) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 
'Departamento no existente'; 
else 
insert into parque_departamento(id_parque, 
id_departamento) 
value (p_id_parque, p_id_departamento); 
end if; 
end // 
delimiter ; 
c. Parámetros: p_id_parque int, p_id_departamento int. 
d. Retorno: El procedimiento va a retornar un INSERT en la tabla de parque_departamento. 
e. Ejemplo de implementación: 
call añadir_parquedepartamento(1, 2);
51 
8. Procedimiento:: actualizar_parquedepartamento 
a. Descripción: Este procedimiento se encarga de actualizar la tabla ‘parque_departamento’, utilizando ‘id_parque’ e ‘id_departamento’ como referencias para la búsqueda. Además, agrega nuevas relaciones, asegurándose de que sean correctas. 
b. Sintaxis: 
delimiter // 
create procedure actualizar_parquedepartamento(b_id_parque int, b_id_departamento int, a_id_parque int, a_id_departamento int) 
begin 
if (select count(*) from parque where id_parque = 
b_id_parque) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Parque no 
encontrado'; 
elseif (select count(*) from departamento where 
id_departamento = b_id_departamento) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 
'Departamento no encontrado'; 
elseif (select count(*) from parque where id_parque = 
a_id_parque) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Parque 
actualizado no existente'; 
elseif (select count(*) from departamento where 
id_departamento = a_id_departamento) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 
'Departamento actualizado no existente'; 
else 
update parque_departamento 
set id_parque = a_id_parque, id_departamento = 
a_id_departamento 
where id_parque = b_id_parque and id_departamento = 
b_id_departamento; 
end if; 
end // 
delimiter ; 
c. Parámetros: b_id_parque int, b_id_departamento int, a_id_parque int, a_id_departamento int. 
d. Retorno: El procedimiento va a retornar un UPDATE en la tabla parque_departamento.
52 
e. Ejemplo de implementación: 
call actualizar_parquedepartamento(1, 1, 2, 2); 
9. Procedimiento:: añadir_area 
a. Descripción: Este procedimiento añade un área a la tabla mediante un ‘INSERT’, con condicionales que aseguran la existencia de la relación correspondiente en la tabla ‘parque’. 
b. Sintaxis: 
delimiter // 
create procedure añadir_area(a_id_parque int, a_nombre varchar(100), a_extension decimal(10,2)) 
begin 
if (select count(*) from parque where id_parque = 
a_id_parque) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'parque no 
existente'; 
else 
insert into area(id_parque, nombre, extension) 
value (a_id_parque, a_nombre, a_extension); 
end if; 
end // 
delimiter ; 
c. Parámetros: a_id_parque int, a_nombre varchar(100), a_extension decimal(10,2). 
d. Retorno: El procedimiento va a retornar un INSERT a la tabla area. e. Ejemplo de implementación: 
call añadir_area(1, 'Área de Conservación', 500.50); 
10. Procedimiento:: actualizar_area 
a. Descripción: Este procedimiento se implementa para realizar la actualización (‘UPDATE’) de la tabla ‘area’, asegurando que cada ID coincida tanto con el ID que se busca actualizar como con el que tiene la relación con la tabla ‘parque’. b. Sintaxis: 
delimiter // 
create procedure actualizar_area (a_id_area int, a_id_parque int, a_nombre VARCHAR(100), a_extension decimal(10,2)) begin 
if (select count(*) from area where id_area = a_id_area) = 0 THEN
53 
signal sqlstate '45000' set MESSAGE_TEXT = 'area no 
existente'; 
elseif (select count(*) from parque where id_parque = 
a_id_parque) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'parque no 
existente'; 
else 
update area 
set id_parque = a_id_parque, nombre = a_nombre, 
extension = a_extension 
where id_area = a_id_area; 
end if; 
end // 
delimiter ; 
c. Parámetros: a_id_area int, a_id_parque int, a_nombre VARCHAR(100), a_extension decimal(10,2). 
d. Retorno: El procedimiento retorna un UPDATE a la tabla area. 
e. Ejemplo de implementación: 
call actualizar_area(1, 2, 'Área de Recreación', 600.75); 
11. Procedimiento:: añadir_especie 
a. Descripción: Este procedimiento cumple con la función de permitir al usuario realizar el INSERT a la tabla de especie de forma que no pierda la relación con la tabla area. 
b. Sintaxis: 
delimiter // 
create procedure añadir_especie (e_id_area int, e_tipo enum('Vegetales', 'Animales', 'Minerales'), 
e_nombre_cientifico varchar(100), e_nombre_vulgar 
varchar(100), e_cantidad int(10)) 
begin 
if (select count(*) from area where id_area = e_id_area) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'area no 
existente'; 
else 
insert into especie(id_area, tipo, nombre_cientifico, 
nombre_vulgar, cantidad)
54 
value (e_id_area, e_tipo, e_nombre_cientifico, 
e_nombre_vulgar, e_cantidad); 
end if; 
end // 
delimiter ; 
c. Parámetros: e_id_area int, e_tipo enum('Vegetales', 'Animales', 'Minerales'), e_nombre_cientifico varchar(100), e_nombre_vulgar varchar(100), e_cantidad int(10). 
d. Retorno: El procedimiento retorna un INSERT en la tabla especie e. Ejemplo de implementación: 
call añadir_especie(1, 'Animales', 'Panthera onca', 'Jaguar', 10); 
12. Procedimiento:: actualizar_especie 
a. Descripción: Este procedimiento cumple la función de que el usuario pueda realizar un UPDATE (actualizar) en la tabla especie a través de él ID asegurándose de que exista esa especie y la relación con la tabla area sea existente. 
b. Sintaxis: 
delimiter // 
create procedure actualizar_especie (e_id_especie int, e_id_area int, e_tipo enum('Vegetales', 'Animales', 
'Minerales'), e_nombre_cientifico varchar(100), 
e_nombre_vulgar varchar(100), e_cantidad int(10)) 
begin 
if (select count(*) from especie where id_especie = 
e_id_especie) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Especie no existente'; 
elseif (select count(*) from area where id_area = 
e_id_area) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Area no 
existente'; 
else 
update especie 
set id_area = e_id_area, tipo = e_tipo, 
nombre_cientifico = e_nombre_cientifico, nombre_vulgar = e_nombre_vulgar, cantidad = e_cantidad 
where id_especie = e_id_especie;
55 
end if; 
end // 
delimiter ; 
c. Parámetros: e_id_especie int, e_id_area int, e_tipo enum('Vegetales', 'Animales', 'Minerales'), e_nombre_cientifico varchar(100), e_nombre_vulgar varchar(100), e_cantidad int(10). 
d. Retorno: El procedimiento retorna un UPDATE a la tabla especie. e. Ejemplo de implementación: 
call actualizar_especie(1, 2, 'Vegetales', 'Quercus robur', 'Roble', 50); 
13. Procedimiento:: añadir_personal 
a. Descripción: Este procedimiento se creo con el fin de que el usuario pueda realizar un INSERT (añadir) a la tabla ‘personal’, manteniendo con eficiencia la relación con la tabla ‘parque’. 
b. Sintaxis: 
delimiter // 
create procedure añadir_personal(p_id_parque int, p_cedula varchar(20), p_nombre varchar(100), p_direccion varchar(100), p_telefono varchar(20), p_celular varchar(20), p_sueldo decimal(10,2)) 
begin 
if (select count(*) from parque where id_parque = 
p_id_parque) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Parque no 
existente'; 
else 
insert into personal(id_parque, cedula, nombre, 
direccion, telefono, celular, sueldo) 
value (p_id_parque, p_cedula, p_nombre, p_direccion, 
p_telefono, p_celular, p_sueldo); 
end if; 
end // 
delimiter ; 
c. Parámetros: p_id_parque int, p_cedula varchar(20), p_nombre varchar(100), p_direccion varchar(100), p_telefono varchar(20), p_celular varchar(20), p_sueldo decimal(10,2). 
d. Retorno: El procedimiento retorna un INSERT hacia la tabla personal. e. Ejemplo de implementación:
56 
call añadir_personal(1, '123456789', 'Juan Pérez', 'Calle Principal 123', '555-1234', '321-9876543', 2500.00); 
14. Procedimiento:: actualizar_personal 
a. Descripción: Este procedimiento cumple con la función de realizar un UPDATE (actualizar) en la tabla ‘personal’, asegurándose de que el ID que se quiere actualizar exista e igualmente con el ID del parque para que se mantenga la relación. 
b. Sintaxis: 
delimiter // 
create procedure actualizar_personal(p_id_personal int, p_id_parque int, p_cedula varchar(20), p_nombre varchar(100), p_direccion varchar(100), p_telefono varchar(20), celular varchar(20), sueldo decimal(10,2)) 
begin 
if (select count(*) from personal where id_personal = 
p_id_personal) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Personal 
no existente'; 
elseif (select count(*) from parque where id_parque = 
p_id_parque) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Parque no 
existente'; 
else 
update personal 
set id_parque = p_id_parque, cedual = p_cedula, nombre = p_nombre, direccion = p_direccion, telefono = p_telefono, celular = p_celular, sueldo = p_sueldo 
where id_personal = p_id_personal; 
end if; 
end // 
delimiter ; 
c. Parámetros: p_id_personal int, p_id_parque int, p_cedula varchar(20), p_nombre varchar(100), p_direccion varchar(100), p_telefono varchar(20), celular varchar(20), sueldo decimal(10,2). 
d. Retorno: El procedimiento retorna un UPDATE hacia la tabla personal. e. Ejemplo de implementación: 
call actualizar_personal(1, 1, '987654321', 'María García', 'Avenida Principal 456', '555-5678', '321-1234567', 2800.00);
57 
15. Procedimiento:: añadir_personal_gestion 
a. Descripción: Este procedimiento se encarga de realizar la implementación del personal de gestión teniendo en cuenta que el n_entrada que tenga este disponible y dentro del rango del número de entradas del parque. 
b. Sintaxis: 
delimiter // 
create procedure añadir_personal_gestion (p_id_personal int, p_n_entrada int(10)) 
begin 
declare v_id_parque int; 
declare v_N_de_entradas int; 
declare v_error_msg varchar(255); 
-- Obtener los valores de id_parque y N_de_entradas 
select p.id_parque, p.N_de_entradas 
into v_id_parque, v_N_de_entradas 
from personal pe 
join parque p on pe.id_parque = p.id_parque 
where pe.id_personal = p_id_personal; 
-- Verificar si p_n_entrada está dentro del rango 
permitido 
if p_n_entrada < 1 or p_n_entrada > v_N_de_entradas THEN set v_error_msg = CONCAT('El número de entrada debe 
estar dentro del rango de 1 a ', CAST(v_N_de_entradas AS CHAR)); 
signal sqlstate '45000' set MESSAGE_TEXT = 
v_error_msg; 
end if; 
if exists (select 1 from personal_gestion pg where 
pg.id_personal = p_id_personal and pg.n_entrada = p_n_entrada) THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'El número 
de entrada ya está ocupado para este parque'; 
end if; 
insert into personal_gestion(id_personal, n_entrada)
58 
value (p_id_personal, p_n_entrada); 
end // 
delimiter ; 
c. Parámetros: p_id_personal int, p_n_entrada int(10). 
d. Retorno: El procedimiento retorna un INSERT a la tabla personal_gestion. e. Ejemplo de implementación: 
call añadir_personal_gestion(1, 3); 
16. Procedimiento:: actualizar_personal_gestion 
a. Descripción: Este procedimiento permite realizar una actualización de la tabla personal_gestion teniendo en cuenta el ID y se asegura de que el n_entrada este en el rango permitido por el parque y no esté ocupada. 
b. Sintaxis: 
delimiter // 
create procedure actualizar_personal_gestion(p_id_gestion int, p_id_personal int, p_n_entrada int) 
begin 
declare v_id_parque int; 
declare v_N_entradas int; 
declare v_error_msg VARCHAR(225); 
select p.id_parque, p.N_entradas 
into v_id_parque, v_N_entradas 
from personal_gestion pg 
join personal pe on pg.id_personal = pe.id_personal 
join parque p on pe.id_parque = p.id_parque 
where pg.id_gestion = p_id_gestion; 
if p_n_entrada < 1 or p_n_entrada > v_N_entradas THEN 
set v_error_msg = concat('EL número de entrada debe estar dentro del rango de 1 a ', cast(v_N_entradas as char)); signal sqlstate '45000' set MESSAGE_TEXT = v_error_msg; end if; 
if exists (select 1 from personal_gestion pg join personal pe on pg.id_personal = pe.id_personal 
where pe.id_parque = v_id_parque and 
pg.n_entrada = v_N_entradas and pg.id_gestion <> p_id_gestion) THEN
59 
signal sqlstate '45000' set MESSAGE_TEXT = 'El número 
de entradas ya esta ocupado para este parque'; 
end if; 
update personal_gestion 
set id_personal = p_id_personal, n_entrada = p_n_entrada where id_gestion = p_id_gestion; 
end // 
delimiter ; 
c. Parámetros: p_id_gestion int, p_id_personal int, p_n_entrada int. d. Retorno: El procedimiento retorna un UPDATE en la tabla personal_gestion. e. Ejemplo de implementación: 
call actualizar_personal_gestion(1, 2, 4); 
17. Procedimiento:: añadir_personal_vigilancia 
a. Descripción: Este procedimiento cumple con la función de permitir al usuario insertar datos con una estructura concreta en la tabla de personal_vigilacia, teniendo en cuenta que existan las relaciones que se hacen con la tabla personal y area. 
b. Sintaxis: 
delimiter // 
create procedure añadir_personal_vigilancia(p_id_personal int, p_id_area int, p_tipo_vehiculo varchar(100), p_marca_vehiculo varchar(100)) 
begin 
if (select count(*) from personal where id_personal = 
p_id_personal) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Personal 
no existente'; 
elseif (select count(*) from area where id_area = 
p_id_area) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Area no 
existente'; 
else 
insert into personal_vigilancia(id_personal, id_area, 
tipo_vehiculo, marca_vehiculo)
60 
value (p_id_personal, p_id_area, p_tipo_vehiculo, 
p_marca_vehiculo); 
end if; 
end // 
delimiter ; 
c. Parámetros: p_id_personal int, p_id_area int, p_tipo_vehiculo varchar(100), p_marca_vehiculo varchar(100). 
d. Retorno: El procedimiento retorna un INSERT para la tabla personal_vigilancia. 
e. Ejemplo de implementación: 
call añadir_personal_vigilancia(1, 2, 'Moto', 'Honda'); 
18. Procedimiento: actualizar_personal_vigilancia 
a. Descripción: Este procedimiento cumple con la función de realizar una actualización según el ID de personal_vigilancia, asegurándose de que el ID que se quiere editar exista y las diferentes relaciones se cumplan. 
b. Sintaxis: 
delimiter // 
create procedure actualizar_personal_vigilancia 
(p_id_vigilancia int, p_id_personal int, p_id_area int, p_tipo_vehiculo varchar(100), p_marca_vehiculo varchar(100)) begin 
if (select count(*) from personal_vigilancia where 
id_vigilancia = p_id_vigilancia) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Personal 
de vigilancia no existente'; 
elseif (select count(*) from personal where id_personal = p_id_personal) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Personal 
no existente'; 
elseif (select count(*) from area where id_area = 
p_id_area) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Area no 
existente'; 
else 
update personal_vigilancia
61 
set id_personal = p_id_personal, id_area = p_id_area, 
tipo_vehiculo = p_tipo_vehiculo, marca_vehiculo = 
p_marca_vehiculo 
where id_vigilancia = p_id_vigilancia; 
end if; 
end // 
delimiter ; 
c. Parámetros: p_id_vigilancia int, p_id_personal int, p_id_area int, p_tipo_vehiculo varchar(100), p_marca_vehiculo varchar(100). 
d. Retorno: El procedimiento retorna un UPDATE hacia la tabla personal_vigilancia. 
e. Ejemplo de implementación: 
call actualizar_personal_vigilancia(1, 2, 3, 'Carro', 
'Toyota'); 
19.Procedimiento: añadir_personal_conservacion 
a. Descripción: Este procedimiento cumple con la función de poder añadir nuevos datos a la tabla personal_conservacion manteniendo las relaciones con las demás tablas. 
b. Sintaxis: 
delimiter // 
create procedure añadir_personal_conservacion(p_id_personal int, p_id_area int, p_especialidad ENUM('limpieza', 'caminos', 'alojamiento')) 
begin 
if (select count(*) from personal where id_personal = 
p_id_personal) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 
'Personal no existente'; 
elseif (select count(*) from area where id_area = 
p_id_area) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Area no 
existente'; 
else 
insert into personal_conservacion(id_personal, id_area, especialidad) 
value (p_id_personal, p_id_area, p_especialidad); 
end if;
62 
end // 
delimiter ; 
c. Parámetros: p_id_personal int, p_id_area int, p_especialidad ENUM('limpieza', 'caminos', 'alojamiento'). 
d. Retorno: El procedimiento retorna un INSERT para la tabla personal_conservacion. 
e. Ejemplo de implementación: 
call añadir_personal_conservacion(1, 2, 'limpieza'); 
20.Procedimiento: actualizar_personal_conservacion 
a. Descripción: Este procedimiento cuenta con la función de actualizar datos según el ID en la tabla personal_conservacion, asegurándose de mantener cada una de las relaciones con otras tablas. 
b. Sintaxis: 
delimiter // 
create procedure actualizar_personal_conservacion 
(p_id_conservacion int, p_id_personal int, p_id_area int, p_especialidad enum('limpieza', 'caminos', 'alojamientos')) begin 
if (select count(*) from personal_conservacion where 
id_conservacion = p_id_conservacion) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Personal 
de conservacion no existente'; 
elseif (select count(*) from personal where id_personal = p_id_personal) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 
'Personal no existente'; 
elseif (select count(*) from area where id_area = 
p_id_area) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Area no 
existente'; 
else 
update personal_conservacion 
set id_personal = p_id_personal, id_area = p_id_area, 
especialidad = p_especialidad 
where id_conservacion = p_id_conservacion; 
end if; 
end // 
delimiter ;
63 
c. Parámetros: p_id_conservacion int, p_id_personal int, p_id_area int, p_especialidad enum('limpieza', 'caminos', 'alojamientos'). 
d. Retorno: El procedimiento retorna un UPDATE para la tabla personal_conservacion. 
e. Ejemplo de implementación: 
call actualizar_personal_conservacion(1, 2, 3, 'caminos'); 
21.Procedimiento: añadir_personal_investigador 
a. Descripción: Este procedimiento se encarga de permitir al usuario añadir datos estructurados correctamente a la tabla personal_investigador manteniendo correctamente las relaciones con la tabla personal. 
b. Sintaxis: 
delimiter // 
create procedure añadir_personal_investigador(p_id_personal int, p_titulacion varchar(100)) 
begin 
if (select count(*) from personal where id_personal = 
p_id_personal) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Personal 
no existente'; 
else 
insert into personal_investigador( id_personal, 
titulacion) 
value (p_id_personal, p_titulacion); 
end if; 
end // 
delimiter ; 
c. Parámetros: p_id_personal int, p_titulacion varchar(100). 
d. Retorno: El procedimiento retorna un INSERT para la tabla personal_investigador. 
e. Ejemplo de implementación: 
call añadir_personal_investigador(1, 'Doctorado en Biología'); 
22.Procedimiento: actualizar_personal_investigador 
a. Descripción: Este procedimiento se encarga de permitir al usuario actualizar datos según el ID en la tabla personal_investigador asegurándose de que el
64 
personal_investigador que quiere ser editado exista e igual con la relación con la tabla personal. 
b. Sintaxis: 
delimiter // 
create procedure 
actualizar_personal_investigador(p_id_investigador int, p_id_personal int, p_titulacion varchar(100)) 
begin 
if (select count(*) from personal_investigador where 
id_investigador = p_id_investigador) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Personal 
investigador no encontrado'; 
elseif (select count(*) from personal where id_personal = p_id_personal) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Personal 
no existente'; 
else 
update personal_investigador 
set id_personal = p_id_personal, titulacion = p_titulacion where id_investigador = p_id_investigador; 
end if; 
end // 
delimiter ; 
c. Parámetros: p_id_investigador int, p_id_personal int, p_titulacion varchar(100). d. Retorno: El procedimiento retorna un UPDATE para la tabla personal_investigador. 
e. Ejemplo de implementación: 
call actualizar_personal_investigador(1, 2, 'Maestría en Ecología'); 
23.Procedimiento: añadir_proyecto 
a. Descripción: Este procedimiento permite al usuario poder crear nuevos proyectos de una forma estructurada. 
b. Sintaxis: 
delimiter // 
create procedure añadir_proyecto (p_nombre varchar(100), p_presupuesto decimal(10,2), p_fecha_inicio date, p_fecha_fin date)
65 
begin 
insert into proyecto(nombre, presupuesto, fecha_inicio, fecha_fin) 
value (p_nombre, p_presupuesto, p_fecha_inicio, 
p_fecha_fin); 
end // 
delimiter ; 
c. Parámetros: p_nombre varchar(100), p_presupuesto decimal(10,2), p_fecha_inicio date, p_fecha_fin date. 
d. Retorno: El procedimiento retorna un INSERT para la tabla proyecto. e. Ejemplo de implementación: 
call añadir_proyecto('Investigación de Flora y Fauna', 25000.00, '2024-08-01', '2025-01-31'); 
24.Procedimiento: actualizar_proyecto 
a. Descripción: Este procedimiento permite al usuario editar algún proyecto a través de su ID de forma estructurada. 
b. Sintaxis: 
delimiter // 
create procedure actualizar_proyecto(p_id_proyecto int, p_nombre varchar(100), p_presupuesto decimal(10,2), 
p_fecha_inicio date, p_fecha_fin date) 
begin 
if (select count(*) from proyecto where id_proyecto = 
p_id_proyecto) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Proyecto 
no existente'; 
else 
update proyecto 
set nombre = p_nombre, presupuesto = p_presupuesto, 
fecha_inicio = p_fecha_inicio, fecha_fin = p_fecha_fin where id_proyecto = p_id_proyecto; 
end if; 
end // 
delimiter ; 
c. Parámetros: p_id_proyecto int, p_nombre varchar(100), p_presupuesto decimal(10,2), p_fecha_inicio date, p_fecha_fin date.
66 
d. Retorno: El procedimiento retorna un UPDATE en la tabla proyecto. e. Ejemplo de implementación: 
call actualizar_proyecto(1, 'Proyecto de Conservación de Bosques', 35000.00, '2024-09-01', '2025-03-31'); 
25.Procedimiento: relacion_investigacion 
a. Descripción: Este procedimiento permite relacionar la tabla de personal_investigador, proyecto y especies de manera que las relaciones existan y cumplan con la estructura. 
b. Sintaxis: 
delimiter // 
create procedure relacion_investigacion(r_id_proyecto int, r_id_investigador int, r_id_especie int) 
begin 
if (select count(*) from proyecto where id_proyecto = 
r_id_proyecto) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Proyecto 
no existente'; 
elseif (select count(*) from personal_investigador where id_investigador = r_id_investigador) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 
'Investigador no existente'; 
elseif (select count(*) from especie where id_especie = r_id_especie) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Especie no existente'; 
else 
insert into investigacion(id_proyecto, 
id_investigador, id_especie) 
value (r_id_proyecto, r_id_investigador, 
r_id_especie); 
end if; 
end // 
delimiter ; 
c. Parámetros: r_id_proyecto int, r_id_investigador int, r_id_especie int. d. Retorno: El procedimiento retorna un INSERT en la tabla investigacion. e. Ejemplo de implementación: 
call relacion_investigacion(1, 3, 10);
67 
26.Procedimiento: actualizar_investigacion 
a. Descripción: Este procedimiento se realizó para que el usuario editará aquellas relaciones de la tabla investigaciones usando el id_proyecto, id_investigador e id_especie como referencia y asegurándose de que todas las relaciones existan. b. Sintaxis: 
delimiter // 
create procedure actualizar_investigacion(r_id_proyecto int, r_id_investigador int, r_id_especie int, nuevo_id_proyecto int, nuevo_id_investigador int, nuevo_id_especie int) 
begin 
if (select count(*) from proyecto where id_proyecto = 
r_id_proyecto) = 0 then 
signal sqlstate '45000' set message_text = 'proyecto 
no existente'; 
elseif (select count(*) from personal_investigador where id_investigador = r_id_investigador) = 0 then 
signal sqlstate '45000' set message_text = 
'investigador no existente'; 
elseif (select count(*) from especie where id_especie = r_id_especie) = 0 then 
signal sqlstate '45000' set message_text = 'especie no existente'; 
elseif (select count(*) from proyecto where id_proyecto = nuevo_id_proyecto) = 0 then 
signal sqlstate '45000' set message_text = 'nuevo 
proyecto no existente'; 
elseif (select count(*) from personal_investigador where id_investigador = nuevo_id_investigador) = 0 then 
signal sqlstate '45000' set message_text = 'nuevo 
investigador no existente'; 
elseif (select count(*) from especie where id_especie = nuevo_id_especie) = 0 then 
signal sqlstate '45000' set message_text = 'nueva 
especie no existente'; 
else 
update investigacion 
set id_proyecto = nuevo_id_proyecto, 
id_investigador = nuevo_id_investigador, 
id_especie = nuevo_id_especie
68 
where id_proyecto = r_id_proyecto 
and id_investigador = r_id_investigador 
and id_especie = r_id_especie; 
end if; 
end // 
delimiter ; 
c. Parámetros: r_id_proyecto int, r_id_investigador int, r_id_especie int, nuevo_id_proyecto int, nuevo_id_investigador int, nuevo_id_especie int. d. Retorno: El procedimiento retorna un UPDATE en la tabla investigacion e. Ejemplo de implementación: 
call actualizar_investigacion(1, 3, 10, 2, 4, 15); 
27.Procedimiento: añadir_visitante 
a. Descripción: Este procedimiento se realizó con el fin de que el usuario añadiera visitantes con la estructura indicada y manteniendo la relación existente con la tabla personal_gestion. 
b. Sintaxis 
delimiter // 
create procedure añadir_visitante(v_id_personal_gestion int, v_cedula varchar(20), v_nombre varchar(100), v_direccion varchar(100), v_profesion varchar(100)) 
begin 
if (select count(*) from personal_gestion where id_gestion = v_id_personal_gestion) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Personal 
de gestion no existente'; 
else 
insert into visitante(id_personal_gestion, cedula, 
nombre, direccion, profesion) 
value (v_id_personal_gestion, v_cedula, v_nombre, 
v_direccion, v_profesion); 
end if; 
end // 
delimiter ;
69 
c. Parámetros: v_id_personal_gestion int, v_cedula varchar(20), v_nombre varchar(100), v_direccion varchar(100), v_profesion varchar(100). 
d. Retorno: El procedimiento retorna un INSERT en la tabla visitante. e. Ejemplo de implementación: 
call añadir_visitante(1, '1234567890', 'Juan Pérez', 'Calle 123, Ciudad', 'Ingeniero'); 
28.Procedimiento: actualizar_visitante 
a. Descripción: Este procedimiento se realizó con el fin que el usuario realizará actualización según el ID en la tabla de visitantes, asegurándose de que el ID que quiera editar exista y de igual forma la relación. 
b. Sintaxis: 
delimiter // 
create procedure actualizar_visitante(v_id_visitante int, v_id_personal_gestion int, v_cedula varchar(20), v_nombre varchar(100), v_direccion varchar(100), v_profesion 
varchar(100)) 
begin 
if (select count(*) from visitante where id_visitante = v_id_visitante) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Visitante 
no existente'; 
elseif (select count(*) from personal_gestion where 
id_gestion = v_id_personal_gestion) = 0 THEN 
signal sqlstate '45000' set MESSAGE_TEXT = 'Personal 
de gestion no existente'; 
else 
update visitante 
set id_personal_gestion = v_id_personal_gestion, 
cedula = v_cedula, nombre = v_nombre, direccion = v_direccion, profesion = v_profesion 
where id_visitante = v_id_visitante; 
end if; 
end // 
delimiter ; 
c. Parámetros: v_id_visitante int, v_id_personal_gestion int, v_cedula varchar(20), v_nombre varchar(100), v_direccion varchar(100), v_profesion varchar(100). d. Retorno: El procedimiento retorna UPDATE en la tabla visitante. 
e. Ejemplo de implementación:
70 
call actualizar_visitante(1, 2, '9876543210', 'María García', 'Avenida Principal, Ciudad Nueva', 'Abogada'); 
29.Procedimiento: anadir_alojamiento 
a. Descripción: Este procedimiento se realizó con el fin de que el usuario añadiera el alojamiento con la estructura correcta, asegurándose de que no sobrepase la capacidad máxima que tiene cada alojamiento. 
b. Sintaxis: 
delimiter // 
create procedure anadir_alojamiento (p_id_visitante int, p_nombre varchar(100), p_capacidad int, p_categoria 
enum('Cabaña', 'Camping', 'Hotel', 'Hostales'), p_fecha_inicio date, p_fecha_final date) 
begin 
declare v_capacidad_actual int; 
declare v_capacidad_maxima int; 
declare v_error_msg varchar(255); 
select capacidad into v_capacidad_maxima 
from alojamiento 
where nombre = p_nombre 
and categoria = p_categoria 
limit 1; 
select count(*) into v_capacidad_actual 
from alojamiento 
where nombre = p_nombre 
and categoria = p_categoria 
and ((p_fecha_inicio between fecha_inicio and 
fecha_final) 
or (p_fecha_final between fecha_inicio and 
fecha_final) 
or (fecha_inicio between p_fecha_inicio and 
p_fecha_final) 
or (fecha_final between p_fecha_inicio and 
p_fecha_final)); 
if v_capacidad_actual + 1 > v_capacidad_maxima then 
set v_error_msg = 'Capacidad excedida para el 
alojamiento ' || p_nombre || ' en las fechas especificadas';
71 
signal sqlstate '45000' set message_text = 
v_error_msg; 
else 
insert into alojamiento (id_visitante, nombre, 
capacidad, categoria, fecha_inicio, fecha_final) 
values (p_id_visitante, p_nombre, p_capacidad, 
p_categoria, p_fecha_inicio, p_fecha_final); 
end if; 
end // 
delimiter ; 
c. Parámetros: p_id_visitante int, p_nombre varchar(100), p_capacidad int, p_categoria enum('Cabaña', 'Camping', 'Hotel', 'Hostales'), p_fecha_inicio date, p_fecha_final date. 
d. Retorno: El procedimiento retorna un INSERT en la tabla alojamiento. e. Ejemplo de implementación: 
call anadir_alojamiento(1, 'Cabaña A', 4, 'Cabaña', 
'2024-08-01', '2024-08-05'); 
30.Procedimiento: actualizar_alojamiento 
a. Descripción: Este procedimiento se realizó con el fin de que el usuario editará alojamientos según ID y siguiera respetando la capacidad y la disponibilidad que tiene el alojamiento. 
b. Sintaxis: 
delimiter // 
create procedure actualizar_alojamiento (p_id_alojamiento int, p_id_visitante int, p_nombre varchar(100), p_capacidad int, p_categoria enum('Cabaña', 'Camping', 'Hotel', 'Hostales'), p_fecha_inicio date, p_fecha_final date) 
begin 
declare v_capacidad_actual int; 
declare v_capacidad_maxima int; 
declare v_error_msg varchar(255); 
select capacidad into v_capacidad_maxima 
from alojamiento 
where nombre = p_nombre 
and categoria = p_categoria 
limit 1;
72 
select count(*) into v_capacidad_actual 
from alojamiento 
where nombre = p_nombre 
and categoria = p_categoria 
and id_alojamiento <> p_id_alojamiento 
and ((p_fecha_inicio between fecha_inicio and 
fecha_final) 
or (p_fecha_final between fecha_inicio and 
fecha_final) 
or (fecha_inicio between p_fecha_inicio and 
p_fecha_final) 
or (fecha_final between p_fecha_inicio and 
p_fecha_final)); 
if v_capacidad_actual + 1 > v_capacidad_maxima then set v_error_msg = 'Capacidad excedida para el 
alojamiento ' || p_nombre || ' en las fechas especificadas'; signal sqlstate '45000' set message_text = 
v_error_msg; 
else 
update alojamiento 
set id_visitante = p_id_visitante, nombre = p_nombre, capacidad = p_capacidad, categoria = p_categoria, fecha_inicio = p_fecha_inicio, fecha_final = p_fecha_final 
where id_alojamiento = p_id_alojamiento; 
end if; 
end // 
delimiter ; 
c. Parámetros: p_id_alojamiento int, p_id_visitante int, p_nombre varchar(100), p_capacidad int, p_categoria enum('Cabaña', 'Camping', 'Hotel', 'Hostales'), p_fecha_inicio date, p_fecha_final date. 
d. Retorno: El procedimiento retonrna un UPDATE en la tabla de alojamiento. e. Ejemplo de implementación: 
call actualizar_alojamiento(1, 1, 'Camping B', 6, 'Camping', '2024-08-10', '2024-08-15');
73 
Triggers 
Se diseñaron una serie de triggers para mejorar el control del registro de visitantes, garantizando la integridad de los datos y manteniendo un historial de las inserciones y actualizaciones. 
1. Trigger 1: after_visitante_insert 
a. Descripción: Este trigger fue creado con el fin de registrar automáticamente la hora en que se ingresan datos en la tabla visitante. Al duplicar los datos relevantes en la tabla registro_visitante, incluyendo una marca de tiempo (hora_registro), se mantiene un control preciso y detallado del momento en que se realiza cada operación. 
b. Sintaxis: 
delimiter // 
create trigger after_visitante_insert 
after insert on visitante 
for each row 
begin 
insert into registro_visitante (id_visitante, 
id_personal_gestion, cedula, nombre, direccion, profesion) value (new.id_visitante, new.id_personal_gestion, 
new.cedula, new.nombre, new.direccion, new.profesion); 
end // 
delimiter ; 
c. Parámetros: after_visitante_insert, after insert on visitante, for each row. d. Retorno: El trigger retorna la hora_registro exacta del registro del visitante. e. Ejemplo de implementación: 
INSERT INTO visitante (id_personal_gestion, cedula, nombre, direccion, profesion) 
VALUES (1, '1234567890', 'Juan Perez', 'Calle Falsa 123', 'Ingeniero'); 
SELECT * FROM registro_visitante; 
2. Trigger 1: after_visitante_update 
a. Descripción: Este trigger fue creado con el fin de registrar automáticamente la hora en que se actualizan datos en la tabla visitante. Al duplicar los datos relevantes en la tabla registro_visitante, incluyendo una marca de tiempo (hora_registro). 
b. Sintaxis: 
delimiter //
74 
create trigger after_visitante_update 
after update on visitante 
for each row 
begin 
insert into registro_visitante (id_visitante, 
id_personal_gestion, cedula, nombre, direccion, profesion) value (new.id_visitante, new.id_personal_gestion, 
new.cedula, new.nombre, new.direccion, new.profesion); 
end // 
delimiter ; 
c. Parámetros: after_visitante_update, after update on visitante, for each row. d. Retorno: El trigger retorna la hora_registro cada vez que se actualice el dato de la tabla visitantes. 
e. Ejemplo de implementación: 
UPDATE visitante 
SET nombre = 'Juan P. Perez', direccion = 'Avenida Siempre Viva 742', profesion = 'Arquitecto' 
WHERE id_visitante = 1; 
SELECT * FROM registro_visitante; 
Evento 
El siguiente evento está diseñado para proporcionar una actualización automática del sueldo de los empleados. 
1. Evento 1: aumentar_sueldo_anual 
a. Descripción: El evento se diseñó para que anualmente el sueldo de los empleados se aumente en un 10% siendo así un proceso automatizado. b. Sintaxis: 
delimiter // 
create event if not exists aumentar_sueldo_anual 
on SCHEDULE every 1 year 
starts (CURRENT_TIMESTAMP) 
do 
begin 
update personal 
set sueldo = sueldo * 1.10; 
end // 
delimiter ;
75 
c. Parámetros: aumentar_sueldo_anual on SCHEDULE every 1 year starts d. Retorno: El evento retorna un proceso de multiplicación para el atributo sueldo. e. Ejemplo de implementación: Como es un proceso automatizado no contiene 
una implementación sino que cada año el sueldo de todos los empleados aumentará un 10%. 
select * from personal; 
Usuarios y Acceso 
Estos usuarios y sus permisos han sido diseñados para gestionar las diferentes responsabilidades dentro de un sistema de administración de parques naturales. A continuación se presenta una tabla organizada con los usuarios, sus accesos, comandos permitidos, y funciones/procedimientos a los que tienen acceso.
Usuario 
Acceso 
Descripción 
Comandos 
Procedimientos
Entidad_Responsable 
% 
Usuario creado para la gestión de entidades 
responsables 
de parques 
naturales.
EXECUTE, SELECT.
añadir_entidad(), 
actualizar_entidad(), ver_entidad(), 
añadir_departamento(), actualizar_departament o(), 
ver_departamento(), añadir_parque(), 
actualizar_parque(), ver_parque(), 
añadir_parquedeparta mento(), 
actualizar_parquedepar tamento(), 
ver_relacion_parque_d epartamento(), 
añadir_area(), 
actualizar_area(), 
ver_area(), 
añadir_especie(), 
actualizar_especie(), ver_especies(), 
añadir_personal(), 
actualizar_personal(), ver_personal(), 
añadir_personal_gestio n(), 
actualizar_personal_ge stion(),



76








ver_personal_gestion(), añadir_personal_vigilan cia(), 
actualizar_personal_vig ilancia(), 
ver_personal_vigilancia (), 
añadir_personal_conse rvacion(), 
actualizar_personal_co nservacion(), 
ver_personal_conserva cion(), 
añadir_personal_investi gador(), 
actualizar_personal_inv estigador(), 
ver_personal_investiga dor()
Personal_gestion 
% 
Usuario creado para la gestión del personal 
responsable de la 
administración de visitantes y alojamientos en los parques.
EXECUTE, SELECT.
ver_personal_gestion(), añadir_visitante(), 
actualizar_visitante(), ver_visitantes(), 
anadir_alojamiento(), actualizar_alojamiento() , ver_alojamientos().
Personal_vigilancia 
% 
Usuario creado para el personal encargado de la vigilancia y 
seguridad de 
los parques 
naturales.
SELECT. 
personal_vigilancia(), personal(), area(), 
ver_personal_vigilancia ().
Personal_conservacion 
% 
Usuario creado para el personal encargado de la 
conservación y mantenimiento de las áreas 
naturales.
SELECT 
personal_conservacion( ), personal(), area(), ver_personal_conserva cion().
Personal_investigador 
% 
Usuario creado para el personal encargado de realizar
EXECUTE, SELECT.
personal_investigador() , personal(), proyecto(), añadir_proyecto(), 
actualizar_proyecto(),



77 




investigaciones y proyectos 
científicos 
dentro de los 
parques 
naturales. 


relacion_investigacion() ,
actualizar_investigacion ()
visitante
%
Usuariocreado paravisitantes de losparques naturales, 
permitiéndoles ver información relevantesin 
modificarla. 
SELECT
ver_visitantes(), 
ver_alojamientos()



78 
Referencias 
(N.d.-a). Wikimedia.org. Retrieved July 05, 2024, from 
https://upload.wikimedia.org/wikipedia/commons/9/9c/Mapa_de_Colombia_( departamentos).svg 
(N.d.-b). Amazon.com. Retrieved July 06, 2024, from 
https://aws.amazon.com/es/compare/the-difference-between-logical-and-physic al-data-model/ 
(N.d.-c). Uji.Es. Retrieved July 08, 2024, from 
https://www3.uji.es/~mmarques/f47/teoria/tema6.pdf 
Es, C. (2023, July 28). Los 10 parques naturales más importantes de Colombia. Civitatis Magazine; Civitatis. 
https://www.civitatis.com/blog/parques-naturales-importantes-colombia/ 
(N.d.). Gov.Co. Retrieved July 09, 2024, from 
https://old.parquesnacionales.gov.co/portal/es/parques-nacionales-naturales/
