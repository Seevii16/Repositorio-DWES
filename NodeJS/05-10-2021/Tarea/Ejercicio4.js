const estudiantes ={ 'nombre': "John", "notas":[3,5,4]};

const NombresYnotas = estudiantes =>
estudiantes.map(estudiantes =>({
    nombre : estudiantes.nombre,
    notaMax: Math.max(...estudiantes.notas,0)
}))



