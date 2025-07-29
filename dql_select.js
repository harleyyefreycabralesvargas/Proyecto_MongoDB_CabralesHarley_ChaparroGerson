// 🔍 Consultas de búsqueda (1–20)
//1 Médicos que ganan más de 5,000,000
db.medicos.find({ salario: { $gt: 5000000 } })

//2 Médicos cuyo nombre empieza por "Dr."
db.medicos.find({ nombre: { $regex: "^Dr" } })

//3 Administrativos con salario menor a 4,000,000
db.administrativos.find({ salario: { $lt: 4000000 } })

//4 Enfermeros que contienen "Camila" en el nombre (case insensitive)
db.enfermeros.find({ nombre: { $regex: "Camila", $options: "i" } })

//5 Directores cuyo nombre termina en "z"
db.directores.find({ nombre: { $regex: "z$" } })

//6 Mantenimiento con salario entre 2,400,000 y 2,600,000
db.mantenimiento.find({ salario: { $gte: 2400000, $lte: 2600000 } })

//7 Pacientes cuyo nombre empieza por "L"
db.pacientes.find({ nombre: { $regex: "^L", $options: "i" } })

//8 Pacientes que viven en Bogotá 
db.pacientes.find({ direccion: { $regex: "Bogotá", $options: "i" } })

//9 Medicamentos que contienen "ina" 
db.medicamentos.find({ nombre: { $regex: "ina", $options: "i" } })

//10 Áreas que contengan "ción" (
db.areas.find({ nombre: { $regex: "ción", $options: "i" } })

//11 Pacientes que tienen seguro con id_seguro 10
db.pacientes.find({ id_seguro: 10 })

//12 Medicamentos con inventario menor a 100
db.medicamentos.find({ inventario: { $lt: 100 } })

//13 Enfermeros con salario >= 3,000,000
db.enfermeros.find({ salario: { $gte: 3000000 } })

//14 Visitas realizadas por el médico con id_medicos = 5
db.visitas.find({ id_medico: 5 })

//15 Pacientes que viven en "Calle 45" (case insensitive)
db.pacientes.find({ direccion: { $regex: "Calle 45", $options: "i" } })

//16 Seguros con nombre exacto "Salud Total"
db.seguros.find({ nombre: "Salud Total" })

//17 Tratamientos con más de 2 medicamentos
db.tratamientos.find({ $expr: { $gt: [{ $size: "$id_medicamentos" }, 2] } })

//18 Hospitales cuyo director tiene id_directores = 3
db.hospitales.find({ id_director: 3 })

//19 Pacientes con teléfono que comienza con "312"
db.pacientes.find({ telefono: { $regex: "^312" } })

//20 Historial con id_tratamiento igual a 50
db.historiales.find({ id_tratamiento: 50 })


// 📊 Consultas de agregación (21–40)
//21 Salario promedio de médicos
db.medicos.aggregate([
  {
    $group: {
      _id: null,
      salarioPromedio: { $avg: "$salario" }
    }
  }
])

//22 Salario máximo de enfermeros
db.enfermeros.aggregate([
  {
    $group: {
      _id: null,
      salarioMaximo: { $max: "$salario" }
    }
  }
])

//23 Cantidad de administrativos por tipo
db.administrativos.aggregate([
  {
    $group: {
      _id: "$tipo",
      totalAdministrativos: { $sum: 1 }
    }
  }
])

//24 Total de médicos (agrupado por tipo)
db.medicos.aggregate([
  {
    $group: {
      _id: "$tipo",
      totalMedicos: { $sum: 1 }
    }
  }
])

//25 Pacientes por cada seguro
db.seguros.aggregate([
  {
    $lookup: {
      from: "pacientes",
      localField: "id_seguro",
      foreignField: "id_seguro",
      as: "pacientes"
    }
  },
  {
    $project: {
      nombre: 1,
      totalPorSeguro: { $size: "$pacientes" }
    }
  }
])

//26 Edad promedio de pacientes
db.pacientes.aggregate([
  {
    $group: {
      _id: null,
      edadPromedio: { $avg: "$edad" }
    }
  }
])

