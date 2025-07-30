// Funciones
// 1. Buscar médicos por su salario
function buscarMedicosPorSalarioMayorA(salario) {
  return db.medicos.find({ salario: { "$gt": salario } }).toArray();
  
}
buscarMedicosPorSalarioMayorA(10000000)

// 2. para gregar un director
function insertarDocumentoDirector(id,nombre,salario,tipo) {
  db.directores.insertOne({
    id_director: id,
    nombre: nombre,
    salario: salario,
    tipo: tipo
  });
  print("Documento insertado.");
}
insertarDocumentoDirector(100,"Gerson",1000,"001")

// 3. para gregar un medico
function insertarDocumentoMedico(id,nombre,salario,tipo) {
  db.medicos.insertOne({
    id_medico: id,
    nombre: nombre,
    salario: salario,
    tipo: tipo
  });
  print("Documento insertado.");
}
insertarDocumentoMedico(58,"Dr.juan",100220,"002")

// 4. para gregar un enfermero
function insertarDocumentoEnfermero(id,nombre,salario,tipo) {
  db.enfermeros.insertOne({
    id_enfermero: id,
    nombre: nombre,
    salario: salario,
    tipo: tipo
  });
  print("Documento insertado.");
}
insertarDocumentoEnfermero(80,"perez escamilla",200000,"003")

// 5. para gregar un administrativo
function insertarDocumentoAdministrativo(id,nombre,salario,tipo) {
  db.administrativos.insertOne({
    id_administrativo: id,
    nombre: nombre,
    salario: salario,
    tipo: tipo
  });
  print("Documento insertado.");
}
insertarDocumentoAdministrativo(504,"juliana",5980000,"004")
// 6. para gregar un mantenimiento
function insertarDocumentoMantenimiento(id,nombre,salario,tipo) {
  db.mantenimiento.insertOne({
    id_mantenimiento: id,
    nombre: nombre,
    salario: salario,
    tipo: tipo
  });
  print("Documento insertado.");
}
insertarDocumentoMantenimiento(504,"Santiago Jaimes",5980000,"004")

// 7. para gregar una area
function insertarDocumentoArea(id,nombre,descripcion) {
  db.areas.insertOne({
    id_area: id,
    nombre: nombre,
    descripcion: descripcion
  });
  print("Documento insertado.");
}
insertarDocumentoArea(504,"Santiago Juan","va mejorando poco a poco")




// 8. para agregar un reporte de infraestructura
function insertarDocumentoInfraestructura(id_infraestructura,id_hospital,id_personas_mantenimiento,nombre_lugar,observacion,estado) {
  db.infraestructura.insertOne({
    id_infraestructura :id_infraestructura,
    id_hospital :id_hospital,
    id_personas_mantenimiento : Array.isArray(id_personas_mantenimiento) ? id_personas_mantenimiento : [id_personas_mantenimiento],
    nombre_lugar :nombre_lugar,
    observacion :observacion,
    estado :estado
  },
);
  print("Documento insertado.");
}
insertarDocumentoDirector(60,2,[1,11],"Asensor","Se detuvo el asensor y no respondia a los botones","en reparacion")

// 9. Para agregar un hospital
function insertarDocumentoHospitales(id, nombre, direccion, telefono, id_director, id_medicos, id_enfermeros, id_administrativos, id_mantenimiento, id_areas) {
  db.hospitales.insertOne({
    id_hospital: id,
    nombre: nombre,
    direccion: direccion,
    telefono: telefono,
    id_director: id_director,
    id_medicos: Array.isArray(id_medicos) ? id_medicos : [id_medicos],
    id_enfermeros: Array.isArray(id_enfermeros) ? id_enfermeros : [id_enfermeros],
    id_administrativos: Array.isArray(id_administrativos) ? id_administrativos : [id_administrativos],
    id_mantenimiento: Array.isArray(id_mantenimiento) ? id_mantenimiento : [id_mantenimiento],
    id_areas: Array.isArray(id_areas) ? id_areas : [id_areas]
  });
  print("Documento insertado.");
}



insertarDocumentoHospitales(57,"Hospital Central3","Calle 12389","12341244",44,[58, 59], [80, 81], [14, 15], [52],     [1, 2]    
);



// 10. para gregar un reporte de visita

