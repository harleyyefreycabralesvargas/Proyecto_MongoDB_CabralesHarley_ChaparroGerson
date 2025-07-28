# Proyecto BBDD Sistema Hospitalario. 

El objetivo del proyecto es diseñar y desarrollar un sistema de base de datos en **MongoDB** que permita gestionar de manera eficiente todas las operaciones relacionadas con la administración de un **Sistema Hospitalario**. Dicho sistema incluirá la gestión de hospitales, pacientes, médicos, tratamientos, medicamentos, visitas médicas, historiales clínicos, áreas especializadas y personal administrativo. 


### Requerimientos del Proyecto

#### 1. Modelado de la Base de Datos

El sistema debe cumplir con las siguientes características estructurales y funcionales:

##### Estructura del Sistema

- Un hospital puede tener múltiples áreas especializadas (Cardiología, Neurología, etc.).
- Cada hospital tiene un director general, pero un director puede supervisar varios hospitales.
- Cada hospital tiene un conjunto de médicos, enfermeras y personal administrativo.
- Los hospitales deben contar con un historial detallado de pacientes y tratamientos realizados.

##### Pacientes

- Los pacientes se identifican por su número de historia clínica, nombre, dirección, teléfono, correo electrónico y seguros médicos.
- Los historiales médicos incluyen diagnósticos, tratamientos realizados y resultados obtenidos.

##### Médicos y Personal

- Los médicos se identifican por su número de colegiatura, nombre, especialidad, teléfono, correo electrónico y salario.
- Se definen los siguientes tipos de personal:
- **001: Director General:** Gestión general del hospital.
- **002: Médico Especialista:** Atiende pacientes y realiza diagnósticos.
- **003: Enfermero/a:** Asiste a médicos y cuida a los pacientes.
- **004: Personal Administrativo:** Gestión de recursos y logística.
- **005: Personal de Mantenimiento:** Mantenimiento y limpieza de las instalaciones.

##### Tratamientos y Medicamentos

- Los tratamientos se identifican por su nombre, descripción, área médica relacionada y costo.
- Los medicamentos se almacenan por nombre, fabricante, tipo, y disponibilidad en inventario.

##### Visitas Médicas

- Las visitas médicas se registran con fecha, hora, médico asignado, paciente atendido y diagnóstico.
- Los pacientes pueden tener múltiples visitas médicas a lo largo del tiempo.

###  

### 2. Consultas MongoDB

Implementar **100 consultas MongoDB** enfocadas en:

- Estado actual de hospitales: cantidad de médicos, enfermeras y áreas especializadas por hospital.
- Inventarios de medicamentos por tipo y disponibilidad.
- Historiales clínicos de pacientes por diagnóstico y tratamientos realizados.
- Actividades del personal según área médica y rol.
- Gestión de visitas médicas y estadísticas de enfermedades comunes.
- Al menos **20 consultas deben incluir agregaciones avanzadas** (`$lookup`, `$unwind`, `$group`, `$project`, `$regex`).

###  

### 3. Funciones JavaScript (UDF - Simuladas)

Crear **20 funciones simuladas** que se implementen como consultas reutilizables en MongoDB Compass o mediante funciones almacenadas en la base de datos (`db.system.js.save()`).

Ejemplos:

- Cálculo de inventarios de medicamentos por hospital.
- Generación de reportes de visitas médicas por diagnóstico.
- Obtención de estadísticas de tratamientos realizados por hospital.

###  

### 4. Control de Acceso y Roles de Usuario

Definir **5 tipos de usuarios con permisos específicos utilizando mecanismos de autenticación y roles de MongoDB:**

- **Director General:** Acceso total.
- **Médico Especialista:** Acceso a pacientes y diagnósticos.
- **Enfermero/a:** Acceso limitado a pacientes asignados.
- **Personal Administrativo:** Gestión de recursos y logística.
- **Personal de Mantenimiento:** Acceso a tareas de infraestructura.



Resultado esperado

Además de la implementación de la base de datos y la creación de las consultas, procedimientos almacenados y demás, los estudiantes deberán entregar el proyecto a través de un repositorio privado en GitHub. El repositorio deberá estar bien estructurado, contener toda la documentación necesaria y los archivos con el código correspondientes.



### 1. **Repositorio en GitHub:**

- Crear un **repositorio privado** en GitHub. Asegúrate de invitar al trainer como colaborador para que pueda revisar el trabajo.
- El repositorio debe seguir una estructura clara y organizada. Los archivos JSON/BSON deben estar divididos en carpetas según su propósito (e.g., DDL, DML, procedimientos, funciones, triggers, etc.).
- El **README.md** debe incluir una descripción detallada del proyecto, instrucciones para configurar la base de datos, cómo ejecutar las consultas, procedimientos, funciones y eventos, así como cualquier otra consideración importante.



### 2. **Estructura del Repositorio:**

El repositorio debe estar organizado de la siguiente manera:

- ddl.json (Creación de base de datos con tabls y relaciones)
- dml.json (inserciones de datos)
- dql_select.json (Consultas)
- dql_funciones.json (funciones)
- Readme.md
- Diagrama.jpg (Modelo de datos)

###  

### 3. **Contenido del README.md**, El archivo README.md debe estar bien estructurado y contener los siguientes apartados:



- **Descripción del Proyecto:** Explicación clara y concisa del proyecto "Tienda de disfraces" (O el nombre que le hayan dado a su proyecto). Incluye el propósito de la base de datos y una descripción general de las funcionalidades que se han implementado.
- **Requisitos del Sistema:** Detalla el software necesario para ejecutar los scripts (e.g., MongoDB versión X.X, cliente MongoDB Compass, etc.).
- **Instalación y Configuración:** Instrucciones paso a paso para configurar el entorno, cargar la base de datos y ejecutar los scripts de la baes de datos. Asegúrate de incluir: Cómo ejecutar el archivo ddl.sql para generar la estructura de la base de datos, Cómo cargar los datos iniciales con el archivo dml.json, Instrucciones para ejecutar las consultas, funciones, etc.
- **Estructura de la Base de Datos:** Incluir un resumen de las tablas creadas, con una breve descripción de su propósito. No es necesario describir cada campo, pero debe quedar claro cómo interactúan las tablas entre sí.
- **Ejemplos de Consultas**: Proporcionar ejemplos de algunas consultas (básicas y avanzadas) que se pueden ejecutar en la base de datos, explicando qué información generan.
- **Funciones:** Explicar brevemente la funcionalidad de las funciones creadas. Incluir ejemplos de cómo se pueden usar en el contexto del sistema.
- **Roles de Usuario y Permisos:** Describir los 5 roles de usuario creados en el sistema, junto con los permisos asignados a cada uno. Incluir instrucciones sobre cómo crear usuarios en MongoDB y cómo asignarles los roles correspondientes.
- **Contribuciones:** Si el proyecto fue desarrollado en grupo, cada integrante debe indicar qué parte del trabajo realizó.
- **Licencia y Contacto:** Incluir una sección sobre la licencia del proyecto (opcional) y cómo contactarte en caso de preguntas o problemas con la implementación.

###  

### 4. **Archivos JSON:**

- Todos los scripts para MongoDB necesarios deben estar incluidos en las carpetas adecuadas. Los nombres de los archivos deben ser claros y descriptivos.
- Los scripts deben estar bien documentados con comentarios que expliquen el propósito de cada sección, cómo funcionan las consultas o procedimientos, y cualquier otro detalle que facilite su comprensión.
