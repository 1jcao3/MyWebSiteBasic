function mostrarContenido(){

var contenido=document.getElementById("dinamicText1");



contenido.style.display="block";
setTimeout(()=>{
    contenido.style.opacity="1";
   
},300);

};
function ocultarContenido(){

    var contenido=document.getElementById("dinamicText1");
  
    contenido.style.opacity="0";
    setTimeout(()=>{
      
        contenido.style.display="none";
    },500);


}
function sombra(elemento){

   

    elemento.classList.add("sombra");
}
function sinSombra(elemento){


    elemento.classList.remove("sombra");
}
function titilarSombra(){

    
var elemento=document.getElementById("porfile");
      
setInterval(  ()=>{elemento.classList.add("sombra")},1000);

  
}
function menu(){

    var item= document.getElementsByClassName("item");
    const elemen=document.getElementById("position");
    
console.log("2wjecutnod");


for (items of item){

    items.classList.add("itemOn");
    console.log("cuanats veces pasa");
 
   
}


  elemen.classList.add("positionOn");


}

function position(){

    const elemen=document.getElementById("position");
    

        elemen.classList.add("positionOn");
     
}

function sinPosition(){

    const elemen=document.getElementById("position");
  

        elemen.classList.remove("positionOn");
      
}
// function sinMenu(){

//     var item=document.getElementsByClassName("item");
//     const elemen=document.querySelectorAll(".position");
//     for (items of item){

//         items.classList.remove("itemOn");
     
//     }
  
    
// }

