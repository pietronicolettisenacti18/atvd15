function dinheiro() {

    let resultado = document.getElementById('numero1').value
    

    if( resultado == 1)  {
        document.getElementById('resultado').innerHTML = "alimento não perecível"
    
    }
   else if( resultado == 2, 3, 4) {
        
    document.getElementById('resultado').innerHTML = "alimento perecível"
    
    
   }


     else if (resultado == 5, 6){
        document.getElementById('resultado').innerHTML = "Vestuário"
        
    }

    else if (resultado ==7){
        document.getElementById('resultado').innerHTML = "Higiene pessoal"
    }

  

 else if (resultado == 8, 9, 10){
        document.getElementById('resultado').innerHTML = "Utensílios domésticos"
    }
}