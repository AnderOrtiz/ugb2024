function mostrarSaludo(){
    const nombre = document.getElementById('nombreUsuario').value;
    const saludo =`¡hola, ${nombre}'!Bienvenido@- a la pagina.`;

    document.getElementById('saludo').textContent = saludo;
    alert(saludo);
}

function verificarEdad (){
    const edad = Number(document.getElementById('edadUuario').value);
    let mensaje ;
     if (edad >= 18){
        mensaje= "Eres un adolecente";

     }else {
      mensaje ="Eres un niño.";
     }
     document.getElementById ('mensajeEdad').textContent =mensaje;
     }

     function realizarSuma(){
        const resultado = 5+3;
        document.getElementById('resultadoSuma').textContent=
        `El resultado de 5 + 3 es : ${resultado}.`;
     }