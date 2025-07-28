// 🔍 Consultas de búsqueda (1–20)
// ¿Qué médicos ganan más de 5000?

db.medicos.find({ salario: { $gt: 5000000 } })


// Médicos cuyo nombre empieza por "Dr."
db.medicos.find({ nombre: { $regex: "^Dr" } })


// Administrativos con salario menor a 4 millones
db.administrativos.find({ salario: { $lt: 4000000 } })



// ¿Qué efermero se llaman "camilla"?
db.enfermeros.find({ nombre: { $regex: "Camila" } })



// Directores cuyo nombre termina en "z"
db.directores.find({ nombre: { $regex: "z$" } })


// Mantenimiento cuyo salario esté entre 2.4 y 2.6 millones

db.mantenimiento.find({ salario: { $gte: 2400000, $lte: 2600000 } })

// Pacientes cuyo nombre empiece por "L"

db.pacientes.find({ nombre: { $regex: "^L" } })

//  Pacientes que viven en Bogotá
db.pacientes.find({ direccion: { $regex: "Bogotá" } })


//  Medicamentos que contienen "ina" 

db.medicamentos.find({ nombre: { $regex: "ina" } })

//  Áreas que contengan la palabra "ción" (Hospitalización, etc.)

db.areas.find({ nombre: { $regex: "ción" } })


// ¿Qué pacientes tienen un seguro con id 10?
db.pacientes.find({ id_seguro: 10 })


// ¿Qué medicamentos tienen inventario menor a 100?
db.medicamentos.find({ inventario: { $lt: 100 } })


// Enfermeros cuyo salario es mayor o igual a 3 millones

db.enfermeros.find({ salario: { $gte: 3000000 } })


// ¿Qué visitas fueron realizadas por el médico con id 5?

db.visita.find({ id_medico: 5 })


// ¿Qué pacientes viven en "Calle 45"?
db.pacientes.find({ direccion: { $regex: "Calle 45" } })


// ¿Qué seguros tienen como nombre "Salud Total"?

db.seguros.find({ nombre: "Salud Total" })


// ¿Qué tratamientos tienen más de 2 medicamentos?
db.tratamiento.find({ $expr: { $gt: [{ $size: "$id_medicamentos" }, 2] } })


// ¿Qué hospitales tienen un director con id 3?
db.hospital.find({ id_director: 3 })


// ¿Qué pacientes tienen un número de teléfono que comienza con "312"?

db.pacientes.find({ telefono: { $regex: "^312" } })


// ¿Qué historial tiene un id_tratamiento igual a 50?

db.historial.find({ id_tratamiento: 50 })


// 📊 Consultas de agregación (21–40)
// ¿Cuál es el salario promedio de los médicos?
db.medicos.aggregate({
    $group: {
        _id: null,
        salarioPromedio: { $avg: '$salario' }
    }
})
// ¿Cuál es el salario máximo entre los enfermeros?
db.enfermeros.aggregate({
    $group: {
        _id: null,
        salarioPromedio: { $max: '$salario' }
    }
})
// ¿Cuántos administrativos hay por tipo?
db.administrativos.aggregate({
    $group: {
        _id: '$tipo',
        totalAdministraticos: { $sum: 1 }
    }
})
// ¿Cuántos médicos hay en total?
db.medicos.aggregate({
    $group: {
        _id: '$tipo',
        totalMedicos: { $sum: 1 }
    }
})
// ¿Cuántos pacientes hay por cada seguro?
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
// ¿Cuál es la edad promedio de los pacientes?

db.pacientes.aggregate([
    {
        $group: {
            _id: null,
            edad_promedio: { $avg: "$edad" }
        }
    }
])

// ¿Cuál es el inventario total de medicamentos?
db.medicamentos.aggregate({
    $group: {
        _id: '$inventario',
        totalInventario: { $ }
    }
})

// ¿Cuántos tratamientos se registraron por mes?


db.tratamiento.aggregate([
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
        $sort: { "year": 1, "month": 1 }
    }
])



// ¿Cuántas visitas ha hecho cada médico?

db.visita.aggregate([
    {
        $group: {
            _id: "$id_medico",
            total_visitas: { $sum: 1 }
        }
    }
])


// ¿Cuántos medicamentos estan registrados?
db.medicamentos.countDocuments()


// ¿Cuál es el nombre del medicamento más utilizado?

