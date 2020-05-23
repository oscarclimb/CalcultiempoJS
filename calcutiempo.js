// GIF ANIMADO
  
var walker = document.getElementById('walker');
var walkingLeft = true;
var dist = 1;
var leftBorder = 1125;
var rightBorder = 670;
var position = rightBorder;

function check(){
  position += walkingLeft ? dist : -dist;
  walker.style.right = position +'px';
  if (position > leftBorder || position < rightBorder){
    walkingLeft = !walkingLeft;
    walker.classList.toggle('flip')
  }
}

setInterval(check, 10)


// CALCUTIEMPO

  function Ttotal(){
    
    var ascenso = document.getElementById('desnivelp').value;      
    var descenso = document.getElementById('desniveln').value;       
    var Tdesn = ((parseFloat(ascenso)/300)+(parseFloat(descenso)/500));
    
    var dist_km = document.getElementById('distancia').value;      
    var dist_km = parseFloat(dist_km.replace(/\s/g, "").replace(",", "."));    
    var Tdist = (parseFloat(dist_km)/4);   
       
    if (Tdesn > Tdist) {
        var Ttot = parseFloat(Tdesn) + (parseFloat(Tdist)/2);                     
        
    } else {
        var Ttot = parseFloat(Tdist) + (parseFloat(Tdesn)/2);    
            
    }   

    if (isNaN(Ttot)) {
        document.getElementById("error").innerHTML = "¡ATENCIÓN! Se requiere todos los campos aunque sea 0";
        
    } else { 
        
        document.getElementById('resultado').innerHTML = (Ttot.toFixed(2)+" Horas").replace(".", ",");        
        return Ttot;              
          
    }           
    
  }

  function limpiar(){
    var empty = "";
    document.getElementById('desnivelp').value = empty; 
    document.getElementById('desniveln').value = empty;
    document.getElementById('distancia').value = empty;
    document.getElementById('resultado').innerHTML = empty;
    document.getElementById('error').innerHTML = empty;
  }