//27 Inventario total de medicamentos
db.medicamentos.aggregate([
  {
    $group: {
      _id: null,
      totalInventario: { $sum: "$inventario" }
    }
  }
])

//28 Tratamientos registrados por mes y año
db.tratamientos.aggregate([
  {
    $group: {
      _id: {
        year: { $year: "$fecha" },
        month: { $month: "$fecha" }
      },
      total_tratamientos: { $sum: 1 }
    }
  },
  {
    $sort: { "_id.year": 1, "_id.month": 1 }
  }
])

//29 Cantidad de visitas por médico
db.visitas.aggregate([
  {
    $group: {
      _id: "$id_medico",
      total_visitas: { $sum: 1 }
    }
  }
])

//30 Total de medicamentos registrados
db.medicamentos.countDocuments()

//31 Nombre del medicamento más utilizado (según tratamientos)
db.medicamentos.aggregate([
  {
    $lookup: {
      from: "tratamientos",
      localField: "id_medicamento",
      foreignField: "id_medicamentos",
      as: "tratamientos"
    }
  },
  {
    $project: {
      nombre: 1,
      total_uso: { $size: "$tratamientos" }
    }
  },
  {
    $sort: { total_uso: -1 }
  },
  {
    $limit: 1
  }
])

//32 Hospital con menos personal total (sumando arrays en hospitales)
db.hospitales.aggregate([
  {
    $addFields: {
      total_personal: {
        $add: [
          { $size: "$id_medicos" },
          { $size: "$id_enfermeros" },
          { $size: "$id_administrativos" },
          { $size: "$id_mantenimiento" },
          1 // Director es uno solo
        ]
      }
    }
  },
  {
    $project: {
      nombre: 1,
      total_personal: 1
    }
  },
  {
    $sort: { total_personal: 1 }
  },
  {
    $limit: 1
  }
])

//33 Número de áreas por hospital
db.hospitales.aggregate([
  {
    $project: {
      nombre: 1,
      total_areas: { $size: "$id_areas" }
    }
  }
])

//34 Número de médicos por hospital
db.hospitales.aggregate([
  {
    $project: {
      nombre: 1,
      total_medicos: { $size: "$id_medicos" }
    }
  }
])

//35 Número de pacientes por rango de edad
db.pacientes.aggregate([
  {
    $bucket: {
      groupBy: "$edad",
      boundaries: [0, 19, 36, 51, 200],
      default: "Otro",
      output: {
        total_pacientes: { $sum: 1 }
      }
    }
  }
])

//36 Cantidad de medicamentos por primera letra del nombre
db.medicamentos.aggregate([
  {
    $project: {
      primeraLetra: { $substrCP: ["$nombre", 0, 1] }
    }
  },
  {
    $group: {
      _id: "$primeraLetra",
      total: { $sum: 1 }
    }
  }
])

//37 Médico que más gana
db.medicos.find().sort({ salario: -1 }).limit(1)

//38 Salario total de todos los administrativos
db.administrativos.aggregate([
  {
    $group: {
      _id: null,
      salario_total: { $sum: "$salario" }
    }
  },
  {
    $project: {
      _id: 0,
      salario_total: 1
    }
  }
])

//39 Promedio salario por tipo (médicos)
db.medicos.aggregate([
  {
    $group: {
      _id: "$tipo",
      salario_promedio: { $avg: "$salario" }
    }
  }
])

//40 Total de directores registrados
db.directores.countDocuments()

// 🔗 Consultas con $lookup (41–60)
//41 Muestra los historiales con los datos del paciente.
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
//42 Muestra las visitas con los datos del médico.
db.visitas.aggregate([{
  $lookup: {
    from: "medicos",
    localField: "id_medico",
    foreignField: "id_medicos",
    as: "medico"
  }
},
{
  $unwind: "$medico"
},
{
  $project: {
    id_visita: 1,
    "medico.id_medicos": 1,
    "medico.nombre": 1,
    "medico.salario": 1,
    observaciones: 1,
    fecha: 1
  }
}])
//43 Muestra los tratamientos con los medicamentos detallados.
db.tratamientos.aggregate([
  {
    $lookup: {
      from: "medicamentos",
      localField: "id_medicamentos",
      foreignField: "id_medicamento",
      as: "medicamentos"
    }
  },
  {
    $unwind: "$medicamentos"
  },
  {
    $group: {
      _id: "$_id",
      id_tratamiento: { $first: "$id_tratamiento" },
      id_visita: { $first: "$id_visita" },
      id_historial: { $first: "$id_historial" },
      nombre: { $first: "$nombre" },              
      valoracion: { $first: "$valoracion" },      
      medicamentos: { $push: "$medicamentos" },
      fecha: { $first: "$fecha" }
    }
  }
])