db.medicamentos.aggregate([{
    $lookup: {
        from: "tratamiento",
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
}])


// ¿Qué hospital tiene menos personal en total?
db.hospital.aggregate([
    {
      $lookup: {
        from: "medico",
        localField: "id_hospital",
        foreignField: "id_hospital",
        as: "medico"
      }
    },
    {
      $lookup: {
        from: "enfermeros",
        localField: "id_hospital",
        foreignField: "id_hospital",
        as: "enfermeros"
      }
    },
    {
      $lookup: {
        from: "directores",
        localField: "id_director",
        foreignField: "id_director",
        as: "director"
      }
    },
    {
      $lookup: {
        from: "administrativos",
        localField: "id_hospital",
        foreignField: "id_hospital",
        as: "administrativos"
      }
    },
    {
      $lookup: {
        from: "mantenimiento",
        localField: "id_hospital",
        foreignField: "id_hospital",
        as: "mantenimiento" 
      }
    },
    {
      $addFields: {
        total_personal: {
          $add: [
            { $size: "$medico" },
            { $size: "$enfermeros" },
            { $size: "$administrativos" },
            { $size: "$mantenimiento" },
            { $size: "$director" } 
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
  


// ¿Cuántas áreas tiene cada hospital?

    
db.hospital.aggregate([
    {
      $project: {
        nombre: 1,
        total_areas: { $size: "$id_areas" }
      }
    }
  ])
  


// ¿Cuántos medicos tiene cada hospital?

db.hospital.aggregate([
    {
      $project: {
        nombre: 1,
        total_medicos: { $size: "$id_medicos" }
      }
    }
  ])
  

// ¿Cuál es el número de pacientes por rango de edad?

db.pacientes.aggregate([
    {
      $bucket: {
        groupBy: "$edad"
        boundaries: [0, 19, 36, 51, 200],
        default: "Otro",
        output: {
          total_pacientes: { $sum: 1 }
        }
      }
    }
  ])
  

// ¿Cuántos medicamentos hay por primera letra del nombre?

// ¿Qué tipo de empleados gana más en promedio?

// ¿Cuál es el salario total de todos los administrativos?

// ¿Qué seguros tienen más de 5 pacientes afiliados?

// ¿Cuántos directores hay registrados?
db.directores.countDocuments()


// 🔗 Consultas con $lookup (41–60)
// Muestra los historiales con los datos del paciente.
db.historial.aggregate([
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
// Muestra las visitas con los datos del médico.
db.visita.aggregate([{
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
// Muestra los tratamientos con los medicamentos detallados.
db.tratamiento.aggregate([{
    $lookup:{
        from: "medicamentos",
        localField: "id_medicamentos",
        foreignField: "id_medicamento",
        as: "medicamentos"
    },
},
{
    $unwind: "$medicamentos"
},
{
    $group: {
        _id: "$_id",
        id_tratamiento:{ $first: "$id_tratamiento" },
        id_visita: { $first: "$id_visita" },
        id_historial: { $first: "$id_historial" },
        medicamentos: { $push: "$medicamentos" },
        fecha:{ $first: "$fecha" }
      }
}   
])
// Muestra los hospitales con los nombres de los directores.
db.hospital.aggregate([{
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
id_hospital: 1,XSAS
nombre: 1,
direccion:1,
telefono: 1,
director:'$directores.nombre',
id_medicos: 1,
id_enfermeros: 1,
id_administrativos: 1,
id_mantenimiento: 1,
id_areas:1,
    }
}])
// Muestra los pacientes con los datos del seguro.

// Muestra los hospitales con el detalle de sus áreas.

// Muestra las visitas con enfermeros detallados.

// Muestra los historiales con tratamientos detallados.

// Muestra los tratamientos con la visita correspondiente.

// Muestra los hospitales con todos los médicos asignados.

// Muestra los médicos con el hospital al que pertenecen.

// Muestra las áreas con los hospitales a los que pertenecen.

// Muestra los pacientes con su historial clínico.

// Muestra los medicamentos con los tratamientos en los que se usan.

// Muestra los seguros con la lista de pacientes afiliados.

// Muestra los directores con el hospital que dirigen.


// Muestra las visitas con observaciones y datos del paciente.

// Muestra los tratamientos agrupados por médico.

// Muestra los médicos con el número de visitas realizadas.

// Muestra los administrativos con los hospitales donde trabajan.

// ➕ Consultas de inserción (61–80)
// Inserta un nuevo médico llamado "Luis Rojas".
db.medicos.insertOne({
    id_medicos: 6,
    nombre: "Luis Rojas",
    salario: 5500000,
    tipo: "002"
})


// Inserta una enfermera llamada "Carla Torres".
db.enfermeros.insertOne({
    id_enfermeros: 6,
    nombre: "Carla Torres",
    salario: 3150000,
    tipo: "003"
})


// Inserta un nuevo administrativo con salario $2,200.
db.administrativos.insertOne({
    id_administrativos: 6,
    nombre: "Nombre Administrativo",
    salario: 2200000,
    tipo: "004"
})


// Inserta un director con nombre "Marta López".
db.directores.insertOne({
    id_directores: 6,
    nombre: "Marta López",
    salario: 8300000,
    tipo: "001"
})


// Inserta un personal de mantenimiento con tipo "jornada completa".

db.mantenimiento.insertOne({
    id_mantenimiento: 6,
    nombre: "Nombre Mantenimiento",
    salario: 2600000,
    tipo: "005",
    jornada: "jornada completa"
})





// Inserta un área llamada "UCI".
db.areas.insertOne({
  id_area: 6,
  nombre: "UCI"
})


// Inserta una visita con fecha de hoy.
db.visita.insertOne({
  id_visita: 9,
  id_hospital: 1,
  id_medico: 1,
  id_enfermeros: [1, 2],
  observaciones: "Paciente estable. Revisión de signos vitales.",
  fecha: new Date("2025-07-27T09:00:00Z")
})


// Inserta un medicamento llamado "Paracetamol".
db.medicamentos.insertOne({
  id_medicamento: 6,
  nombre: "Paracetamol",
  inventario: 100,
  descripcion: "Analgésico y antipirético para dolor y fiebre."
})


// Inserta un tratamiento con dos medicamentos.
db.tratamiento.insertOne({
  id_tratamiento: 7,
  id_medicamentos: [2, 4]
  id_historial: 7,
  id_visita: 7,
  fecha: new Date("2025-07-28T10:00:00Z")
})


// Inserta un historial clínico nuevo.
db.historial.insertOne({
  id_historial: 6,
  id_paciente: 6,      
  id_tratamiento: 6    
})


// Inserta un paciente llamado "Julián Pérez".
db.pacientes.insertOne({
  id_pacientes: 6,
  nombre: "Julián Pérez",
  edad: 29,
  direccion: "Dirección ejemplo",
  id_seguro: 1,           
  telefono: "3001234567"
})


// Inserta un seguro llamado "Salud Viva".
db.seguros.insertOne({
  id_seguro: 6,
  nombre: "Salud Viva",
  telefono: "6001234567"
})


// Inserta un hospital con 3 médicos y 2 enfermeros.
db.hospital.insertOne({
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


// Inserta un área llamada "Pediatría".

db.areas.insertOne({
  id_area: 7,
  nombre: "Pediatría"
})

// Inserta un paciente con seguro id 20 y edad 45.
db.pacientes.insertOne({
  id_pacientes: 20,
  nombre: "Gerson Chaparro",
  edad: 45,
  direccion: "Dirección ejemplo",
  id_seguro: 1,           
  telefono: "3001234567"
})

// Inserta un medicamento con inventario de 1000.
db.medicamentos.insertOne({
  id_medicamento: 6,
  nombre: "petronazol",
  inventario: 1000,
  descripcion: "Muy fuerte."
})


// Inserta un historial con tratamiento id 50.
db.historial.insertOne({
  id_historial: 7,
  id_paciente: 5,       
  id_tratamiento: 50
})


// Inserta un director con salario $8,000.
db.directores.insertOne({
  id_directores: 6,
  nombre: "Harley Cabrales",
  salario: 8000000,
  tipo: "001"
})


// Inserta un administrativo con tipo "Contador".
db.administrativos.insertOne({
  id_administrativos: 8,
  nombre: "Carlos Mendoza",
  salario: 3200000,
  tipo: "Contador"
})


// 🔄 Consultas de actualización (81–90)
// Aumenta el salario de todos los médicos en 10%.

// Cambia el nombre del hospital con id 1.

// Cambia el teléfono del seguro con id 5.

// Cambia la dirección del paciente con id 3.

// Actualiza el inventario del medicamento con id 10 a 200.

// Cambia el tipo de un enfermero con id 4.

// Cambia el nombre del área con id 7.

// Aumenta el salario de los directores en $1,000.

// Cambia el nombre del paciente con id 8 a "Carlos Gómez".

// Asigna más enfermeros al hospital con id 2.

// ❌ Consultas de eliminación (91–100)
// Elimina el médico con id 6.

// Elimina el seguro con nombre "Seguros Andes".

// Elimina el paciente con id 10.

// Elimina el tratamiento con id 7.

// Elimina el área con id 2.

// Elimina todos los administrativos con salario menor a 2000.

// Elimina la visita con id 15.

// Elimina todos los medicamentos con inventario 0.

// Elimina los historiales con id_tratamiento igual a 50.

// Elimina el hospital con id 3.

