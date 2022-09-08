const productos = [
    {
        "id": 1,
        "nombre": "Toro",
        "genero": "Hombre",
        "edad": "Adultos",
        "color": "negro",
        "precio": 950,
        "stock": 50,
        "imagen": "img/negro.webp"
    },
    {
        "id": 2,
        "nombre": "Pantera",
        "genero": "Mujer",
        "edad": "Adultos",
        "color": "negro",
        "precio": 900,
        "stock": 50,
        "imagen": "img/negro.webp"
    },
    {
        "id": 3,
        "nombre": "Leona",
        "genero": "Mujer",
        "edad": "Adultos",
        "color": "rojo",
        "precio": 900,
        "stock": 50,
        "imagen": "img/rojo.webp"
    },
    {
        "id": 4,
        "nombre": "Agila",
        "genero": "Hombre",
        "edad": "Adultos",
        "color": "rojo",
        "precio": 950,
        "stock": 50,
        "imagen": "img/rojo.webp"
    },
    {
        "id": 5,
        "nombre": "Tigre",
        "genero": "Hombre",
        "edad": "Niños",
        "color": "azul",
        "precio": 750,
        "stock": 50,
        "imagen": "img/azul.webp"
    },
    {
        "id": 6,
        "nombre": "Chita",
        "genero": "Mujer",
        "edad": "Adultos",
        "color": "rosa",
        "precio": 700,
        "stock": 50,
        "imagen": "img/rosa.webp"
    },
    {
        "id": 7,
        "nombre": "Loro",
        "genero": "Unisex",
        "edad": "Niños",
        "color": "verde",
        "precio": 600,
        "stock": 50,
        "imagen": "img/verde.webp"
    },
    {
        "id": 8,
        "nombre": "Iguana",
        "genero": "Unisex",
        "edad": "Niños",
        "color": "verde",
        "precio": 750,
        "stock": 50,
        "imagen": "img/verde.webp"
    },
    {
        "id": 9,
        "nombre": "Ave",
        "genero": "Unisex",
        "edad": "Niños",
        "color": "azul",
        "precio": 750,
        "stock": 50,
        "imagen": "img/azul.webp"
    },
    {
        "id": 10,
        "nombre": "Cuervo",
        "genero": "Unisex",
        "edad": "Niños",
        "color": "negro",
        "precio": 550,
        "stock": 50,
        "imagen": "img/negro.webp"
    },
    {
        "id": 11,
        "nombre": "Reptil",
        "genero": "Hombre",
        "edad": "Niños",
        "color": "verde",
        "precio": 750,
        "stock": 50,
        "imagen": "img/verde.webp"
    },
    {
        "id": 12,
        "nombre": "Cervatillo",
        "genero": "Mujer",
        "edad": "Niños",
        "color": "rosa",
        "precio": 500,
        "stock": 50,
        "imagen": "img/rosa.webp"
    },
    {
        "id": 13,
        "nombre": "Garza",
        "genero": "Mujer",
        "edad": "Niños",
        "color": "violeta",
        "precio": 700,
        "stock": 50,
        "imagen": "img/violeta.webp"
    },
    {
        "id": 14,
        "nombre": "Lince",
        "genero": "Mujer",
        "edad": "Adultos",
        "color": "violeta",
        "precio": 900,
        "stock": 50,
        "imagen": "img/violeta.webp"
    },
    {
        "id": 15,
        "nombre": "Tiburón",
        "genero": "Hombre",
        "edad": "Adultos",
        "color": "celeste",
        "precio": 950,
        "stock": 50,
        "imagen": "img/celeste.webp"
    },
    {
        "id": 16,
        "nombre": "Topo",
        "genero": "Hombre",
        "edad": "Niños",
        "color": "celeste",
        "precio": 550,
        "stock": 50,
        "imagen": "img/celeste.webp"
    },
    {
        "id": 17,
        "nombre": "Jaguar",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper lacus eu pellentesque condimentum.",
        "genero": "Hombre",
        "edad": "Adultos",
        "color": "amarillo",
        "precio": 950,
        "stock": 7,
        "imagen": "img/amarillo.webp"
    },
    {
        "id": 18,
        "nombre": "Lince",
        "genero": "Hombre",
        "edad": "Niños",
        "color": "amarillo",
        "precio": 550,
        "stock": 50,
        "imagen": "img/amarillo.webp"
    },
    {
        "id": 19,
        "nombre": "Anaconda",
        "genero": "Hombre",
        "edad": "Adultos",
        "color": "gris",
        "precio": 950,
        "stock": 50,
        "imagen": "img/gris.webp"
    },
    {
        "id": 20,
        "nombre": "Culebra",
        "genero": "Unisex",
        "edad": "Niños",
        "color": "gris",
        "precio": 550,
        "stock": 50,
        "imagen": "img/gris.webp"
    },
    {
        "id": 21,
        "nombre": "Delfín",
        "genero": "Mujer",
        "edad": "Adultos",
        "color": "celeste",
        "precio": 900,
        "stock": 50,
        "imagen": "img/celeste.webp"
    },
    {
        "id": 22,
        "nombre": "Hiena",
        "genero": "Hombre",
        "edad": "Adultos",
        "color": "amarillo",
        "precio": 450,
        "stock": 50,
        "imagen": "img/amarillo_oferta.webp"
    },
    {
        "id": 23,
        "nombre": "Orca",
        "genero": "Mujer",
        "edad": "Adultos",
        "color": "azul",
        "precio": 400,
        "stock": 50,
        "imagen": "img/azul_oferta.webp"
    },
    {
        "id": 24,
        "nombre": "Elefante",
        "genero": "Mujer",
        "edad": "Adultos",
        "color": "celeste",
        "precio": 400,
        "stock": 50,
        "imagen": "img/celeste_oferta.webp"
    },
    {
        "id": 25,
        "nombre": "Cuervo",
        "genero": "Hombre",
        "edad": "Adultos",
        "color": "negro",
        "precio": 450,
        "stock": 50,
        "imagen": "img/negro_oferta.webp"
    },
    {
        "id": 26,
        "nombre": "León",
        "genero": "Hombre",
        "edad": "Niños",
        "color": "rojo",
        "precio": 350,
        "stock": 50,
        "imagen": "img/rojo_oferta.webp"
    },
    {
        "id": 27,
        "nombre": "Araña",
        "genero": "Mujer",
        "edad": "Adultos",
        "color": "violeta",
        "precio": 300,
        "stock": 50,
        "imagen": "img/violeta_oferta.webp"
    }
];

export default productos;