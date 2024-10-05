const apiKey = 'c64cf4f23a98462ed3bcf392016f6150';

async function obtenerClima(ciudad) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        
        if(respuesta.ok){
            mostrarClima(datos);
        }else{
            alert('Error: ' + datos.message);
        }
    } catch (error){
        alert('Ocurrio un error al obtener los datos del clima');
        console.log(error);
    }
}

function mostrarClima(datos){
    const temperatura = datos.main.temp;
    const descripcion = datos.weather[0].description;
    const ciudad = datos.name;

    document.getElementById('resultado').textContent = `En ${ciudad}, la temperatura es de ${temperatura}°C con ${descripcion}.`;
}

document.getElementById('botonClima').addEventListener('click', function() {
    const ciudad = document.getElementById('ciudad').value;

    if (ciudad !== ''){
        obtenerClima(ciudad);
    } else {
        alert('Por favor, ingresa el nombre de una ciudad');
    }
})