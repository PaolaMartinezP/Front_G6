function traerReporteStatus(){
    $.ajax({
        url:"http://155.248.201.73:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            pintarStatus(respuesta);
        }
    });
}

function  pintarStatus(json_maquinas){

    let myTable="<table>";
    

        myTable+="<tr>";
        myTable+="<td>"+"RESERVAS COMPLETADAS:"+json_maquinas.completed+"</td>";
       myTable+="</tr>"
       myTable+="<tr>"
        myTable+="<td>"+"RESERVAS CANCELADAS:"+json_maquinas.cancelled+"</td>";
        myTable+="</tr>";
  
    myTable+="</table>";
    $("#resultadoStatus").html(myTable);
}

function traerReportesFechas(){

    var fechaInicio = document.getElementById("RstarDate").value;
    var fechaCierre = document.getElementById("RdevolutionDate").value;
    console.log(fechaInicio);
    console.log(fechaCierre);
    
        $.ajax({
            url:"http://155.248.201.73:80/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaDate(respuesta);
            }
        });
    
    $.ajax({
        url:"http://155.248.201.73/api/Reservation/report-dates/"+dato1+"/"+dato2,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            pintarFechas(respuesta);
            console.log(respuesta);
        }
    });

}

function pintarRespuestaDate(){

    let myTable ="<table>";
   

    for(i=0;i<respuesta.length;i++){
    
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";
        myTable+="</tr>";   
    }
   
    myTable+="</table>";
    $("#resultadoDate").html(myTable);
   
}




function traerReportesClientes(){
    
    $.ajax({
        url:"http://155.248.201.73:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            pintarCliente(respuesta);
        }
    });
}

function pintarCliente(){

}