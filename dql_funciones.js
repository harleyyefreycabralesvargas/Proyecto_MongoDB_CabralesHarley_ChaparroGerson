// Funciones
// 1. Buscar médicos por su salario
function buscarMedicosPorSlarioMayorA(salario) {
    return db.medicos.find({},{salario:{$gt:salario}}).toArray();
}
