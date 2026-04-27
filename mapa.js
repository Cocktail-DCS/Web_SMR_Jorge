document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los botones de los animales en el mapa
    const animalButtons = document.querySelectorAll('.animal-button');
    const animalTitle = document.getElementById('animal-title');
    const animalDescription = document.getElementById('animal-description');
    const animalImage = document.getElementById('animal-image');
    const animalInfoContainer = document.querySelector('.text-container');

    // Información de los animales
    const animals = {
        "tortuga-boba": {
            title: "Tortuga Boba",
            description: "La tortuga boba sufre principalmente por la pérdida de hábitat, la contaminación por plásticos, la pesca incidental y el cambio climático. Para protegerla, hemos estado mejorando el estado de las playas de anidación, hemos regulado el uso de plásticos, hemos minimizado las prácticas pesqueras y tenemos monitoreados los nidos.",
            image: "Tortuga-Boba.jpg"
        },
        "elefante": {
            title: "Elefante",
            description: "Los elefantes son animales majestuosos y grandes, conocidos por su memoria excepcional y su inteligencia.",
            image: "elefante.jpg"
        },
        "leon": {
            title: "León",
            description: "El león es considerado el rey de la selva por su imponente melena y su posición en la cadena alimenticia.",
            image: "leon.jpg"
        },
        "cebra": {
            title: "Cebra",
            description: "La cebra es famosa por sus rayas blancas y negras, y su capacidad para adaptarse a diferentes entornos.",
            image: "cebra.jpg"
        }
    };

    // Cuando se hace clic en cualquier área del mapa
    animalButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtenemos el tipo de animal desde el atributo 'data-animal'
            const animalKey = button.getAttribute('data-animal');

            // Actualizamos el contenido de la caja de información
            const animal = animals[animalKey];
            animalTitle.textContent = animal.title;
            animalDescription.textContent = animal.description;
            animalImage.src = animal.image;

            // Para que la transición se ejecute cada vez, eliminamos la clase y la volvemos a añadir
            animalInfoContainer.classList.remove('show');

            // Forzamos un reflujo (reflow) para asegurarnos que la animación vuelva a ocurrir
            void animalInfoContainer.offsetWidth;  // Esta línea fuerza el reflujo

            animalInfoContainer.classList.add('show');
        });
    });
});
