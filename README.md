                                         Proyecto MongoDB


                                                        

                                 Gerson Steven Chaparro Martinez
                                                 
                                   Harley Yefrey Cabrales Vargas
                                                  
                                                  
                                               S1  
                                                               
                                                               
                                   Pedro Felipe Gómez Bonilla
                                                   
                                                   
                                 Campuslands Artemis - Ruta Node
                                               
                                     Bucaramanga, Santander 
                         
                                       


- [Introducción](#introducción)
- [Caso de Estudio](#caso-de-estudio)
  - [1. Estructura del Sistema](#1-estructura-del-sistema)
  - [2. Pacientes](#2-pacientes)
  - [3. Médicos y Personal](#3-médicos-y-personal)
  - [4. Tratamientos y Medicamentos](#4-tratamientos-y-medicamentos)
  - [5. Visitas Médicas](#5-visitas-médicas)
- [Instalación General](#instalación-general)
- [Planificación](#planificación)
- [Ejecución](#ejecución)
  - [Construcción del Modelo Conceptual](#construcción-del-modelo-conceptual)
- [Descripción](#descripción)
  - [Las Entidades y Atributos](#las-entidades-y-atributos)
  - [Relaciones y Cardinalidades](#relaciones-y-cardinalidades)
  - [Modelo conceptual](#modelo-conceptual)
- [Construccion del modelo logico](#construccion-del-modelo-logico)
  - [Las Entidades y Atributos](#las-entidades-y-atributos-1)
  - [Relaciones y Cardinalidades](#relaciones-y-cardinalidades-1)
  - [Construcción del Modelo Físico](#construcción-del-modelo-físico)
  - [Descripción](#descripción-1)
  - [Colecciones](#colecciones)
- [Construcción del Diagrama UML](#construcción-del-diagrama-uml)
  - [Descripción](#descripción-2)
  - [Grafica](#grafica)
- [Descripción del sistema](#descripción-del-sistema)
  - [Inserción de datos en la colección directores](#inserción-de-datos-en-la-colección-directores)
  - [Inserción de datos en la colección medicos](#inserción-de-datos-en-la-colección-medicos)
  - [Inserción de datos en la colección enfermeros](#inserción-de-datos-en-la-colección-enfermeros)
  - [Inserción de datos en la colección administrativos](#inserción-de-datos-en-la-colección-administrativos)
  - [Inserción de datos en la colección mantenimiento](#inserción-de-datos-en-la-colección-mantenimiento)
  - [Inserción de datos en la colección hospitales](#inserción-de-datos-en-la-colección-hospitales)
  - [Inserción de datos en la colección visitas](#inserción-de-datos-en-la-colección-visitas)
  - [Inserción de datos en la colección tratamientos](#inserción-de-datos-en-la-colección-tratamientos)
  - [Inserción de datos en la colección medicamentos](#inserción-de-datos-en-la-colección-medicamentos)
  - [Inserción de datos en la colección historial](#inserción-de-datos-en-la-colección-historial)
  - [Inserción de datos en la colección pacientes](#inserción-de-datos-en-la-colección-pacientes)
  - [Inserción de datos en la colección seguros](#inserción-de-datos-en-la-colección-seguros)
  - [Consultas de Datos](#consultas-de-datos)
- [Consulta #1](#consulta-1)
  - [Descripción](#descripción-3)
- [Consulta #2](#consulta-2)
  - [Descripcion](#descripcion)
- [Consulta #3](#consulta-3)
  - [Descripcion](#descripcion-1)
- [Consulta #4](#consulta-4)
  - [Descripcion](#descripcion-2)
- [Consulta #5](#consulta-5)
  - [Descripcion](#descripcion-3)
- [Consulta #6](#consulta-6)
  - [Descripcion](#descripcion-4)
- [Consulta 7](#consulta-7)
  - [Descripcion](#descripcion-5)
- [Consulta #8](#consulta-8)
  - [Descripcion](#descripcion-6)
- [Consulta #9](#consulta-9)
  - [Descripcion](#descripcion-7)
- [Consulta #10](#consulta-10)
  - [Descripcion](#descripcion-8)
  - [Funcion #1](#funcion-1)
  - [Descripcion](#descripcion-9)
- [Funcion #2](#funcion-2)
- [Descripcion](#descripcion-10)
  - [Usuarios y Acceso](#usuarios-y-acceso)
- [1. Crear usuarios sin funciones (previo a activar autenticación)](#1-crear-usuarios-sin-funciones-previo-a-activar-autenticación)
- [2. Activar la autenticación de usuarios](#2-activar-la-autenticación-de-usuarios)
- [3. Acceder a MongoDB con autenticación](#3-acceder-a-mongodb-con-autenticación)





##                                                                                                Introducción

Este documento servirá como una guía detallada del proceso completo de diseño, estructuración e implementación de una base de datos para un sistema de salud. El objetivo principal es gestionar eficazmente los datos e información generados por los directores, médicos, enfermeros, tratamientos, medicamentos, areas , hospitales, vistas, tratamientos, medicamentos, historial, paciente y seguros  pertinentes.  
Inicialmente, se analizará el caso de estudio junto con sus requerimientos específicos. A partir de esta investigación, se procederá a desarrollar un modelo conceptual detallado donde se identificarán las entidades principales, sus atributos y las relaciones entre ellas. Este paso determina las bases para comprender la estructura esencial de la gestión del sistema hospitalario  
A continuación, se realizará la conversión del modelo conceptual al modelo lógico. Este último ofrece una representación más precisa de cómo se organizará la información, facilitando una comprensión clara de la base de datos en desarrollo. .  
Posteriormente, se llevará a cabo la conversión del modelo lógico al modelo físico, el cual define la implementación real de entidades, atributos y relaciones, incorporando detalles técnicos como los tipos de datos adecuados para cada elemento.

Finalmente, se detallarán algunos procedimientos, funciones, consultas, triggers y eventos que complementarán la funcionalidad del sistema de información desarrollado, asegurando así su eficiencia y utilidad para el Sistema Hospitalario.  
Con estos pasos y elementos, se garantiza una guía completa y efectiva para el diseño y desarrollo de la base de datos necesaria para la gestión eficiente del Sistema Hospitalario.  

## Caso de Estudio

El Sistema Hospitalario nos ha pedido crear un diseño inicial de un Software que permita gestionar los datos e información acerca  pacientes, médicos, tratamientos, medicamentos, visitas médicas, historiales clínicos, áreas especializadas y personal administrativo, por lo que comenzamos estructurando los requerimientos dados:

### 1. Estructura del Sistema

- Un hospital puede tener múltiples áreas especializadas (Cardiología, Neurología, etc.).  
- Cada hospital tiene un director general, pero un director puede supervisar varios hospitales.  
- Cada hospital tiene un conjunto de médicos, enfermeras y personal administrativo.  
- Los hospitales deben contar con un historial detallado de pacientes y tratamientos realizados.  

### 2. Pacientes

- Los pacientes se identifican por su número de historia clínica, nombre, dirección, teléfono, correo electrónico y seguros médicos.  
- Los historiales médicos incluyen diagnósticos, tratamientos realizados y resultados obtenidos.  

### 3. Médicos y Personal

- Los médicos se identifican por su número de colegiatura, nombre, especialidad, teléfono, correo electrónico y salario.  
- Se definen los siguientes tipos de personal:  
  - **001: Director General:** Gestión general del hospital.  
  - **002: Médico Especialista:** Atiende pacientes y realiza diagnósticos.  
  - **003: Enfermero/a:** Asiste a médicos y cuida a los pacientes.  
  - **004: Personal Administrativo:** Gestión de recursos y logística.  
  - **005: Personal de Mantenimiento:** Mantenimiento y limpieza de las instalaciones.  

### 4. Tratamientos y Medicamentos

- Los tratamientos se identifican por su nombre, descripción, área médica relacionada y costo.  
- Los medicamentos se almacenan por nombre, fabricante, tipo, y disponibilidad en inventario.  

### 5. Visitas Médicas

- Las visitas médicas se registran con fecha, hora, médico asignado, paciente atendido y diagnóstico.  
- Los pacientes pueden tener múltiples visitas médicas a lo largo del tiempo.  

Con base en la información anterior, se procederá a crear una base de datos en MongoDB con el objetivo de agrupar y relacionar los datos de los hospitales , así como la información y gestión de cada uno de sus requerimientos.  

## Instalación General

Los archivos relacionados con la BBDD de los hospitales, se encuentran en la plataforma <Githud>  estos archivos se encuentran en formato Js y se dividen en 3 partes:

❖ estructura de la BBDD.(ddl.js) : Este archivo contiene el script para crear la base de datos y definir las colecciones correspondientes.  
❖ Inserciones(dml.js) : Este archivo contiene ejemplos de datos para gestionar el sistema hospitalario, facilitando la inserción inicial de información.  

1. procedemos a bajar el repositorio en tu terminal 
```bash
git clone https://github.com/harleyyefreycabralesvargas/Proyecto_MongoDB_CabralesHarley_ChaparroGerson
```
2. abrir la terminal desde la carpeta donde se bajo el archivo y ejecutar lossiguentes comandos
```bash

mongosh < ddl.js 
```
luego de ejecutar el comando seguimos con este 
```bash
mongosh < dml.js

```
ya con estos comandos terminaos la estructura de la data con la inserciones


## Planificación
## requisitos del sistema
1. tener instalado mongosh en el sistema

## Ejecución

Una vez se analizó la información requerida por el Sistema Hospitalario, se inició la creación del modelo conceptual. Este modelo proporciona una descripción de alto nivel de las necesidades de información que están detrás del diseño de una base de datos. Representa los conceptos principales de la base de datos y las relaciones entre ellos.

### Construcción del Modelo Conceptual

Se diseñó el modelo conceptual identificando cada una de las entidades, sus atributos y las relaciones entre ellas. Este modelo conceptual proporciona una visión clara y estructurada de cómo se organizarán y conectarán los diferentes elementos de la base de datos.  
Para entender el diseño del modelo conceptual, se debe tener en cuenta los elementos básicos de un modelo original.  

## Descripción

### Las Entidades y Atributos

1. directores  
❖ id_directores  
❖ nombres  
❖ salario  
❖ tipo  

2. medicina  
❖ id_medicos  
❖ nombre  
❖ salario  
❖ tipo  

3. enfermeros  
❖ id_enfermeros  
❖ nombre  
❖ salario  
❖ tipo  

4. adminitrativos  
❖ id_administrativos  
❖ nombre  
❖ salario  
❖ tipo  

5. Mantenimiento  
❖ id_mantenimiento  
❖ nombre  
❖ salario  
❖ tipo  

6. Areas  
❖ id_areas  
❖ nombre  
❖ descripción  

7. hospital  
❖ id_hospital  
❖ nombre  
❖ direccion  
❖ telefono  
❖ id_director  
❖ id_medicos  
❖ id_enfermeros  
❖ id_administrativos  
❖ id_mantenimiento  
❖ id_areas  

8. visita  
❖ id_visita  
❖ id_hospital  
❖ id_medico  
❖ id_enfermeros  
❖ observaciones  
❖ fecha  

9. tratamiento  
❖ id_tratamiento  
❖ id_medicamentos  
❖ id_historial  
❖ id_visita
❖ nombre
❖ valoracion
❖ fecha  

10. medicamento  
❖ id_medicamentos  
❖ nombre  
❖ inventario  
❖ descripcion  

11. historial  
❖ id_historial  
❖ id_paciente  
❖ id_tratamiento  

12. paciente  
❖ id_paciente  
❖ nombre  
❖ edad  
❖ direccion  
❖ id_seguro  
❖ telefono  

13. seguro  
❖ id_seguro  
❖ nombre  
❖ telefono


 

## Modelo conceptual

![Modelo conceptual](storage/modeloConceptual.webp)

## Construccion del modelo logico

Se ha diseñado el modelo lógico teniendo en cuenta el modelo conceptual, incorporando
detalles más específicos como las características de cada atributo, incluidas las claves
primarias, foráneas y las relaciones de cardinalidad.

### Las Entidades y Atributos

1. directores  
❖ id_directores INT 
❖ nombres  STRING
❖ salario  INT
❖ tipo  STRING

2. medicos 
❖ id_medicos  INT
❖ nombre   STRING
❖ salario  INT
❖ tipo  STRING

3. enfermeros  
❖ id_enfermeros INT  
❖ nombre  STRING
❖ salario  INT
❖ tipo  STRING

4. adminitrativos  
❖ id_administrativos  INT 
❖ nombre  STRING
❖ salario  INT
❖ tipo  STRING

5. Mantenimiento  
❖ id_mantenimiento  INT  
❖ nombre  STRING
❖ salario  INT
❖ tipo  STRING

6. Areas  
❖ id_areas INT  
❖ nombre  STRING
❖ descripción  STRING

7. hospital  
❖ id_hospital  INT
❖ nombre  STRING
❖ direccion  STRING
❖ telefono  STRING
❖ id_director  INT
❖ id_medicos  INT[]
❖ id_enfermeros  INT[]
❖ id_administrativos INT[] 
❖ id_mantenimiento  INT[]
❖ id_areas  INT[]

8. visita  
❖ id_visita  INT
❖ id_hospital  INT
❖ id_medico  INT
❖ id_enfermeros INT[] 
❖ observaciones  STRING
❖ fecha  DATE

9. tratamiento  
❖ id_tratamiento INT  
❖ id_medicamentos  INT[]
❖ id_historial  INT
❖ id_visita INT
❖ nombre STRING
❖ valoracion STRING
❖ fecha  DATE

11. medicamento  
❖ id_medicamentos INT 
❖ nombre  STRING
❖ inventario  INT
❖ descripcion  STRING

12. historial  
❖ id_historial  INT
❖ id_paciente  INT
❖ id_tratamiento  INT

13. paciente  
❖ id_paciente  INT
❖ nombre  STRING
❖ edad  INT
❖ direccion STRING 
❖ id_seguro  INT
❖ telefono  STRING

14. seguro  
❖ id_seguro  INT
❖ nombre  STRING
❖ telefono  STRING

### Relaciones y Cardinalidades
Se realizó las relaciones y cardinalidades respectivas del modelo lógico con sus entidades para
tener mejor visualización de la base de datos:
1. director - hospitales:
❖ Un hospital puede tener un solo director y un director puede tener
un solohospital.1-1 (uno a uno).
```
--|------------------|--
```
2. medicos - hospitales:
❖ Un hospital puede tener varios medicos y varios medicos tienen un
mismo hospital.N-1 (muchos a uno).

```
--|
--|------------------|--
--|
```
3. enfermeros - hospitales:
❖ Un hospital puede tener varios enfermos y varios enfermeros tienen un
mismo hospital.N-1 (muchos a uno).

```
--|
--|------------------|--
--|
```

4. administrativos - hospitales:
❖ Un hospital puede tener varios administrativos y varios administrativos tienen un mismo hospital.N-1 (muchos a uno).

```
--|
--|------------------|--
--|
```
5. mantenimiento - hospitales:
❖ Un hospital puede tener varios de mantenimiento y varios de mantenimiento tienen un mismo hospital.N-1 (muchos a uno).

```
--|
--|------------------|--
--|
```
6. Area - hospitales:
❖ Un hospital puede tener varias areas y varias areas tienen un
mismo hospital.N-1 (muchos a uno).
```
--|
--|------------------|--
--|
```
7. hospital - visita:
❖ Un hospital puede tener varias vistas y varias visitas tienen un
mismo hospital.N-1 (muchos a unos).

```
                     |--
--|------------------|--
                     |--
```

8. visita - tratamientos:
❖ Una visita puede tener un tratamiento y un tratamiento tienen una visita.1-1 (uno a uno).

```

--|------------------|--

```


9. tratamiento - medicamentos:
❖ Un tratamiento puede tener un varios medicamentos y varios  mediamentos tiene un solo tratamiento .1-N (unos a muchos).

```
                     |--
--|------------------|--
                     |--
```

10. tratamiento - historial:

❖ Muchos tratamientos pueden tener un solo historial y un solo historial puede tener muchos medicamentos.N-1 (muchos a unos).

```
--|
--|------------------|--
--|


```

11. historial - pacientes:
❖un historial puede tenre un solo pacientes y un solo pacientes solo tiene un historial.1-1 (uno a uno).

```
--|------------------|--

```
12. paciente - seguros:
❖un pacinte puede tener un solo seguro y un seguro tiene muchos pacientes.1-N (unos a muchos).

```
                     |--
--|------------------|--
                     |--

```




![alt text](storage/modeloLogico.webp)
### Construcción del Modelo Físico
Se diseñó el modelo físico considerando el modelo lógico previamente definido, el cual incluye todas las entidades del sistema, sus atributos y las relaciones entre ellos. Este modelo ha sido adaptado para funcionar en MongoDB, un sistema de base de datos NoSQL orientado a documentos. En lugar de tablas, se utilizan colecciones, y cada registro se almacena como un documento en formato BSON/JSON.

### Descripción
En MongoDB, cada entidad se representa como una colección. Los atributos se definen dentro de cada documento, y se pueden aplicar reglas de validación mediante $jsonSchema para garantizar la estructura y los tipos de datos esperados. Este enfoque proporciona flexibilidad sin sacrificar el control sobre la integridad de los datos.

### Colecciones
Para comenzar a trabajar con la base de datos, se utiliza el siguiente comando:
```js
use SitemaHospitalario;
```
Comenzaremos creando las tablas junto con sus tipos de datos correspondientes. Para esto,
utiliza los siguientes comandos:
1. Creación de la coleccion medicos
```js
db.createCollection("medicos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_medicos", "nombre", "salario", "tipo"],
            properties: {
                id_medicos: { bsonType: "int" },
                nombre: { bsonType: "string" },
                salario: { bsonType: "int" },
                tipo: { bsonType: "string" }
            },
        },
    },
})
```
2. Creación de la coleccion enfermeros
```js
db.createCollection("enfermeros", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_enfermeros", "nombre", "salario", "tipo"],
            properties: {
                id_enfermeros: { bsonType: "int" },
                nombre: { bsonType: "string" },
                salario: { bsonType: "int" },
                tipo: { bsonType: "string" }
            }
        }
    }
});
```
3. Creación de la coleccion administrativos
```js
db.createCollection("administrativos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_administrativos", "nombre", "salario", "tipo"],
            properties: {
                id_administrativos: { bsonType: "int" },
                nombre: { bsonType: "string" },
                salario: { bsonType: "int" },
                tipo: { bsonType: "string" }

            },
        },
    },
})
```
4. Creación de la coleccion directores
```js
db.createCollection("directores", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_directores", "nombre", "salario", "tipo"],
            properties: {
                id_directores: { bsonType: "int" },
                nombre: { bsonType: "string" },
                salario: { bsonType: "int" },
                tipo: { bsonType: "string" }

            },
        },
    },
})
```
5. Creación de la coleccion mantenimiento
```js
db.createCollection("mantenimiento", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_mantenimiento", "nombre", "salario", "tipo"],
            properties: {
                id_mantenimiento: { bsonType: "int" },
                nombre: { bsonType: "string" },
                salario: { bsonType: "int" },
                tipo: { bsonType: "string" }
            },
        },
    },
})
```
6. Creación de la coleccion areas
```js
db.createCollection("areas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_area", "nombre", ],
            properties: {
                id_area: { bsonType: "int" },
                nombre: { bsonType: "string" }
            }
        }
    }
});
```
7. Creación de la coleccion areas
```js
db.createCollection("infraestructura", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "id_infraestructura",
        "id_hospital",
        "id_personas_mantenimiento",
        "nombre_lugar",
        "observacion",
        "estado"
      ],
      properties: {
        id_infraestructura: {
          bsonType: "int"
        },
        id_hospital: {
          bsonType: "int"
        },
        id_personas_mantenimiento: {
            bsonType: "array",
            items: {
                bsonType: "int",
            },
        },
        nombre_lugar: {
          bsonType: "string"
        },
        observacion: {
          bsonType: "string"
        },
        estado: {
          bsonType: "string",
          enum: ["pendiente", "en reparacion", "reparado"]
        }
      }
    }
  }
});
```
8. Creación de la coleccion hospitales
```js
db.createCollection("hospitales", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "id_hospital", "nombre", "direccion", "telefono",
                "id_director", "id_medicos", "id_enfermeros",
                "id_administrativos", "id_mantenimiento", "id_areas"
            ],
            properties: {
                id_hospital: { bsonType: "int" },
                nombre: { bsonType: "string" },
                direccion: { bsonType: "string" },
                telefono: { bsonType: "string" },
                id_director: { bsonType: "int" },
                id_medicos: {
                    bsonType: "array",
                    items: { bsonType: "int" }
                },
                id_enfermeros: {
                    bsonType: "array",
                    items: { bsonType: "int" }
                },
                id_administrativos: {
                    bsonType: "array",
                    items: { bsonType: "int" }
                },
                id_mantenimiento: {
                    bsonType: "array",
                    items: { bsonType: "int" }
                },
                id_areas: {
                    bsonType: "array",
                    items: { bsonType: "int" }
                }
            }
        }
    }
});
```
9. Creación de la coleccion visitas
```js
db.createCollection("visitas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_visita", "id_hospital", "id_medico", "id_enfermeros", "observaciones", "fecha"],
            properties: {
                id_visita: { bsonType: "int" },
                id_hospital: { bsonType: "int" },
                id_medico: { bsonType: "int" },
                id_enfermeros: {
                    bsonType: "array",
                    items: { bsonType: "int" }
                },
                observaciones: { bsonType: "string" },
                fecha: { bsonType: "date" }
            }
        }
    }
});
```
10. Creación de la coleccion meedicamentos
```js
db.createCollection("medicamentos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_medicamento", "nombre", "hospital", "inventario", "descripcion"],
            properties: {
                id_medicamento: { bsonType: "int" },
                nombre: { bsonType: "string" },
                hospital:{bsonType:"int"},
                inventario: { bsonType: "int" },
                descripcion: { bsonType: "string" },
            },
        },
    },
})
```
11. Creación de la coleccion tratamiento
```js
db.createCollection("tratamientos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_tratamiento", "id_medicamentos","nombre","valoracion", "id_historial", "id_visita", "fecha"],
            properties: {
                id_tratamiento: { bsonType: "int" },
                id_medicamentos: {
                    bsonType: "array",
                    items: {
                        bsonType: "int",
                    },
                },
                id_historial: { bsonType: "int" },
                id_visita: { bsonType: "int" },
                nombre: { bsonType: "string" },
                valoracion: { bsonType: "string" },
                fecha: { bsonType: "date" },
            },
        },
    },
})
```
12. Creación de la coleccion historiales
```js
db.createCollection("historiales", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_historial", "id_paciente", "id_tratamiento"],
            properties: {
                id_historial: { bsonType: "int" },
                id_paciente: { bsonType: "int" },
                id_tratamiento: { bsonType: "int" },
            },
        },
    },
})
```
13. Creación de la coleccion pacientes
```js
db.createCollection("pacientes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_pacientes", "nombre", "edad", "direccion", "id_seguro", "telefono"],
            properties: {
                id_pacientes: { bsonType: "int" },
                nombre: { bsonType: "string" },
                edad: { bsonType: "int" },
                direccion: { bsonType: "string" },
                id_seguro: { bsonType: "int" },
                telefono: { bsonType: "string" }
            }
        }
    }
});

```
14. Creación de la coleccion seguros
```js
db.createCollection("seguros", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_seguro", "nombre", "telefono"],
            properties: {
                id_seguro: { bsonType: "int" },
                nombre: { bsonType: "string" },
                telefono: { bsonType: "string" },
            },
        },
    },
})
```
## Construcción del Diagrama UML

Se ha diseñado un diagrama UML tomando como referencia la normalización para entender
mejor los diseños, la arquitectura del código y la implementación propuesta. Este enfoque nos
permitirá tener una visión clara y detallada de cómo se manejarán cada una de las consultas,
funcionalidades y los usuarios en la base de datos. De esta manera, podremos asegurar una
implementación eficiente y coherente con los requisitos del sistema.

### Descripción

El modelo UML ha sido diseñado para representar detalladamente la estructura de cada colección y sus posibles relaciones. Aunque MongoDB no utiliza claves foráneas ni tipos de datos tan estrictos como los sistemas relacionales, el diagrama incluye la representación de los campos clave (como _id o id_xxx), los tipos de datos esperados (como string, int, array, object, bool), así como las referencias entre documentos mediante ObjectId o atributos de relación.

Además, se especifican los campos obligatorios y la estructura general de cada documento, lo cual proporciona una visión clara para la implementación de validaciones con JSON Schema. Este modelo facilita la comprensión técnica del sistema, asegurando que cada colección esté correctamente diseñada para cumplir con los requerimientos del proyecto.

Comenzaremos definiendo las colecciones con sus respectivos campos y validaciones de esquema.

1. Colecccion directores

![alt text](storage/directores.webp)









2. Coleccion medicos

![alt text](storage/medicos.webp)










3. Coleccion enfermeros

![alt text](storage/enfermeros.webp)










4. Coleccion mantenimiento

![alt text](storage/mantenimiento.webp)










5. Coleccion administrativos

![alt text](storage/administrativos.webp)










6. Coleccion areas

![alt text](storage/areas.webp)










7. Coleccion hospitales

![alt text](storage/hospitales.webp)










8. Coleccion visita

![alt text](storage/visita.webp)










9. Coleccion tratamientos

![alt text](storage/tratamientos.webp)










10. Coleccion medicamentos

![alt text](storage/medicamentos.webp)










11. Coleccion historial

![alt text](storage/historial.webp)










12. Coleccion pacientes

![alt text](storage/pacientes.webp) 










13. Coleccion seguro

![alt text](storage/seguro.webp)










### Grafica
```mermaid
erDiagram
INFRAESTRUCTURA {
    INT id_infraestructura    
    INT id_hospital           
    INT id_personas_mantenimiento  
    STRING nombre_lugar
    STRING observacion
    STRING estado             
}

MEDICOS {
        INT id_medicos PK
        STRING nombre
        STRING correo
        STRING telefono
        STRING especialidad
        INT salario
        STRING tipo
    }
DIRECTORES {
        INT id_directores PK
        STRING nombre
        INT salario
        STRING tipo
    }

    ENFERMEROS {
        INT id_enfermeros PK
        STRING nombre
        INT salario
        STRING tipo
    }

    ADMINISTRATIVOS {
        INT id_administrativos PK
        STRING nombre
        INT salario
        STRING tipo
    }
MANTENIMIENTO {
        INT id_mantenimiento PK
        STRING nombre
        INT salario
        STRING tipo
    }

    AREAS {
        INT id_area PK
        STRING nombre
        STRING descripcion
    }

    HOSPITAL {
        INT id_hospital PK
        STRING nombre
        STRING direccion
        STRING telefono
        INT id_director FK
        INT[] id_medicos FK
        INT[] id_enfermeros FK
        INT[] id_administrativos FK
        INT[] id_mantenimiento FK
        INT[] id_areas FK
    }

    VISITA {
        INT id_visita PK
        INT id_hospital FK
        INT id_medico FK
        INT[] id_enfermera FK
        STRING observaciones
        DATE fecha
    }

    TRATAMIENTOS {
        INT id_tratamiento PK
        INT[] id_medicamentos FK
        INT id_historial FK
        INT id_visita FK
        INT[] areas
        INT costo
        STRING nombre
        STRING valoracion
        DATE fecha
    }
MEDICAMENTOS {
        INT id_medicamentos PK
        STRING nombre
        INT inventario
        STRING descripcion
        STRING fabricante
        STRING tipo

    }

    HISTORIAL {
        INT id_historial PK
        INT id_paciente FK
        INT id_tratamiento FK
    }

    PACIENTES {
        INT id_pacientes PK
        STRING nombre
        INT edad
        STRING direccion
        STRING correo
        INT id_seguro FK
        STRING telefono
    }

    SEGURO {
        INT id_seguro PK
        STRING nombre
        STRING telefono
    }
%% Relaciones
    HOSPITAL ||--|| DIRECTORES : tiene
    HOSPITAL ||--|| INFRAESTRUCTURA : tiene
    HOSPITAL ||--|{ MEDICOS : contiene
     HOSPITAL ||--|{ ENFERMEROS : contiene
    HOSPITAL ||--|{ ADMINISTRATIVOS : contiene
    HOSPITAL ||--|{ MANTENIMIENTO : contiene
    HOSPITAL ||--|{ AREAS : contiene

    VISITA }|--|| HOSPITAL : pertenece
    

    TRATAMIENTOS }|--|| MEDICAMENTOS : utiliza
    
    TRATAMIENTOS }|--|| VISITA : corresponde_a

    HISTORIAL }|--|| PACIENTES : pertenece_a
    HISTORIAL }|--|| TRATAMIENTOS : contiene

    PACIENTES }|--|| SEGURO : afiliado_a

```

## Descripción del sistema
La base de datos SistemaHospitalario ha sido diseñada en MongoDB para gestionar eficientemente la información relacionada con la administración de hospitales, pacientes, personal médico y administrativo, medicamentos, tratamientos, seguros, entre otros. A continuación, se detalla cómo se insertan datos en cada una de las colecciones.


### Inserción de datos en la colección directores
La colección directores almacena los datos del director a cargo de cada hospital. Incluye nombre, salario y el tipo de personal. Para insertar un director:
```js
db.directores.insertOne(
     { 
        id_directores: 1,
        nombre: "Carlos Gómez",
        salario: 9500000, 
        tipo: "001"
         }
)

```
### Inserción de datos en la colección medicos
La colección medicos registra a los médicos que trabajan en los hospitales. Se incluye su nombre, salario y tipo:

```js
db.medicos.insertOne({
  id_medicos: 1,
  nombre: "Dr. Juan Pérez",
  salario: 7200000,
  tipo: "002",
  id_hospital: 1
})


```

### Inserción de datos en la colección enfermeros
La colección enfermeros registra a los enfermeros que trabajan en el hospital. Se incluye su nombre, salario y tipo:

```js
db.enfermeros.insertOne({
  id_enfermero: 1,
  nombre: "Juan Pérez",
  salario: 7200000,
  tipo: "003",
  id_hospital: 1
})


```
### Inserción de datos en la colección administrativos
La colección administrativos registra a los administrativos que trabajan en los hospitales. Se incluye su nombre, salario y tipo:

```js
db.administrativos.insertOne({
  id_administrativos: 1,
  nombre: "harley Pérez",
  salario: 9200000,
  tipo: "004",
  id_hospital: 1
})


```
### Inserción de datos en la colección mantenimiento
La colección mantenimiento registra a los de mantenimiento que trabajan en los hospitales. Se incluye su nombre, salario y tipo:

```js
db.mantenimiento.insertOne({
  id_mantenimiento: 1,
  nombre: "gerson Pérez",
  salario: 8200000,
  tipo: "005",
  id_hospital: 1
})


```

### Inserción de datos en la colección hospitales
Esta colección representa los diferentes hospitales registrados en el sistema. Para insertar los datos de un hospital con su nombre, direccion y telefono, se usa el siguiente comando:

```js
db.hospitales.insertOne(
    {
        id_hospital: 1,
        nombre: "Hospital Central",
        direccion: "Calle 69 # 19-10",
        telefono: "358660504",
        id_director: 30,
        id_medicos: [40, 28, 15, 27, 5],
        id_enfermeros: [27, 15, 23, 14, 17],
        id_administrativos: [23, 15, 9],
        id_mantenimiento: [9, 12, 38],
        id_areas: [11, 9, 17, 16]
    }
)

```
### Inserción de datos en la colección visitas
Contiene los datos de las visitas médicos de los pacientes:
```js
db.visitas.insertOne(
    {
        id_visita: 21,
        id_hospital: 1,
        id_medico: 40,
        id_enfermeros: [17, 23],
        observaciones: "Consulta por malestar general, se programan exámene",
        fecha: new Date("2025-07-21T10:00:00Z")
    }
)
```

### Inserción de datos en la colección tratamientos
Almacena los tratamientos realizados, incluyendo fecha, duración, medicamentos y paciente tratado:

```js
db.tratamientos.insertOne(
    {
        id_tratamiento: 1,
        id_medicamentos: [1, 2],
        nombre: "Tratamiento para dolor leve",
        valoracion: "Mejoría significativa",
        id_historial: 1,
        id_visita: 1,
        fecha: new Date("2025-07-01T10:00:00Z")
    }
)

```

### Inserción de datos en la colección medicamentos
Contiene los medicamentos disponibles con sus dosis y disponibilidad:

```js
db.medicamentos.insertOne(
    {
    id_medicamento: 1, 
    nombre: "Paracetamol", 
    hospital: 1, 
    inventario: 120, 
    descripcion: "Analgésico y antipirético"
    }
)
```


### Inserción de datos en la colección historial
Muestra los historiales médicos de los pacientes con sus visitas previas y diagnósticos:

```js
     db.historiales.insertOne(
     {
     id_historial: 1, 
     id_paciente: 1, 
     id_tratamiento: 1
     }
)
```

### Inserción de datos en la colección pacientes
Aquí se almacena la información personal de los pacientes, incluyendo edad, dirección, y afiliación a seguros:

```js
db.pacientes.insertOne(
    {
        id_pacientes: 1,
        nombre: "Ana Gómez",
        edad: 25,
        direccion: "Calle 123, Bogotá",
        id_seguro: 1,
        telefono: "3101234567"
     }
)


```

### Inserción de datos en la colección seguros
Contiene los datos de los seguros médicos que cubren a los pacientes:
```js
db.seguros.insertOne(
    {
         id_seguro: 1, 
         nombre: "Seguros VidaPlus", 
         telefono: "6012345678"
    }
)
```
### Inserción de datos en la colección infraestructura
Contiene los datos de los de infraestructra que cubren a los pacientes:
```js
db.infraestructura.insertOne(
    {
         id_infraestrctura: 1, 
         id_hospital: 1, 
         id_personas_mantenimiento:1,
         nombre_lugar:"sala2 pediatria",
         observacion:"muchas goteras",
         estado:"en renovacion"

    }
)
```

### Consultas de Datos
Las consultas en una base de datos son indispensables, ya que facilitan el acceso y la
recuperación de información almacenada. Además, permiten mantener la base de datos
actualizada mediante la inserción, modificación y actualización de datos. Son fundamentales
para almacenar, manipular y recuperar datos de manera eficiente y segura.
## Consulta #1
### Descripción
Para ilustrar el proceso de consultas de datos en la base de datos SistemaHospitalario, veamos algunos ejemplos prácticos utilizando la colección de pacientes. Supongamos que se desea obtener una lista de aquellos pacientes cuyo número de teléfono comienza por el prefijo "312"
❖ En esta consulta se utiliza el método find() de MongoDB, que permite filtrar documentos en una colección según una condición específica.

❖ Se aplica una expresión regular ($regex) sobre el campo telefono para buscar aquellos valores que comiencen con el número "312". El símbolo ^ indica que la coincidencia debe empezar desde el inicio de la cadena.

❖ Esta búsqueda es especialmente útil para segmentar pacientes por proveedor telefónico o por región, dependiendo del contexto de uso de los prefijos.

La consulta es la siguiente:

```js
db.pacientes.find({
  telefono: { $regex: "^312" }
})
```

Este comando devuelve todos los documentos en la colección pacientes donde el campo telefono inicia con los dígitos "312".

## Consulta #2
### Descripcion
 Para entender mejor cómo realizar consultas sobre rangos salariales dentro del sistema SistemaHospitalario, tomemos como ejemplo la colección de mantenimiento, que agrupa al personal encargado del mantenimiento de los hospitales.

Supongamos que deseamos obtener todos los empleados cuyo salario se encuentra entre 2,400,000 y 2,600,000 pesos colombianos, inclusive. Esta consulta es útil para identificar trabajadores dentro de un rango salarial determinado, por ejemplo, para efectos de análisis de nómina, auditorías, o procesos de aumento salarial.

En esta consulta se utiliza el método find() con operadores relacionales propios de MongoDB:

❖ $gte (greater than or equal / mayor o igual que)

❖ $lte (less than or equal / menor o igual que)

La condición se aplica sobre el campo salario, y devuelve todos los documentos cuyo valor está dentro del rango establecido.

La consulta es la siguiente:
```js
db.mantenimiento.find({
  salario: { $gte: 2400000, $lte: 2600000 }
})

```
Este comando retorna todos los documentos en la colección mantenimiento donde el campo salario tiene un valor mayor o igual a 2,400,000 y menor o igual a 2,600,000.

## Consulta #3
### Descripcion
En el contexto del sistema SistemaHospitalario, una necesidad común es calcular el salario promedio de los empleados de cierto tipo, como en este caso los médicos. Esta información puede utilizarse para propósitos de planificación financiera, análisis comparativo de salarios entre áreas o ajustes presupuestarios.


Obtener el salario promedio de todos los documentos en la colección medicos.

Se emplea el framework de agregación de MongoDB (aggregate()), que permite realizar transformaciones avanzadas y operaciones matemáticas sobre colecciones.

En esta consulta:

❖ El operador $group agrupa todos los documentos (sin distinción, por eso _id: null) en un solo grupo.

❖ Se aplica el acumulador $avg sobre el campo salario para obtener el promedio de todos los valores.

La consulta es la siguiente:
```js
db.medicos.aggregate([
  {
    $group: {
      _id: null,
      salarioPromedio: { $avg: "$salario" }
    }
  }
])

```
## Consulta #4
### Descripcion
Dentro de la gestión hospitalaria, es fundamental conocer el inventario total disponible de medicamentos para asegurar el abastecimiento, realizar compras, y prevenir escasez. Para ello, se requiere sumar el valor del campo inventario de todos los medicamentos registrados en el sistema.

❖ $group: Agrupa todos los documentos en un solo grupo (por eso el _id es null) y realiza una operación de agregación.

❖ { $sum: "$inventario" }: Suma el valor del campo inventario de cada medicamento para obtener el total.

La consulta es la siguiente:
```js
db.medicamentos.aggregate([
  {
    $group: {
      _id: null,
      totalInventario: { $sum: "$inventario" }
    }
  }
])

```

## Consulta #5
### Descripcion

Esta consulta permite relacionar los historiales médicos con los datos completos del paciente correspondiente. Es útil para mostrar información clínica junto con la información personal del paciente sin necesidad de múltiples consultas separadas. Se realiza utilizando $lookup (similar a un JOIN en SQL), seguido de $unwind y $project.

❖ $lookup: Une la colección historiales con la colección pacientes basándose en los campos id_paciente y id_pacientes. El resultado se guarda en un nuevo campo llamado paciente.

❖ $unwind: Descompone el array paciente en un solo objeto (ya que cada historial está asociado a un único paciente).

❖ $project: Especifica los campos que queremos mostrar en la salida. En este caso, incluye los identificadores del historial y del tratamiento, junto con los campos nombre, edad, dirección y teléfono del paciente.

La consulta es la siguiente:
```js
db.historiales.aggregate([
  {
    $lookup: {
      from: "pacientes",
      localField: "id_paciente",
      foreignField: "id_pacientes",
      as: "paciente"
    }
  },
  {
    $unwind: "$paciente"
  },
  {
    $project: {
      id_historial: 1,
      id_tratamiento: 1,
      "paciente.nombre": 1,
      "paciente.edad": 1,
      "paciente.direccion": 1,
      "paciente.telefono": 1
    }
  }
])

```

## Consulta #6
### Descripcion
Esta consulta permite identificar en qué hospitales se encuentra presente cada área médica especializada. Para lograrlo, se utiliza el operador $lookup con let y pipeline, que es una forma avanzada de hacer relaciones cuando los campos comparados están dentro de arrays o requieren condiciones complejas.

❖ $lookup: Se realiza una unión (join) con la colección hospitales.

❖ let: { areaId: "$id_area" }: Define una variable areaId con el valor del campo id_area de cada documento de areas.

❖ pipeline: Dentro del match, se usa $expr para evaluar si el id_area actual está presente en el array id_areas de cada hospital ($in).

❖ El resultado se guarda como un array en el campo hospitales.

❖ $project: Se muestran únicamente los campos nombre del área y la lista de hospitales que la contienen.

La consulta es la siguiente:
```js
db.areas.aggregate([
  {
    $lookup: {
      from: "hospitales",
      let: { areaId: "$id_area" },
      pipeline: [
        {
          $match: {
            $expr: { $in: ["$$areaId", "$id_areas"] }
          }
        }
      ],
      as: "hospitales"
    }
  },
  {
    $project: {
      nombre: 1,
      hospitales: 1
    }
  }
])


```
## Consulta 7
### Descripcion
Esta instrucción permite registrar un nuevo empleado administrativo en la base de datos del sistema hospitalario. Los datos ingresados incluyen su identificador, nombre, salario y tipo, necesarios para la correcta gestión del personal en la institución.

❖ insertOne: Es el método que permite insertar un único documento en la colección administrativos.

❖ Se define un objeto con los siguientes campos:

❖ id_administrativos: Identificador único del administrativo (en este caso, 6).

❖ nombre: Nombre del nuevo administrativo (puede ser reemplazado por un valor real).

❖ salario: Salario mensual, expresado en pesos colombianos (2200000).

❖ tipo: Código que representa el tipo de empleado. "004" identifica al personal administrativo según la convención del sistema.
La consulta es la siguiente:
```js

db.administrativos.insertOne({
  id_administrativos: 6,
  nombre: "Nombre Administrativo",
  salario: 2200000,
  tipo: "004"
})

```

## Consulta #8
### Descripcion
Esta operación permite insertar un nuevo registro en la colección visitas, donde se detalla una visita médica realizada en la fecha actual. Se registran los identificadores del hospital, del médico responsable, los enfermeros que asistieron, las observaciones clínicas relevantes y la fecha del evento, que en este caso se genera automáticamente con la función new Date()
❖ insertOne: Inserta un único documento en la colección visitas.

❖ id_visita: Identificador único para la visita médica (en este caso 10, para no repetir el anterior).

❖ id_hospital, id_medico, id_enfermeros: Referencias al hospital y personal médico que intervino.

❖ observaciones: Registro del estado clínico del paciente.

❖ fecha: new Date(): Se almacena la fecha y hora actuales del sistema automáticamente en formato ISODate.
La consulta es la siguiente:
```js
db.visitas.insertOne({
  id_visita: 9,
  id_hospital: 1,
  id_medico: 1,
  id_enfermeros: [1, 2],
  observaciones: "Paciente estable. Revisión de signos vitales.",
  fecha: new Date("2025-07-27T09:00:00Z")
})

```
## Consulta #9
### Descripcion
Esta operación permite modificar el nombre de un hospital existente en la colección hospitales. En este caso, se actualiza el nombre del hospital cuyo identificador es 1, cambiándolo a "Hospital San José Renovado".

❖ updateOne: Actualiza un único documento que cumpla con la condición dada dentro de la colección hospitales.

❖ { id_hospital: 1 }: Filtro que identifica el hospital cuyo campo id_hospital es igual a 1, es decir, el hospital que queremos modificar.

❖ $set: { nombre: "Hospital San José Renovado" }: Operador que reemplaza el valor actual del campo nombre por el nuevo valor especificado.
La consulta es la siguiente:
```js
db.hospitales.updateOne(
  { id_hospital: 1 },
  { $set: { nombre: "Hospital San José Renovado" } }
)
```
## Consulta #10
### Descripcion
Esta operación permite eliminar un registro específico de la colección areas. En este caso, se borra el área cuyo identificador es 2.
❖ deleteOne: Elimina un único documento que coincida con el filtro especificado dentro de la colección areas.

❖ { id_area: 2 }: Filtro que identifica el área que queremos eliminar, buscando el documento cuyo campo id_area sea igual a 2.
La consulta es la siguiente:
```js
db.areas.deleteOne({ id_area: 2 })

```

## Funcion #1
### Descripcion 
Esta operación permite insertar un nuevo documento en la colección medicamentos. La función recibe como parámetros el identificador del medicamento, el nombre, el hospital al que pertenece y la cantidad disponible en inventario, y luego crea el registro correspondiente en la base de datos.

❖ insertOne: Inserta un único documento dentro de la colección medicamentos.

❖ id_medicamento: Identificador único para el medicamento que se desea insertar.

❖ nombre: Nombre descriptivo del medicamento.

❖ id_hospital: Identificador del hospital al que está asociado el medicamento.

❖ inventario: Cantidad disponible del medicamento en el inventario.

La función también imprime un mensaje confirmando que el documento fue insertado exitosamente.

La consulta es la siguiente:
```js

function insertarDocumentoParaMedicamentos(id, nombre, hospital, cantidad) {
  db.medicamentos.insertOne({
    id_medicamento: id,
    nombre: nombre,
    id_hospital: hospital,
    inventario: cantidad
  });
  print("Documento insertado.");
}

insertarDocumentoParaMedicamentos(300, "Marihuana medicinal 10gramos", 1, 300);
```
## Funcion #2
## Descripcion
Esta operación permite buscar en la colección medicos todos aquellos documentos cuyo salario sea mayor a un valor específico proporcionado como parámetro. Es útil para identificar médicos con salarios elevados dentro del sistema hospitalario.

❖ find: Recupera todos los documentos que coincidan con el criterio de búsqueda definido.

❖ { salario: { "$gt": salario } }: Filtro que selecciona los médicos cuyo campo salario sea mayor al valor especificado.
    — "$gt" es el operador que representa “mayor que”.

❖ toArray(): Convierte el cursor devuelto por find en un array de resultados, lo cual facilita su manipulación o visualización.

La función retorna una lista de todos los médicos que cumplen con esta condición.

La consulta es la siguiente:
```js
function buscarMedicosPorSalarioMayorA(salario) {
  return db.medicos.find({ salario: { "$gt": salario } }).toArray();
}

```

### Usuarios y Acceso
Estos usuarios y sus permisos han sido diseñados para gestionar las diferentes
responsabilidades dentro de un sistema de administración del sietma hospitalario. A
continuación se presenta una tabla organizada con los usuarios, sus accesos, comandos
permitidos, y funciones/procedimientos a los que tienen acceso.
| Usuarios         | Descripción                                         | Procedimientos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | URI                                                                                                  |
|------------------|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| Director General | acceso total                                        | db.createUser({<br>&nbsp;&nbsp;user: "directores",<br>&nbsp;&nbsp;pwd: "directores1",<br>&nbsp;&nbsp;roles: [{ role: "root", db: "admin" }]<br>});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | mongosh "mongodb://directores:directores1@localhost:27017/SistemaHospitalario"                       |
| Médico           | Acceso pacientes<br>y diagnósticos                  | db.createRole({<br>&nbsp;&nbsp;role: "medico_rol",<br>&nbsp;&nbsp;privileges: [<br>&nbsp;&nbsp;&nbsp;&nbsp;{ resource: { db: "SistemaHospitalario", collection: "pacientes" }, actions: ["find", "insert", "update"] },<br>&nbsp;&nbsp;&nbsp;&nbsp;{ resource: { db: "SistemaHospitalario", collection: "visitas" }, actions: ["find", "insert", "update"] },<br>&nbsp;&nbsp;&nbsp;&nbsp;{ resource: { db: "SistemaHospitalario", collection: "tratamientos" }, actions: ["find", "insert", "update"] },<br>&nbsp;&nbsp;&nbsp;&nbsp;{ resource: { db: "SistemaHospitalario", collection: "diagnosticos" }, actions: ["find", "insert", "update"] }<br>&nbsp;&nbsp;],<br>&nbsp;&nbsp;roles: []<br>});<br><br>db.createUser({<br>&nbsp;&nbsp;user: "medico",<br>&nbsp;&nbsp;pwd: "medico1",<br>&nbsp;&nbsp;roles: [{ role: "medico_rol", db: "SistemaHospitalario" }]<br>}); | mongosh "mongodb://medico:medico1@localhost:27017/SistemaHospitalario"                               |
| Enfermero/a      | Acceso solo a vista de pacientes asignados          | db.createRole({<br>&nbsp;&nbsp;role: "enfermero_rol",<br>&nbsp;&nbsp;privileges: [<br>&nbsp;&nbsp;&nbsp;&nbsp;{ resource: { db: "SistemaHospitalario", collection: "vista_pacientes_asignados" }, actions: ["find"] }<br>&nbsp;&nbsp;],<br>&nbsp;&nbsp;roles: []<br>});<br><br>db.createUser({<br>&nbsp;&nbsp;user: "enfermero",<br>&nbsp;&nbsp;pwd: "enfermero1",<br>&nbsp;&nbsp;roles: [{ role: "enfermero_rol", db: "SistemaHospitalario" }]<br>});                                                                                                                                                                                                                                                                                                                                                                          | mongosh "mongodb://enfermero:enfermero1@localhost:27017/SistemaHospitalario"                         |
| Administrativo   | Gestión de recursos y logística                     | db.createRole({<br>&nbsp;&nbsp;role: "administrativo_rol",<br>&nbsp;&nbsp;privileges: [<br>&nbsp;&nbsp;&nbsp;&nbsp;{ resource: { db: "SistemaHospitalario", collection: "medicamentos" }, actions: ["find", "insert", "update"] },<br>&nbsp;&nbsp;&nbsp;&nbsp;{ resource: { db: "SistemaHospitalario", collection: "areas" }, actions: ["find", "insert", "update"] },<br>&nbsp;&nbsp;&nbsp;&nbsp;{ resource: { db: "SistemaHospitalario", collection: "hospitales" }, actions: ["find", "insert", "update"] }<br>&nbsp;&nbsp;],<br>&nbsp;&nbsp;roles: []<br>});<br><br>db.createUser({<br>&nbsp;&nbsp;user: "administrativo",<br>&nbsp;&nbsp;pwd: "administrativo1",<br>&nbsp;&nbsp;roles: [{ role: "administrativo_rol", db: "SistemaHospitalario" }]<br>});  | mongosh "mongodb://administrativo:administrativo1@localhost:27017/SistemaHospitalario"              |
| Mantenimiento    | Acceso a infraestructura                           | db.createRole({<br>&nbsp;&nbsp;role: "mantenimiento_rol",<br>&nbsp;&nbsp;privileges: [<br>&nbsp;&nbsp;&nbsp;&nbsp;{ resource: { db: "SistemaHospitalario", collection: "infraestructura" }, actions: ["find", "update"] }<br>&nbsp;&nbsp;],<br>&nbsp;&nbsp;roles: []<br>});<br><br>db.createUser({<br>&nbsp;&nbsp;user: "mantenimiento",<br>&nbsp;&nbsp;pwd: "mantenimiento1",<br>&nbsp;&nbsp;roles: [{ role: "mantenimiento_rol", db: "SistemaHospitalario" }]<br>});                                                                                                                                                                                                                                                                     - [Introducción](#introducción)


## 1. Crear usuarios sin funciones (previo a activar autenticación)
Antes de activar la autenticación, es necesario crear los usuarios sin roles, para luego asignárselos una vez el sistema esté configurado.

Ejemplo:
```js

use admin
db.createUser({
  user: "admin",
  pwd: "contrasena1",
  roles: []
})

use clientes
db.createUser({
  user: "usuario1",
  pwd: "contrasena2",
  roles: []
})

```

## 2. Activar la autenticación de usuarios
❖ Salir del shell de MongoDB

```js
exit
```
```js

sudo nano /etc/mongod.conf
```




 ❖ Agregar la sección de seguridad al final del archivo:
```js

security:
  authorization: enabled
```
❖ Guardar los cambios y reiniciar MongoDB:
```js
sudo systemctl restart mongod
```
## 3. Acceder a MongoDB con autenticación
Una vez activada la autenticación, usa las siguientes URIs para conectarte según el usuario:

URI para el usuario administrador:
```js
mongodb://administrativo:administrativo1@localhost:27017/
```
