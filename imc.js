function imc(){

    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let respuesta = parseFloat(peso)/(parseFloat(altura)*parseFloat(altura))
    let imc = respuesta.toFixed(2)

    document.getElementById("respuesta").value =imc
    
        if (respuesta <= 18.49 ) {
            document.getElementById("barra-imc").style.backgroundColor = '#F8D347';
            document.getElementById("barra-imc").style.width = '150px';
            document.getElementById("barra-imc").value="Peso bajo"
            document.getElementById("barra-imc").style.border = '.5px solid #bda13a';
        }
        else if (respuesta >= 18.5 && respuesta < 24.99)
        {
          document.getElementById("barra-imc").style.backgroundColor = '#99C262';
          document.getElementById("barra-imc").style.width = '300px';
          document.getElementById("barra-imc").value="Peso normal"
          document.getElementById("barra-imc").style.border = '.5px solid #68873e';
        }  
        else if (respuesta >= 25 && respuesta < 29.99)  
        {
          document.getElementById("barra-imc").style.backgroundColor = '#ff9060';
          document.getElementById("barra-imc").style.width = '450px';
          document.getElementById("barra-imc").value="Sobrepeso"
          document.getElementById("barra-imc").style.border = '.5px solid #ba6845';
        }
        else{
            document.getElementById("barra-imc").style.backgroundColor = '#FF6C60';
            document.getElementById("barra-imc").style.width = '600px';
            document.getElementById("barra-imc").value="Obesidad"
            document.getElementById("barra-imc").style.border = '.5px solid #bf4c43';
        }

}