function insertarDocumentoVisita(id, id_hospital, id_medico, id_enfermeros, observaciones) {
  db.visitas.insertOne({
    id_visita: id,
    id_hospital: id_hospital,
    id_medico: id_medico, 
    id_enfermeros: Array.isArray(id_enfermeros) ? id_enfermeros : [id_enfermeros], // aseguramos array
    observaciones: observaciones
  });
  print("Documento insertado.");
}

insertarDocumentoVisita(57,12,20,[30,20,10],"esta mejor")

//11 insertar documento para medicamnetos


function insertarDocumentoParaMedicamentos(id,nombre,hospital,cantidad) {
  db.medicamnetos.insertOne({
    id_mediacmento: id,
    nombre: nombre,
    id_hospital: hospital,
    inventario:cantidad
  });
  print("Documento insertado.");
}
insertarDocumentoParaMedicamentos(300,"Marihuana medicinal 10gramos",1,300)

// 12. para gregar un reporte de tratamientos

function insertarDocumentoTratamiento(id_tratamiento, id_historial, id_medicamentos, nombre, valoracion) {
  db.tratamientos.insertOne({
    id_tratamiento: id_tratamiento,
    id_historial: id_historial,
    id_medicamentos: Array.isArray(id_medicamentos) ? id_medicamentos : [id_medicamentos],
    nombre: nombre,
    valoracion: valoracion
  });
  print("Tratamiento insertado.");
}
insertarDocumentoTratamiento(10, 20, [300, 301], "Tratamiento de prueba", "Buena respuesta al tratamiento")

// 13. para agregar un paciente
function insertarDocumentoPacientes(id_pacientes, nombre, edad, direccion, id_seguro, telefono) {
  db.pacientes.insertOne({
    id_pacientes:id_pacientes,
    nombre:nombre,
    edad:edad,
    direccion:direccion,  
    id_seguro:id_seguro, 
    telefono:telefono
  });
  print("Documento insertado.");
}
insertarDocumentoDirector(400,"guarzon",17,"Calle 70, Ibagué",78,"6969696969")


// 14. para agregar un paciente
function insertarDocumentoPacientes(id_pacientes, nombre, edad, direccion, id_seguro, telefono) {
  db.pacientes.insertOne({
    id_pacientes:id_pacientes,
    nombre:nombre,
    edad:edad,
    direccion:direccion,  
    id_seguro:id_seguro, 
    telefono:telefono
  });
  print("Documento insertado.");
}
insertarDocumentoDirector(400,"guarzon",17,"Calle 70, Ibagué",78,"6969696969")


// 15. para agregar un seguro
function insertarDocumentoSeguros(id_seguro, nombre, telefono) {
  db.seguros.insertOne({
    id_seguro: id_seguro,
    nombre: nombre,
    telefono: telefono
  });
  print("Documento insertado.");
}
insertarDocumentoDirector(78,"guarzones EPS","666")


// 16.buscar médicos cuyo salario sea menor o igual
function buscarMedicosPorSalarioMenA(salario) {
  return db.medicos.find({ salario: { "$lt": salario } }).toArray();
  
}
buscarMedicosPorSalarioMayorA(10000000)

// 17. buscar salarios de medicos entre 
function buscarMedicosPorRangoSalario(minSalario, maxSalario) {
  return db.medicos.find({
    salario: { 
      $gte: minSalario,
      $lte: maxSalario
    }
  }).toArray();
}
buscarMedicosPorRangoSalario(1000000, 5000000)

// 18. Buscar enfermeros por su nombre sin importar masyusculas o minusculas
function buscarEnfermerosPorNombre(nombre) {
  return db.enfermeros.find({ 
    nombre: { $regex: nombre, $options: "i" } 
  });
}

buscarEnfermerosPorNombre("perez")


// 19. Contar medicos  por hospital
functionbuscarMedicosPorHospital(id_hospital) {
  return db.medicos.countDocuments({ id_hospital: id_hospital });
}

functionbuscarMedicosPorHospital(1)




// 20.buscar pacientes cuya edad sea menor a la edad desedados
function buscarPacientesMenoresA(edad) {
  return db.pacientes.find({ edad: { "$lt": edad } }).toArray();
  
}
buscarPacientesMenoresA(22)
