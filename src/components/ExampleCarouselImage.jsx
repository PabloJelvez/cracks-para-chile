import React from 'react';


const ExampleCarouselImage = ({ text, className }) => {
    let imageSrc;
    switch (text) {
        case 'First slide':
            imageSrc = './src/assets/img/carousel1.jpg'; // Reemplaza con la ruta a tu imagen
            break;
        case 'Second slide':
            imageSrc = './src/assets/img/carousel2.jpg'; // Reemplaza con la ruta a tu imagen
            break;
        case 'Third slide':
            imageSrc = './src/assets/img/carousel3.jpg'; // Reemplaza con la ruta a tu imagen
            break;
        default:
            imageSrc = './src/assets/img/fondo-campo-futbol-degradado_52683-65681.jpg'; // Reemplaza con la ruta a tu imagen por defecto
    }

    return (
        <img src={imageSrc} alt={text} className={className} />
    );
}

export default ExampleCarouselImage;
