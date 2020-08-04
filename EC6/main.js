// declaracion de constantes con propiedades de area y perimetro:
// triangulo 
const triangulo = {
    area: (b,h) => (b * h) / 2,
    perimetro: l => l * 3
};
// octagono 
const octagono = {
    area: ( p,a ) => (p * a) / 2,
    perimetro: l => l * 8
};
// cuadrado 
const cuadrado = {
    area: (b,h) => b * h,
    perimetro:  (b,h) => (2*b) + (2*h)
};
// circulo 
const circulo = {
    area: r => Math.pow(r,2) * Math.PI,
    perimetro: r => Math.PI * 2 * r
};
const decagono = {
    area: (l, a) =>(10 * l * a) /2,
    perimetro: l => 10 *l
};


// se hace una funcion de nombre poligono
const poligonos = poligono  => {
    alert()
    let base = parseInt(document.getElementById('base').value),
    lado = parseInt(document.getElementById('lado').value),
    altura = parseInt(document.getElementById('altura').value),
    apotema = parseInt(document.getElementById('apotema').value)
    
        if(poligono==triangulo) { 
            console.log(triangulo.area(base,altura))
            console.log(triangulo.perimetro(lado))
        }

        if(poligono==octagono) {
            console.log(octagono.area())
         }

        if(poligono==cuadrado) { }

        if(poligono==circulo) { }

        if(poligono==decagono) { }

        
    };
        