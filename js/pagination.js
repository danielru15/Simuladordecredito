$(document).ready(function () {
    $('#tabla').DataTable({
        language: {
            processing: "Tratamiento en curso...",
            lengthMenu: "Mostrar _MENU_ resultados",
            info: "Mostrando del item _START_ al _END_ de un total de _TOTAL_ resultados",
            infoEmpty: "No existen datos.",
            infoFiltered: "(filtrado de _MAX_ elementos en total)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron datos con tu busqueda",
            emptyTable: "No hay datos disponibles en la tabla.",
            paginate: {
                first: "Primero",
                previous: "Anterior",
                next: "Siguiente",
                last: "Ultimo"
            },
            aria: {
                sortAscending: ": active para ordenar la columna en orden ascendente",
                sortDescending: ": active para ordenar la columna en orden descendente"
            }
        },
        "ordering": false,
        "bFilter": false,
        "lengthMenu": [ [12, 24, 36,48,60,-1], [12, 24, 36,48,60, "All"] ],
        "pageLength": 12
       
    });
});

