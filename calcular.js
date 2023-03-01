function calcular(){
    var P1 = document.getElementById('P1').value;
    var P2 = document.getElementById('P2').value;
    var P3 = document.getElementById('P3').value;
    var P4 = document.getElementById('P4').value;
    var P5 = document.getElementById('P5').value;
    var P6 = document.getElementById('P6').value;
    var P7 = document.getElementById('P7').value;
    var P8 = document.getElementById('P8').value;
    var P9 = 1;
    var L = document.getElementById('L').value;

    var costo_mantenimiento = L*(P3-(P1+P2));
    var costo_Reingenieria = P6-(P4+P3)*(L-P8)-(P7*P9)
    var costo_beneficio = costo_Reingenieria-costo_mantenimiento;

    document.getElementById('costo_mantenimiento').innerHTML="costo_mantenimiento = "+costo_mantenimiento;
    document.getElementById('costo_reingenieria').innerHTML="costo_reingenieria = "+costo_Reingenieria;
    document.getElementById('costo_beneficio').innerHTML="costo_beneficio = "+costo_beneficio;

    // console.log("costo_mantenimiento: ",costo_mantenimiento," cosot_Reingenieria: ",cosot_Reingenieria)
    // console.log("costo_beneficio: ",costo_beneficio)
}

