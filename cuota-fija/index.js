const Datos = document.getElementById('tabla-de-amortizacion')
const calcular = document.getElementById("enviar")
calcular.addEventListener('submit', generarAmortizacion)
// Funcion generar amortización.
function generarAmortizacion (e) {
     e.preventDefault()
     while(Datos.firstChild){
        Datos.removeChild(Datos.firstChild);
    }
    // variables
        let Monto= document.getElementById("Monto").value
        const Interes= document.getElementById("Interes").value
        const Tiempo= document.getElementById("Tiempo").value
        let PagoInteres = 0
        let PagoCapital = 0
        let Cuota= 0
    // declaramos un arreglo para la fechas
        let Fechas = []
        let FechaActual = Date.now()
        let MesActual = moment(FechaActual)
        MesActual.add(1, 'month');
    // formula para calcular la cuota
        Cuota = Monto * (Math.pow(1+Interes/100, Tiempo)
                      *Interes/100)/(Math.pow(1+Interes/100, Tiempo)-1)
    // llenar los datos de la tabla
       for(let i = 1; i <= Tiempo; i++){
        PagoInteres = parseFloat(Monto*(Interes/100));
        PagoCapital = Cuota - PagoInteres;
        Monto = parseFloat(Monto- PagoCapital)

        //Formato fechas
        Fechas[i] = MesActual.format('DD-MM-YYYY');
        MesActual.add(1, 'month');

        //insertar datos en la tabla
       const llenartabla = document.createElement('tr')
        llenartabla.innerHTML=`
    
            <td>${Fechas[i]}</td>
            <td>${Cuota.toFixed(3)}</td>
            <td>${PagoCapital.toFixed(3)}</td>
            <td>${PagoInteres.toFixed(3)}</td>
            <td>${Monto.toFixed(3)}</td>
        `
    Datos.appendChild(llenartabla)
    }
    //resetiamos el formulario
    calcular.reset()
}
