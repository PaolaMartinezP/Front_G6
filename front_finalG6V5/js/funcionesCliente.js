//GET, POST , PUT Y DELETE

function getCliente (){
    $.ajax({
        url:"http://155.248.201.73:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){   
            pintarCliente(respuesta);
        }
    });

}

function postCliente(){
    let cajas = {
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val()
    };
    $.ajax({
        url:"http://155.248.201.73:8080/api/Client/save",
        type:"POST",
        datatype:"JSON",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se registro correctamente el cliente");
            window.location.reload();
    
        }
    });
}

function putCliente(idDesdeBoton){

    console.log(idDesdeBoton);
    if($("#email").val().length==0 || $("#password").val().length==0 || $("#name").val().length==0 || $("#age").val().length==0 ){
        alert("Todos los campos son obligatorios");
    }else{
    
    let cajas = {
        idClient:idDesdeBoton,
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val()
    };
    $.ajax({
        url:"http://155.248.201.73:8080/api/Client/update",
        type:"PUT",
        datatype:"JSON",
        contentType:"application/json",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se actualizo correctamente la informacion del cliente");
            window.location.reload();
    
            }
        });
    }

}

function deleteCliente(idDesdeBoton){
    
    let myData={
        idClient:idDesdeBoton
    };
    $.ajax({
        url:"http://155.248.201.73:8080/api/Client/"+idDesdeBoton,
        type:"DELETE",
        datatype:"JSON",
        data: JSON.stringify(myData),
        contentType:"application/json",
        success:function(respuesta){
            alert("se borro correctamente el cliente");
            window.location.reload();
        }
    });


}


////////////////////////////////////////////

function pintarCliente(respuesta){

    let myTable='<table class="table-auto w-full text-left whitespace-no-wrap">';
   let EMAIL = "EMAIL";
   let PASSWORD = "PASSWORD";
   let NOMBRE = "NOMBRE";
   let EDAD = "EDAD";

   myTable+="<th>"+EMAIL+"</th>";
   myTable+="<th>"+PASSWORD+"</th>";
   myTable+="<th>"+NOMBRE+"</th>";
   myTable+="<th>"+EDAD+"</th>";

    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td> <button class='flex mx-auto text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg' onclick='putCliente("+respuesta[i].idClient+") '> Actualizar</button>"
        myTable+="<td> <button class='flex mx-auto text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg' onclick='deleteCliente("+respuesta[i].idClient+")'> Borrar</button>"
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);


}