// Define la información de cada cuadro (imagen, texto y botón)
const cuadros = [
    { img: './img/pant1.png', texto: 'pantalon jean boyfriend' },
    { img: './img/pant2.png', texto: 'Pantalon Cargo jean' },
    { img: './img/pant3.png', texto: 'Pantalon Cargo Camuflado' },
    { img: './img/pant4.png', texto: 'pantalon tiro alto con pretina' },
    { img: './img/pant5.png', texto: 'Pantalon de jean skinny con rotos' },
    { img: './img/pant6.png', texto: 'Pantalon bota recta cuerina' },
    { img: './img/pant7.png', texto: 'Pantalon bota recta de flores' },
    { img: './img/pant8.png', texto: 'Pantalon cargo correa' },
];

// Obtén el contenedor
const contenedor = document.getElementById('contenedor');

// Genera dinámicamente los cuadros con imágenes, textos y botones
cuadros.forEach((cuadro, index) => {
    const divCuadro = document.createElement('div');
    divCuadro.className = 'cuadro';

    const img = document.createElement('img');
    img.className = `imgpant imgpant${index + 1}`;
    img.src = cuadro.img;

    // Cambia la imagen al pasar el cursor
    img.addEventListener('mouseover', () => {
        img.src = `./img/pant${index + 1}(2).png`;
    });

    // Restaura la imagen original al salir del cuadro
    img.addEventListener('mouseout', () => {
        img.src = cuadro.img;
    });

    const h3 = document.createElement('h3');
    h3.textContent = cuadro.texto;

    const precio = document.createElement('p');
    precio.textContent = `Precio: ${cuadro.precio="43.000"}`;

    const botonComprar = document.createElement('button');
    botonComprar.textContent = 'Comprar';
    botonComprar.className = 'buttonComprar';

    divCuadro.appendChild(img);
    divCuadro.appendChild(h3);
    divCuadro.appendChild(precio);
    divCuadro.appendChild(botonComprar);

    contenedor.appendChild(divCuadro);
});