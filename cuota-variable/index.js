const Datos = document.getElementById('tabla-de-amortizacion')
// base es un arreglo vacio al cual le pasaremos un objeto
let base = []
const calcular = document.getElementById("enviar")
calcular.addEventListener('submit', generarAmortizacion)
// Funcion generar amortización.
function generarAmortizacion (e) {
     e.preventDefault()
    // variables
        let Monto= document.getElementById("Monto").value
        const Interes= document.getElementById("Interes").value
        const Tiempo= document.getElementById("Tiempo").value
        let amortizacionConstante
        let PagoInteres = 0
        let Cuota= 0
    // declaramos un arreglo para la fechas
        let Fechas = []
        let FechaActual = Date.now()
        let MesActual = moment(FechaActual)
        MesActual.add(1, 'month')
    // formula para calcular la cuota
    amortizacionConstante = Monto/Tiempo
    // llenar los datos en un objeto
       for(let i=1; i<= Tiempo; i++){
           PagoInteres = Monto * (Interes/100)
           Cuota = amortizacionConstante + PagoInteres
           Monto = Monto - amortizacionConstante

           //obtener la fecha 
           Fechas[i] = MesActual.format('DD-MM-YYYY');
           MesActual.add(1, 'month');

           // creamos un objeto y lo enviamos al arreglo
          let tabla = {
            Fechas:Fechas[i],
            Cuota:Cuota,
            PagoInteres:PagoInteres,
            amortizacionConstante:amortizacionConstante,
            Monto:Monto}
            base.push(tabla)
       
        // ese arreglo lo enviamos al localstorage
        localStorage.setItem('tabla1',JSON.stringify(base)) 
    

       }
    //refrescamos la pagina
    location.reload()
    //resetiamos el formulario
    calcular.reset()
    // cerrar el modal
    $('#staticBackdrop').modal('hide')
}

// Comprueba que haya elementos en Local Storage
function obtenerTablaLocalStorage() {
    let Tablas;

    // comprobamos si hay algo en localStorage
    if(localStorage.getItem('tabla1') === null) {
        Tablas = []
    } else {
        Tablas = JSON.parse( localStorage.getItem('tabla1') )
    }
    return Tablas
}
document.addEventListener('DOMContentLoaded', leerLocalStorage);
function leerLocalStorage() {
    let Tablas;

    Tablas = obtenerTablaLocalStorage();

    Tablas.forEach(function(tabla){
        // constrir el template
        const llenartabla = document.createElement('tr')
        llenartabla.innerHTML=`
            <td>${tabla.Fechas}</td>
            <td>${tabla.Cuota.toFixed(3)}</td>
            <td>${tabla.amortizacionConstante.toFixed(3)}</td>
            <td>${tabla.PagoInteres.toFixed(3)}</td>
            <td>${tabla.Monto.toFixed(3)}</td>
        `
      Datos.appendChild(llenartabla)
    })
}