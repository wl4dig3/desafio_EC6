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
            apotema = parseInt(document.getElementById('apotema').value),
            radio = parseInt(document.getElementById('radio').value)
    
        if(poligono == triangulo) { 
            console.log(triangulo.area(base,altura))
            console.log(triangulo.perimetro(lado))
        }

        if(poligono == octagono) {
            let perimetro = octagono.perimetro(lado)
            console.log(octagono.area(perimetro,apotema))
            console.log(octagono.perimetro(lado))
         }

        if(poligono == cuadrado) {
            console.log(cuadrado.area(base,altura))
            console.log(cuadrado.perimetro(base,altura))
         }

        if(poligono == circulo) {
            console.log(circulo.area(radio))
            console.log(circulo.perimetro(radio))
         }

        if(poligono == decagono) {
            console.log(decagono.area(lado, apotema))
            console.log(decanog.perimetro(lado))
         }

        
    };

    // poligonos()
        