//44 Muestra los hospitales con los nombres de los directores.
db.hospitales.aggregate([{
  $lookup: {
    from: "directores",
    localField: "id_director",
    foreignField: "id_directores",
    as: "directores"
  }
},
{
  $unwind: "$directores"
},
{
  $project: {
    id_hospital: 1,
    nombre: 1,
    direccion: 1,
    telefono: 1,
    director: '$directores.nombre',
    id_medicos: 1,
    id_enfermeros: 1,
    id_administrativos: 1,
    id_mantenimiento: 1,
    id_areas: 1
  }
}])
//45 Muestra los pacientes con los datos del seguro.
db.pacientes.aggregate([{
  $lookup: {
    from: "seguros",
    localField: "id_seguro",
    foreignField: "id_seguro",
    as: "seguros"
  }
},
{
  $unwind: "$seguros"
},
{
  $project: {
    id_pacientes: 1,
    nombre: 1,
    edad: 1,
    direccion: 1,
    "seguros.id_seguro": 1,
    "seguros.nombre": 1,
    "seguros.telefono": 1,
    telefono: 1,
  }
}
])
//46 Muestra los hospitales con el detalle de sus áreas.
db.hospitales.aggregate([
  {
    $lookup: {
      from: "areas",
      localField: "id_areas",
      foreignField: "id_area",
      as: "areas"
    }
  },
  {
    $unwind: "$areas"
  },
  {
    $group: {
      _id: "$_id",
      id_hospital: { $first: "$id_hospital" },
      nombre: { $first: "$nombre" },
      direccion: { $first: "$direccion" },
      telefono: { $first: "$telefono" },
      director: { $first: "$director" },
      id_medicos: { $first: "$id_medicos" },
      id_enfermeros: { $first: "$id_enfermeros" },
      id_administrativos: { $first: "$id_administrativos" },
      id_mantenimiento: { $first: "$id_mantenimiento" },
      areas: { $push: "$areas" }
    }
  }
])
//47 Muestra las visitas con enfermeros detallados.
db.visitas.aggregate([
  {
    $lookup: {
      from: "enfermeros",
      localField: "id_enfermeros",
      foreignField: "id_enfermeros",
      as: "enfermeros"
    }
  },
  { $unwind: "$enfermeros" },
  {
    $group: {
      _id: "$_id",
      id_visita: { $first: "$id_visita" },
      id_hospital: { $first: "$id_hospital" },
      id_medico: { $first: "$id_medico" },
      enfermeros: { $push: "$enfermeros" },
      observaciones: { $first: "$observaciones" },
      fecha: { $first: "$fecha" }
    }
  }
])
//48 Muestra los historiales con tratamientos detallados.
db.historiales.aggregate([
  {
    $lookup: {
      from: "tratamientos",
      localField: "id_historial",
      foreignField: "id_historial",
      as: "tratamientos"
    }
  },
  { $unwind: "$tratamientos" },
  {
    $group: {
      _id: "$_id",
      id_historial:{ $first:"$id_historial"},
      id_paciente: { $first: "$id_paciente" },
      valoracion: { $first: "$valoracion" },      
      medicamentos: { $push: "$medicamentos" },
      tratamientos: { $push: "$tratamientos" }
    }
  }
])
//49 Muestra los tratamientos con la visita correspondiente.
db.visitas.aggregate([
  {
    $lookup: {
      from: "tratamientos",
      localField: "id_visita",
      foreignField: "id_visita",
      as: "tratamientos"
    }
  },
  { $unwind: "$tratamientos" },
  {
    $project: {
      id_visita: 1,
      id_hospital: 1,
      id_medico: 1,
      id_enfermeros: 1,
      observaciones: 1,
      fecha: 1,
      "tratamientos.id_tratamiento": 1,
      "tratamientos.id_medicamentos": 1,
      "tratamientos.id_historial": 1,
      "tratamientos.fecha": 1,
      "tratamiento.nombre":1,
      "tratamiento.valoracion":1
    }
  }
])
//50 Muestra los hospitales con todos los médicos asignados.
db.hospitales.aggregate([
  {
    $lookup: {
      from: "medicos",
      localField: "id_medicos",
      foreignField: "id_medicos",
      as: "medicos"
    }
  },
  {$unwind: "$medicos"},
  {
    $group: {
      _id: "$_id",
      id_hospital:{$first:"$id_hospital"},
      nombre:{$first:"$nombre"},
      direccion:{$first:"$direccion"},
      telefono:{$first:"$telefono"},
      id_director:{$first:"$id_director"},
      id_medicos: { $push: "$medicos" },
      id_enfermeros: {$first:"$id_enfermeros"},
      id_administrativos:{$first: "$id_administrativos"},
      id_mantenimiento:{$first: "$id_mantenimiento"},
      id_areas:{$first: "$id_areas"}
    }
  }
])
//51 Muestra los médicos con el hospital al que pertenecen.
db.medicos.aggregate([
  {
    $lookup: {
      from: "hospitales",
      let: { areaId: "$id_medicos" },
      pipeline: [
        {
          $match: {
            $expr: { $in: ["$$areaId", "$id_medicos"] }
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


//52 Muestra las áreas con los hospitales a los que pertenecen.

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


//53 Muestra los pacientes con su historial clínico.

db.pacientes.aggregate([
  {
    $lookup:{
      from:"historiales",
      localField:"id_pacientes",
      foreignField:"id_paciente",
      as:"historial"
    }
  },
  {
    $project:{
      nombre:1,
      apellido:1,
      historial:1
    }
  }
])

//54 Muestra los medicamentos con los tratamientos en los que se usan.

db.medicamentos.aggregate([
  {
    $lookup:{
      from:"trataientos",
      localField:"id_medicamentos",
      foreignField:"id_medicamentos",
      as:"tratamientos"
    }
  },
  {
    $project:{
      nombre:1,
      tratamientos:1
    }
  }
])



//55 Muestra los seguros con la lista de paciente
db.seguros.aggregate([
  {
    $lookup: {
      from: "pacientes",            
      localField: "id_seguro",   
      foreignField: "id_seguro",    
      as: "afiliados"             
    }
  },
  {
    $project: {
      _id: 0,
      nombre_seguro: "$nombre",
      afiliados: {
        nombre: 1,
        id_paciente: 1,
        edad: 1
      }
    }
  }
])


//56 Muestra los directores con el hospital que dirigen.
db.directores.aggregate([
  {
    $lookup: {
      from: "hospitales",             
      localField: "id_directores",   
      foreignField: "id_director",  
      as: "hospitales"               
    }
  },
  { $unwind: "$hospitales" },        
  {
    $project: {
      _id: 0,
      nombre_director: "$nombre",
      nombre_hospital: "$hospitales.nombre",
      direccion: "$hospitales.direccion",
      telefono_hospital: "$hospitales.telefono"
    }
  }
]);



//57 Muestra las visitas con observaciones y datos del paciente.
db.s.aggregate([
  {
    $lookup: {
      from: "tratamientos",
      localField: "id_visita",
      foreignField: "id_visita",
      as: "tratamientos"
    }
  },
  { $unwind: "$tratamientos" },
  {
    $lookup: {
      from: "historiales",
      localField: "tratamientos.id_historial",
      foreignField: "id_historial",
      as: "historial"
    }
  },
  { $unwind: "$historial" },
  {
    $lookup: {
      from: "pacientes",
      localField: "historial.id_paciente",
      foreignField: "id_pacientes",
      as: "paciente"
    }
  },
  { $unwind: "$paciente" },
  {
    $project: {
      _id: 0,
      id_visita: 1,
      fecha: 1,
      observaciones: 1,
      "paciente.nombre": 1,
      "paciente.edad": 1,
      "paciente.direccion": 1,
      "paciente.telefono": 1
    }
  }
]);





//58 Muestra los médicos con los hospitales donde trabajan.

db.medicos.aggregate([
  {
    $lookup: {
      from: "hospitales",
      localField: "id_medicos",
      foreignField: "id_medicos",
      as: "hospitales"
    }
  }
])

//9 Muestra los administrativos con los hospitales donde trabajan.
db.administrativos.aggregate([
  {
    $lookup: {
      from: "hospitales",
      localField: "id_administrativos",
      foreignField: "id_administrativos",
      as: "hospitales"
    }
  }
])


// ➕ Consultas de inserción (61–80)
//61 Inserta un nuevo médico llamado "Luis Rojas".
db.medicos.insertOne({
  id_medicos: 6,
  nombre: "Luis Rojas",
  salario: 5500000,
  tipo: "002"
})


//62 Inserta una enfermera llamada "Carla Torres".
db.enfermeros.insertOne({
  id_enfermeros: 6,
  nombre: "Carla Torres",
  salario: 3150000,
  tipo: "003"
})


//63 Inserta un nuevo administrativo con salario $2,200.
db.administrativos.insertOne({
  id_administrativos: 6,
  nombre: "Nombre Administrativo",
  salario: 2200000,
  tipo: "004"
})


//64 Inserta un director con nombre "Marta López".
db.directores.insertOne({
  id_directores: 6,
  nombre: "Marta López",
  salario: 8300000,
  tipo: "001"
})


//65 Inserta un personal de mantenimiento con tipo "jornada completa".

db.mantenimiento.insertOne({
  id_mantenimiento: 6,
  nombre: "Nombre Mantenimiento",
  salario: 2600000,
  tipo: "005",
  jornada: "jornada completa"
})





//66 Inserta un área llamada "UCI".
db.areas.insertOne({
  id_area: 6,
  nombre: "UCI"
})


//67 Inserta una visita con fecha de hoy.
db.visitas.insertOne({
  id_visita: 9,
  id_hospital: 1,
  id_medico: 1,
  id_enfermeros: [1, 2],
  observaciones: "Paciente estable. Revisión de signos vitales.",
  fecha: new Date("2025-07-27T09:00:00Z")
})


//68 Inserta un medicamento llamado "Paracetamol".
db.medicamentos.insertOne({
  id_medicamento: 6,
  nombre: "Paracetamol",
  inventario: 100,
  descripcion: "Analgésico y antipirético para dolor y fiebre."
})


//69 Inserta un tratamiento con dos medicamentos.
db.tratamientos.insertOne({
  id_tratamiento: 7,
  id_medicamentos: [2, 4],
  id_historial: 7,
  id_visita: 7,
  fecha: new Date("2025-07-28T10:00:00Z")
})


//70 Inserta un historial clínico nuevo.
db.historiales.insertOne({
  id_historial: 6,
  id_paciente: 6,
  id_tratamiento: 6
})


//71 Inserta un paciente llamado "Julián Pérez".
db.pacientes.insertOne({
  id_pacientes: 6,
  nombre: "Julián Pérez",
  edad: 29,
  direccion: "Dirección ejemplo",
  id_seguro: 1,
  telefono: "3001234567"
})


//72 Inserta un seguro llamado "Salud Viva".
db.seguros.insertOne({
  id_seguro: 6,
  nombre: "Salud Viva",
  telefono: "6001234567"
})


//73 Inserta un hospital con 3 médicos y 2 enfermeros.
db.hospitales.insertOne({
  id_hospital: 7,
  nombre: "Hospital Nueva Esperanza",
  direccion: "Calle 50 #20-10",
  telefono: "5551234",
  id_director: 2,
  id_medicos: [1, 2, 3],
  id_enfermeros: [1, 2],
  id_administrativos: [],
  id_mantenimiento: [],
  id_areas: []
})


//74 Inserta un área llamada "Pediatría".

db.areas.insertOne({
  id_area: 7,
  nombre: "Pediatría"
})

//75 Inserta un paciente con seguro id 20 y edad 45.
db.pacientes.insertOne({
  id_pacientes: 20,
  nombre: "Gerson Chaparro",
  edad: 45,
  direccion: "Dirección ejemplo",
  id_seguro: 1,
  telefono: "3001234567"
})

//76 Inserta un medicamento con inventario de 1000.
db.medicamentos.insertOne({
  id_medicamento: 6,
  nombre: "petronazol",
  inventario: 1000,
  descripcion: "Muy fuerte."
})


//77 Inserta un historial con tratamiento id 50.
db.historial.insertOne({
  id_historial: 7,
  id_paciente: 5,
  id_tratamiento: 50
})


//78 Inserta un director con salario $8,000.
db.directores.insertOne({
  id_directores: 6,
  nombre: "Harley Cabrales",
  salario: 8000000,
  tipo: "001"
})


//79 Inserta un administrativo con tipo "Contador".
db.administrativos.insertOne({
  id_administrativos: 8,
  nombre: "Carlos Mendoza",
  salario: 3200000,
  tipo: "Contador"
})


// 🔄 Consultas de actualización (81–90)
//81 Aumenta el salario de todos los médicos en 10%.
db.medicos.updateMany(
  {},
  { $mul: { salario: 1.10 } }
)

//82 Cambia el nombre del hospital con id 1.
db.hospitales.updateOne(
  { id_hospital: 1 },
  { $set: { nombre: "Hospital San José Renovado" } }
)
//83 Cambia el teléfono del seguro con id 5.
db.seguros.updateOne(
  { id_seguro: 5 },
  { $set: { telefono: "6017569999" } }
)

//84 Cambia la dirección del paciente con id 3.
db.pacientes.updateOne(
  { id_pacientes: 3 },
  { $set: { direccion: "Av. 68 #30-50, Cali" } }
)

//85 Actualiza el inventario del medicamento con id 10 a 200.
db.medicamentos.updateOne(
  { id_medicamento: 10 },
  { $set: { inventario: 200 } }
)


//86 Cambia el tipo de un enfermero con id 4.
db.enfermeros.updateOne(
  { id_enfermeros: 4 },
  { $set: { tipo: "003-A" } }
)

//87 Cambia el nombre del área con id 7.
db.areas.updateOne(
  { id_area: 7 },
  { $set: { nombre: "Oncología" } }
)
//88 Aumenta el salario de los directores en $1,000.}
db.directores.updateMany(
  {},
  { $inc: { salario: 1000000 } }
)

//89 Cambia el nombre del paciente con id 8 a "Carlos Gómez".
db.pacientes.updateOne(
  { id_pacientes: 8 },
  { $set: { nombre: "Carlos Gómez" } }
)

//90 Asigna más enfermeros al hospital con id 2.
db.hospitales.updateOne(
  { id_hospital: 2 },
  { $push: { id_enfermeros: 6 } }
)

// ❌ Consultas de eliminación (91–100)
// 91. Elimina el médico con id 6.

db.medicos.deleteOne({ id_medicos: 6 })

//92 Elimina el seguro con nombre "Seguros Andes".

db.seguros.deleteOne({ nombre: "Seguros Andes" })

//93 Elimina el paciente con id 10.

db.pacientes.deleteOne({ id_pacientes: 10 })

//94 Elimina el tratamiento con id 7.

db.tratamientos.deleteOne({ id_tratamiento: 7 })

//95 Elimina el área con id 2.

db.areas.deleteOne({ id_area: 2 })

//96 Elimina todos los administrativos con salario menor a 2000.

db.administrativos.deleteMany({ salario: { $lt: 2000000 } })

//97 Elimina la visita con id 15.

db.visitas.deleteOne({ id_visita: 15 })

//98 Elimina todos los medicamentos con inventario 0.

db.medicamentos.deleteMany({ inventario: 0 })

//99 Elimina los historiales con id_tratamiento igual a 50.

db.historiales.deleteMany({ id_tratamiento: 50 })

//100 Elimina el hospital con id 3.

db.hospitales.deleteOne({ id_hospital: 3 })

