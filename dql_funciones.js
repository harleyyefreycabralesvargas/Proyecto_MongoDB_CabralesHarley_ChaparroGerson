// Funciones
// 1. Buscar médicos por su salario
function buscarMedicosPorSalarioMayorA(salario) {
  return db.medicos.find({ salario: { "$gt": salario } }).toArray();
  
}

buscarMedicosPorSalarioMayorA(10000000)
//2 insertar documento para medicamnetos


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
// 3. para gregar un director
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
// 4. para gregar un medico
function insertarDocumentoMedico(id,nombre,salario,tipo) {
  db.medico.insertOne({
    id_medico: id,
    nombre: nombre,
    salario: salario,
    tipo: tipo
  });
  print("Documento insertado.");
}
insertarDocumentoMedico(58,"Dr.juan",100220,"002")
// 5. para gregar un enfermero
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
// 6. para gregar un administrativo
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
// 7. para gregar un administrativo
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
// 8. para gregar un hospital
function insertarDocumentohospitales(id, nombre, direccion, telefono, id_director, id_medicos, id_enfermeros, id_administrativos, id_mantenimiento, id_areas) {
  db.hospitales.insertOne({
    id_hospital: id,
    nombre: nombre,
    direccion: direccion,
    telefono: telefono,
    id_director: id_director,
    id_medicos: id_medicos,
    id_enfermeros: id_enfermeros,
    id_administrativos: id_administrativos,
    id_mantenimiento: id_mantenimiento,
    id_areas: id_areas,
  });
  print("Documento insertado.");
}
insertarDocumentoHospitales(57,"Hospital Central3","Calle 12389","12341244",44,58,80,14,52,1)

// 9. para gregar un seguro
function insertarDocumentoseguros(id_seguro, nombre, telefono) {
  db.administrativos.insertOne({
    id_seguro: id_seguro,
    nombre: nombre,
    telefono: telefono
  });
  print("Documento insertado.");
}
insertarDocumentoDirector(500,"guarzones EPS","666")


// 10. para gregar un reporte de infraestru
r
function insertarDocumentoseguros(id_seguro, nombre, telefono) {
  db.administrativos.insertOne({
    id_seguro: id_seguro,
    nombre: nombre,
    telefono: telefono
  });
  print("Documento insertado.");
}
insertarDocumentoDirector(500,"guarzones EPS","666")

// 11. para gregar un reporte de visita
function insertarDocumentoVisita(id,id_hospital, id_medicos, id_enfermeros, id_administrativos, observaciones) {
  db.visitas.insertOne({
    id_visita: id,
    id_hospital: id_hospital,
    id_medicos: id_medicos,
    id_enfermeros: id_enfermeros,
    id_administrativos: id_administrativos,
    observaciones: observaciones,

  });
  print("Documento insertado.");
}
insertarDocumentoVisita(57,12,20,50,44,"esta mejor")

