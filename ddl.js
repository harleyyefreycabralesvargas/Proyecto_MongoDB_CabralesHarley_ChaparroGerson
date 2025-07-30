use SitemaHospitalario;

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
db.directores.createIndex({ id_directores: 1 }, { unique: true })

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
db.medicos.createIndex({ id_medicos: 1 }, { unique: true })
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
db.enfermeros.createIndex({ id_enfermeros: 1 }, { unique: true })

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
db.administrativos.createIndex({ id_administrativos: 1 }, { unique: true })
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
db.mantenimiento.createIndex({ id_mantenimiento: 1 }, { unique: true })


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
db.areas.createIndex({ id_area: 1 }, { unique: true })

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
ñ
db.infraestructura.createIndex({ id_infraestructura: 1 }, { unique: true })

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
db.hospitales.createIndex({ id_hospital: 1 }, { unique: true })


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
db.visitas.createIndex({ id_visita: 1 }, { unique: true })


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
db.medicamentos.createIndex({ id_medicamento: 1 }, { unique: true })


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
db.tratamientos.createIndex({ id_tratamiento: 1, id_visita: 1 }, { unique: true })


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
db.historiales.createIndex({ id_tratamiento: 1 }, { unique: true })










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

db.pacientes.createIndex({ id_pacientes: 1 }, { unique: true })


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
db.seguros.createIndex({ id_seguro: 1 }, { unique: true })

