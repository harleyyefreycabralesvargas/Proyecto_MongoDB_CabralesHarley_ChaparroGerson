

db.medicos.insertMany([
    {
        id_medicos: 1,
        nombre: "Dr. Juan Pérez",
        salario: 5000000,
        tipo: "002"
    },
    {
        id_medicos: 2,
        nombre: "Dra. María González",
        salario: 6200000,
        tipo: "002"
    },
    {
        id_medicos: 3,
        nombre: "Dr. Carlos Ramírez",
        salario: 5800000,
        tipo: "002"
    },
    {
        id_medicos: 4,
        nombre: "Dra. Laura Castillo",
        salario: 5400000,
        tipo: "002"
    },
    {
        id_medicos: 5,
        nombre: "Dr. Andrés Torres",
        salario: 6000000,
        tipo: "002"
    }
]);

db.enfermeros.insertMany([
    {
        id_enfermeros: 1,
        nombre: "Enf. Camila Ríos",
        salario: 3200000,
        tipo: "003"
    },
    {
        id_enfermeros: 2,
        nombre: "Enf. Jorge López",
        salario: 3000000,
        tipo: "003"
    },
    {
        id_enfermeros: 3,
        nombre: "Enf. Natalia Díaz",
        salario: 3100000,
        tipo: "003"
    },
    {
        id_enfermeros: 4,
        nombre: "Enf. Pedro Salazar",
        salario: 2950000,
        tipo: "003"
    },
    {
        id_enfermeros: 5,
        nombre: "Enf. Juliana Paredes",
        salario: 3300000,
        tipo: "003"
    }
]);
db.administrativos.insertMany([
    {
        id_administrativos: 1,
        nombre: "Luis Mendoza",
        salario: 4000000,
        tipo: "004"
    },
    {
        id_administrativos: 2,
        nombre: "Marta Ruiz",
        salario: 4200000,
        tipo: "004"
    },
    {
        id_administrativos: 3,
        nombre: "Carlos Benítez",
        salario: 3900000,
        tipo: "004"
    },
    {
        id_administrativos: 4,
        nombre: "Sofía Vargas",
        salario: 4100000,
        tipo: "004"
    },
    {
        id_administrativos: 5,
        nombre: "Javier Pardo",
        salario: 4050000,
        tipo: "004"
    }
]);


































































db.directores.insertMany([
    {
        id_directores: 1,
        nombre: "Dr. Fernando Gaitán",
        salario: 8000000,
        tipo: "001"
    },
    {
        id_directores: 2,
        nombre: "Dra. Liliana Restrepo",
        salario: 8500000,
        tipo: "001"
    },
    {
        id_directores: 3,
        nombre: "Dr. Miguel Parra",
        salario: 7900000,
        tipo: "001"
    },
    {
        id_directores: 4,
        nombre: "Dra. Carolina Mendoza",
        salario: 8200000,
        tipo: "001"
    },
    {
        id_directores: 5,
        nombre: "Dr. Jorge Franco",
        salario: 8700000,
        tipo: "001"
    }
]);
db.mantenimiento.insertMany([
    {
        id_mantenimiento: 1,
        nombre: "Luis Cárdenas",
        salario: 2500000,
        tipo: "005"
    },
    {
        id_mantenimiento: 2,
        nombre: "Ana Morales",
        salario: 2400000,
        tipo: "005"
    },
    {
        id_mantenimiento: 3,
        nombre: "Diego Figueroa",
        salario: 2550000,
        tipo: "005"
    },
    {
        id_mantenimiento: 4,
        nombre: "Santiago Herrera",
        salario: 2450000,
        tipo: "005"
    },
    {
        id_mantenimiento: 5,
        nombre: "Paola Jiménez",
        salario: 2600000,
        tipo: "005"
    }
]);

