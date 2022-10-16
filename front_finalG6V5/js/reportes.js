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

    let startDate = $("#startDate").val();
    let endDate = $("#endDate").val();

    console.log(startDate, endDate)

    $.ajax({
        url:`http://155.248.201.73:8080/api/Reservation/report-dates/`+startDate+"/"+endDate,
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaDate(respuesta);
        }
    });
        
}

function pintarRespuestaDate(){

    let completadas = 0;
    let canceladas = 0;

    for(i=0;i<respuesta.length;i++){
    
        if(respuesta[i].status == "cancelled"){
            canceladas++;
            console.log(`Reservas canceladas: ${canceladas}`)
        }else if(respuesta[i].status == "completed"){
            completadas++;
            console.log(`Reservas completas: ${completadas}`)
        }
    }

    let myTable ='<table class="table-auto w-full text-left whitespace-no-wrap">';

    myTable += "<tr>";
    myTable += "<td>" + "Reservas completadas: " + completadas + "</td>";
    myTable += "</tr>";
    myTable += "<tr>";
    myTable += "<td>" + "Reservas canceladas: " + canceladas + "</td>";
    myTable += "</tr>";


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

function pintarCliente(respuesta){

    let myTable = '<table class="table-auto w-full text-left whitespace-no-wrap">';

    let ID = "ID";
    let NAME = "NOMBRE";
    let EMAIL = "CORREO";
    let RESPUESTA= "RESERVAS TOTALES"

    myTable+="<th>"+ID+"</th>";
    myTable+="<th>"+NAME+"</th>";
    myTable+="<th>"+EMAIL+"</th>";
    myTable+="<th>"+RESPUESTA+"</th>";


    for(let i = 0; i < respuesta.length; i++){
        myTable += "<tr>";
        myTable += `<td>${respuesta[i].client.idClient}</td>`;
        myTable += `<td>${respuesta[i].client.name}</td>`;
        myTable += `<td>${respuesta[i].client.email}</td>`;
       // myTable += `<td>Contraseña: ${respuesta[i].client.password}, </td>`;
       // myTable += `<td>Edad: ${respuesta[i].client.age}, </td>`;
        myTable += `<td>${respuesta[i].total} </td>`;
        myTable += "</tr>";
    } 
    myTable += "</table>";
    $("#resultado3").html(myTable);
}