db.areas.insertMany([
    {
        id_area: 1,
        nombre: "Urgencias",
        
    },
    {
        id_area: 2,
        nombre: "Pediatría",
        
    },
    {
        id_area: 3,
        nombre: "Cirugía",
        
    },
    {
        id_area: 4,
        nombre: "Laboratorio",
        
    },
    {
        id_area: 5,
        nombre: "Hospitalización",
        
    }
]);
db.hospital.insertMany([
    {
        id_hospital: 1,
        nombre: "Hospital San José",
        direccion: "Calle 123 #45-67",
        telefono: "1234567",
        id_director: 1,
        id_medicos: [1, 2],
        id_enfermeros: [1, 2, 3],
        id_administrativos: [1],
        id_mantenimiento: [1, 2],
        id_areas: [1, 2]
    },
    {
        id_hospital: 2,
        nombre: "Clínica El Prado",
        direccion: "Carrera 9 #10-11",
        telefono: "7654321",
        id_director: 2,
        id_medicos: [3, 4],
        id_enfermeros: [4, 5],
        id_administrativos: [2, 3],
        id_mantenimiento: [3],
        id_areas: [3]
    },
    {
        id_hospital: 3,
        nombre: "Hospital Central",
        direccion: "Av. Las Palmas #89-01",
        telefono: "3216547",
        id_director: 3,
        id_medicos: [5],
        id_enfermeros: [1],
        id_administrativos: [4],
        id_mantenimiento: [4],
        id_areas: [4]
    },
    {
        id_hospital: 4,
        nombre: "Clínica del Norte",
        direccion: "Calle 45 #23-45",
        telefono: "9876543",
        id_director: 4,
        id_medicos: [1, 3],
        id_enfermeros: [2, 5],
        id_administrativos: [5],
        id_mantenimiento: [5],
        id_areas: [5]
    },
    {
        id_hospital: 5,
        nombre: "Hospital Universitario",
        direccion: "Carrera 30 #15-50",
        telefono: "1122334",
        id_director: 5,
        id_medicos: [2, 4],
        id_enfermeros: [3],
        id_administrativos: [3, 4],
        id_mantenimiento: [2],
        id_areas: [1, 3]
    }
]);
db.visita.insertMany([
    {
        id_visita: 1,
        id_hospital: 1,
        id_medico: 1,
        id_enfermeros: [1, 2],
        observaciones: "Paciente estable. Revisión de signos vitales.",
        fecha: new Date("2025-07-27T09:00:00Z")
    },
    {
        id_visita: 2,
        id_hospital: 2,
        id_medico: 3,
        id_enfermeros: [3],
        observaciones: "Se administró medicación postoperatoria.",
        fecha: new Date("2025-07-21T11:30:00Z")
    },
    {
        id_visita: 3,
        id_hospital: 3,
        id_medico: 2,
        id_enfermeros: [4, 5],
        observaciones: "Cambio de vendajes y control de temperatura.",
        fecha: new Date("2025-07-22T14:45:00Z")
    },
    {
        id_visita: 4,
        id_hospital: 4,
        id_medico: 4,
        id_enfermeros: [2],
        observaciones: "Consulta general, no se presentan anomalías.",
        fecha: new Date("2025-07-23T08:15:00Z")
    },
    {
        id_visita: 5,
        id_hospital: 5,
        id_medico: 5,
        id_enfermeros: [1, 3],
        observaciones: "Evaluación de rutina, seguimiento semanal.",
        fecha: new Date("2025-07-24T10:00:00Z")
    }
]);
db.medicamentos.insertMany([
    {
        id_medicamento: 1,
        nombre: "Paracetamol",
        inventario: 150,
        descripcion: "Analgésico y antipirético para dolor y fiebre."
    },
    {
        id_medicamento: 2,
        nombre: "Amoxicilina",
        inventario: 80,
        descripcion: "Antibiótico de amplio espectro."
    },
    {
        id_medicamento: 3,
        nombre: "Ibuprofeno",
        inventario: 120,
        descripcion: "Antiinflamatorio no esteroideo."
    },
    {
        id_medicamento: 4,
        nombre: "Loratadina",
        inventario: 60,
        descripcion: "Antihistamínico para alergias."
    },
    {
        id_medicamento: 5,
        nombre: "Metformina",
        inventario: 40,
        descripcion: "Medicamento para control de diabetes tipo 2."
    }
]);
db.tratamiento.insertMany([
    {
        id_tratamiento: 1,
        id_medicamentos: [1, 3],
        id_historial: 1,
        id_visita: 1,
        fecha: new Date("2025-07-20T09:00:00Z")
    },
    {
        id_tratamiento: 2,
        id_medicamentos: [2],
        id_historial: 2,
        id_visita: 2,
        fecha: new Date("2025-07-21T11:30:00Z")
    },
    {
        id_tratamiento: 3,
        id_medicamentos: [4, 5],
        id_historial: 3,
        id_visita: 3,
        fecha: new Date("2025-07-22T14:45:00Z")
    },
    {
        id_tratamiento: 4,
        id_medicamentos: [1],
        id_historial: 4,
        id_visita: 4,
        fecha: new Date("2025-07-23T08:15:00Z")
    },
    {
        id_tratamiento: 5,
        id_medicamentos: [3, 5],
        id_historial: 5,
        id_visita: 5,
        fecha: new Date("2025-07-24T10:00:00Z")
    }
]);
db.historial.insertMany([
    { id_historial: 1, id_paciente: 1, id_tratamiento: 1 },
    { id_historial: 2, id_paciente: 2, id_tratamiento: 2 },
    { id_historial: 3, id_paciente: 3, id_tratamiento: 3 },
    { id_historial: 4, id_paciente: 4, id_tratamiento: 4 },
    { id_historial: 5, id_paciente: 5, id_tratamiento: 5 }
]);


db.pacientes.insertMany([
  {
    id_pacientes: 1,
    nombre: "Juan Pérez",
    edad: 35,
    direccion: "Cra 15 #45-67, Bogotá",
    id_seguro: 1,
    telefono: "3101234567"
  },
  {
    id_pacientes: 2,
    nombre: "María Rodríguez",
    edad: 28,
    direccion: "Calle 100 #10-20, Medellín",
    id_seguro: 2,
    telefono: "3123456789"
  },
  {
    id_pacientes: 3,
    nombre: "Carlos Gómez",
    edad: 42,
    direccion: "Av. 68 #30-45, Cali",
    id_seguro: 3,
    telefono: "3117896543"
  },
  {
    id_pacientes: 4,
    nombre: "Laura Martínez",
    edad: 50,
    direccion: "Calle 26 #75-10, Bogotá",
    id_seguro: 4,
    telefono: "3204567890"
  },
  {
    id_pacientes: 5,
    nombre: "Andrés Torres",
    edad: 31,
    direccion: "Cra 50 #20-18, Bucaramanga",
    id_seguro: 5,
    telefono: "3009876543"
  }
])


db.seguros.insertMany([
  {
    id_seguro: 1,
    nombre: "SURA EPS",
    telefono: "6044441757"
  },
  {
    id_seguro: 2,
    nombre: "Sanitas EPS",
    telefono: "6013759000"
  },
  {
    id_seguro: 3,
    nombre: "Nueva EPS",
    telefono: "6013077022"
  },
  {
    id_seguro: 4,
    nombre: "Compensar EPS",
    telefono: "6013077001"
  },
  {
    id_seguro: 5,
    nombre: "Aliansalud EPS",
    telefono: "6017561616"
  }
])